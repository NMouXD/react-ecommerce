import { useState } from "react";
import { styled } from "@mui/material/styles";

const InputContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  border: "1px solid #ccc",
  borderRadius: "4px",
  padding: "4px",
});

const Input = styled("input")({
  border: "none",
  outline: "none",
  flexGrow: 1,
  textAlign: "center",
});

const Button = styled("button")({
  border: "none",
  background: "transparent",
  cursor: "pointer",
});

const NumberInput = ({ initialValue, onChange }) => {
  const [value, setValue] = useState(initialValue || 0);

  const handleIncrement = () => {
    const newValue = value + 1;
    setValue(newValue);
    onChange(newValue);
  };

  const handleDecrement = () => {
    const newValue = value - 1;
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <InputContainer>
      <Button onClick={handleDecrement}>-</Button>
      <Input type="number" value={value} onChange={(e) => setValue(Number(e.target.value))} />
      <Button onClick={handleIncrement}>+</Button>
    </InputContainer>
  );
};

export default NumberInput; 