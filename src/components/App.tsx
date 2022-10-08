import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import { useTypedDispatch, useTypedSelector } from '../hooks/useStore';
import { Spinner } from 'react-bootstrap';
import Router from './Router';
import Layout from './Layout';
import { useEffect } from 'react';
import { getAuth } from '../store/slices/actionCreators';

function App() {
  const {loading} = useTypedSelector(state => state.loading);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(getAuth());
  }, [])


  return (
    <BrowserRouter>
      <Layout>
        <Router></Router>
      </Layout>
      {loading && <Spinner animation='border' variant='primary'/>}
    </BrowserRouter>
  );
}

export default App;
