
import React from 'react';

import NavBar from "../navbar/navbar.component"
import logo from '../../assets/images/logo.png';

import './header.style.scss';

const CustomHeader = ({title}) => {
    return (
        <React.Fragment>
<NavBar/>

<header>
	<div className="custom-header">
		<img src={logo} alt="amazing grace logo" />
    <h4>{title}</h4>
	</div>
    </header>

        </React.Fragment>
    );
};
export default CustomHeader;
