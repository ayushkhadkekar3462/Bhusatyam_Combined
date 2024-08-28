import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../../store/store';

// import { useAuth } from './AuthContext';

export const ProtectRoute = ({ children }) => {
    const username = useAuthStore.getState().auth.username;
    
    if(!username){
        return <Navigate to={'/signup'} replace={true}></Navigate>
    }
    return children;
  }
