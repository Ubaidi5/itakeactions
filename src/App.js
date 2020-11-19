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

const queryCache = new QueryCache();

function App() {
  const todosQuery = useQuery("todos", getTodos, {
    onSuccess: () => console.log("Query Runs Successfully"),
    onError: () => console.log("An error occured when fetching your data"),
  });
  console.log("todos Query", todosQuery);
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Router>
        <Routes />
      </Router>
    </ReactQueryCacheProvider>
  );
}

export default App;
