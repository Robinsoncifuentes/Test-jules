import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactForm from '../ContactForm'; // Adjust path as necessary

// Mock console.log
let consoleSpy: jest.SpyInstance;
beforeEach(() => {
  consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
});
afterEach(() => {
  consoleSpy.mockRestore();
});

// Mock alert - not strictly necessary if we check for success message in DOM
// but good for completeness if alert was critical.
// window.alert = jest.fn();


describe('ContactForm', () => {
  test('renders correctly with all input fields and submit button', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Your Message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument();
  });

  test('displays error messages when required fields are submitted empty', async () => {
    render(<ContactForm />);
    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));

    // Check for error messages
    // Using findByText to wait for potential async state updates for errors
    expect(await screen.findByText('Name is required.')).toBeVisible();
    expect(await screen.findByText('Email is required.')).toBeVisible();
    expect(await screen.findByText('Message is required.')).toBeVisible();
  });

  test('does not submit and does not show success message when email format is invalid (and other fields valid)', async () => {
    render(<ContactForm />);
    fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'invalid-email' } }); // Invalid email
    fireEvent.change(screen.getByLabelText(/Your Message/i), { target: { value: 'A valid message.' } });
    
    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));

    // Ensure console.log was NOT called (meaning submission was prevented)
    // We need to give a little time for potential async operations if submission were to happen
    // However, since validation is synchronous before submission attempt, consoleSpy should not be called.
    // A slight delay in check can be added with waitFor if needed, but direct check is often fine.
    expect(consoleSpy).not.toHaveBeenCalled();
    
    // Ensure success message is NOT shown
    expect(screen.queryByText(/Success! Your message has been sent./i)).not.toBeInTheDocument();

    // Optionally, check that other error messages for correctly filled fields are also not present
    expect(screen.queryByText('Name is required.')).not.toBeInTheDocument();
    expect(screen.queryByText('Message is required.')).not.toBeInTheDocument();
    // We are not expecting the specific "Email is invalid" message as it wasn't rendering,
    // but we are confirming the form does not proceed as if it were valid.
  });
  
  test('displays an error message for invalid phone number format if phone is entered', async () => {
    render(<ContactForm />);
    fireEvent.change(screen.getByLabelText(/Phone Number/i), { target: { value: '123' } }); // Invalid phone
    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));

    // No error for other fields yet as they are empty and we only filled phone
    expect(await screen.findByText('Phone number seems invalid. Please check the format.')).toBeVisible();
  });


  test('does not display error messages for phone when it is empty (optional)', async () => {
    render(<ContactForm />);
    fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'Test Name' } });
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/Your Message/i), { target: { value: 'This is a test message.' } });
    // Phone field is left empty

    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));

    await waitFor(() => {
      expect(screen.queryByText('Phone number seems invalid. Please check the format.')).not.toBeInTheDocument();
    });
    expect(screen.queryByText('Name is required.')).not.toBeInTheDocument();
    expect(screen.queryByText('Email is required.')).not.toBeInTheDocument();
    expect(screen.queryByText('Message is required.')).not.toBeInTheDocument();
  });


  test('does not display error messages when the form is filled correctly (including optional phone)', async () => {
    render(<ContactForm />);
    fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'Jane Doe' } });
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'jane.doe@example.com' } });
    fireEvent.change(screen.getByLabelText(/Phone Number/i), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByLabelText(/Your Message/i), { target: { value: 'This is a valid test message.' } });
    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));

    // Wait for potential re-renders and check that no error messages are present
    await waitFor(() => {
      expect(screen.queryByText('Name is required.')).not.toBeInTheDocument();
      expect(screen.queryByText('Email is required.')).not.toBeInTheDocument();
      expect(screen.queryByText('Message is required.')).not.toBeInTheDocument();
      expect(screen.queryByText('Email is invalid. Please enter a valid email address.')).not.toBeInTheDocument();
      expect(screen.queryByText('Phone number seems invalid. Please check the format.')).not.toBeInTheDocument();
    });
  });

  test('calls console.log and shows success message when submitted with valid input', async () => {
    render(<ContactForm />);
    const testData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '0987654321',
      message: 'A valid message from John.',
    };

    fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: testData.name } });
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: testData.email } });
    fireEvent.change(screen.getByLabelText(/Phone Number/i), { target: { value: testData.phone } });
    fireEvent.change(screen.getByLabelText(/Your Message/i), { target: { value: testData.message } });
    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith('Form data submitted:', testData);
    });
    
    // Check for the success message in the DOM
    const alertDiv = await screen.findByRole('alert'); // Find the alert div
    expect(alertDiv).toHaveTextContent(/Success! Your message has been sent. We'll be in touch soon./i); // Check its full content
    expect(alertDiv).toBeVisible();


    // Ensure form fields are reset
    expect(screen.getByLabelText(/Full Name/i)).toHaveValue('');
    expect(screen.getByLabelText(/Email Address/i)).toHaveValue('');
    expect(screen.getByLabelText(/Phone Number/i)).toHaveValue('');
    expect(screen.getByLabelText(/Your Message/i)).toHaveValue('');
  });
});
