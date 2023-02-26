const { expect } = require("chai");
const hre = require("hardhat");
const { ethers } = require("hardhat");

describe("Auction Contract", function () {
  let schnabs;
  const nftId = 0;

  let deployer;
  let addr1;
  let addr2;
  let addr3;
  let addr4;
  let addr5;

  beforeEach(async function () {
    [deployer, addr1, addr2, addr3, addr4, addr5] = await ethers.getSigners();

    const Schnabs = await ethers.getContractFactory("Schnabs");
    schnabs = await Schnabs.deploy();
  });

  describe("Deployments", function () {
    it("Should deploy the contract to the network", async function () {
      expect(schnabs.address).to.exist;
    });
  });
});
