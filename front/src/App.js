import './App.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import Student from './pages/NewStudent';
import NewCourse from './pages/NewCourse';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar title="GR Tech" link1="All Cars" link2="Edit Car" link3="Form" />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/newStudent" element={<Student />} />
          <Route exact path="/newCourse" element={<NewCourse />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
