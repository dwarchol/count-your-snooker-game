import { HistoryItemType } from "./history-item-type";

export class HistoryItem {
    type: HistoryItemType;
    playerNumber: number;
    value: number;
    constructor(type: HistoryItemType, playerNumber: number, value?: number){
        this.type = type;
        this.playerNumber = playerNumber;
        this.value = value;
    }
}
