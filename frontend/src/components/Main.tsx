import { useState } from "react";
import { Box, Paper, TextField, Button, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBackIos";

import Otp from "./Otp";
import { isNumeric } from "../utils/util";
import { sendOtp, verifyOtp } from "../api/otp";

const Main = () => {
  const initialMessage = { type: "", text: "" };
  const [code, setCode] = useState("");
  const [pno, setPno] = useState("");
  const [isOtpVisible, setIsOtpVisible] = useState(false);
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState(initialMessage);

  const handleResendOtp = async () => {
    if (!pno || !code) return;

    const result = await sendOtp({ code, phone: pno });
    if (result?.success) {
      setIsOtpVisible(true);
      setMessage({ type: "success", text: "OTP resent successfully" });

      setTimeout(() => setMessage(initialMessage), 2000);
    }
  };

  const handleBtnClick = async () => {
    if (!pno || !code) return;

    if (!isOtpVisible) {
      const result = await sendOtp({ code, phone: pno });
      if (result?.payload?.status) {
        setIsOtpVisible(true);
      }
    } else {
      if (!otp) return;
      const result = await verifyOtp({ code, phone: pno, otp });
      if (result.success) {
        setMessage({ type: "success", text: "OTP verified successfully" });
        setOtp("");
      } else {
        setMessage({ type: "error", text: "Could not verify OTP" });
      }

      setTimeout(() => setMessage(initialMessage), 2000);
    }
  };
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(160, 160, 160, 0.2)",
        height: "100vh",
      }}
    >
      <Paper
        elevation={4}
        style={{ padding: 20, maxWidth: 400, marginBottom: 60 }}
      >
        {!isOtpVisible ? (
          <h3 style={{ marginLeft: 10, color: "#9f9f9f" }}>Send OTP</h3>
        ) : (
          <IconButton
            onClick={() => {
              setIsOtpVisible(false);
              setOtp("");
            }}
            size="small"
          >
            <ArrowBackIcon />
          </IconButton>
        )}
        {!isOtpVisible ? (
          <h3>Enter your Phone Number</h3>
        ) : (
          <h3>Enter the OTP</h3>
        )}
        {isOtpVisible ? (
          <p>
            A One Time Password has been sent to your phone number for
            verification purposes.
          </p>
        ) : null}
        <div>
          {!isOtpVisible ? (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "auto",
                justifyContent: "space-around",
                gap: "1rem",
              }}
            >
              <TextField
                id="code"
                label="Code"
                color="secondary"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                sx={{ flex: 1 }}
              />

              <TextField
                sx={{ flex: 2 }}
                id="phone"
                label="Phone"
                color="secondary"
                value={pno}
                onChange={(e) => {
                  if (
                    (e.target.value[e.target.value.length - 1] >= "0" &&
                      e.target.value[e.target.value.length - 1] <= "9") ||
                    !e.target.value
                  ) {
                    setPno(e.target.value);
                  }
                }}
              />
            </div>
          ) : (
            <Otp otp={otp} handleChange={(val: string) => setOtp(val)} />
          )}
          {isOtpVisible ? (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              Didn't receive an OTP?{" "}
              <Button
                onClick={handleResendOtp}
                color="primary"
                style={{ textTransform: "none", fontSize: 15 }}
              >
                Resend OTP
              </Button>
            </div>
          ) : null}
          <Box style={{ display: "flex", flexDirection: "row", marginTop: 20 }}>
            <Button
              variant="contained"
              disabled={
                pno?.length !== 10 ||
                code === null ||
                !isNumeric(pno) ||
                (isOtpVisible && otp?.length !== 6)
              }
              color="secondary"
              style={{
                color: "white",
                marginLeft: "auto",
                textTransform: "none",
              }}
              onClick={handleBtnClick}
            >
              {isOtpVisible ? "Verify" : "Send"}
            </Button>
          </Box>
          {message.type === "success" && <p>{message.text}</p>}
          {!isOtpVisible ? (
            <p>
              By tapping Verify an SMS may be sent. Message & data rates may
              apply.
            </p>
          ) : null}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              marginTop: 10,
            }}
          >
            <a href="#" style={{ textDecoration: "none", fontSize: 14 }}>
              Terms of service
            </a>
            <a
              href="#"
              style={{ textDecoration: "none", fontSize: 14, marginLeft: 10 }}
            >
              User agreement
            </a>
          </div>
        </div>
      </Paper>
    </Box>
  );
};
export default Main;
