import { io } from "../../server";
import * as socket from "../../server";

// CURRENTLY NOT BEING USED
// SHOULD REFACTOR NODE AND SOCKET STUFF IN FUTURE!

export default {

        // Update all users
        // function updateUsernames() {
        //     // io.sockets.emit('get users', users);
        //     // console.log(users)
        // }

        // Update the room usernames
        RoomUsers: function(roomnum) {
            var roomUsers = io.sockets.adapter.rooms['room-' + socket.roomnum].users
            io.sockets.in("room-" + roomnum).emit('get users', roomUsers);
        },

        // Update the playlist/queue
        QueueVideos: function() {
            var vidlist = io.sockets.adapter.rooms['room-' + socket.roomnum].queue
            var currPlayer = io.sockets.adapter.rooms['room-' + socket.roomnum].currPlayer
            io.sockets.in("room-" + socket.roomnum).emit('get vidlist', {
                vidlist: vidlist,
                currPlayer: currPlayer,
            });
        }

};;
