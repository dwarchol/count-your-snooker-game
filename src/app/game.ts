import { Frame } from "./frame";
import { Player } from "./player";

export class Game {
    name: string;
    frames: Array<Frame>;
    player1: Player;
    player2: Player;

    constructor(){
        this.name = "Test" //temp
        this.frames = [];
        this.frames.push(new Frame(1)); //temp
    }

    getFrameNumber(): number{
        return this.frames.length;
    }
    getFrame(): Frame{
        return this.frames[this.frames.length-1];
    }
}
