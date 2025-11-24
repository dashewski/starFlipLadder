import express from "express";
import cors from "cors";
import { db } from "./infra/db";
import { getLastBlock } from "./services/getBlocks";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// players statistics rout 
app.get("/stats", (req, res) => {
  try {
    const rows = db.prepare("SELECT * FROM usersTable").all();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "DB error" });
  }
});

// lastblock rout 
app.get("/last-block", (req, res) => {
  const lastBlock = getLastBlock();
  res.json({ lastBlock });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});