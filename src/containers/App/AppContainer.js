import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Nav } from 'components';
import { HomeContainer, TemplateContainer, PageContainer } from 'containers';
import * as thingActionCreators from 'redux/modules/thing';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route exact={true} path='/' component={HomeContainer} />
            <Route exact path='/template' component={TemplateContainer} />
            <Route path='/template/:something' component={PageContainer} />
            <Route render={() => <h1>{'404'}</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {};

export default connect((state) => ({
  state: state
}), (dispatch) => (
  bindActionCreators(thingActionCreators, dispatch)
))(App);
