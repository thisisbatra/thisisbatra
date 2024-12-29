import React from 'react';
import style from './Project.module.css';
import { FaEye,FaCode } from "react-icons/fa";
import { SiReadme } from "react-icons/si";

const Project = () => {
    let projectData=[{
        id: 1,
        title:"chorus",
        preview:true,
        techUsed:["react","springboot","postgres"],
        source:true,
        blog:true
    },{
        id: 2,
    },{
        id: 3,
    },{
        id: 4,
    }]
    return (
        <section className={style.section}>
            <div className={style.cartHolder}>
                {
                projectData.map((i)=><ProjectCart key={i.id}/>)
                }
            </div>
        </section>
    );
}
const ProjectCart=()=>{
    return(
        <div className={style.ProjectCart}>
            <div className={style.ProjectPrev}>
                <span>
                    <FaEye/>
                    view live preview
                </span>
            </div>
            <div className={style.ProjectDesc}>
                <h1>title</h1>
                <span>
                    tech used
                    <ul>
                        <li>name1</li>
                        <li>name2</li>
                        <li>name3</li>
                    </ul>
                </span>
                <span>
                    <a href="#"><FaCode/>source</a>
                    <a href="#"><SiReadme/>blog</a>
                </span>
            </div>
        </div>
    )
}
export default Project;