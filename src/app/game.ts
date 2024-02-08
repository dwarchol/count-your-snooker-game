import { Frame } from "./frame";
import { Player } from "./player";

export class Game {
    name: string;
    gameMode: number;
    frames: Array<Frame>;
    player1: Player;
    player2: Player;
    player1Frames: number;
    player2Frames: number;

    constructor(name: string, gameMode: number, player1: Player, player2: Player){
        this.name = name;
        this.gameMode = gameMode;
        this.frames = [];
        this.player1 = player1;
        this.player2 = player2;
        this.player1Frames = 0;
        this.player2Frames = 0;
    }

    addFirstFrame(player: number){
        this.frames.push(new Frame(player))
    }
    newNextFrame(winner: number){

    }
    getFrameNumber(): number{
        return this.frames.length;
    }
    getFrame(): Frame{
        return this.frames[this.frames.length-1];
    }
}
