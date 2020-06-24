import React, { Component } from "react";

class ErrorBountry extends Component {
  state = {
    hasError: false,
    errorMessage: "",
  };

  componentDidCatch(err) {
    this.setState({
      hasError: true,
      errorMessage: err,
    });
  }
  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorMessage}</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBountry;
