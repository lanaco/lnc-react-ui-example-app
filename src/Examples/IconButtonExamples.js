import { IconButton as IconButtonLanaco } from "@lanaco/lanaco-react-library";
import * as css from "./stylesExamples.module.css";

const onClick = () => {
  alert("Click performed");
};

const IconButtonExample = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex" }}>
        <IconButtonLanaco
          tooltipText={"normal"}
          disabled={false}
          iconClassName={"lnc-bell"}
          onClick={() => onClick()}
          inputCssClass={css.redButton}
        ></IconButtonLanaco>
        <IconButtonLanaco
          tooltipText={"disabled"}
          disabled={true}
          iconClassName={"lnc-table"}
          onClick={() => onClick()}
          inputCssClass={css.redButton}
        ></IconButtonLanaco>
      </div>
      <div>
        <IconButtonLanaco
          tooltipText={"normal"}
          disabled={false}
          iconClassName={"lnc-up"}
          onClick={() => onClick()}
        ></IconButtonLanaco>
        <IconButtonLanaco
          tooltipText={"disabled"}
          disabled={true}
          iconClassName={"lnc-down"}
          onClick={() => onClick()}
        ></IconButtonLanaco>
      </div>
    </div>
  );
};

export default IconButtonExample;
