import './App.scss';
import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./pages";
import { Provider } from "react-redux";
import createStore from "./redux";

export const store = createStore();

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Pages />
        </Router>
      </Provider>
    </div>
  );
}

export default App;