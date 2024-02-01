import { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import InputBox from "./InputBox";

interface IProps {
  otp: string;
  handleChange: (val: string) => void;
}

const Otp = ({ otp, handleChange }: IProps) => {
  const ref0 = useRef<HTMLInputElement>(null);
  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);
  const ref3 = useRef<HTMLInputElement>(null);
  const ref4 = useRef<HTMLInputElement>(null);
  const ref5 = useRef<HTMLInputElement>(null);

  useEffect(() => {
    !otp.length && ref0.current?.focus();
  }, []);

  const boxes = [
    {
      currentRef: ref0,
      nextRef: ref1,
    },
    {
      currentRef: ref1,
      previousRef: ref0,
      nextRef: ref2,
    },
    {
      currentRef: ref2,
      previousRef: ref1,
      nextRef: ref3,
    },
    {
      currentRef: ref3,
      previousRef: ref2,
      nextRef: ref4,
    },
    {
      currentRef: ref4,
      previousRef: ref3,
      nextRef: ref5,
    },
    {
      currentRef: ref5,
      previousRef: ref4,
    },
  ];
  return (
    <Box
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        borderRadius: 5,
        justifyContent: "center",
      }}
    >
      {boxes.map((box, index) => (
        <InputBox
          key={index}
          {...box}
          index={index}
          otp={otp}
          handleChange={handleChange}
        />
      ))}
      {/* <input
        placeholder="•"
        ref={ref0}
        maxLength={1}
        value={otp.slice(0, 1)}
        style={{
          fontSize: 24,
          width: 38,
          height: 40,
          display: "flex",
          alignItems: "center",
          justifySelf: "center",
          textAlign: "center",
          marginRight: 5,
        }}
        onChange={(event) => {
          if (
            event.target.value !== "" &&
            event.target.value.length === 1 &&
            isNumeric(event.target.value)
          ) {
            handleChange(otp + event.target.value);
            ref1.current?.focus();
          } else {
            if (event.target.value.length > 1) {
              handleChange(event.target.value.slice(1, 2) + otp.slice(1));
              ref1.current?.focus();
            } else {
              handleChange(otp.slice(1));
            }
          }
        }}
      /> */}

      {/* <input
        placeholder="•"
        ref={ref1}
        maxLength={1}
        value={otp.slice(1, 2)}
        style={{
          fontSize: 24,
          width: 38,
          height: 40,
          display: "flex",
          alignItems: "center",
          justifySelf: "center",
          textAlign: "center",
          marginRight: 5,
        }}
        onChange={(event) => {
          if (
            event.target.value !== "" &&
            event.target.value.length === 1 &&
            isNumeric(event.target.value)
          ) {
            handleChange(otp + event.target.value);
            ref2.current?.focus();
          } else {
            if (event.target.value.length > 1) {
              handleChange(
                otp.slice(0, 1) + event.target.value.slice(1, 2) + otp.slice(2)
              );
              ref2.current?.focus();
            } else {
              handleChange(otp.slice(0, 1) + otp.slice(2));
              ref0.current?.focus();
            }
          }
        }}
      /> */}

      {/* <input
        placeholder="•"
        ref={ref2}
        maxLength={1}
        value={otp.slice(2, 3)}
        style={{
          fontSize: 24,
          width: 38,
          height: 40,
          display: "flex",
          alignItems: "center",
          justifySelf: "center",
          textAlign: "center",
          marginRight: 5,
        }}
        onChange={(event) => {
          if (
            event.target.value !== "" &&
            event.target.value.length === 1 &&
            isNumeric(event.target.value)
          ) {
            handleChange(otp + event.target.value);
            ref3.current?.focus();
          } else {
            if (event.target.value.length > 1) {
              handleChange(
                otp.slice(0, 2) + event.target.value.slice(1, 2) + otp.slice(3)
              );
              ref3.current?.focus();
            } else {
              handleChange(otp.slice(0, 2) + otp.slice(3));
              ref1.current?.focus();
            }
          }
        }}
      /> */}

      {/* <input
        placeholder="•"
        ref={ref3}
        maxLength={1}
        value={otp.slice(3, 4)}
        style={{
          fontSize: 24,
          width: 38,
          height: 40,
          display: "flex",
          alignItems: "center",
          justifySelf: "center",
          textAlign: "center",
          marginRight: 5,
        }}
        onChange={(event) => {
          if (
            event.target.value !== "" &&
            event.target.value.length === 1 &&
            isNumeric(event.target.value)
          ) {
            handleChange(otp + event.target.value);
            ref4.current?.focus();
          } else {
            if (event.target.value.length > 1) {
              handleChange(
                otp.slice(0, 3) + event.target.value.slice(1, 2) + otp.slice(4)
              );
              ref4.current?.focus();
            } else {
              handleChange(otp.slice(0, 3) + otp.slice(4));
              ref2.current?.focus();
            }
          }
        }}
      /> */}

      {/* <input
        placeholder="•"
        ref={ref4}
        maxLength={1}
        value={otp.slice(4, 5)}
        style={{
          fontSize: 24,
          width: 38,
          height: 40,
          display: "flex",
          alignItems: "center",
          justifySelf: "center",
          textAlign: "center",
          marginRight: 5,
        }}
        onChange={(event) => {
          if (
            event.target.value !== "" &&
            event.target.value.length === 1 &&
            isNumeric(event.target.value)
          ) {
            handleChange(otp + event.target.value);
            ref5.current?.focus();
          } else {
            if (event.target.value.length > 1) {
              handleChange(
                otp.slice(0, 4) + event.target.value.slice(1, 2) + otp.slice(5)
              );
              ref5.current?.focus();
            } else {
              handleChange(otp.slice(0, 4) + otp.slice(5));
              ref3.current?.focus();
            }
          }
        }}
      /> */}

      {/* <input
        placeholder="•"
        ref={ref5}
        maxLength={1}
        value={otp.slice(5)}
        style={{
          fontSize: 24,
          width: 38,
          height: 40,
          display: "flex",
          alignItems: "center",
          justifySelf: "center",
          textAlign: "center",
        }}
        onChange={(event) => {
          if (
            event.target.value !== "" &&
            event.target.value.length === 1 &&
            isNumeric(event.target.value)
          ) {
            handleChange(otp + event.target.value);
            ref5.current?.blur();
          } else {
            if (event.target.value.length > 1) {
              handleChange(otp.slice(0, 5) + event.target.value.slice(1, 2));
              ref5.current?.blur();
            } else {
              handleChange(otp.slice(0, 5));
              ref4.current?.focus();
            }
          }
        }}
      /> */}
    </Box>
  );
};
export default Otp;
