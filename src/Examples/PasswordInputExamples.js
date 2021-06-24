import { PasswordInput as PasswordInputLanaco } from "@lanaco/lnc-react-ui";
import { useState } from "react";

const PasswordInputExample = (props) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("password");
  const [value3, setValue3] = useState("password");

  const onChange1 = (_, value) => {
    setValue1(value);
  };

  const onChange2 = (_, value) => {
    setValue2(value);
  };

  const onChange3 = (_, value) => {
    setValue3(value);
  };

  const fortottenOption = (_, value) => {
    alert("Method when password is forgotten");
  };

  const anotherFortottenOption = (_, value) => {
    alert("Another method when password is forgotten");
  };

  return (
    <div>
      <h1 style={{ paddingLeft: "20px" }}>PasswordInput examples</h1>
      <div style={{ display: "flex", paddingLeft: "10px" }}>
        <div style={{ paddingLeft: "20px" }}>
          <PasswordInputLanaco
            id={"PasswordInputLanaco"}
            label={"Password input"}
            isDecimal={false}
            value={value1}
            onChange={onChange1}
            disabled={false}
            handleForgotPassword={fortottenOption}
          ></PasswordInputLanaco>
        </div>
        <div style={{ paddingLeft: "20px" }}>
          <PasswordInputLanaco
            id={"PasswordInputLanaco"}
            label={"Password input without forgotten option"}
            isDecimal={false}
            value={value2}
            onChange={onChange2}
            disabled={false}
            dontShowPasswordForgottenOption={true}
          ></PasswordInputLanaco>
        </div>
        <div style={{ paddingLeft: "20px" }}>
          <PasswordInputLanaco
            id={"PasswordInputLanaco"}
            label={"Password input with another forgotten option"}
            isDecimal={false}
            value={value3}
            onChange={onChange3}
            disabled={false}
            passwordForgottenText={"Another forgotten option"}
            handleForgotPassword={anotherFortottenOption}
          ></PasswordInputLanaco>
        </div>
      </div>
    </div>
  );
};

export default PasswordInputExample;
