import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Router></Router>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
