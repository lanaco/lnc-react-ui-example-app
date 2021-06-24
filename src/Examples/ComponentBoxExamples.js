import { ComponentBox as ComponentBoxLanaco } from "@lanaco/lanaco-react-library";
import { Button as ButtonLanaco } from "@lanaco/lanaco-react-library";
import { useState } from "react";

const ComponentBoxExample = (props) => {
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

  const handleDialogOpen2 = () => {
    OpenModal("ComponentBoxLanaco2");
  };

  const handleDialogOpen3 = () => {
    OpenModal("ComponentBoxLanaco3");
  };

  const handleClose = () => {
    alert("Special method for closing modal!");
    CloseModal("ComponentBoxLanaco3");
  };

  return (
    <div>
      <h1 style={{ paddingLeft: "20px" }}>ComponentBox examples</h1>
      <div style={{ display: "flex", paddingLeft: "10px" }}>
        {/* example 1 */}
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
            <div>DIALOG</div>
          </ComponentBoxLanaco>
          <ButtonLanaco
            id={1}
            onClick={handleDialogOpen1}
            disabled={false}
            label={"Open dialog 1"}
            tooltipText={"tooltipText"}
          ></ButtonLanaco>
        </div>

        {/* example 2 */}
        <div style={{ paddingLeft: "20px" }}>
          <ComponentBoxLanaco
            id={"ComponentBoxLanaco2"}
            componentBoxList={list}
            addComponentBox={AddModal}
            //handleDialogClose={props.handleDialogClose}
            closeComponentBox={CloseModal}
            closeModalOnOutsideClick={true}
            size={"large"}
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
            <div>Large dialog which closes on outside model click </div>
          </ComponentBoxLanaco>
          <ButtonLanaco
            id={1}
            onClick={handleDialogOpen2}
            disabled={false}
            label={"Open dialog 2"}
            tooltipText={"tooltipText"}
          ></ButtonLanaco>
        </div>

        {/* example 3 */}
        <div style={{ paddingLeft: "20px" }}>
          <ComponentBoxLanaco
            id={"ComponentBoxLanaco3"}
            componentBoxList={list}
            addComponentBox={AddModal}
            handleDialogClose={handleClose}
            closeComponentBox={CloseModal}
            closeModalOnOutsideClick={true}
            size={"small"}
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
            <div>Small dialog with special method for closing </div>
          </ComponentBoxLanaco>
          <ButtonLanaco
            id={1}
            onClick={handleDialogOpen3}
            disabled={false}
            label={"Open dialog 3"}
            tooltipText={"tooltipText"}
          ></ButtonLanaco>
        </div>
      </div>
    </div>
  );
};

export default ComponentBoxExample;
