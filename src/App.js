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

function App() {
  return (
    <Router>
      <div>
        <h2>Examplessss</h2>

        <div style={{ display: "flex" }}>
          <ul>
            <li>
              <Link to="/ButtonExamples">Button examples</Link>
            </li>
            <li>
              <Link to="/CheckBoxExamples">CheckBox examples</Link>
            </li>
            <li>
              <Link to="/CheckBoxLookupExamples">CheckBoxLookupExamples</Link>
            </li>
            <li>
              <Link to="/DateInputExamples">DateInputExamples</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/DropDownExamples">DropDownExamples</Link>
            </li>
            <li>
              <Link to="/DropdownLookupExamples">DropdownLookupExamples</Link>
            </li>
            <li>
              <Link to="/IconExamples">IconExamples</Link>
            </li>
            <li>
              <Link to="/IconButtonExamples">IconButtonExamples</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/NumberInputExamples">NumberInputExamples</Link>
            </li>
            <li>
              <Link to="/PasswordInputExamples">PasswordInputExamples</Link>
            </li>
            <li>
              <Link to="/TextAreaExamples">TextAreaExamples</Link>
            </li>
            <li>
              <Link to="/TextInputExamples">TextInputExamples</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/ToggleSwitchExamples">ToggleSwitchExamples</Link>
            </li>
            <li>
              <Link to="/TransparentTextInputExamples">
                TransparentTextInputExamples
              </Link>
            </li>
            <li>
              <Link to="/DataViewExamples">DataViewExamples</Link>
            </li>
            <li>
              <Link to="/ComponentBoxExamples">ComponentBoxExamples</Link>
            </li>
            <li>
              <Link to="/ConfirmationFormExamples">
                ConfirmationFormExamples
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/DropdownMenuExamples">DropdownMenuExamples</Link>
            </li>
            <li>
              <Link to="/GridExamples">GridExamples</Link>
            </li>
          </ul>
        </div>

        <Switch>
          <Route
            path="/ButtonExamples"
            children={
              <div className="ButtonExamplesContainer">
                <ButtonExamples></ButtonExamples>
              </div>
            }
          />
          <Route
            path="/CheckBoxExamples"
            children={
              <div className="CheckBoxExamplesContainer">
                <CheckBoxExamples></CheckBoxExamples>
              </div>
            }
          />
          <Route
            path="/CheckBoxLookupExamples"
            children={
              <div className="CheckBoxLookupExamplesContainer">
                <CheckBoxLookupExamples></CheckBoxLookupExamples>
              </div>
            }
          />
          <Route
            path="/DateInputExamples"
            children={
              <div className="DateInputExamplesContainer">
                <DateInputExamples></DateInputExamples>
              </div>
            }
          />
          <Route
            path="/DropDownExamples"
            children={
              <div className="DropDownExamplesContainer">
                <DropDownExamples></DropDownExamples>
              </div>
            }
          />
          <Route
            path="/DropdownLookupExamples"
            children={
              <div className="DropdownLookupExamplesContainer">
                <DropdownLookupExamples></DropdownLookupExamples>
              </div>
            }
          />
          <Route
            path="/IconExamples"
            children={
              <div className="IconExamplesContainer">
                <IconExamples></IconExamples>
              </div>
            }
          />
          <Route
            path="/IconButtonExamples"
            children={
              <div className="IconButtonExamplesContainer">
                <IconButtonExamples></IconButtonExamples>
              </div>
            }
          />
          <Route
            path="/NumberInputExamples"
            children={
              <div className="NumberInputExamplesContainer">
                <NumberInputExamples></NumberInputExamples>
              </div>
            }
          />
          <Route
            path="/PasswordInputExamples"
            children={
              <div className="PasswordInputExamplesContainer">
                <PasswordInputExamples></PasswordInputExamples>
              </div>
            }
          />
          <Route
            path="/TextAreaExamples"
            children={
              <div className="TextAreaExamplesContainer">
                <TextAreaExamples></TextAreaExamples>
              </div>
            }
          />
          <Route
            path="/TextInputExamples"
            children={
              <div className="TextInputExamplesContainer">
                <TextInputExamples></TextInputExamples>
              </div>
            }
          />
          <Route
            path="/ToggleSwitchExamples"
            children={
              <div className="ToggleSwitchExamplesContainer">
                <ToggleSwitchExamples></ToggleSwitchExamples>
              </div>
            }
          />
          <Route
            path="/TransparentTextInputExamples"
            children={
              <div className="TransparentTextInputExamplesContainer">
                <TransparentTextInputExamples></TransparentTextInputExamples>
              </div>
            }
          />
          <Route
            path="/DataViewExamples"
            children={
              <div className="DataViewExamplesContainer">
                <DataViewExamples></DataViewExamples>
              </div>
            }
          />
          <Route
            path="/ComponentBoxExamples"
            children={
              <div className="ComponentBoxExamplesContainer">
                <ComponentBoxExamples></ComponentBoxExamples>
              </div>
            }
          />
          <Route
            path="/ConfirmationFormExamples"
            children={
              <div className="ConfirmationFormExamplesContainer">
                <ConfirmationFormExamples></ConfirmationFormExamples>
              </div>
            }
          />
          <Route
            path="/DropdownMenuExamples"
            children={
              <div className="DropdownMenuExamplesContainer">
                <DropdownMenuExamples></DropdownMenuExamples>
              </div>
            }
          />
          <Route
            path="/GridExamples"
            children={
              <div className="GridExamplesContainer">
                <GridExamples></GridExamples>
              </div>
            }
          />
        </Switch>
      </div>
    </Router>
    // <div>
    //   <div className="ButtonExamplesContainer">
    //     <ButtonExamples></ButtonExamples>
    //   </div>
    //   <div className="CheckBoxExamplesContainer"></div>
    //   <div className="CheckBoxLookupExamplesContainer"></div>
    //   <div className="DateInputExamplesContainer"></div>
    //   <div className="DropDownExamplesContainer"></div>
    //   <div className="DropdownLookupExamplesContainer"></div>
    //   <div className="IconExamplesContainer"></div>
    //   <div className="IconButtonExamplesContainer"></div>
    //   <div className="NumberInputExamplesContainer"></div>
    //   <div className="PasswordInputExamplesContainer"></div>
    //   <div className="TextAreaExamplesContainer"></div>
    //   <div className="TextInputExamplesContainer"></div>
    //   <div className="ToggleSwitchExamplesContainer"></div>
    //   <div className="TransparentTextInputExamplesContainer"></div>
    //   <div className="DataViewExamplesContainer"></div>
    //   <div className="ComponentBoxExamplesContainer"></div>
    //   <div className="ConfirmationFormExamplesContainer"></div>
    //   <div className="DropdownMenuExamplesContainer"></div>
    //   <div className="GridExamplesContainer"></div>
    // </div>
  );
}

export default App;
