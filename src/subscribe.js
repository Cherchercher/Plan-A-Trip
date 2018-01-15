import React, { Component } from 'react';

function validate(email) {
  // true means invalid, so our conditions got reversed
  return {
    email: email.length === 0,
  };
}

class SignUpForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',  
      touched: {
        email: false,
      },
    };
  }
  
  handleEmailChange = (evt) => {
    this.setState({ email: evt.target.value });
  }
  
  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  }
  
  handleSubmit = (evt) => {
    if (!this.canBeSubmitted()) {
      evt.preventDefault();
      return;
    }
    const { email} = this.state;
    alert(`Signed up with email: ${email}`);
  }
  
  canBeSubmitted() {
    const errors = validate(this.state.email);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }
  
  render() {
    const errors = validate(this.state.email);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    
    const shouldMarkError = (field) => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];
      
      return hasError ? shouldShow : false;
    };
    
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className={shouldMarkError('email') ? "error" : ""}
          type="text"
          placeholder="Enter email"
          value={this.state.email}
          onChange={this.handleEmailChange}
          onBlur={this.handleBlur('email')}
        />
        <button disabled={isDisabled}>Sign up</button>
      </form>
    )
  }
}

export default SignUpForm;