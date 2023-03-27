import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import CounterView from "./feature/counter/CounterView";

/**
 * Plan
 * 1. package install
 * 2. constance difine
 * 3. async action function create
 * 4. reducer create
 * 5. store create
 * 6. provide store
 * 7. use store in our react app
 * 8. appl style with css
 */

function App() {
  const states = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <CounterView/>
    </div>
  );
}

export default App;
