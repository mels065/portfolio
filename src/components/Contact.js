import React, {Component} from 'react';
import './stylesheet/Contact.css';
import {getValidIcon} from './utils/get-icon';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <a href={this.props.contactLink} target="_blank">
          <span>{getValidIcon(this.props.contactIcon)}</span>
        </a>
      </div>
    )
  }
}

export default Contact;
