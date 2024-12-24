import React from 'react';
import styles from './Education.module.css';

const Education = () => {
    let educationData=[{
            id:1,
            program:"masters in computer application",
            university:"GGSIPU",
            year:"2022-24",
            grade:"76%",
            desc:"expert in java & dsa"
        },{
            id:2,
            program:"bachelors of vocational studies in software development",
            university:"GGSIPU",
            year:"2018-21",
            grade:"82%",
            desc:"Full stack developer"
        }]
    return (
        <div className={styles.EduCart}>
            {educationData.map(
                (i)=><EduCart key={i.id}
                    program={i.program} university={i.university} year={i.year} grade={i.grade} desc={i.desc}
                    />
             )}
        </div>
    );
}

const EduCart=(props)=>{
    return(
        <div className={styles.container}>
            <h1>{props.program}</h1>
            <h3>{props.university}</h3>
            <span>  
                <h5>{props.year}</h5>
                <h5>{props.grade}</h5>
            </span>
            <p>{props.desc}</p>
        </div>
    )
}

export default Education;
