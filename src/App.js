import './assets/css/styles.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/ContactUs';

import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/home" component={Home} />
      <Route exact path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
