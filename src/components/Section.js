import React, {Component} from 'react';
import './stylesheet/Section.css';

class Section extends Component {
  render() {
    return (
      <section className={this.props.sectionClass}>
        <h2>{this.props.sectionHeading}</h2>
        {this.props.sectionContents}
      </section>
    )
  }
}

export default Section;
