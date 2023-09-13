import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Login from "../src/Login"
import Sign from "../src/Sign"
import Main from "../src/MainPage"

function App() {
  return (
    <div className="App">
       <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/main" element={<Main />} />

      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
//agar user nahi hai toh login screen per jao warna main per