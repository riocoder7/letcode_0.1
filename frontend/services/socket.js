import { io } from 'socket.io-client';

const SOCKET_URL = 'http://192.168.0.105:3000/'; // Replace with your server's URL
export const socket = io(SOCKET_URL);
