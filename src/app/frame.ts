export class Frame {
    player1Points: number;
    player2Points: number;
    playerToBreak: number;
    winner: number; 
    constructor(playerToBreak: number){
        this.playerToBreak = playerToBreak;
        this.player1Points = 0;
        this.player2Points = 0;
    }
    setWinner(winner: number){
        this.winner = winner;
    }
}
