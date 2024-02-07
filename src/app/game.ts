import { Frame } from "./frame";
import { Player } from "./player";

export class Game {
    name: string;
    gameMode: number;
    frames: Array<Frame>;
    player1: Player;
    player2: Player;

    constructor(name: string, gameMode: number){
        this.name = name;
        this.gameMode = gameMode;
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
