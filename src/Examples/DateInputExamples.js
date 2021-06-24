import { DateInput as DateInputLanaco } from "@lanaco/lanaco-react-library";
import { useState } from "react";

const DateInputExample = (props) => {
  const [value2, setValue2] = useState("20.06.2021.");

  const onChange2 = (_, value) => {
    setValue2(value);
  };

  return (
    <div>
      <h1 style={{ paddingLeft: "20px" }}>DateInput examples</h1>
      <div style={{ display: "flex", paddingLeft: "10px" }}>
        <DateInputLanaco
          id={"DateInput 1"}
          value={value2}
          onChange={onChange2}
          label={"Date input without value"}
          dateFormat={"dd.MM.yyyy."}
          useSideLabel={false}
          required={true}
        ></DateInputLanaco>
        <DateInputLanaco
          id={"DateInput 2"}
          value={value2}
          onChange={onChange2}
          label={"Date input without value"}
          dateFormat={"dd.MM.yyyy."}
          useSideLabel={true}
          required={true}
        ></DateInputLanaco>
      </div>
    </div>
  );
};

export default DateInputExample;
