import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import { useTypedDispatch } from '../hooks/useStore';
import Router from '../router/Router';
import Layout from './Layout';
import { useEffect } from 'react';
import { getAuth } from '../store/actionCreators';

function App() {
  const dispatch = useTypedDispatch();
  const token = localStorage.getItem('token')

  useEffect(() => {
    token && dispatch(getAuth());
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Router></Router>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
