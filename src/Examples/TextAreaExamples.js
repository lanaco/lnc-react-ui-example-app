import { TextArea as TextAreaLanaco } from "@lanaco/lnc-react-ui";
import { useState } from "react";

const TextAreaExample = (props) => {
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
      <h1 style={{ paddingLeft: "20px" }}>TextArea examples</h1>
      <div style={{ display: "flex", paddingLeft: "10px" }}>
        <div style={{ paddingLeft: "20px" }}>
          <TextAreaLanaco
            id={"TextArea1"}
            label={"TextArea required"}
            value={value1}
            onChange={onChange1}
            required={true}
            disabled={false}
            errorText={value1 === "" ? "Field is required!" : ""}
            tooltipText={"Tooltip"}
          ></TextAreaLanaco>
        </div>
        <div style={{ paddingLeft: "20px" }}>
          <TextAreaLanaco
            id={"TextArea2"}
            label={"TextArea with value"}
            value={value2}
            onChange={onChange2}
            disabled={false}
            tooltipText={"Tooltip"}
          ></TextAreaLanaco>
        </div>
        <div style={{ paddingLeft: "20px" }}>
          <TextAreaLanaco
            id={"TextArea3"}
            label={"TextArea disabled"}
            value={value3}
            onChange={onChange3}
            disabled={true}
            tooltipText={"Tooltip"}
          ></TextAreaLanaco>
        </div>
      </div>
    </div>
  );
};

export default TextAreaExample;
