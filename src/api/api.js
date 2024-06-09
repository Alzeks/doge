
export const getCoins = async (coin) => {
    try {
        const res = await fetch('https://api-eu.okotoki.com/coins')
        const data = await res.json(res)
        return data
    } catch (err) { console.log(err); }
}