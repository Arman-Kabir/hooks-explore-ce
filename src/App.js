import './App.css';
import ClassCounter from './components/useState/ClassCounter';
import HookCounter from './components/useState/HookCounter';
import HookCounterThree from './components/useState/HookCounterThree';
import HookCounterTwo from './components/useState/HookCounterTwo';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter></ClassCounter> */}
      {/* <HookCounter></HookCounter> */}
      {/* <HookCounterTwo></HookCounterTwo> */}
      <HookCounterThree></HookCounterThree>
    </div>
  );
}

export default App;
