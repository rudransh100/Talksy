import { io } from 'socket.io-client';

export function connectWS() {
    return io('https://talksy-l7qv.onrender.com');
}