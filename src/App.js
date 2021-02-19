import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import IcecreamContainer from "./components/IcecreamContainer";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <IcecreamContainer />
      </div>
    </Provider>
  );
}

export default App;
