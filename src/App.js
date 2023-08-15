import { Routes, Route } from "react-router-dom";
import MainPage from './components/MainPage/MainPage.component';
import NavBar from "./components/NavBar/NavBar.component";
import { useState } from "react";
import Menu from "./components/Menu/Menu.component";
import './App.css';

function App() {
  const event_date = new Date('2023-11-08T08:00:00');
  const dateTimeAfterNumDays = event_date;
  const [isMenu, setIsMenu] = useState();

  const handleMenu = () => {
    if (isMenu) {
      setIsMenu(false);
    } else {
      setIsMenu(true);
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<><NavBar handleMenu={handleMenu}/><Menu isOpen={isMenu}/></>}>
          <Route path="home" element={<MainPage targetDate={dateTimeAfterNumDays}/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
