import React from 'react'
import usersData from "../database/users.json";


export const UserProfile=()=> {
    const user= usersData.user;
    console.log(user,"Hello");

  return (
    <div>
      {
        user.map((item)=>{
            return(
                <>
                <p key={item}>{item.username}</p>
                <p>{item.email}</p>
                </>
            )
        })
      }
    </div>
  )
}
