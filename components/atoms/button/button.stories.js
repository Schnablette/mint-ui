import React from "react";

import { Button } from "./Button";
import { LoadingAnimation } from "../loading-animation";

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
  loading: false,
  outline: false,
  rounded: false,
  size: "md",
};

export const Loading = Template.bind({});
Loading.args = {
  children: "text",
  fullWidth: false,
  intent: "primary",
  loading: true,
  outline: false,
  rounded: false,
  size: "md",
};
