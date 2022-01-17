import logo from './logo.svg';
import './App.css';
import Edit from './Components/Edit';
import Preview from './Components/Preview';


function App() {
  return (
    <div>
      <div id='header'>
        <p>CV Builder</p>
        </div>
      <div id='content'>
        <div id='edit'>
          <Edit/>
        </div>
        <div id='preview'>
          <Preview/>
        </div>
      </div>
      <div id='footer'>
        <p>
          <a href='https://github.com/kennethmxpgit/cv-builder'>&copy; Copyright 2021 kennethmxp</a>
        </p>
        </div>
    </div>
    
  );
}

export default App;
