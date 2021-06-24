import { ConfirmationForm as ConfirmationFormLanaco } from "@lanaco/lnc-react-ui";
import { ComponentBox as ComponentBoxLanaco } from "@lanaco/lnc-react-ui";
import { Button as ButtonLanaco } from "@lanaco/lnc-react-ui";
import { useState } from "react";

const ConfirmationFormExample = (props) => {
  const [list, setList] = useState([]);

  const AddModal = (id) => {
    let existingItem = list.find((x) => {
      return x.ID === id;
    });
    if (existingItem === undefined) setList([...list, { ID: id, Open: false }]);
  };

  const OpenModal = (id) => {
    setList(
      list.map((item) => (item.ID === id ? { ...item, Open: true } : item))
    );
  };

  const CloseModal = (id) => {
    setList(
      list.map((item) => (item.ID === id ? { ...item, Open: false } : item))
    );
  };

  const handleDialogOpen1 = () => {
    OpenModal("ComponentBoxLanaco1");
  };

  return (
    <div>
      <h1 style={{ paddingLeft: "20px" }}>ConfirmationForm examples</h1>
      <div style={{ display: "flex", paddingLeft: "10px" }}>
        <ConfirmationFormLanaco
          title={"ConfirmationForm with red button"}
          refuseFunction={() => {
            alert("Refuse function");
          }}
          approveFunction={() => {
            alert("Approve function");
          }}
          handleDialogClose={() => {}}
          accentColor={"red"}
          textYes={"Yes"}
          textNo={"No"}
        ></ConfirmationFormLanaco>
        <div style={{ paddingLeft: "20px" }}>
          <ComponentBoxLanaco
            id={"ComponentBoxLanaco1"}
            componentBoxList={list}
            addComponentBox={AddModal}
            //handleDialogClose={props.handleDialogClose}
            closeComponentBox={CloseModal}
            //closeModalOnOutsideClick={props.closeModalOnOutsideClick}
            //size={props.size}
            withoutPadding={props.withoutPadding}
            dontShowTitle={props.dontShowTitle}
            title={props.title}
            dontShowCloseButton={props.dontShowCloseButton}
            closeIconClassName="lnc-x"
            children={props.children}
            basic={props.basic}
            open={props.open}
            zIndex={props.zIndex}
            disabled={props.disabled}
          >
            <ConfirmationFormLanaco
              title={"CONFIRMATION FORM IN DIALOG"}
              refuseFunction={() => {
                alert("Refuse function");
              }}
              approveFunction={() => {
                alert("Approve function");
              }}
              handleDialogClose={() => {}}
              textYes={"Yes"}
              textNo={"No"}
            ></ConfirmationFormLanaco>
          </ComponentBoxLanaco>
          <ButtonLanaco
            id={1}
            onClick={handleDialogOpen1}
            disabled={false}
            label={"Open dialog with ConfirmationForm example"}
            tooltipText={"tooltipText"}
          ></ButtonLanaco>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationFormExample;
