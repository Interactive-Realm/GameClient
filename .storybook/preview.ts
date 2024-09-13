import type { Preview } from "@storybook/react";
// .storybook/preview.js
 
import 'bootstrap/dist/css/bootstrap.min.css';
 
// Only import this if you want to use Bootstrap's
// JQuery helpers
import 'bootstrap/dist/js/bootstrap.bundle';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
