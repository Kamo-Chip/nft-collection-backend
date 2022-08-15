const { ethers } = require("hardhat");
const {
  WHITELIST_CONTRACT_ADDRESS,
  METADATA_URL,
} = require("../constants/index");

const main = async () => {
  const cryptoDevsContract = await ethers.getContractFactory("CryptoDevs");

  const cryptoDevsContractDeployment = await cryptoDevsContract.deploy(
    METADATA_URL,
    WHITELIST_CONTRACT_ADDRESS
  );

  await cryptoDevsContractDeployment.deployed();

  console.log(
    `CryptoDevs Contract Address: ${cryptoDevsContractDeployment.address}`
  );
};

main()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    process.exit(1);
  });
