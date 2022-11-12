const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./config/routes");

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(routes);

let db = [
  { 1: { Nome: "Cliente 1", Idade: "20" } },
  { 2: { Nome: "Cliente 2", Idade: "20" } },
  { 3: { Nome: "Cliente 3", Idade: "20" } },
];

// Buscar dados
app.get("/", (req, res) => {
  return res.json(db);
});
// Inserir Dados
app.post("/add", (req, res) => {
  const body = req.body;
 
  if (!body) return res.status(400).end();
 
 
  db.push(body)
  return res.json(body)

});



app.listen(3000, () => {
  console.log("Express started at http://localhost:3000");
});
