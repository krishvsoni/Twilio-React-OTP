const SERVER_URL = "http://localhost:8000/api/otp";

const sendOtp = async ({ code, phone }: { code: string; phone: string }) => {
  try {
    const response = await fetch(`${SERVER_URL}/send-otp`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phoneNumber: `${code}${phone}`,
      }),
    });

    const result = await response.json();

    return result;
  } catch (err) {
    console.error(`Error in sending otp: ${err}`);
  }
};

const verifyOtp = async ({
  code,
  phone,
  otp,
}: {
  code: string;
  phone: string;
  otp: string;
}) => {
  try {
    const response = await fetch(`${SERVER_URL}/verify-otp`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        phoneNumber: code + phone,
        otp,
      }),
    });

    const result = await response.json();

    return result;
  } catch (err) {
    console.error(`Error in verifying otp: ${err}`);
  }
};

export { sendOtp, verifyOtp };
