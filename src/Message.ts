import {User} from "./User.js";
import {Chat} from "./Chat.js";

export class Message{
    sender: User;
    text: string;
    uuid: string;
    color: string;
    element: HTMLElement;
    parent: Chat;

    constructor(sender: User, text: string, parent: Chat, uuid : string = "") {
        this.sender = sender;
        this.text = text;
        this.parent = parent;
        if(uuid === "")
            this.uuid = crypto.randomUUID()
        else
            this.uuid = uuid;

        this.element = document.createElement('li');
        const username_span = document.createElement('span');
        username_span.innerText = this.sender.username;
        username_span.style.color = this.sender.color;
        this.element.appendChild(username_span);
        const message_span = document.createElement('span');
        message_span.textContent = this.text;
        this.element.appendChild(message_span);
        this.parent.rootElement.appendChild(this.element);
    }

    toString() {
        return JSON.stringify({
            sender: this.sender.username,
            color: this.sender.color,
            text: this.text,
            uuid: this.uuid,
        })
    }
}