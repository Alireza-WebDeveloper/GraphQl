import type { Preview } from "@storybook/react";

import {
  INITIAL_VIEWPORTS,
  MINIMAL_VIEWPORTS,
} from "@storybook/addon-viewport";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: (a, b) =>
        a.id === b.id
          ? 0
          : a.id.localeCompare(b.id, undefined, { numeric: true }),
    },
    rootAttributes: [
      {
        root: "html",
        attribute: "data-theme",
        defaultState: {
          name: "dark",
          value: "dark",
        },
        states: [],
      },
    ],
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: "#141414",
        },
        {
          name: "light",
          value: "#fff",
        },
      ],
    },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS,
      },
    },
  },
};

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
  options: {
    storySort: {
      method: "alphabetical",
      order: ["Input"],
      locales: "en-US",
    },
  },
};

export default preview;
