'use client'

import { useParams } from "next/navigation"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react";


export default function Profile(){
    const { data: session } = useSession();
    const SessionId = session?.user?.id
    const {id} = useParams()
    const [isOwner, setIsOwner] = useState()

    
    useEffect(() => {
        if(SessionId === id){
            setIsOwner(true)
        }else{
            setIsOwner(false)
        }
    }, [SessionId, id])

    return (
        <p>{id}</p>
    )
}