import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import { theme } from './styles/theme';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import Login from './components/Login';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  padding: 20px;
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Container>
          <Navbar />
          <Main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Main>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
