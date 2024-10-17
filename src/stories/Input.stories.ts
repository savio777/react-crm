import type { Meta } from "@storybook/react";

import Input from "@/components/atom/Input";

const meta = {
  title: "Input",
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

export const Primary = {
  args: {
    placeholder: "Test",
  },
};

export const Error = {
  args: {
    errorSchema: "Test error",
    placeholder: "Test",
  },
};
