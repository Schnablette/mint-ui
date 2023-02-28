import React from "react";

import { LoadingAnimation } from "./LoadingAnimation";

export default {
  title: "Loading Animation",
  component: LoadingAnimation,
};

const Template = (args) => <LoadingAnimation {...args} />;

export const Primary = Template.bind({});
