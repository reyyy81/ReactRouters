
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Orange from './pages/Orange';
import Red from './pages/Red';
import Purple from './pages/Purple';
import Green from './pages/Green';

// Documentation for react router: https://reactrouter.com/en/v6.3.0/getting-started/installation
/**
 * - Create two new components Green and Purple. All you need to have in the component is the name of the component.
 * - Refere Existing color components under src/public.
 * - Once components are created import both Green and Purple components here.
 */



function App() {
  return (
    <div>
      <h1>Welcome to color router app</h1>
      <nav className="navbar navbar-default navbar-static-top">
        <ul class="nav nav-pills nav-fill">
          <li class="nav-item">
            <Link className="nav-link" to="orange">Orange</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="red">Red</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="purple">Purple;</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="green">Green</Link>
          </li>
          { /**
           *  Add Link tags for Red, Green and Purple. 
           *  On click of these buttons should load respective components below 
           */}
        </ul>
      </nav>

      <div className='routes-wrapper'>
          <Routes>
            <Route index element = {<Green/>}></Route>
            <Route path ="orange" element = {<Orange/>}></Route>
            <Route path ="purple" element = {<Purple/>}></Route>
            <Route path ="red" element = {<Red/>}></Route>
            <Route path ="green" element = {<Green/>}></Route>
          </Routes>
        {/** 
           * Add Router
           *        Add invidual Route for Orange, Red, Green and Purple
           * Note: Refer react documentation for examples on how to add Routes
           * This is where your child components will load
         */}
      </div>

    </div>
  );
}

export default App;
