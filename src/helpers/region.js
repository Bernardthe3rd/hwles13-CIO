//feedback: na een return hoef je nooit meer een break tussen te voegen.
export const region = (country) => {
    switch (country) {
        case "Europe":
            return "europe"
        case "Asia":
            return "asia"
        case "Africa":
            return "africa"
        case "Americas":
            return "americas"
        case "Oceania":
            return "oceania"
        default:
            return "anywhere"
    }
}