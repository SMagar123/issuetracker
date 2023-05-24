import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

export const ProtectedRoute=({Component,id})=> {
    const navigate= useNavigate();
    useEffect(()=>{
        let login = localStorage.getItem('login');
        if(login){
            navigate(`/user/${id}`);
        }
    })
  return (
    <div>
      <Component/>
    </div>
  )
}
