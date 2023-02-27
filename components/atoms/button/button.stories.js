import React from "react";

import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fullWidth: false,
  intent: "primary",
  rounded: false,
  size: "md",
};
