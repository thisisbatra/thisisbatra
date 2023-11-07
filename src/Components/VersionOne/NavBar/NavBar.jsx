import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
    let navigate=useNavigate();
    let changeRouteViaOption=(e)=>{
        let value=e.target.value;
        value==="v1"?navigate('/'):navigate('/comingSoon');
    }
    return (
        <div>
            <Link to='/home'><i className="bi bi-house-door"></i></Link>
            <Link to='/about'><i className="bi bi-info-circle"></i></Link>
            <Link to='/education'><i className="bi bi-mortarboard"></i></Link>
            <Link to='/skills'><i className="bi bi-pencil-square"></i></Link>
            <Link to='/contact'><i className="bi bi-person-lines-fill"></i></Link>
            <select name="" id="" onChange={changeRouteViaOption}>
                <option value="0">v1</option>
                <option>v2</option>
            </select>
        </div>
    );
}

export default NavBar;
