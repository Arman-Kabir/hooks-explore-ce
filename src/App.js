import './App.css';
import ClassCounterOne from './components/useEffect/ClassCounterOne';
import HookCounterOne from './components/useEffect/HookCounterOne';
import HookMouse from './components/useEffect/HookMouse';
import ClassCounter from './components/useState/ClassCounter';
import HookCounter from './components/useState/HookCounter';
import HookCounterFour from './components/useState/HookCounterFour';
import HookCounterThree from './components/useState/HookCounterThree';
import HookCounterTwo from './components/useState/HookCounterTwo';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter></ClassCounter> */}
      {/* <HookCounter></HookCounter> */}
      {/* <HookCounterTwo></HookCounterTwo> */}
      {/* <HookCounterThree></HookCounterThree> */}
      {/* <HookCounterFour></HookCounterFour> */}

      {/* <ClassCounterOne></ClassCounterOne> */}
      {/* <HookCounterOne></HookCounterOne> */}
      <HookMouse></HookMouse>
    </div>
  );
}

export default App;
