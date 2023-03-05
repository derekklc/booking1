const images = [
    `https://staticsite2derek.s3.ap-southeast-2.amazonaws.com/images/blueTea.webp`,
    `https://staticsite2derek.s3.ap-southeast-2.amazonaws.com/images/pinkTea.webp`,
    `https://staticsite2derek.s3.ap-southeast-2.amazonaws.com/images/purpleTea.webp`,
    `https://staticsite2derek.s3.ap-southeast-2.amazonaws.com/images/yellowTea.webp`,
]

const promoWords = [
    `Improves Skin`,
    `Anti Aging`,
    `Energise Your Body`,
    `Reduce Inflammation`,
]

const getChar = (letter, increment) => {
    return String.fromCharCode(letter.charCodeAt(0) + increment)
}

export const products = (number) => {
    const list = []
    if (!number || isNaN(number)) {
        return []
    }
    for (let i = 0; i < number; i++) {
        const newProduct = {
            name: `『 Herbal Tea ${getChar("A", i)} 』`,
            description: promoWords[i % promoWords.length],
            price: Math.floor(Math.random() * 100),
            currency: "AUD",
            image: images[i % images.length],
        }
        list.push(newProduct)
    }

    return list
}
