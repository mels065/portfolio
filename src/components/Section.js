import React, {Component} from 'react';
import './stylesheet/Section.css';

class Section extends Component {
  render() {
    return (
      <section id={this.props.sectionId}>
        <h2>{this.props.sectionHeading}</h2>
        {this.props.sectionContents}
      </section>
    )
  }
}

export default Section;
