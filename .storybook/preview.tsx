import React from "react";
import type { Preview } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

import { ThemeCustomProvider } from "../src/hooks/useThemeCustom.tsx";
import HooksProvider from "../src/hooks/index.tsx";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // criação de providers para os hooks externos aos componentes funcionarem
  decorators: [
    (Story, { parameters }) => {
      // 👇 Make it configurable by reading the theme value from parameters
      return (
        <BrowserRouter>
          <ThemeCustomProvider>
            <HooksProvider>
              <Story />
            </HooksProvider>
          </ThemeCustomProvider>
        </BrowserRouter>
      );
    },
  ],
};

export default preview;
