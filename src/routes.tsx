import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Layout } from './components/Layout';
import { DetailMovie } from './pages/DetailMovie';

export function RoutesComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/detalhes/:id" element={<DetailMovie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
