
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SearchFilter from './Components/01-Search Filter/SearchFilter';
function App() {
  return (
    <>
    <Routes>
      <Route path = "/searchfilter" element = {<SearchFilter/>}/>
    </Routes>

    </>
  );
}

export default App;
