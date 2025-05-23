import tailwindcssPostcss from '@tailwindcss/postcss';
import autoprefixerPlugin from 'autoprefixer';

export default {
  plugins: [
    tailwindcssPostcss, // Use the imported plugin directly
    autoprefixerPlugin, // Use the imported plugin directly
  ],
};
