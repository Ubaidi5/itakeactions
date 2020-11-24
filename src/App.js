import React from "react";
import "antd/dist/antd.css";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import {
  useQuery,
  useMutation,
  useQueryCache,
  QueryCache,
  ReactQueryCacheProvider,
} from "react-query";
import { getTodos } from "./apis/getAllRewards";
// Setting Up Redux
import { Provider } from "react-redux";
import { store } from "./configStore";

const queryCache = new QueryCache();

function App() {
  const todosQuery = useQuery("todos", getTodos, {
    onSuccess: () => console.log("Query Runs Successfully"),
    onError: () => console.log("An error occured when fetching your data"),
  });
  console.log("todos Query", todosQuery);
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Provider store={store}>
        <Router>
          <Routes />
        </Router>
      </Provider>
    </ReactQueryCacheProvider>
  );
}

export default App;
