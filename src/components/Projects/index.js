import React from 'react';
import projects from '../../projects.json';
import './style.css';

function Projects(){
    return(
        <div>
            <h2>Projects</h2>
            <div className= "boxing">
            {projects.map(pic => (
                <a href= {pic.link}>
                <img 
                    src= {`${process.env.PUBLIC_URL}/images/${pic.name}.jpg`}
                    width= {pic.width}
                    height= {pic.height}
                    alt= {pic.name} 
                /></a>
            ))}</div>
        </div>
    );
}

export default Projects;