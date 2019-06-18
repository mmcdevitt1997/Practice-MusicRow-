// const metals = [
//     { metal: "Sterling Silver", price: 12.42 },
//     { metal: "14K Gold", price: 736.4 },
//     { metal: "24K Gold", price: 1258.9 },
//     { metal: "Platinum", price: 795.45 },
//     { metal: "Palladium", price: 1241.0 }
// ]

// const diamonds = [
//     { carets: 0.5, price: 405 },
//     { carets: 0.75, price: 782 },
//     { carets: 1, price: 1470 },
//     { carets: 1.5, price: 1997 },
//     { carets: 2, price: 3638 }
// ]
// const ringStyles = [
//     { style: "Classic", price: 500 },
//     { style: "Modern", price: 710 },
//     { style: "Vintage", price: 965 }
// ]

// //  {
// //     style: "Modern",
// //     carets: 1,
// //     metal: "24K gold",
// //     price: 3438.9
// // }
// const createCustomRing = (style, carets, metal) => {
//     return {
//         style: style.style,
//         carets: carets.carets,
//         metal: metal.metal,
//         price: metal.price + style.price + carets.price
//     }
// }
// const newRingOrder = createCustomRing(ringStyles[1], diamonds[2], metals[2])


const doctorFactory = (doctorName, specialty, address) => {
    return{
        doctorName: doctorName, 
        specialty: specialty, 
        address: address
    }
}



newDoctor = doctorFactory("Matthew", "feet", "2243 Bradfeild")
console.log(newDoctor)

const petFactory = (petName, petBreed)=> {
    return{
        petName: petName,
        petBreed: petBreed, 
    }
}
BowWowKennels=[]

let mattPet = petFactory("John","dog")
let johnPet = petFactory("alex","cat")
let chrisPet = petFactory("drew","fish")

let pushPet = BowWowKennels.push(mattPet, johnPet, chrisPet);


console.log (BowWowKennels)

// Practice: Music Row 

let jumpStopRecords = []
let chattenRecords = []
let polarRecords = []

function Artist(name, genre, age){
  let artistObject = {
        nameArtist: name, 
        genreArtist: genre,
        ageArtist: age
    }
    if (artistObject.genreArtist == "funk"||"rap"){
        jumpStopRecords.push(artistObject)
    }
   else if (artistObject.genreArtist == "country" || "bluegrass"){
        chattenRecords.push(artistObject)
    }
   else if (artistObject.genreArtist == "pop"){
        polarRecords.push(artistObject)
    }
}

Artist("Bruce Atikins", "country", 23)

Artist("Jensen Brown", "pop", 20)

console.log(jumpStopRecords)