import React from "react";

import { NumberStepper } from "./NumberStepper";

export default {
  title: "Number Stepper",
  component: NumberStepper,
};

const Template = (args) => <NumberStepper {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "text",
  fullWidth: false,
  intent: "primary",
  outline: false,
  rounded: false,
  size: "md",
};
