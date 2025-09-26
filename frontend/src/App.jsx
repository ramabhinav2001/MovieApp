
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Favorites from './pages/Favorites.jsx';
import '../src/css/App.css';

function App() {
  return (
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </main>
  );
}

export default App;