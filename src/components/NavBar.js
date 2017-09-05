import React, {Component} from 'react';
import './stylesheet/NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className="container">
          <ul className="menu">
            {this.props.menuItems.map( (item, i) => <li key={i} className="menu-item">
              <a href={`#${item}`}>{item}</a>
            </li> )}
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
