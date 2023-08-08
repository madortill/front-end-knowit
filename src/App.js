import { Routes, Route } from "react-router-dom";
import MainPage from './components/MainPage/MainPage.component';
import NavBar from "./components/NavBar/NavBar.component";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="home" element={<MainPage />}></Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
