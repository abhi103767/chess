const express = require('express')
const app = express();
http = require('http');
const cors = require('cors');
const dbConnect = require('./db/config')
const db = require('./model/index.model')
const { Server } = require('socket.io'); // Add this
const leaveRoom = require('./utils/leave-room')

require('dotenv').config()

app.use(cors()); // Add cors middleware

const server = http.createServer(app); // Add this

// Create an io server and allow for CORS from http://localhost:3000 with GET and POST methods
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});


// resue
// Add this
// Listen for when the client connects via socket.io-client


const CHAT_BOT = 'ChatBot';
// Add this
let chatRoom = ''; // E.g. javascript, node,...
let allUsers = []; // All users in current chat room
const roomData  = {}
// io.on('connection', (socket) => {
//   console.log(`User connected ${socket.id}`);

//   socket.on('join_room', async (data) => {



//     console.log("joined room")

//     const { username, room } = data; // Data sent from client when join_room event emitted
    
//    if(roomData.room){
//     socket.join(roomData.room)
//     delete roomData['room']
//    }
//    else {
//     socket.join(room)
//     roomData['room'] = 1;
//    }


  
//     // 1 phela user aaya 
//     // 2 user aaya 
    
//   ; // Join the user to a socket room
//     let __createdtime__ = Date.now(); // Current timestamp
//     // Send message to all users currently in the room, apart from the user that just joined

//     chatRoom = room;
//     allUsers.push({ id: socket.id, username, room });
//     chatRoomUsers = allUsers.filter((user) => user.room === room);
//     socket.to(room).emit('chatroom_users', chatRoomUsers);
//     socket.emit('chatroom_users', chatRoomUsers);


//     const chat_list = await db.chat.find({ room }, {
//       username: 1,
//       message: 1,
//       __createdtime__ : "$created_date",
//       room: 1
//     }).sort({ created_date: 1 }).limit(100).lean().exec();


//     console.log({ chat_list })

//     socket.to(room).emit('receive_message', {
//       message: `${username} has joined the chat room`,
//       username: username,
//       __createdtime__,
//     });

//     socket.emit('last_100_messages', JSON.stringify(chat_list))
//   })



//   socket.on('send_message', async (data) => {
//     console.log('recieved the message')
//     data.created_date = Date.now();

//     console.log({ data })
//     const new_data = await db.chat.create(data);
//     console.log({ new_data })
//     // if(error) console.log(error)

//     socket.to(data?.room).emit('receive_message', data);

//     console.log({ data })
//   })



//   socket.on('leave_room', (data) => {
//     const { username, room } = data;
//     socket.leave(room);
//     const __createdtime__ = Date.now();
//     // Remove user from memory
//     allUsers = leaveRoom(socket.id, allUsers);
//     socket.to(room).emit('chatroom_users', allUsers);
//     socket.to(room).emit('receive_message', {
//       username: CHAT_BOT,
//       message: `${username} has left the chat`,
//       __createdtime__,
//     });
//     console.log(`${username} has left the chat`);
//   });



//   // We can write our socket event listeners in here...
// });


io.on('connection', (socket) => {
  console.log(`User connected ${socket.id}`);

  socket.on('join_room', async (data) => {



    console.log("joined room")

    let { username, room } = data; // Data sent from client when join_room event emitted
    console.log({username,room})
    console.log({roomData})
   if(roomData.room){
    console.log('found the player')
    room = roomData.room
    socket.join(roomData.room)
    socket.to(room).emit('foundThePlayer', {});
    allUsers.push({ id: socket.id, username, room :  roomData.room });
    delete roomData['room']
   }
   else {
    socket.join(room)
    allUsers.push({ id: socket.id, username, room  });
    roomData['room'] = room;
   }
    // 1 phela user aaya 
    // 2 user aaya 
    
    // Join the user to a socket room
    let __createdtime__ = Date.now(); // Current timestamp
    // Send message to all users currently in the room, 
   
    chatRoom = room;
    
    chessMatchPlayers = allUsers.filter((user) => user.room === room);
    socket.to(room).emit('chessroom_users', chessMatchPlayers);
    socket.emit('chessroom_users', chessMatchPlayers);
  })



  socket.on('send_message', async (data) => {
    console.log('recieved the message')
    data.created_date = Date.now();

    // console.log({ data })
    const new_data = await db.chat.create(data);
    // console.log({ new_data })
    // if(error) console.log(error)

    socket.to(data?.room).emit('receive_message', data);

    console.log({ data })
  })



  socket.on('leave_room', (data) => {
    const { username, room } = data;
    socket.leave(room);
    const __createdtime__ = Date.now();
    // Remove user from memory
    allUsers = leaveRoom(socket.id, allUsers);
    socket.to(room).emit('chatroom_users', allUsers);
    socket.to(room).emit('receive_message', {
      username: CHAT_BOT,
      message: `${username} has left the chat`,
      __createdtime__,
    });
    console.log(`${username} has left the chat`);
  });



  // We can write our socket event listeners in here...
});

server.listen(4000, async () => {
  await dbConnect()
  console.log('Server is running on port 3000')
}
);