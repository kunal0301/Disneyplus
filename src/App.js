import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path='/' element={<Login></Login>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/detail/:id' element={<Detail></Detail>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
