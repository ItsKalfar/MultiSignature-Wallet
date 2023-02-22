import { ethers } from "hardhat";
import { networkConfig, developmentChains } from "../hardhat-helper.config";

async function main() {
  const contract = await ethers.getContractFactory("MultiSig");
  const multisig = await contract.deploy(
    networkConfig.default.owners,
    networkConfig.default.requiredApprovals
  );

  await multisig.deployed();

  console.log(`Deployed at ${multisig.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
