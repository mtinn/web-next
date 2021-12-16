import {Deal, DealSchema} from "./type";

export async function getDeal(id:string): Promise<Deal> {

    const deal = await fetch(process.env.API_URI + 'deals/' + id)
        .then((response) => response.json())
    return DealSchema.parse(deal)
}