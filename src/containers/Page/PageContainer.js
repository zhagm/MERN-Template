import React, { Component } from 'react';
import { connect } from 'react-redux';

class PageContainer extends Component {
  constructor () {
    super();
  }
  render () {
    return (
      <h1>Page</h1>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer);
