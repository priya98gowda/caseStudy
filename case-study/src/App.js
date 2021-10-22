import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom'


import UploadQuestion from './components/uploadQuestions/UploadQuestion';
import SearchView from './components/searchView/SearchView';
import Navigation from './components/navbar/Navbar';
//import routing from './routing';

function App() {
  return (
    <Router>
        

    <div className="App">
    <Navigation/>
    <Switch>
      <Route exact path="/" component={UploadQuestion} />
      
      <Route path="/search" component={SearchView} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
