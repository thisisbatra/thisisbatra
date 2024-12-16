import React from 'react';
import style from './Footer.module.css';
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
    const openNewWindow=(e)=>{
        console.log(e);
        let id=e.currentTarget.id;
        let url='';
        switch(id){
            case 'documentation':
                url='https://github.com/thisisbatra/batraWebWiz';
                break;    
            case 'linkedIn':    
                url='https://www.linkedin.com/in/thisisbatra';
                break;    
            case 'github':
                url='https://github.com/thisisbatra';
                break;      
            case 'leetcode':
                url='https://leetcode.com/u/thisisbatra';
                break;    
            default:
                url='';    
        }
        // console.log(url);
        window.open(url,'_blank');
    }
    return (
        <footer className={style.footer}>
            <div className={style.content}>   
                <h1>bringing ideas to life - nitin batra &copy; 2024 | 
                    <span id='documentation' onClick={(e)=>openNewWindow(e)} className={style.documentation}>
                        detailed documentation
                    </span>
                </h1>
            </div>
            <div className={style.groupLogo}>
                <span className={style.circleLogo} id='linkedIn' onClick={(e)=>openNewWindow(e)}><FaLinkedinIn /></span>
                <span className={style.circleLogo} id='github' onClick={(e)=>openNewWindow(e)}><FiGithub /></span>
                <span className={style.circleLogo} id='leetcode' onClick={(e)=>openNewWindow(e)}><SiLeetcode /></span>
            </div>
        </footer>
    );
}

export default Footer;
