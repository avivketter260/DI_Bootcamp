import React, { Component } from 'react'
class ErrorBoundaryApp extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = { hasError: false };
      this.occurError = this.occurError.bind(this);
    }
    
    occurError() {
      this.setState({ hasError: true });
    }
    
    render() {
      if (this.state.hasError) {
         throw new Error('Something went wrong!');
      }
  
      return (
        <button onClick={this.occurError}>
          Occur an error
        </button>
      );
    }
  }
export default ErrorBoundaryApp