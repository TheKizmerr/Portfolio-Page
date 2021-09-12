import React from 'react';
import './css/aboutme.scss';

function AboutMe() {
    return (
        <div className="about-me">
            <article className="about-me-container">
                <div className="profile-pic-container">
                    <div className="profile-pic"></div>
                    <article className="about-me-description">
                        <h3>Hi. My name is Amadeusz.</h3>
                        <br></br>
                            <section className="about-me-text">
                                I am a new learner in the vast world of Front End technology. As a new person entering the world of Front End, I follow the path of 
                                learning with passion, interest, motivation and enjoying every second of developing my skills, knowledge but most importantly - having a good time while coding.
                                Why Front End? Because of the vast possibilities it offers connected with visual design and programming at the same time.
                            </section>
                    </article>
                </div>
            </article>
        </div>
    )
}

export default AboutMe;