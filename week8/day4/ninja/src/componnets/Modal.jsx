import React, { Component } from 'react'
class Modal extends React.Component {
    render() {
      return (
        (
          <div className="modal-background">
            <div className="modal-body">
              {this.props.children}
            </div>
          </div>
        ),
        document.getElementById("modal-root")
      )
    }
  }
  export default Modal;
  