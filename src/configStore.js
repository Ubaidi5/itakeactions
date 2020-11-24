import { createStore } from "redux";
// import createSagaMiddleWare from "redux-saga";
import rootReducer from "./reducer";
// import rootSaga from "./sagas";

// const sagaMiddleware = createSagaMiddleWare();

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // compose(
  //   applyMiddleware(sagaMiddleware),
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // )
);

// sagaMiddleware.run(rootSaga);

//---------------------------------------------------------
//    This is the code I used in Unsplash API integration
//---------------------------------------------------------

// const configureStore = () => {
//     const sagaMiddleware = createSagaMiddleware();
//     const store = createStore(
//         rootReducer,
//         compose(
//             applyMiddleware(sagaMiddleware),
//             window.__REDUX_DEVTOOLS_EXTENSION__ &&
//                 window.__REDUX_DEVTOOLS_EXTENSION__(),
//         ),
//     );
//     sagaMiddleware.run(rootSaga);

//     return store;
// };
