import React, { useRef,useState } from 'react';
import style from './Project.module.css';
import { FaEye, FaCode } from "react-icons/fa";
import { SiReadme } from "react-icons/si";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle  } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const Project = () => {
    const forScrollRef=useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const handleScroll=()=>{
        // console.log(forScrollRef);
        let scroller=forScrollRef.current;
        if(!scroller) return;

        const { scrollLeft, scrollWidth, clientWidth } = scroller;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }

    const scrollLeft = () => {
        forScrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
      };
    
      const scrollRight = () => {
        forScrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
      };

    const projectData=[{
        id: 1,
        title:"title",
        preview:true,
        techUsed:["name1","name2","name3"],
        source:true,
        blog:true
    },{
        id: 2,
        title:"title",
        preview:true,
        techUsed:["name1","name2"],
        source:true,
        blog:true
    },{
        id: 3,
        title:"title",
        preview:true,
        techUsed:["name1"],
        source:true,
        blog:true
    },{
        id: 4,
        title:"title",
        preview:true,
        techUsed:["name1","name2","name3"],
        source:true,
        blog:true
    }]
    return (
        <section className={style.section}>
            <div className={style.scrollBar}>
                <IoIosArrowDropleftCircle className={canScrollLeft===true?style.arrow:style.arrowDisabled} onClick={scrollLeft}/>
                <IoIosArrowDroprightCircle className={canScrollRight===true?style.arrow:style.arrowDisabled} onClick={scrollRight}/>
            </div>
            <div className={style.cartHolder} ref={forScrollRef} onScroll={handleScroll}>
                {
                projectData.map((i)=><ProjectCart key={i.id} data={i}/>)
                }
            </div>
        </section>
    );
}
const ProjectCart=(props)=>{
    return(
        <div className={style.ProjectCart}>
            <div className={style.ProjectPrev}>
                <span>
                    <FaEye/>
                    view live preview
                </span>
            </div>
            <div className={style.ProjectDesc}>
                <h1>{props.data.title}</h1>
                <span className={style.forList}>
                    <h4>tech used</h4>
                    <ul>
                        {props.data.techUsed.map((i,index)=>
                            <li key={index}>{i}</li>
                            )}
                    </ul>
                </span>
                <span className={style.forBtn}>
                    <NavLink to="#"><FaCode/>source</NavLink>
                    <NavLink to="#"><SiReadme/>blog</NavLink>
                </span>
            </div>
        </div>
    )
}
export default Project;