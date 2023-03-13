import { ethers, Wallet } from "ethers";
import { run } from "hardhat";
import { Ballot__factory, MyToken__factory } from "../typechain-types";
import { stdin as input, stdout as output } from 'node:process';
import * as dotenv from "dotenv";
import * as readline from 'node:readline/promises';

const rl = readline.createInterface({ input, output });

// For macOS users
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../.env") })

async function verif() {

    const proposals = ['t1','t2'];

    console.log("Verifying the contract on etherscan...");
    await run("verify:verify", {
    address: "0x40419852120358AAAEf6122e01BC50559ffFE9e3",
    constructorArguments: [
        proposals.map(x => ethers.utils.formatBytes32String(x)),
        "0x906564C66A86A0193ed17efa1C7EbcC022A3fDAB",
        8642768
    ],
  });

}

verif();
