import React from "react";

import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "text",
  fullWidth: false,
  intent: "primary",
  outline: false,
  rounded: false,
  size: "md",
};
