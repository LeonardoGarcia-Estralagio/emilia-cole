const expres = require("express");
const path = require("path");

const app = expres();
const PORT = 3030;

app.use(expres.static("public"));


app.listen(PORT, () =>
  console.log(`server running in http://localhost:${PORT}`)
);
