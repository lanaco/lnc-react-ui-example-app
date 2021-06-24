import { TransparentTextInput as TransparentTextInputLanaco } from "@lanaco/lanaco-react-library";
import { useState } from "react";

const TransparentTextInputExample = (props) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("Text");
  const [value3, setValue3] = useState("Text");

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
      <h1 style={{ paddingLeft: "20px" }}>TransparentTextInput examples</h1>
      <div style={{ display: "flex", paddingLeft: "10px" }}>
        <div style={{ marginLeft: "20px", backgroundColor: "lightblue" }}>
          <TransparentTextInputLanaco
            id={"TransparentTextInput1"}
            value={value1}
            onChange={onChange1}
            required={true}
            disabled={false}
            tooltipText={"Tooltip"}
          ></TransparentTextInputLanaco>
        </div>
        <div style={{ marginLeft: "20px", backgroundColor: "lightblue" }}>
          <TransparentTextInputLanaco
            id={"TransparentTextInput2"}
            value={value2}
            onChange={onChange2}
            disabled={false}
            tooltipText={"Tooltip"}
          ></TransparentTextInputLanaco>
        </div>
        <div style={{ marginLeft: "20px", backgroundColor: "lightblue" }}>
          <TransparentTextInputLanaco
            id={"TransparentTextInput3"}
            value={value3}
            onChange={onChange3}
            disabled={true}
            tooltipText={"Tooltip"}
          ></TransparentTextInputLanaco>
        </div>
      </div>
    </div>
  );
};

export default TransparentTextInputExample;
