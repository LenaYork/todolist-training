import { Header } from './components/Header';

import './App.css';
import {Main} from './components/Main';

function App() {

  const currentTime = new Date().getHours();
  // console.log(currentTime);
  // currentTime = 5;
  
  const isLightBG = currentTime < 12 ? "light" : "dark";
    return (
      // <div className="App light">
      // <div className={`App ` currentTime < 12 ? `light` :  `dark`}>
      <div className={`App ${isLightBG}`}>
        <Header />
        <Main /> 
      </div>
    );
}

export default App;
