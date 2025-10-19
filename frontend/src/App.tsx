
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import RestaurantsPage from './pages/restaurantspage';
import RestaurantDetailPage from './pages/restaurantsdetailspage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RestaurantsPage />} />
        <Route path="/restaurants/:id" element={<RestaurantDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
