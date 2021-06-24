import { Button as ButtonLanaco } from "@lanaco/lanaco-react-library";
import * as css from "./stylesExamples.module.css";

const onClickButton = () => {
  alert("On click handled!");
};

const CheckBoxExample = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <p>Display flex:</p>
        <ButtonLanaco
          id={1}
          onClick={() => {}}
          disabled={false}
          label={"Label"}
          tooltipText={"tooltipText"}
          errorText={"props.errorText"}
        ></ButtonLanaco>
        <ButtonLanaco
          id={2}
          onClick={() => {}}
          disabled={true}
          label={"Labela"}
          tooltipText={
            "tooltipTexttooltipTexttooltipTexttooltipTexttooltipText"
          }
          errorText={""}
        ></ButtonLanaco>
        <ButtonLanaco
          id={3}
          onClick={() => onClickButton()}
          disabled={true}
          label={"Disabled with on click"}
          tooltipText={""}
          errorText={""}
        ></ButtonLanaco>
        <ButtonLanaco
          id={4}
          onClick={() => onClickButton()}
          disabled={false}
          label={"Enabled with on click"}
          tooltipText={""}
          errorText={""}
        ></ButtonLanaco>
        <ButtonLanaco
          id={5}
          onClick={() => {}}
          disabled={false}
          label={"No"}
          tooltipText={"No"}
          errorText={""}
          errorTextCssClass={""}
        ></ButtonLanaco>
        <ButtonLanaco
          id={6}
          onClick={() => {}}
          disabled={true}
          label={"Yes"}
          tooltipText={"Yes"}
          errorText={""}
          errorTextCssClass={""}
        ></ButtonLanaco>
        <ButtonLanaco
          id={7}
          onClick={() => {}}
          disabled={false}
          label={"NoWithError"}
          tooltipText={"No"}
          errorText={"Here is long error text and wi will take look on that"}
          errorTextCssClass={css.classNameErrorText7}
        ></ButtonLanaco>
        <ButtonLanaco
          id={8}
          onClick={() => {}}
          disabled={true}
          label={"YesWithError"}
          tooltipText={"Yes"}
          errorText={"Here is error"}
          errorTextCssClass={css.classNameErrorText8}
        ></ButtonLanaco>
        <ButtonLanaco
          id={9}
          onClick={() => {}}
          disabled={true}
          inputCssClass={css.greenButton}
          label={"ColorGreen"}
          tooltipText={"Yes"}
          errorText={"Here is error"}
          errorTextCssClass={""}
        ></ButtonLanaco>
        <ButtonLanaco
          id={10}
          onClick={() => {}}
          disabled={true}
          inputCssClass={css.redButton}
          label={"ColorRed"}
          tooltipText={"Yes"}
          errorText={"Here is error"}
          errorTextCssClass={""}
        ></ButtonLanaco>
      </div>
      <div style={{ display: "block" }}>
        <p>Display block:</p>
        <ButtonLanaco
          id={1}
          onClick={() => {}}
          disabled={false}
          inputCssClass={css.width33}
          label={"Label"}
          tooltipText={"tooltipText"}
          errorText={"props.errorText"}
        ></ButtonLanaco>
        <ButtonLanaco
          id={2}
          onClick={() => {}}
          disabled={true}
          inputCssClass={css.width33}
          label={"Labela"}
          tooltipText={
            "tooltipTexttooltipTexttooltipTexttooltipTexttooltipText"
          }
          errorText={""}
        ></ButtonLanaco>
        <ButtonLanaco
          id={3}
          onClick={() => onClickButton()}
          disabled={true}
          inputCssClass={css.width33}
          label={"Disabled with on click"}
          tooltipText={""}
          errorText={""}
        ></ButtonLanaco>
        <ButtonLanaco
          id={4}
          onClick={() => onClickButton()}
          disabled={false}
          label={"Enabled with on click"}
          tooltipText={""}
          errorText={""}
        ></ButtonLanaco>
        <ButtonLanaco
          id={5}
          onClick={() => {}}
          disabled={false}
          label={"No"}
          tooltipText={"No"}
          errorText={""}
          errorTextCssClass={""}
        ></ButtonLanaco>
        <ButtonLanaco
          id={6}
          onClick={() => {}}
          disabled={true}
          label={"Yes"}
          tooltipText={"Yes"}
          errorText={""}
          errorTextCssClass={""}
        ></ButtonLanaco>
        <ButtonLanaco
          id={7}
          onClick={() => {}}
          disabled={false}
          label={"NoWithError"}
          tooltipText={"No"}
          errorText={"Here is long error text and wi will take look on that"}
          errorTextCssClass={css.classNameErrorText7}
        ></ButtonLanaco>
        <ButtonLanaco
          id={8}
          onClick={() => {}}
          disabled={true}
          label={"YesWithError"}
          tooltipText={"Yes"}
          errorText={"Here is error"}
          errorTextCssClass={css.classNameErrorText8}
        ></ButtonLanaco>
        <ButtonLanaco
          id={9}
          onClick={() => {}}
          disabled={true}
          inputCssClass={css.greenButton}
          label={"ColorGreen"}
          tooltipText={"Yes"}
          errorText={"Here is error"}
          errorTextCssClass={""}
        ></ButtonLanaco>
        <ButtonLanaco
          id={10}
          onClick={() => {}}
          disabled={true}
          inputCssClass={css.redButton}
          label={"ColorRed"}
          tooltipText={"Yes"}
          errorText={"Here is error"}
          errorTextCssClass={""}
        ></ButtonLanaco>
      </div>
    </div>
  );
};

export default CheckBoxExample;
