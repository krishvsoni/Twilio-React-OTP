import React from "react";
import { isNumeric } from "../utils/util";

interface IProps {
  currentRef: React.RefObject<HTMLInputElement>;
  otp: string;
  previousRef?: React.RefObject<HTMLInputElement>;
  nextRef?: React.RefObject<HTMLInputElement>;
  index: number;
  handleChange: (val: string) => void;
}

const InputBox = ({
  currentRef,
  otp,
  previousRef,
  nextRef,
  index,
  handleChange,
}: IProps) => {
  return (
    <input
      placeholder="•"
      ref={currentRef}
      maxLength={1}
      value={otp.slice(index, index + 1)}
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
          nextRef ? nextRef.current?.focus() : currentRef.current?.blur();
        } else {
          if (event.target.value.length > 1) {
            handleChange(
              otp.slice(0, index) +
                event.target.value.slice(1, 2) +
                otp.slice(index + 1)
            );
            nextRef ? nextRef.current?.focus() : currentRef.current?.blur();
          } else {
            handleChange(otp.slice(0, index) + otp.slice(index + 1));
            previousRef && previousRef.current?.focus();
          }
        }
      }}
    />
  );
};
export default InputBox;
