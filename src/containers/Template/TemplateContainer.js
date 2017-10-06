import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Template } from 'components';

class TemplateContainer extends Component {
  constructor () {
    super();
  }
  render () {
    return (
      <Template />
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(TemplateContainer);
