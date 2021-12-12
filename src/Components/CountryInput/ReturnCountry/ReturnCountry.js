import ban from "./Images/ban.png"
import india from "./Images/india.png"
import japan from "./Images/japan.png"

export function ReturnCountry(nameList) {
    let ln = nameList.length
    let countryList = []

    let i = 0;
    while (i < ln) {
        countryList.push(CountryObj(nameList[i]))
        i++
    }
    return countryList

}

export function CountryObj(name) {

    const makeObj = (countryName, flag, code) => {
        return {
            county: countryName,
            flag: <img src={flag} alt="" width="12px" />,
            code: code
        }
    }
    let country;
    switch (name) {
        case "BAN":
            country = makeObj("BAN", ban, "+88")
            break
        case "IND":
            country = makeObj("IND", india, "+11")
            break
        case "JAP":
            country = makeObj("JAP", japan, "+122")
            break
        default:
            country = null
            break
    }
    return country
}