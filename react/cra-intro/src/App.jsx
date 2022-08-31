import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <Counter id="one" title="Number of bugs in my code" />
      <Counter title="Hours talked to rubber ducky" start={5} step={2}/>
      <Counter title="Hours talked to rubber ducky" start={150} step={25}/>
      <Counter title="Hours talked to rubber ducky" start={100000} step={-25}/>
    </div>
  );
}

export default App;
