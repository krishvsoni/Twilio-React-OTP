require("dotenv").config();
const express = require("express");
const cors = require("cors");
const otpRouter = require("./routes/otp.routes");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use("/api/otp", otpRouter);

app.listen(PORT, () => console.log(`listening on PORT ${PORT}...`));
