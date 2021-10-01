import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Login from './views/Login';
import logo from './LOGO.png';
import Unterkunft from './views/Unterkunft';
import Reisemittel from './views/Reisemittel';
import Aktivitaeten from './views/Aktivitaeten';
import Pauschalreisen from './views/Pauschalreisen';
// import Footer from './views/Footer';



const logoBtn = React.forwardRef((props, ref) => (
  <a ref={ref} {...props}><img src={logo} className="App-logo" alt="logo" />  {props.children}</a>
))
 

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <header className="App-header">
        <Link to='/' component={logoBtn} />
        <Link to='/unterkunft'>Unterkunft</Link>
        <Link to='/reisemittel'>Reisemittel</Link>
        <Link to='/aktivitaeten'>Aktivitäten</Link>
        <Link to='/pauschalreisen'>Pauschalreisen</Link>
        <Link to='/login' id='login'>Login</Link>
      </header>
      <Route path='/' exact component={Home}/>
      <Route path='/unterkunft' component={Unterkunft} />
      <Route path='/reisemittel' component={Reisemittel} />
      <Route path='/aktivitaeten' component={Aktivitaeten}/>
      <Route path='/pauschalreisen' component={Pauschalreisen}/>
      <Route path='/login' component={Login}/>
    
      </div>
    </BrowserRouter>
  );
}

export default App;
