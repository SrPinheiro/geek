import './App.css';
import { BrowserRouter} from 'react-router-dom';
import Router from './Routes/Router';
import { UserProvider } from './Context/UserContext';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
