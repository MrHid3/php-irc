import {User} from "./User";
import {Chat} from "./Chat";

export class Message{
    sender: User;
    text: string;
    uuid: string;
    color: string;
    element: HTMLElement;
    parent: Chat;

    constructor(sender: User, text: string, parent: Chat) {
        this.sender = sender;
        this.text = text;
        this.uuid = crypto.randomUUID();
        this.parent = parent;

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
            username: this.sender.username,
            color: this.sender.color,
            text: this.text,
            uuid: this.uuid,
        })
    }
}