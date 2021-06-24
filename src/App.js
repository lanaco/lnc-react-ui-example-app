import "./App.css";
import ButtonExamples from "./Examples/ButtonExamples";
import CheckBoxExamples from "./Examples/CheckBoxExamples";
import CheckBoxLookupExamples from "./Examples/CheckBoxLookupExamples";
import DateInputExamples from "./Examples/DateInputExamples";
import DropDownExamples from "./Examples/DropDownExamples";
import DropdownLookupExamples from "./Examples/DropdownLookupExamples";
import IconExamples from "./Examples/IconExamples";
import IconButtonExamples from "./Examples/IconButtonExamples";
import NumberInputExamples from "./Examples/NumberInputExamples";
import PasswordInputExamples from "./Examples/PasswordInputExamples";
import TextAreaExamples from "./Examples/TextAreaExamples";
import TextInputExamples from "./Examples/TextInputExamples";
import ToggleSwitchExamples from "./Examples/ToggleSwitchExamples";
import TransparentTextInputExamples from "./Examples/TransparentTextInputExamples";
import DataViewExamples from "./Examples/DataViewExamples";
import ComponentBoxExamples from "./Examples/ComponentBoxExamples";
import ConfirmationFormExamples from "./Examples/ConfirmationFormExamples";
import DropdownMenuExamples from "./Examples/DropdownMenuExamples";
import GridExamples from "./Examples/GridExamples";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Layout from "./Layout/Layout";

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
