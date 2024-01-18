import React, { useState } from 'react';
import twilio from 'twilio';

const OtpLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState('');

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const sendOtp = async (to, body) => {
    const accountSid = process.env.REACT_APP_TWILIO_ACCOUNT_SID;
    const authToken = process.env.REACT_APP_TWILIO_AUTH_TOKEN;
    const twilioPhoneNumber = process.env.REACT_APP_TWILIO_PHONE_NUMBER;

    const client = twilio(accountSid, authToken);

    try {
      const response = await client.messages.create({
        body: body,
        from: twilioPhoneNumber,
        to: `+${to}`, 
      });

      console.log(response);
      setIsOtpSent(true);
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  const handleSendOtp = async () => {
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();

    await sendOtp(phoneNumber, `Your OTP is: ${generatedOtp}`);

    setOtp(generatedOtp);
  };

  const handleVerifyOtp = () => {
    if (otp === '123456') {
      setVerificationStatus('Verification successful. You are logged in!');
    } else {
      setVerificationStatus('Verification failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>OTP Login</h2>
      <label htmlFor="phoneNumber">Phone Number:</label>
      <input
        type="tel"
        id="phoneNumber"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        disabled={isOtpSent}
      />

      {!isOtpSent ? (
        <button onClick={handleSendOtp}>Send OTP</button>
      ) : (
        <>
          <label htmlFor="otp">Enter OTP:</label>
          <input
            type="text"
            id="otp"
            value={otp}
            onChange={handleOtpChange}
          />
          <button onClick={handleVerifyOtp}>Verify OTP</button>
        </>
      )}

      {verificationStatus && <p>{verificationStatus}</p>}
    </div>
  );
};

export default OtpLogin;
