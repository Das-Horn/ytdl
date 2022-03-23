import { AppShell, Header, MantineProvider } from '@mantine/core';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import HeaderContent from './Components/HeaderContent';
import Home from './Components/Home';

const MainPage = () => {
  return (
    <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles>
      <AppShell
        header={
          <Header p={5} height={50}>
            <HeaderContent />
          </Header>
        }
      >
        <Home />
      </AppShell>
    </MantineProvider>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}
