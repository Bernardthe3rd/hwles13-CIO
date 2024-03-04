
export const amounts = (amount) => {
    if(amount > 1000000) {
        return Math.round(amount / 1000000)
    } else {
        return amount
    }
}
