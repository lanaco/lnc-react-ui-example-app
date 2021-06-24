import { NumberInput as NumberInputLanaco } from "@lanaco/lanaco-react-library";
import { useState } from "react";

const NumberInputExample = (props) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("123");
  const [value3, setValue3] = useState("456");

  const onChange1 = (_, value) => {
    setValue1(value);
  };

  const onChange2 = (_, value) => {
    setValue2(value);
  };

  const onChange3 = (_, value) => {
    setValue3(value);
  };

  return (
    <div>
      <h1 style={{ paddingLeft: "20px" }}>NumberInput examples</h1>
      <div style={{ display: "flex", paddingLeft: "10px" }}>
        <div style={{ paddingLeft: "20px" }}>
          <NumberInputLanaco
            id={"NumberInput1"}
            label={"Number input required"}
            isDecimal={false}
            value={value1}
            onChange={onChange1}
            required={true}
            // className={props.className}
            disabled={false}
            errorText={value1 === "" ? "Field is required!" : ""}
          ></NumberInputLanaco>
        </div>
        <div style={{ paddingLeft: "20px" }}>
          <NumberInputLanaco
            id={"NumberInput2"}
            label={"Number input with value"}
            isDecimal={true}
            value={value2}
            onChange={onChange2}
            disabled={false}
          ></NumberInputLanaco>
        </div>
        <div style={{ paddingLeft: "20px" }}>
          <NumberInputLanaco
            id={"NumberInput3"}
            label={"Number input disabled"}
            isDecimal={false}
            value={value3}
            onChange={onChange3}
            // className={props.className}
            disabled={true}
          ></NumberInputLanaco>
        </div>
      </div>
    </div>
  );
};

export default NumberInputExample;
