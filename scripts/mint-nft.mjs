const CONTRACT_ADDRESS = "0x20041B175231b52D7f297705948148F6803D3F10";
const META_DATA_URL = "ipfs://bafyreiesmzh2mty2m3ppvtcvna2jrv5qqekqxrdzvuxzzccx7c64slefte/metadata.json";

// paste function here
// Function to mint NFT
async function mintNFT(contractAddress, metaDataURL) {
  const ExampleNFT = await ethers.getContractFactory("ExampleNFT");
  const [owner] = await ethers.getSigners();
  await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL);
  console.log("NFT minted to: ", owner.address);
 }
mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
