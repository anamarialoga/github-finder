import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer} from './components/layout/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { GithubProvider } from './context/github/githubContext';
import { AlertProvider } from './context/alert/alertContext';
import { Alert } from './components/layout/Alert';
import { User } from './pages/User';

function App() {
  return (
  <GithubProvider>
    <AlertProvider>
      <BrowserRouter>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />
        <main className='container mx-auto px-3 pb-12'>
          <Alert />
          <Routes>
            <Route path = "/" element={<Home/>}/>
            <Route path = "/user/:login" element={<User/>}/>
            <Route path = "/about" element={<About/>}/>
            <Route path = "/notfound" element={<NotFound />}/>
            <Route path = "/*" element={<NotFound />}/>
          </Routes>
        </main>
        <Footer />
      </div>
      </BrowserRouter>
    </AlertProvider>
  </GithubProvider>
  );
}

export default App;
