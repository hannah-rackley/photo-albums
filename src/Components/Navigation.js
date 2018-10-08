import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => <div>
    <NavLink className='navigation' activeStyle={{fontWeight: 'bold'}} exact to="/">HOME</NavLink>
</div>

export default Navigation;