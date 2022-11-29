import { client } from "../axios"

interface Orders {
    readonly id: string
}

export async function getAllOrders() {
    const response = await client.get(`/orders.json?updated_at_min=2022-03-06T01:00:00-23:00`)
    return response.data
}

export async function getOrderByID(id: string) {
    const response = await client.get(`/orders/${id}.json`)
    return response.data
}