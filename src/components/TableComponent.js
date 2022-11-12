import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Button, Container, Row, Col, Spinner } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfo,
  faEdit,
  faTrash,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const { SearchBar } = Search;
const columns = [
  {
    dataField: "name",
    text: "Name",
    sort: true,
    headerStyle: () => {
      return { width: "50%" };
    },
  },
  {
    dataField: "link",
    text: "Action",
    formatter: (rowContect, row) => {
      return (
        <div>
          <Link to={"detail/" + row.name}>
            <Button color="dark" style={{ marginRight: "8px" }}>
              <FontAwesomeIcon icon={faInfo} /> Detail
            </Button>
          </Link>
        </div>
      );
    },
    headerStyle: () => {
      return { width: "10%" };
    },
  },
];

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const mapStateToProps = (state) => {
  return {
    getUsersList: state.users.getUsersList,
    errorUsersList: state.users.errorUsersList,
  };
};

const TableComponent = (props) => {
  return (
    <div>
      <Container>
        {props.getUsersList ? (
          <ToolkitProvider
            bootstrap4
            keyField="id"
            data={props.getUsersList}
            columns={columns}
            defaultSorted={defaultSorted}
            search
          >
            {(props) => (
              <div>
                <div style={{ float: "right", marginBottom: "10px" }}>
                  <SearchBar {...props.searchProps} placeholder="Search..." />
                </div>
                <BootstrapTable
                  {...props.baseProps}
                  pagination={paginationFactory()}
                />
              </div>
            )}
          </ToolkitProvider>
        ) : (
          <div className="text-center">
            {props.errorUsersList ? (
              <h4>{props.errorUsersList}</h4>
            ) : (
              <Spinner color="dark" />
            )}
          </div>
        )}
      </Container>
    </div>
  );
};

export default connect(mapStateToProps, null)(TableComponent);
