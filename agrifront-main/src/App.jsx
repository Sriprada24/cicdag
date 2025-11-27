import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import FarmerLayout from './pages/farmer/FarmerLayout';
import DashboardHome from './pages/farmer/DashboardHome';
import MyCrops from './pages/farmer/MyCrops';
import Orders from './pages/farmer/Orders';
import MarketInfo from './pages/farmer/MarketInfo';

import ForgotPassword from './pages/ForgotPassword';
import Logout from './pages/logout';

import BuyerLayout from './pages/buyer/BuyerLayout';
import BuyerProducts from './pages/buyer/BuyerProducts';
import BuyerOrders from './pages/buyer/BuyerOrders';
import BuyerPayments from './pages/buyer/BuyerPayments';
import BuyerCart from './pages/buyer/BuyerCart';

import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageUsers from './pages/admin/ManageUsers';
import ManageProducts from './pages/admin/ManageProducts';
import ManageOrders from './pages/admin/ManageOrders';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/farmer-dashboard" element={<Navigate to="/farmer/dashboard" replace />} />
        <Route path="/farmer" element={<FarmerLayout />}>
          <Route path="dashboard" element={<DashboardHome />} />
          <Route path="my-crops" element={<MyCrops />} />
          <Route path="orders" element={<Orders />} />
          <Route path="market-info" element={<MarketInfo />} />
        </Route>
        <Route path="/buyer-dashboard" element={<Navigate to="/buyer/products" replace />} />
        <Route path="/buyer" element={<BuyerLayout />}>
        <Route path="products" element={<BuyerProducts />} />
        <Route path="orders" element={<BuyerOrders />} />
        <Route path="payments" element={<BuyerPayments />} />
        <Route path="cart" element={<BuyerCart />} />
        </Route>
        <Route path="/admin-dashboard" element={<Navigate to="/admin/dashboard" replace />} />
<Route
  path="/admin"
  element={
    <ProtectedRoute allowedRoles={['admin']}>
      <AdminLayout />
    </ProtectedRoute>
  }
></Route>
        <Route path="/admin" element={<AdminLayout />}>
  <Route path="dashboard" element={<AdminDashboard />} />
  <Route path="users" element={<ManageUsers />} />
  <Route path="products" element={<ManageProducts />} />
  <Route path="orders" element={<ManageOrders />} />
</Route>

        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
