import logo from './logo.svg';
import './App.css';
import routes from './routes';
import { useRoutes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  let router = useRoutes(routes)
  return (
   <>
   <Navbar />
   <div className='container'>
    <Sidebar />
   {router}
   </div>
   </>
  );
}

export default App;
