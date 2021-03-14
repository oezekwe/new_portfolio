import React, {useState} from 'react';
import projects from '../../projects.json';

function Projects(){
    return(
        <div>
            <h1>Projects</h1>
            {projects.map(pic => (
                <img 
                    src= {`${process.env.PUBLIC_URL}/images/${pic.name}.jpg`}
                    width= {pic.width}
                    height= {pic.height}
                    alt= {pic.name} 
                />
            ))}
        </div>
    );
}

export default Projects;