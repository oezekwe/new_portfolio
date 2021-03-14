import React from 'react';

function Resume(){
    return(
        <div>
            <h1>Resume</h1>
            <h3>Proficiencies: </h3>
            <ul>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>SQL</li>
                <li>BootStrap</li>
                <li>jQuery</li>
            </ul>
            Download my resume <a href={`${process.env.PUBLIC_URL}/softwareR.docx`} download>here</a>
        </div>
    );

}

export default Resume;