import { Message } from "./Message.js"
import { User } from "./User.js";

export class Chat{
    messages: Message[];
    user: User;
    serverURL: string;
    rootElement: HTMLElement;
    messageInput : HTMLInputElement;
    sendButton: HTMLButtonElement;
    constructor(rootElement: HTMLElement, serverURL: string) {
        this.serverURL = serverURL;
        this.rootElement = rootElement;
        this.messages = [];

        const inputField = document.createElement("div");
        inputField.classList.add("inputField");
        this.rootElement.appendChild(inputField);

        this.messageInput = document.createElement("input");
        this.messageInput.classList.add("messageInput");
        this.messageInput.placeholder = "Start typing...";
        inputField.appendChild(this.messageInput);

        this.sendButton = document.createElement("button");
        this.sendButton.classList.add("sendButton");
        this.sendButton.innerText = "SEND";
        inputField.appendChild(this.sendButton);
        this.sendButton.addEventListener("click", () => {
            this.sendMessage();
        })

        const username = prompt("What is your name?");
        this.user = new User(username);

        this.poll(`longpoll.php`);
    }

    async sendMessage() {
        const text = this.messageInput.value;
        this.messageInput.value = "";

        if(!this.testMessage(text)){
            this.notifyOfWrongMessage();
            return;
        }

        const message = new Message(this.user, text, this);
        await fetch("sendMessage.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
            })
        })
        this.messages.push(message);
    }

    testMessage(text: string) {
        if(text.length == 0)
            return false;
        return true;
    }

    notifyOfWrongMessage() {
        alert("Message not sent")
    }


    async poll(url: string) : Promise<void> {
        const data = await fetch(url);
        const json = await data.json();
        this.poll(url);
    }
}