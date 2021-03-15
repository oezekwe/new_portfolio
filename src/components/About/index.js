import React from 'react';
import './style.css';

function About(){
    return (
        <div>
            <h2>About me</h2>
            <img src={`${process.env.PUBLIC_URL}/assets/images/prof.jpg`} width="150px" height="100px" alt="My_photo"/>
            <div id= "intro">
                <p>My name is Obinna Ezekwe I recently graduated from University Texas Austin: Coding Bootcamp and currently seeking employment as a web developer. I can use HTML/CSS, JavaScript, and SQL when creating web pages.</p>
                <p><br />I pay great attention to details when managing web pages and performing other tasks of my job. I am a hardworking and diligent team player that is eager to join a company to assist in making it more efficient and profitable.</p>
            </div>
        </div>
    );
}

export default About;