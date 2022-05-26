
import './App.css';
import Contacts from './components/contacts/Contacts';
import Navbar from './components/elements/Navbar';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import Login from './components/login/Login';

function App() {
  return (
    <Router>
    {/* <AddContact/> */}
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Contacts}/>
        <Route exact path="/contacts/add" component={AddContact}/>
        <Route exact path="/contacts/edit/:id" component={EditContact}/>
        <Route exact path="/login" component={Login}/> 
      </Switch>
    </div>
    </Router>
  );
}

export default App;
