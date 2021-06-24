import { CheckboxLookup as CheckboxLookupLanaco } from "@lanaco/lanaco-react-library";
import { useState } from "react";

const CheckboxLookupExample = (props) => {
  const [selectedOptions1, setSelectedOptions1] = useState([
    { itemId: 1, name: "Option 1" },
    { itemId: 2, name: "Option 2" },
  ]);
  const [selectedOptions2, setSelectedOptions2] = useState([
    { itemId: 1, name: "Option 1" },
    { itemId: 2, name: "Option 2" },
  ]);

  var options = [
    { itemId: 1, name: "Option 1" },
    { itemId: 2, name: "Option 2" },
    { itemId: 3, name: "Option 3" },
    { itemId: 4, name: "Option 4" },
  ];

  const onSelectDeselectAll1 = (selectDeselect) => {
    if (selectDeselect) setSelectedOptions1(options);
    else setSelectedOptions1([]);
  };

  const onSelectDeselectAll2 = (selectDeselect) => {
    if (selectDeselect) setSelectedOptions2(options);
    else setSelectedOptions2([]);
  };

  const onChange1 = (_, selectedItems) => {
    setSelectedOptions1(selectedItems);
  };

  const onChange2 = (_, selectedItems) => {
    setSelectedOptions2(selectedItems);
  };

  return (
    <div>
      <h1 style={{ paddingLeft: "20px" }}>CheckBoxLookup examples</h1>
      <div style={{ display: "flex", paddingLeft: "10px" }}>
        <div style={{ paddingLeft: "30px" }}>
          <CheckboxLookupLanaco
            id={"CheckBoxLookup 1"}
            selectedOptions={selectedOptions1}
            options={options}
            itemId={"itemId"}
            onSelectDeselectAll={onSelectDeselectAll1}
            title={"CheckBox lookup with CheckBox components"}
            isSwitchComponent={false}
            itemText={"name"}
            onChange={onChange1}
            checkAllIconClassName={"lnc-checklist"}
          ></CheckboxLookupLanaco>
        </div>
        <div style={{ paddingLeft: "30px" }}>
          <CheckboxLookupLanaco
            id={"CheckBoxLookup 1"}
            selectedOptions={selectedOptions2}
            options={options}
            itemId={"itemId"}
            onSelectDeselectAll={onSelectDeselectAll2}
            title={"CheckBox lookup with ToggleSwitch components"}
            isSwitchComponent={true}
            itemText={"name"}
            onChange={onChange2}
            checkAllIconClassName={"lnc-checklist"}
          ></CheckboxLookupLanaco>
        </div>
      </div>
    </div>
  );
};

export default CheckboxLookupExample;
