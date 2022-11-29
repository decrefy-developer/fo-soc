import axios from 'axios'

export const client = axios.create({
    baseURL: 'https://7ff47e3951950e895c42694347d93c98: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@freshoptionfnb.myshopify.com/admin/api/2022-10',
    headers: {
        'Access-Control-Allow-Origin': "*",
        'Access-Control-Allow-Methods': "GET",
        'Access-Control-Allow-Headers': "*",
        'X-Shopify-Access-Token': "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",
        'Content-Type': 'application/json',
    },
})
