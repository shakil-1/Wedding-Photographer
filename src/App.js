import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import About from './Page/About/About';
import Blog from './Page/Blog/Blog';
import Footer from './Page/Footer/Footer';
import Header from './Page/Header/Header';
import Home from './Page/Home/Home/Home';
import Login from './Page/Home/Login/Login';
import Register from './Page/Home/Register/Register';
import RequireAuth from './Page/Hooks/RequireAuth/RequireAuth';
import Loading from './Page/Loading/Loading';
import NotFound from './Page/NotFound/NotFound';
import Service from './Page/Service/Service';
import ServiceDetails from './Page/ServiceDetails/ServiceDetails';
import Services from './Page/Services/Services';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/home/:id' element={
          <RequireAuth>
            <ServiceDetails></ServiceDetails>
          </RequireAuth>
        }></Route>
        <Route path='/blog' element={
          <RequireAuth>
            <Blog></Blog>
          </RequireAuth>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/loading' element={<Loading></Loading>}></Route>
        <Route path='/service' element={<Service></Service>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
