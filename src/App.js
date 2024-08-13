
import './App.css';
import Home from './components/Home';

import Data from './components/context/Data';

function App() {
  return (
    <div>
       <Data>
         <Home/>
       </Data>
    </div>
  );
}

export default App;
