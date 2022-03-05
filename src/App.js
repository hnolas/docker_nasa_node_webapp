import './App.css';
import { store, persistor } from "./store";
import { Provider, useDispatch } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import HomePage from './HomePage';
import { useEffect } from 'react';
import { getData } from './duck/action';



const App = () => {

  const dispatch = useDispatch()
  const storedData = localStorage.getItem('storedApods')

  useEffect(() => {
    if (!storedData) {
      dispatch(getData())
    }
  }, [dispatch, storedData])

  return (
    <HomePage />
  )
}


const AppWrapper = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  )
}
export default AppWrapper;
