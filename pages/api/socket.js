import { Server } from "socket.io";


const SocketHandler=(req,res)=>{
    if (res.socket.server.io) {
        console.log("Already running")
        return
        
    }
    const io=new Server(res.socket.server)
    res.socket.server.io=io
    io.on("connection",(socket)=>{
     console.log("server is connected")

    })
    req.end()
}
export default SocketHandler