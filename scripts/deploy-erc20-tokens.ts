// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
    const UzhUniToken = await ethers.getContractFactory("UzhUniToken");
    const uzhuni = await UzhUniToken.deploy()
    console.log("UzhUniToken (UZHUNI): ", uzhuni.address)

    const Incoingnito = await ethers.getContractFactory("Incoingnito");
    const incoingnito = await Incoingnito.deploy()
    console.log("Incoingnito (ICG): ", incoingnito.address)

    const Intellicoin = await ethers.getContractFactory("Intellicoin");
    const intellicoin = await Intellicoin.deploy()
    console.log("Intellicoin (ITC): ", intellicoin.address)

    const Privatepedia = await ethers.getContractFactory("Privatepedia");
    const privatepedia = await Privatepedia.deploy()
    console.log("Privatepedia (PVT): ", privatepedia.address)

    const Coinicious = await ethers.getContractFactory("Coinicious");
    const coinicious = await Coinicious.deploy()
    console.log("Coinicious (CNS): ", coinicious.address)

    const Cryptofficialcoin = await ethers.getContractFactory("Cryptofficialcoin");
    const cryptofficialcoin = await Cryptofficialcoin.deploy()
    console.log("Cryptofficialcoin (COC): ", cryptofficialcoin.address)
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});