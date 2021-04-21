import { Provider } from "react-redux";
import FirstRoutes from "../config/Routers/first";
import store from "../redux/store/store";

const App = () => {
  return (
    <Provider store={store}>
      <FirstRoutes />
    </Provider>
  );
};

export default App;
