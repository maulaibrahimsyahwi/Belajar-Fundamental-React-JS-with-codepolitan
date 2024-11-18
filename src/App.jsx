import './App.css';
import Home from "./pages/index";
import { GlobalContext } from './context';
function App() {
  const user = {
    username: 'nama'
  }
  
  return (
    <div className='App'>
      <GlobalContext.Provider value={user}>
        <Home />
      </GlobalContext.Provider>
      <Home />
    </div>
  );
}

export default App
