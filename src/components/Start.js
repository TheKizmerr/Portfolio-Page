import './css/start.scss';
import { Link } from 'react-router-dom';

function Start() {
  return (
    <div className="container">
      <main className="start">
          <div className="intro-container">
            <div className="projects">
              <Link to='/project'>
                <div className="projects-container">
                  <p className="category-text">Projects</p>
                </div>
              </Link>
            </div>
            <div className="about-me">
              <Link to="/aboutme">
                <div className="about-me-container">
                  <p className="category-text">About me</p>
                </div>
              </Link>
            </div>
            <div className="knowledge-base">
              <Link to="/knowledgebase">
                <div className="knowledge-base-container">
                  <p className="category-text">Knowledge base</p>
                </div>
              </Link>
            </div>
            <div className="plans">
              <Link to="/plans">
                <div className="plans-container">
                  <p className="category-text">Plans</p>
                </div>
              </Link>
            </div>
            <div className="contact">
              <Link to="/contact">
                <div className="contact-container">
                  <p className="category-text">Contact</p>
                </div>
              </Link>
            </div>
          </div>
      </main>
    </div>
  );
}

export default Start;