import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { changeValue } from "./fieldActions";

class Field extends Component {

  render() {
    return (
      <div>
        <label>{this.props.value}</label>
        <br />
        <input onChange={this.props.changeValue} value={this.props.value} />
      </div>
    );
  }

}

// Mapeando estado para propriedade
function mapStateToProps(state) {
  return {
    value: state.field.value
  }
}
// Mapeando ações
function mapDispatchProps(dispatch) {
  return bindActionCreators({ changeValue }, dispatch);
}

/**
 * Conectando as propriedades e as ações ao props do component
 */
export default connect(mapStateToProps, mapDispatchProps)(Field);
