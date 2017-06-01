import React from 'react';

const Contact = React.createClass({

  getInitialState() {
    return {

    };
  },

  render(){
    return(
      <li className="contact">
        <img className="contact-image" src={this.props.image} width="60px" height="60px" />
        <div className="contact-info">
          <div className="contact-name"> {this.props.name} </div>
          <div className="contact-number"> {this.props.phone} </div>
        </div>
      </li>
    )
  }
});

export default Contact

