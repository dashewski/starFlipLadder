import { setStats } from "./services/saveStats";
import { getLastBlock, getActualBlock } from "./services/getBlocks";

async function main() {
  const fromBlock = getLastBlock();
  const toBlock = await getActualBlock(); 

  if (fromBlock !== null) {
    await setStats(fromBlock, toBlock);
  } else {
    console.error("Last block not found in DB");
  }
}

main();