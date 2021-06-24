export enum Sender {
    React,
    Content
}

export interface ChromeMessage {
    from: Sender,
    message: any
}

export type ApiResponse = {
    data: {
        [key: string]: string;
        id: string;
        rank: string;
        symbol: string;
        name: string;
        supply: string;
        maxSupply: string;
        marketCapUsd: string;
        volumeUsd24Hr: string;
        priceUsd: string;
        changePercent24Hr: string;
        vwap24Hr: string;
        explorer: string;
    }[];
};