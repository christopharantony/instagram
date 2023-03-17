import React from 'react';
import { Navigate } from 'react-router-dom';
function Protected({ children, name, user }) {
  if (user?.visibleDashboards?.includes(name)) {
    return children;
  }
  return <Navigate to="/404" replace />;
}
export default Protected;
