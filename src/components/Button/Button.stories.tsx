import { StoryObj, type Meta } from "storybook-solidjs";

import { Button, ButtonProps } from "./Button";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: { value: "na" } satisfies ButtonProps,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: "nada que ver",
  },
};
