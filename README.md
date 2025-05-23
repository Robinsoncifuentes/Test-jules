# Test-jules

This project is a simple static landing page built with HTML, CSS, and vanilla JavaScript.

## Development

### Prerequisites
- Node.js and npm (Node Package Manager) must be installed on your system. You can download them from [https://nodejs.org/](https://nodejs.org/).

### Setup and Running the Local Server

1.  **Clone the repository (if you haven't already):**
    Replace `<repository-url>` with the actual URL of the repository and `test-jules` with the directory name if it's different.
    ```bash
    git clone <repository-url>
    cd test-jules
    ```

2.  **Install dependencies:**
    Navigate to the project directory in your terminal and run the following command to install the necessary development dependencies (e.g., `http-server` which is used to serve the page):
    ```bash
    npm install
    ```

3.  **Start the local development server:**
    Once the dependencies are installed, you can start the local server using the `npm start` script defined in `package.json`:
    ```bash
    npm start
    ```
    This command will typically start `http-server` and serve the `index.html` file. By default, it usually starts on `http://localhost:8080` or `http://127.0.0.1:8080`. Check your terminal output for the exact address.

4.  **View the landing page:**
    Open your web browser and navigate to the address provided by `http-server` (e.g., `http://localhost:8080`) to see the landing page.

## Project Structure
- `index.html`: The main HTML file for the landing page.
- `style.css`: Contains all the CSS styles for the page.
- `script.js`: Handles JavaScript interactions, such as the contact form submission.
- `package.json`: Defines project metadata, lists development dependencies, and includes scripts like `npm start`.
- `.gitignore`: Specifies intentionally untracked files that Git should ignore (e.g., `node_modules/`).