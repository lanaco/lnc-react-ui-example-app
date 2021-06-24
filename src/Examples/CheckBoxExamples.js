import { CheckBox as CheckBoxLanaco } from "@lanaco/lnc-react-ui";
import { useState } from "react";

const CheckBoxExample = (props) => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  const onChange1 = () => {
    setChecked1(!checked1);
  };

  const onChange2 = () => {
    setChecked2(!checked2);
  };

  return (
    <div>
      <h1 style={{ paddingLeft: "20px" }}>CheckBox examples</h1>
      <div style={{ display: "flex", paddingLeft: "10px" }}>
        <h4 style={{ paddingRight: "20px" }}>Display flex:</h4>
        <CheckBoxLanaco
          checked={checked1}
          onChange={onChange1}
          disabled={false}
          label={checked1 ? "Checked" : "Unchecked"}
        ></CheckBoxLanaco>
        <CheckBoxLanaco
          checked={true}
          onChange={props.onChange}
          disabled={true}
          label={"Disabled"}
        ></CheckBoxLanaco>
      </div>
      <div style={{ display: "block", paddingLeft: "10px" }}>
        <h4 style={{ paddingRight: "20px" }}>Display block:</h4>
        <CheckBoxLanaco
          checked={checked2}
          onChange={onChange2}
          disabled={false}
          label={checked2 ? "Checked" : "Unchecked"}
        ></CheckBoxLanaco>
        <CheckBoxLanaco
          checked={true}
          onChange={props.onChange}
          disabled={true}
          label={"Disabled"}
        ></CheckBoxLanaco>
      </div>
    </div>
  );
};

export default CheckBoxExample;
