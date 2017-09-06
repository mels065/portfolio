import React, {Component} from 'react';
import './stylesheet/Contact.css';
import Icon from 'react-icons-kit';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <a href={this.props.contactLink} target="_blank">
          <span><Icon size={32} icon={this.props.contactIcon} /></span>
        </a>
      </div>
    );
  }
}

export default Contact;
