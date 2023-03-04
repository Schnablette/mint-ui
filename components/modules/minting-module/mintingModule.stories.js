import React from "react";

import { MintingModule } from "./MintingModule";

export default {
  title: "Minting Module",
  component: MintingModule,
};

const Template = (args) => {
  

  return (
    <div className="p-12 bg-white shadow-ghost-900 drop-shadow-xl w-fit rounded-lg mx-auto">
      <MintingModule {...args} />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  id: "Pudgy-Mint",
};
