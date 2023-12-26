
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



import News from './component/News';
import Detail from './component/Detail';
import Home from './component/Home';
import ContactPage from './component/ContactPage';
import About from './component/About';
import Nav from './component/Nav';
function App() {
  return (
    <Router>


      {/* <Route exact path="/" component={Home} /> */}
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/about" component={About} />
        <Route path="/contact" component={ContactPage} />

        <Route path="/news" component={News} />
        <Route path="/detail/:detailId" component={Detail} />
      </Switch>




    </Router>

  );
}

export default App;
