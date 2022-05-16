const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.json({
    success: true,
    data: [{ value: "Hello World! Changed me now 1" }],
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`API IS RUNNING PORT ${PORT}`);
});
