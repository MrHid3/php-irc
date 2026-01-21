export class User {
    username: string;
    color: string;

    constructor(username: string) {
        this.username = username;
        this.color = this.getRandomColor();
        this.validateUsername()
    }

    validateUsername() {

    }

    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

}