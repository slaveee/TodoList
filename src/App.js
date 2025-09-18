import { Route, Routes } from 'react-router-dom';
import './App.css';
import Todo from "./components/Todo";
import PrivateRoutes from './components/PrivateRoutes';
import AuthPage from './components/AuthPage';

function App() {




  return (
    <div className='app'>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path='/' element={<Todo />} />
        </Route>
        <Route path='/auth' element={<AuthPage />} />
      </Routes>
    </div>
  );
}

export default App;
