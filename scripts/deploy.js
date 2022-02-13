const { ethers } = require("hardhat")
async function main(){
  const CryptoBattles = await ethers.getContractFactory("CryptoBattles")
  const cryptoBattles = await CryptoBattles.deploy("CryptoBattles","CRYEE")

  try{
    await cryptoBattles.deployed()
    console.log(`Contract successfully deployed: ${cryptoBattles.address}`)
    //mintNFT()
  } catch(err){
    console.log(`Error: ${err.message}`)
  }

//const mintNFT = async () => {
  try{
    const newItemId = await cryptoBattles.mint("https://ipfs.io/ipfs/QmQJaF4iu3CmtF9fjujdbnTWKfpHtPE5cdbekiaVKTVU3p")
    console.log(`NFT minted successfully:: ${newItemId}`)
  } catch(err){
    console.log(`Error : ${err.message}`)
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
