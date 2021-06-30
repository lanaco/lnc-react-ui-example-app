import React from "react";
import { Route, Switch } from "react-router-dom";
import * as css from "./ContentPanel.module.css";
import ButtonExamples from "../../Examples/ButtonExamples";
import CheckBoxExamples from "../../Examples/CheckBoxExamples";
import CheckBoxLookupExamples from "../../Examples/CheckBoxLookupExamples";
import DateInputExamples from "../../Examples/DateInputExamples";
import DropDownExamples from "../../Examples/DropDownExamples";
import DropdownLookupExamples from "../../Examples/DropdownLookupExamples";
import IconExamples from "../../Examples/IconExamples";
import IconButtonExamples from "../../Examples/IconButtonExamples";
import NumberInputExamples from "../../Examples/NumberInputExamples";
import PasswordInputExamples from "../../Examples/PasswordInputExamples";
import TextAreaExamples from "../../Examples/TextAreaExamples";
import TextInputExamples from "../../Examples/TextInputExamples";
import ToggleSwitchExamples from "../../Examples/ToggleSwitchExamples";
import TransparentTextInputExamples from "../../Examples/TransparentTextInputExamples";
import ComponentBoxExamples from "../../Examples/ComponentBoxExamples";
import ConfirmationFormExamples from "../../Examples/ConfirmationFormExamples";
import DropdownMenuExamples from "../../Examples/DropdownMenuExamples";
import GridExamples from "../../Examples/GridExamples";

const ContentPanel = (props) => {
  return (
    <div onClick={props.onClick} className={css.contentPanel}>
      <Switch>
        <Route
          path="/"
          children={
            <div className="ButtonExamplesContainer">
              <ButtonExamples></ButtonExamples>
            </div>
          }
          exact
        />
        <Route
          path="/lnc-react-ui-example-app"
          children={
            <div className="ButtonExamplesContainer">
              <ButtonExamples></ButtonExamples>
            </div>
          }
          exact
        />
        <Route
          path="/ButtonExamples"
          children={
            <div className="ButtonExamplesContainer">
              <ButtonExamples></ButtonExamples>
            </div>
          }
          exact
        />
        <Route
          path="/CheckBoxExamples"
          children={
            <div className="CheckBoxExamplesContainer">
              <CheckBoxExamples></CheckBoxExamples>
            </div>
          }
          exact
        />
        <Route
          path="/CheckBoxLookupExamples"
          children={
            <div className="CheckBoxLookupExamplesContainer">
              <CheckBoxLookupExamples></CheckBoxLookupExamples>
            </div>
          }
          exact
        />
        <Route
          path="/DateInputExamples"
          children={
            <div className="DateInputExamplesContainer">
              <DateInputExamples></DateInputExamples>
            </div>
          }
          exact
        />
        <Route
          path="/DropDownExamples"
          children={
            <div className="DropDownExamplesContainer">
              <DropDownExamples></DropDownExamples>
            </div>
          }
          exact
        />
        <Route
          path="/DropdownLookupExamples"
          children={
            <div className="DropdownLookupExamplesContainer">
              <DropdownLookupExamples></DropdownLookupExamples>
            </div>
          }
          exact
        />
        <Route
          path="/IconExamples"
          children={
            <div className="IconExamplesContainer">
              <IconExamples></IconExamples>
            </div>
          }
          exact
        />
        <Route
          path="/IconButtonExamples"
          children={
            <div className="IconButtonExamplesContainer">
              <IconButtonExamples></IconButtonExamples>
            </div>
          }
          exact
        />
        <Route
          path="/NumberInputExamples"
          children={
            <div className="NumberInputExamplesContainer">
              <NumberInputExamples></NumberInputExamples>
            </div>
          }
          exact
        />
        <Route
          path="/PasswordInputExamples"
          children={
            <div className="PasswordInputExamplesContainer">
              <PasswordInputExamples></PasswordInputExamples>
            </div>
          }
          exact
        />
        <Route
          path="/TextAreaExamples"
          children={
            <div className="TextAreaExamplesContainer">
              <TextAreaExamples></TextAreaExamples>
            </div>
          }
          exact
        />
        <Route
          path="/TextInputExamples"
          children={
            <div className="TextInputExamplesContainer">
              <TextInputExamples></TextInputExamples>
            </div>
          }
          exact
        />
        <Route
          path="/ToggleSwitchExamples"
          children={
            <div className="ToggleSwitchExamplesContainer">
              <ToggleSwitchExamples></ToggleSwitchExamples>
            </div>
          }
          exact
        />
        <Route
          path="/TransparentTextInputExamples"
          children={
            <div className="TransparentTextInputExamplesContainer">
              <TransparentTextInputExamples></TransparentTextInputExamples>
            </div>
          }
          exact
        />
        <Route
          path="/ComponentBoxExamples"
          children={
            <div className="ComponentBoxExamplesContainer">
              <ComponentBoxExamples></ComponentBoxExamples>
            </div>
          }
          exact
        />

        <Route
          path="/ConfirmationFormExamples"
          children={
            <div className="ConfirmationFormExamplesContainer">
              <ConfirmationFormExamples></ConfirmationFormExamples>
            </div>
          }
          exact
        />
        <Route
          path="/DropdownMenuExamples"
          children={
            <div className="DropdownMenuExamplesContainer">
              <DropdownMenuExamples></DropdownMenuExamples>
            </div>
          }
          exact
        />
        <Route
          path="/GridExamples"
          children={
            <div className="GridExamplesContainer">
              <GridExamples></GridExamples>
            </div>
          }
          exact
        />
      </Switch>
    </div>
  );
};

export default ContentPanel;
