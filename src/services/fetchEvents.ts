import { provider, contracts } from "../infra/provider";
import { ethers } from "ethers";

//bet abi
const betSettledIface = new ethers.Interface([
  `event BetSettled(
    address indexed player,
    uint256 amount,
    uint256 targetNumber,
    uint8 comparisonType,
    uint256 result,
    bool won,
    uint256 payout,
    address token
  )`,
]);

//topic[0] hash
const betSettledTopic = ethers.id(
  "BetSettled(address,uint256,uint256,uint8,uint256,bool,uint256,address)"
);

export async function fetchBetSettledLogs(fromBlock: number, toBlock: number) {
  const filter = {
    address: contracts[0],
    fromBlock,
    toBlock,
    topics: [betSettledTopic],
  };

  const rawLogs = await provider.getLogs(filter);
  console.log("Logs found:", rawLogs.length);
  const parsed = rawLogs.map((log) => betSettledIface.parseLog(log).args);
  return parsed;
}

export async function setStats(fromBlock: number, toBlock: number) {
  console.log("Fetching events...");
  const dataTable = []
  const bets = await fetchBetSettledLogs(fromBlock, toBlock);
    bets.forEach((bet) => {
      dataTable.push({
        player: bet.player,
        amount: bet.amount.toString(),
        targetNumber: bet.targetNumber.toString(),
        comparisonType: bet.comparisonType,
        result: bet.result.toString(),
        won: bet.won,
        payout: bet.payout.toString(),
        token: bet.token,
      });
    });
    console.log(dataTable)
}
