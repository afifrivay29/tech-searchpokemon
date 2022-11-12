import React, { Component } from "react";
import TableComponent from "../components/TableComponent";
import { connect } from "react-redux";
import { getUsersList } from "../actions/userAction";

class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersList());
  }
  render() {
    return (
      <div>
        <h1 className="text-center mb-4">List Pokemon</h1>
        <TableComponent />
      </div>
    );
  }
}

export default connect()(HomePage);
