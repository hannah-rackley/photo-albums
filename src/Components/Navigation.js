import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => <div>
    <NavLink activeStyle={{fontWeight: 'bold'}} to="/home">Home</NavLink>
</div>

export default Navigation;