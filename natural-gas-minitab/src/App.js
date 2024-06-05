import './App.css';
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import DataEntryForm from './components/DataEntryForm';
import Header from './components/Header';
import Defaultpath from './components/defaultpath/Defaultpath';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
     <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/dataentryform' element={<DataEntryForm></DataEntryForm>}></Route>
      <Route path='*' element={<Defaultpath></Defaultpath>}>  </Route>
    </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
