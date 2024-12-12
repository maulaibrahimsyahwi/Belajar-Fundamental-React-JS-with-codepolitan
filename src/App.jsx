import './App.css';
import Home from "./pages/index";
import { GlobalContext } from './context';
import { RouterProvider } from "react-router-dom";
import { router } from './routers';

function App() {
  const user = {
    username: 'nama'
  }
  
  return (
    <div className='App'>
      <GlobalContext.Provider value={user}>
        <RouterProvider router={router}/>
      </GlobalContext.Provider>
      <Home />
    </div>
  );
}

export default App
