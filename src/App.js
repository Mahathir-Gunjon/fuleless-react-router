import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Reviews from './Components/Reviews/Reviews';
import Blogs from './Components/Blogs/Blogs'

function App() {
  return (
    <section className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/reviews" element={<Reviews/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </section>
  );
}

export default App;
