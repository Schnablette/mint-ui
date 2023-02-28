import React from "react";

import { ConnectWalletModule } from "./ConnectWalletModule";

export default {
  title: "Connect Wallet Module",
  component: ConnectWalletModule,
};

const Template = (args) => <ConnectWalletModule {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: "site-connect",
};
