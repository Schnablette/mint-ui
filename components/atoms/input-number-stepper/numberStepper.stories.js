import React from "react";

import { NumberStepper } from "./NumberStepper";

export default {
  title: "Number Stepper",
  component: NumberStepper,
};

const Template = (args) => <NumberStepper {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Number of NFTs to Mint",
  id: "nft",
  initialValue: 1,
  min: 1,
  max: 3,
};
