import React, {Component} from 'react';
import Icon from 'react-icons-kit';
import './stylesheet/Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <a href={this.props.contactLink} target="_blank">
          <span><Icon icon={this.props.contactIcon} /></span>
        </a>
      </div>
    )
  }
}

export default Contact;
