import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TreeView from './pages/TreeView';
import InstallPrompt from './components/InstallPrompt';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tree/:domain" element={<TreeView />} />
      </Routes>
      <InstallPrompt />
    </BrowserRouter>
  );
}

export default App;
