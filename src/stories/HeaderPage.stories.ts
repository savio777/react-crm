import type { Meta } from "@storybook/react";

import HeaderPage from "@/components/atom/HeaderPage";

const meta = {
  title: "Header Page",
  component: HeaderPage,
} satisfies Meta<typeof HeaderPage>;

export const Primary = {
  args: {
    title: "Title page",
    subtitle: "Subtitle page",
  },
};

export default meta;
