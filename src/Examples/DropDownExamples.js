import { DropDown as DropDownLanaco } from "@lanaco/lnc-react-ui";
import { useState } from "react";

const DropDownExample = (props) => {
  const [value1, setValue1] = useState("-1");
  const [value2, setValue2] = useState("-1");
  const [value3, setValue3] = useState(1);

  const onChange1 = (_, value) => {
    setValue1(value);
  };

  const onChange2 = (_, value) => {
    setValue2(value);
  };

  const onChange3 = (_, value) => {
    setValue3(value);
  };

  const items = [
    { name: "name 1", value: 1 },
    { name: "name 2", value: 2 },
    { name: "name 3", value: 3 },
  ];

  return (
    <div>
      <h1 style={{ paddingLeft: "20px" }}>DropDown examples</h1>
      <div style={{ display: "flex", paddingLeft: "10px" }}>
        <div style={{ paddingLeft: "20px" }}>
          <DropDownLanaco
            label={"DropDown Required"}
            items={items}
            value={value1}
            withoutEmpty={false}
            onChange={onChange1}
            errorText={value1 === "-1" ? "Select value" : ""}
            required
          ></DropDownLanaco>
        </div>
        <div style={{ paddingLeft: "20px" }}>
          <DropDownLanaco
            label={"DropDown Red"}
            items={items}
            value={value2}
            withoutEmpty={false}
            onChange={onChange2}
            accentColor={"red"}
          ></DropDownLanaco>
        </div>
        <div style={{ paddingLeft: "20px" }}>
          <DropDownLanaco
            label={"DropDown without empty"}
            items={items}
            value={value3}
            withoutEmpty={true}
            onChange={onChange3}
            accentColor={"green"}
          ></DropDownLanaco>
        </div>
      </div>
    </div>
  );
};

export default DropDownExample;
