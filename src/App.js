import { Routes, Route } from "react-router-dom";
import MainPage from './components/MainPage/MainPage.component';
import NavBar from "./components/NavBar/NavBar.component";
import './App.css';

function App() {
  const event_date = new Date('2023-11-08T08:00:00');
  const dateTimeAfterNumDays = event_date; 
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="home" element={<MainPage targetDate={dateTimeAfterNumDays}/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
