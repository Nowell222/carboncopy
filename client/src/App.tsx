import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Layout from './components/common/Layout';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import Travel from './pages/Travel';
import Assistant from './pages/Assistant';
import Profile from './pages/Profile';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import UserDetails from './pages/auth/UserDetails';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/user-details" element={<UserDetails />} />
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="calculator" element={<Calculator />} />
              <Route path="travel" element={<Travel />} />
              <Route path="assistant" element={<Assistant />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
