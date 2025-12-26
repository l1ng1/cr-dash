export interface Crypto {
    id:string;
    symbol:string;
    name:string;
    current_price:number;
    market_cap:number;
    price_change_percentage_24h: number;
    image: string;
    total_volume: number;
}

export interface CreptoApiresponce{
    data : Crypto[];
}