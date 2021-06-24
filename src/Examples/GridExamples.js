import { Grid as GridLanaco } from "@lanaco/lnc-react-ui";

const GridExample = (props) => {
  const Columns = [
    {
      accessor: "id",
      name: "ID",
      sort: true,
    },
    {
      accessor: "Guid",
      name: "Guid",
      sort: false,
    },
    {
      accessor: "name",
      name: "Name",
      sort: true,
    },
    {
      accessor: "age",
      name: "Age",
      sort: true,
    },
  ];

  return (
    <div>
      <h1 style={{ paddingLeft: "20px" }}>Grid examples</h1>
      <GridLanaco
        Columns={Columns}
        Data={[
          { id: 1, Guid: 1, name: "Name 1", age: 11 },
          { id: 2, Guid: 2, name: "Name 2", age: 22 },
          { id: 3, Guid: 3, name: "Name 3", age: 33 },
        ]}
        // Config={props.Config}
        // Form={props.Form}
        // Pagination={props.Pagination}
        // Load={props.Load}
        // Localization={props.Localization}
        // SelectedData={props.SelectedData}
        // OnChange={props.OnChange}
        // Developer={props.Developer}
        // Crud={props.Crud}
        // Hooks={props.Hooks}
        // disabled={props.disabled}
      ></GridLanaco>
    </div>
  );
};

export default GridExample;
