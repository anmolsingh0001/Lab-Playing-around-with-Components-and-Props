import './App.css';

import GallaryFooter from './components/GallaryFooter';
import GallaryHeader from './components/GallaryHeader';
import imageData from './components/GallaryImage';
// import body from './components/body';
import Body from './components/body';


function App() {
  return (
    <div>
      <GallaryHeader/>
      <Body anmol={imageData}/>
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
