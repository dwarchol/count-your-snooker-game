import { HistoryItem } from "./history-item";

export class Frame {
    player1Points: number;
    player2Points: number;
    playerToBreak: number;
    winner: number; 
    frameHistory: Array<HistoryItem>;

    constructor(playerToBreak: number){
        this.playerToBreak = playerToBreak;
        this.player1Points = 0;
        this.player2Points = 0;
        this.frameHistory = [];
    }
    setWinner(winner: number){
        this.winner = winner;
    }
    addHistory(item: HistoryItem){
        console.log(item)
        this.frameHistory.push(item);
        console.log("Dodano: " + item.playerNumber + " " + item.type);
    }
    removeLastHistoryItem(){
        var lastItem = this.frameHistory.pop();
        console.log("Cofnieto: " + lastItem.playerNumber + " " + lastItem.type);
        return lastItem;
    }
}
