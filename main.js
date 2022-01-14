const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const { insertdata, selectAll } = require("./user");
//const req = require("express/lib/request");
//const res = require("express/lib/response");

/*app.get("/index", async (req, res) => {
  const list = await selectAll();
  res.json(list);
});*/

app.post("/hello", async (req, res) => {
  const list = req.body;
  await insertdata(list);
  res.json({ message: "data added successfully" });
});

app.listen(5000, () => console.log("server started"));
