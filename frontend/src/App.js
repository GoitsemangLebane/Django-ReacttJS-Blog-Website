import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './hocs/Layout';
import Home from './components/Home';
import Blog from './components/Blog';
import Category from './components/Category';
import BlogDetail from './components/BlogDetail';
import Contact from './components/Contact';
import SignUp from './components/SignUp';
import Login from './components/Login';

const App = () => (
    <Router>
        <Layout>
            <Routes>
               <Route exact path='/Home' element={<Home />} />
               <Route exact path='/Blog' element={<Blog />} />
               <Route exact path='/' element={<Home />} />
               <Route exact path='/category/:id' element={<Category />} />
               <Route exact path='/blog/:id' element={<BlogDetail />} />
               <Route exact path='/SignUp' element={<SignUp />} />
               <Route exact path='/Login' element={<Login />} />
               <Route exact path='Contact' element={<Contact />} />
            </Routes>
        </Layout>
    </Router>
);

export default App;
