import "./App.css";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import {Routes, Route} from 'react-router-dom'



export const serverUrl = 'http://localhost:4000'


function App() {
  return (
   <div>
    <Routes>
      <Route path="/" element={<Page1 />}/>
      <Route path="/page2" element={<Page2 />}/>
      <Route path="/page3" element={<Page3 />}/>
    </Routes>

   </div>
  );
}

export default App;
