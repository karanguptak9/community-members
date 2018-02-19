import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PasswordMask from 'react-password-mask';

import '../styles/TeodoraCaneva.css'

import CloseArrow from '../assets/close.png';
import LockIcon from '../assets/lock.png'

export default class TeodoraCanevaPortal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phrase: '',
      redirect: false,
      error: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();

    this.setState({ phrase: event.target.value, error: null })
  }

  handleSubmit(event) {
    const { phrase } = this.state

    if (phrase === 'lion' || phrase === 'LION') {
      this.setState({ redirect: true })
    } else {
      this.setState({ error: 'Access Denied' })
    }

    event.preventDefault();
  }

  errorClass() {
    const { error } = this.state

    return error != null ? 'error' : ''
  }

  render() {
    const { phrase, redirect, error } = this.state

    if (redirect) {
      return <Redirect to='/teodora/dashboard' />
    }

    return (
      <div className="portal-container">
        <Link to="/" className="back-arrow-container">
          <img className="close-icon" src={CloseArrow} alt="Arrow"/>
        </Link>
        <div className="lock-container">
          <img className="lock-icon" src={LockIcon} alt="Lock Icon" />
          <div className="lock-input-container">
            <form onSubmit={this.handleSubmit}>
              <input type="password" //masks user input
                className={`phrase-input ${this.errorClass()}`}
                name="phrase" value={phrase}
                placeholder="Enter secret phrase"
                onChange={this.handleChange.bind(this)} 
              />
            </form>
            {error != null && <div className="lock-error-message">ACCESS DENIED</div>}
          </div>
        </div>
      </div>
    );
  }
}