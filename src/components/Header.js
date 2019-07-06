import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavigationLink = styled(Link)`
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    float: left;

    :hover {
        color: #666;
    }
`;

const NavHeader = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color:#333;
`;

class Header extends React.Component {
  render() {
    // console.log(styles);
    return (
      <nav className="navbar navbar-light">
        <div className="container">
            {/* {this.props.appName.toLowerCase()} */}
            <NavHeader>
            <li>
            <NavigationLink to = "/">Today</NavigationLink>
            </li>
            <li>
              <NavigationLink to = "/month">Month</NavigationLink>
            </li>
          </NavHeader>
        </div>
      </nav>
    );
  }
}

export default Header;
