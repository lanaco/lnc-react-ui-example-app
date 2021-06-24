import { Icon as IconLanaco } from "@lanaco/lnc-react-ui";

const IconExample = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex" }}>
        <IconLanaco
          tooltipText={"normal"}
          disabled={false}
          iconClassName={"lnc-bell"}
        ></IconLanaco>
        <IconLanaco
          tooltipText={"disabled"}
          disabled={true}
          iconClassName={"lnc-table"}
        ></IconLanaco>
      </div>
      <div>
        <IconLanaco
          tooltipText={"normal"}
          disabled={false}
          iconClassName={"lnc-up"}
        ></IconLanaco>
        <IconLanaco
          tooltipText={"disabled"}
          disabled={true}
          iconClassName={"lnc-down"}
        ></IconLanaco>
      </div>
    </div>
  );
};

export default IconExample;
