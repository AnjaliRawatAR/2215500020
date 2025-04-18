const express = require("express");
const routers = require("./routes/routers");

const app = express();
const PORT = process.env.PORT || 9876;

app.use(express.json());
app.use('/numbers', routers);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});