import { DropdownMenu as DropdownMenuLanaco } from "@lanaco/lanaco-react-library";
import { useState } from "react";

const DropdownMenuExample = (props) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const items1 = [
    {
      name: "Name 1",
      action: () => {
        setValue1("Name 1");
      },
    },
    {
      name: "Name 2",
      action: () => {
        setValue1("Name 2");
      },
    },
    {
      name: "Name 3",
      action: () => {
        setValue1("Name 3");
      },
    },
  ];

  const addAction = (actionData) => {
    setValue2(
      actionData[0] +
        " + " +
        actionData[1] +
        " = " +
        (actionData[0] + actionData[1])
    );
  };

  const subtractAction = (actionData) => {
    setValue2(
      actionData[0] +
        " - " +
        actionData[1] +
        " = " +
        (actionData[0] - actionData[1])
    );
  };

  const items2 = [
    {
      name: "Add",
      action: addAction,
    },
    {
      name: "Subtract",
      action: subtractAction,
    },
  ];

  return (
    <div>
      <h1 style={{ paddingLeft: "20px" }}>DropdownMenu examples</h1>
      <h4 style={{ paddingLeft: "20px" }}>Example 1</h4>
      <div style={{ display: "flex", paddingLeft: "30px" }}>
        <div>
          <DropdownMenuLanaco
            disabled={false}
            label={"DropdownMenu"}
            downDoubleIconClassName={"lnc-down-double"}
            items={items1}
          ></DropdownMenuLanaco>
        </div>
        <div style={{ paddingLeft: "50px" }}>
          <h4>Selected: {value1}</h4>
        </div>
      </div>

      <h4 style={{ paddingLeft: "20px", paddingTop: "70px" }}>Example 2</h4>
      <div style={{ display: "flex", paddingLeft: "30px" }}>
        <div>
          <DropdownMenuLanaco
            disabled={false}
            label={"DropdownMenu with operations"}
            downDoubleIconClassName={"lnc-down-double"}
            items={items2}
            actionData={[2, 1]}
          ></DropdownMenuLanaco>
        </div>
        <div style={{ paddingLeft: "50px" }}>
          <h4>Result: {value2}</h4>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenuExample;
