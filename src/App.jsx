import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LoadingScreen from './components/ui/LoadingScreen';
import ScrollProgress from './components/ui/ScrollProgress';
import BackToTop from './components/ui/BackToTop';
import FloatingButtons from './components/ui/FloatingButtons';
import Home from './pages/Home';

function AppContent() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <LoadingScreen />
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
      <FloatingButtons />
      <BackToTop />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}
