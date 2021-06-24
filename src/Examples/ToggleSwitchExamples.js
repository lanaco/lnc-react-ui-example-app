import { ToggleSwitch as ToggleSwitchLanaco } from "@lanaco/lnc-react-ui";
import { useState } from "react";
import * as css from "./ToggleSwitchExamples.module.css";

const ToggleSwitchExample = (props) => {
  const [value1, setValue1] = useState(true);
  const [value2, setValue2] = useState(true);
  const [value3, setValue3] = useState(false);

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
      <h1 style={{ paddingLeft: "20px" }}>ToggleSwitch examples</h1>
      <div style={{ display: "flex", paddingLeft: "10px" }}>
        <div style={{ paddingLeft: "20px" }}>
          <ToggleSwitchLanaco
            id={"ToggleSwitch1"}
            label={"ToggleSwitch"}
            value={value1}
            onChange={onChange1}
            disabled={false}
          ></ToggleSwitchLanaco>
        </div>
        <div style={{ paddingLeft: "20px" }}>
          <ToggleSwitchLanaco
            id={"ToggleSwitch2"}
            label={"ToggleSwitch"}
            value={value2}
            onChange={onChange2}
            disabled={false}
            sliderClassName={css.redSwitch}
          ></ToggleSwitchLanaco>
        </div>
        <div style={{ paddingLeft: "20px" }}>
          <ToggleSwitchLanaco
            id={"ToggleSwitch3"}
            label={"ToggleSwitch disabled"}
            value={value3}
            onChange={onChange3}
            disabled={true}
          ></ToggleSwitchLanaco>
        </div>
      </div>
    </div>
  );
};

export default ToggleSwitchExample;
