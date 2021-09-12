import './css/projects.scss';

function Projects() {
    return (
        <div className="project">
            <div className="projects-title">
                <h3 className="category-text">These are my projects</h3>
            </div>
            <div className="projects-list-todo">
                <a href="https://github.com/TheKizmerr/Todo-App.git" target="_blank" rel="noreferrer">
                    <div className='todo-app'></div>
                </a>
            </div>
            <div className="projects-list-iLunie">
                <a href="https://github.com/TheKizmerr/iLunie" target="_blank" rel="noreferrer">
                    <div className='iLunie'></div>
                </a>
            </div>
        </div>
    )
}

export default Projects;