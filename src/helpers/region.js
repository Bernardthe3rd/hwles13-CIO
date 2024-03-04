
export const region = (country) => {
    switch (country) {
        case "Europe":
            return "europe"
        break;
        case "Asia":
            return "asia"
        break;
        case "Africa":
            return "africa"
        break;
        case "Americas":
            return "americas"
        case "Oceania":
            return "oceania"
        break
        default:
            return "anywhere"
    }
}