import "./App.css";
import { MainScreen } from "./components/mainScreen/";
import { Sidebar } from "./components/sidebar";

function App() {
  return (
    <div className='mainContainer'>
      <Sidebar />
      <MainScreen />
    </div>
  );
}

export default App;
