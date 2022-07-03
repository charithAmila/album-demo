import { FC } from "react";
import { Provider } from "react-redux";
import Routes from "./AppRoutes";
import { store } from "./store";

const App: FC = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);
export default App;
