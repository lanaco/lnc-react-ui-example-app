import { DropdownLookup as DropdownLookupLanaco } from "@lanaco/lanaco-react-library";
import { useState } from "react";

const DropdownLookupExample = (props) => {
  const state = {
    Options: [
      { key: 1, value: "Value 1" },
      { key: 2, value: "Value 2" },
      { key: 3, value: "Value 3" },
    ],
    Loading: false,
  };

  // example 1
  const [selectedObject1, setSelectedObject1] = useState({
    key: "",
    value: "",
  });

  const [state1, setState1] = useState({
    Options: [
      { key: 1, value: "Value 1" },
      { key: 2, value: "Value 2" },
      { key: 3, value: "Value 3" },
    ],
    Loading: false,
  });

  const loadData1 = (value) => {
    var options = state.Options.filter((obj) => obj.value.includes(value));
    setState1({ ...state1, Options: options });
  };

  const onChange1 = (_, el) => {
    setSelectedObject1(el);
  };

  const clearOptions1 = () => {
    setState1({ Options: [], Loadding: false });
  };

  // example 2
  const [selectedObject2, setSelectedObject2] = useState({
    key: 1,
    value: "Value 1",
  });

  const [state2, setState2] = useState({
    Options: [
      { key: 1, value: "Value 1" },
      { key: 2, value: "Value 2" },
      { key: 3, value: "Value 3" },
    ],
    Loading: false,
  });

  const loadData2 = (value) => {
    var options = state.Options.filter((obj) => obj.value.includes(value));
    setState2({ ...state2, Options: options });
  };

  const onChange2 = (_, el) => {
    setSelectedObject2(el);
  };

  const clearOptions2 = () => {
    setState2({ Options: [], Loadding: false });
  };

  // example 2
  const [selectedObject3, setSelectedObject3] = useState({
    key: 3,
    value: "Value 3",
  });

  const [state3, setState3] = useState({
    Options: [
      { key: 1, value: "Value 1" },
      { key: 2, value: "Value 2" },
      { key: 3, value: "Value 3" },
    ],
    Loading: false,
  });

  return (
    <div>
      <h1 style={{ paddingLeft: "20px" }}>DropDown lookup examples</h1>
      <div style={{ display: "flex", paddingLeft: "10px" }}>
        <div style={{ paddingLeft: "20px" }}>
          <DropdownLookupLanaco
            id={"DropDownLookup1"}
            namespace="DropDownLookup1"
            label={"DropDownLookup required"}
            initialValue={selectedObject1}
            InitializeNamespace={{ key: 1, value: "Value 1" }}
            State={state1}
            LoadData={loadData1}
            onChange={onChange1}
            ClearOptions={clearOptions1}
            required={true}
            tooltipText={"Tooltip"}
            closeIconClassName="lnc-x"
            reloadIconClassName="lnc-reload"
            errorText={selectedObject1.key === "" ? "Select value" : ""}
          ></DropdownLookupLanaco>
        </div>
        <div style={{ paddingLeft: "20px" }}>
          <DropdownLookupLanaco
            id={"DropDownLookup2"}
            namespace="DropDownLookup2"
            label={"DropDownLookup with default value"}
            initialValue={selectedObject2}
            InitializeNamespace={{ key: 1, value: "Value 1" }}
            State={state2}
            LoadData={loadData2}
            onChange={onChange2}
            ClearOptions={clearOptions2}
            tooltipText={"Tooltip"}
            closeIconClassName="lnc-x"
            reloadIconClassName="lnc-reload"
          ></DropdownLookupLanaco>
        </div>
        <div style={{ paddingLeft: "20px" }}>
          <DropdownLookupLanaco
            id={"DropDownLookup3"}
            namespace="DropDownLookup3"
            label={"DropDownLookup disabled"}
            initialValue={selectedObject3}
            InitializeNamespace={{ key: 1, value: "Value 1" }}
            State={state3}
            tooltipText={"Tooltip"}
            closeIconClassName="lnc-x"
            reloadIconClassName="lnc-reload"
            disabled={true}
          ></DropdownLookupLanaco>
        </div>
      </div>
    </div>
  );
};

export default DropdownLookupExample;
