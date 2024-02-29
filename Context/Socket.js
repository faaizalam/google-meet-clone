import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
// const socket = io();

const SocketConetext=createContext()

export const UseSocket=()=>{
    const socket =useContext(SocketConetext)
    if (socket) {
       
        return socket
        
    }
}

export const SocketProvider=({children})=>{
    const [socket,setSocket]=useState(null)
    useEffect(()=>{
        const connection=io()
        console.log(connection)
        setSocket(connection)
    },[])

    socket?.on("connect_error",async(err)=>{
        console.log("Error establishing connection",err)
        await fetch('/api/socket')

    })
    return (
   <SocketConetext.Provider value={socket}>
  {children}
   </SocketConetext.Provider>
    )
}