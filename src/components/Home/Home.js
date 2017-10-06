import React, { Component } from 'react';
import { container, title, slogan } from './styles.css';

export default class Home extends Component {
  render () {
    return (
      <div className={container}>
        <p className={title}>{'Title'}</p>
        <p className={slogan}>{'slogan'}</p>
      </div>
    );
  }
}
