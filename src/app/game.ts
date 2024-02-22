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
        this.getFrame().setWinner(winner);
        if(winner==1){
            this.player1Frames++;
        }
        else{
            this.player2Frames++;
        }
        var newPlayerToBreak = this.getLastPlayerToBreak()%2+1;
        this.frames.push(new Frame(newPlayerToBreak))
    }
    getFrameNumber(): number{
        return this.frames.length;
    }
    getFrame(): Frame{
        return this.frames[this.frames.length-1];
    }
    getLastPlayerToBreak(){
        return this.getFrame().playerToBreak;
    }
}
