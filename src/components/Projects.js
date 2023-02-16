import React from 'react';

export default function Projects(props) {
    return(
            <div className="project-item">
                <img src={props.bgImage} className="projectBgImage" />
                <div className="project-title">
                    <h3>{props.title}</h3>
                </div>
            </div>
    )
}


/*
            <h1 className="projects-header">PROJECTS</h1>
            <div className='projects-list-container'>
            <ul className='projects-list'>
                <li className="projects-lists-item">
                    <div className="projects-lists-bg-1"></div>
                    <p>MythosSMP</p>
                </li>
                <li className="projects-lists-item">
                    <div className="projects-lists-bg-2"></div>
                    <p>Hellsbane</p>
                </li>
                <li className="projects-lists-item">
                    <div className="projects-lists-bg-3"></div>
                    <p>Skyline Rem</p>
                </li>
                <li className="projects-lists-item">
                    <div className="projects-lists-bg-4"></div>
                    <p>Coming Soon</p>
                </li>
            </ul>
            </div>
*/