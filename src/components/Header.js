import React from 'react';
import styles from './Header.css'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const divStyle = {
  'background-color' :'#333'
};

const hoverStyle = {
  '&:hover': { 
    'color' : '#666'
  } 
}

const TodayLink = styled(Link)`
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

const LoggedInView = props => {
    return null;
};

class Header extends React.Component {
  render() {
    // console.log(styles);
    return (
      <nav className="navbar navbar-light">
        <div className="container">
            {/* {this.props.appName.toLowerCase()} */}
            <ul>
            <li>
           
            <TodayLink>Today</TodayLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
