import { UseSocket } from "@/Context/Socket"
import { useEffect } from "react"


export default function Home() {
  const socket=UseSocket()
  useEffect(() => {
    
    if (socket) {
      
      socket?.on("connect", () => {
        console.log(socket.id); // x8WIv7-mJelg7on_ALbx
      });
    }

  
  }, [socket])
  
  return (
   <h1>welcome</h1>
  )
}
