import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home4211289 from '../components/HighFidelity/Home4211289';
import Order4212004 from '../components/HighFidelity/Order4212004';
import DetailItem4211845 from '../components/HighFidelity/DetailItem4211845';
import Delivery4212232 from '../components/HighFidelity/Delivery4212232';

/**
 * PUBLIC_INTERFACE
 * AppRoutes
 * Provides the top-level route configuration for the high-fidelity screens.
 * Routes:
 * - /home -> Home high-fidelity screen
 * - /order -> Order screen
 * - /detail-item -> Detail Item screen
 * - /delivery -> Delivery screen
 * - / -> redirects to /home
 */
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home4211289 />} />
      <Route path="/order" element={<Order4212004 />} />
      <Route path="/detail-item" element={<DetailItem4211845 />} />
      <Route path="/delivery" element={<Delivery4212232 />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}
