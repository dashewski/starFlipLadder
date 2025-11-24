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

export async function fetchBetLogs(fromBlock: number, toBlock: number) {
  const filter = {
    address: contracts[0],
    fromBlock,
    toBlock,
    topics: [betSettledTopic],
  };

  const fetchedLogs = await provider.getLogs(filter);
  console.log("Logs found:", fetchedLogs.length);
  const parsedLogs = fetchedLogs.map(
    (log) => betSettledIface.parseLog(log).args
  );
  return parsedLogs;
}
