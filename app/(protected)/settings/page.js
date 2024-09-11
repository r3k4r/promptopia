'use client'

import {useState, useEffect} from 'react'
import { useSession } from "next-auth/react";


const settings = () => {
    const [user, setUser] = useState();
    const { data: session } = useSession();
    console.log(user)

    useEffect(()=>{
        const GetUser = async()=>{
            try{
                const response = await fetch(`/api/users/${session?.user.id}`);
                const data = await response.json();
          
                setUser(data);
            }catch(err){
                console.log("error fetching user: " + err)
            }
        }
        GetUser()
    }, [session?.user.id])


return (
    <form>
        <input />
    </form>
  )
}

export default settings