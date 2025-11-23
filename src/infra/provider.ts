import { ethers } from "ethers";
import dotenv from 'dotenv';

dotenv.config();

/* from this block we will parce new block after every 24h 
export const startBlock: number = 33979698 */

export const provider = new ethers.JsonRpcProvider(
  `https://base-sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`
);

export const contracts: string[] = [
"0xb2D0878EaC3C735f25B3d8e16784bBe523C00265", // dice game
"0x85dc945C0ed6C293264C7A9996074B5c5b8366Bf" //grid game
];

