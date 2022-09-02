import './App.css';
// instead of importing all of react:
// import { only, what, we, need } from 'react'
import { Flashcards } from './components';
const App = () => {
  return (
    <div className='container'>
      <Flashcards queryParams={{amount: "10", category: "15", difficulty: "medium", type: "boolean"}} />
      <Flashcards queryParams={{amount: "10", category: "31", difficulty: "", type: "boolean"}} />
    </div>
  );
}

export default App;
