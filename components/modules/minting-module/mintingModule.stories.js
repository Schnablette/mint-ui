import React from "react";

import { MintingModule } from "./MintingModule";

export default {
  title: "Minting Module",
  component: MintingModule,
};

const Template = (args) => <MintingModule {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: "Pudgy-Mint",
};
