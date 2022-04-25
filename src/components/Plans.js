import React from 'react';
import './css/plans.scss';

function Plans() {
    return (
        <div className="plans">
            <main className="plans-container">
                <div className="plans-path">
                    <li className="beginning">
                        <h4>Beginning - April, 2021</h4>
                        <span>
                            My journey started in April 2021. With little knowledge of HTML and CSS I did start my journey that continues till now.
                            Engaged with the holy trio of HTML, CSS and JavaScript I started to learn the basics.
                            In april I was able to:
                            <br/>
                            - create simple web layouts, with little functionality of JS.
                        </span>
                    </li>
                    <li className="evolved">
                        <h4>Evolving - May, 2021</h4>
                        <span>
                            In May I began to learn React. I started then to create simple applications. Then I started to write my first React project which was
                            a Todo Application that is available on my portfolio in the "Projects" section.
                        </span>
                    </li>
                    <li className="evolving">
                        <h4>Evolving - June, 2021</h4>
                        <span>
                            In June I began to finish the Todo App. After that I started to work on my portfolio website with HTML, CSS, JS6+ and React.
                        </span>
                    </li>
                    <li className="evolving">
                        <h4>Evolving - July, 2021</h4>
                        <span>
                            In July I focused on creating my Portfolio Page. Created it quite fast, but due to creating and maintaining further projects, it is still changing.
                        </span>
                    </li>
                    <li className="evolving">
                        <h4>Evolving - August, 2021 - current</h4>
                        <span>
                            In August I began to create a weather app called iLunie. Till this day it still maintained.
                        </span>
                    </li>
                    <li className="evolving">
                        <h4>Evolving - January, 2021 - current</h4>
                        <span>
                            After a needed break around winter of 2021, becuase of carrer posiiton change I got back into learning. Currentley focusing on JS and React.
                            Aquiried also a mentoring from Stefan Mischook to get a better understanding of JS and having an access for future development with Python.
                        </span>
                    </li>
                </div>
            </main>
        </div>
    )
}

export default Plans;
