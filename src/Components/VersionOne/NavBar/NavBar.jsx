import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './navBeauty.module.css';
const NavBar = () => {
    let navigate=useNavigate();
    let changeRouteViaOption=(e)=>{
        let value=e.target.value;
        value==="v1"?navigate('/'):navigate('/comingSoon');
    }
    return (
        <nav className={styles.nav}>
            <span>
                <i className="bi bi-brightness-high"></i>
            </span>
            <ul className={styles.list}>
                <li><Link to='/home'><i className="bi bi-house-door"></i></Link></li>
                <li><Link to='/about'><i className="bi bi-info-circle"></i></Link></li>
                <li><Link to='/education'><i className="bi bi-mortarboard"></i></Link></li>
                <li><Link to='/skills'><i className="bi bi-pencil-square"></i></Link></li>
                <li><Link to='/contact'><i className="bi bi-person-lines-fill"></i></Link></li>
                <li>
                    <select name="" id="" onChange={changeRouteViaOption}>
                        <option value="0">v1</option>
                        <option>v2</option>
                    </select>
                </li>
            </ul>
            <span className={styles.thumbNail}>
                <img src="../assets/meThumb.png" alt="thumbnail"/>
                <h1>thisisbatra</h1>
            </span>
        </nav>
    );
}

export default NavBar;
