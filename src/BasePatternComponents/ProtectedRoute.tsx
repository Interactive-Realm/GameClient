// src/components/ProtectedRoute.tsx
import React from 'react';
import { redirect, Route, RouteProps } from 'react-router-dom';
import { useAuth } from './AuthProvider';

interface ProtectedRouteProps extends RouteProps {
  component: React.ComponentType<any>;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : redirect("/login")
      }
    />
  );
};

export default ProtectedRoute;
