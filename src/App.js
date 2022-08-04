import './App.css';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
 
function App() {
  return (
    <div className="App">
      {/* /add /edit/:id */}
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add" element={<AddContact/>} />
        <Route path="/edit/:id" element={<EditContact/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
