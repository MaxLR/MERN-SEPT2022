import './App.css';
// instead of importing all of react:
// import { only, what, we, need } from 'react'
import { Flashcards } from './components';

const App = () => {
  return (
    <div className='container'>
      <Flashcards />
    </div>
  );
}

export default App;
