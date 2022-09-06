import logo from './logo.svg';
import './App.css';
import { Link, Navigate, Route, Routes } from 'react-router-dom';

import { Launches } from './views/Launches'
import { NotFound } from './views/NotFound'
import { OneLaunch } from './views/OneLaunch'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className='text-center'>
          <Link to='/launches'>Launches</Link>
        </nav>
      </header>

      {/* The component rendered from the url path will be below the header */}

      <Routes>
        {/* to be able to use the index prop, you can't define the path */}
        <Route index element={<Launches />} />

        <Route path="/launches/:id" element={<OneLaunch />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
