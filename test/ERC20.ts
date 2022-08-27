import { expect } from "chai";
import { ethers } from "hardhat";

describe("My ERC20 contract", function () {
  beforeEach(async function () {
    const ERC20ContractFactory = await ethers.getContractFactory("");
    const ERC20Contract = await ERC20ContractFactory.deploy("Hello", "Symbol");
    await ERC20Contract.deployed();
  });
});
