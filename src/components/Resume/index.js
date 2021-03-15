import React from 'react';
import './style.css';

function Resume(){
    return(
        <div>
            <h2>Resume</h2>
            <h3>Proficiencies: </h3>
            <ul>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>SQL</li>
                <li>BootStrap</li>
                <li>jQuery</li>
            </ul>
            Download my resume <a id="linkTo" href={`${process.env.PUBLIC_URL}/resume.docx`} download>here</a>.
        </div>
    );

}

export default Resume;