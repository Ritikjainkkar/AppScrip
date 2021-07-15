import Main from "./components/Main";
import { useEffect} from 'react'
import { fetchData } from "./actions/states"
import {useDispatch } from 'react-redux'
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  })
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
