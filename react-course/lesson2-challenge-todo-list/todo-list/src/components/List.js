import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class List extends Component {
  deleteTodo() {
    this.props.deleteTodo();
  }
  render() {
    return(
      <div className="ListComponent">
        <button
          type="button"
          className="btn btn-danger"
        >
      <div>
    )
  }
}

export default connect()(List);
