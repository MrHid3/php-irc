import {Chat} from "./Chat.js";

const chatbox = document.querySelector('#chat') as HTMLInputElement;


const chat = new Chat(chatbox, "servbay.local/gkornas");

// poll("longpoll.php")