import './components/css/app.scss';
import Start from './components/Start';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Plans from './components/Plans';
import Contact from './components/Contact';
import KnowledgeBase from './components/KnowledgeBase';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Start />
        <Switch>
          {/* <Route path='/' exact component={Start} /> */}
          <Route path='/project' component={Projects} />
          <Route path='/aboutme' component={AboutMe} />
          <Route path='/plans' component={Plans} />
          <Route path='/contact' component={Contact} />
          <Route path='/knowledgebase' component={KnowledgeBase} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;