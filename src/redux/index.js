import configureStore from "./createStore";
import rootSaga from "./sagas";
import rootReducer from "./reducers";

const Redux = () => configureStore(rootReducer, rootSaga)

export default Redux;