const addAbstractCloth = require('./cloth/addNewAbstractCloth')
const addCloth = require('./cloth/addCloth')

const abstractCloth1 = {
    title: 'Red Wedding Dress',
    pictureURL: 'http://arasharbabi.com/uploads/rBVaGln_I6iAKg6pAAB4dLtP5K8665.jpg',
    color: 'Red',
    price: '1500',
    category: 'Wedding Dress',
    featured: 'true'
}

const abstractCloth2 = {
    title: 'Mani Wedding Dress',
    pictureURL: 'http://arasharbabi.com/uploads/2016-luxury-designer-purple-wedding-dress.jpg',
    color: 'Purple',
    price: '3200',
    category: 'Wedding Dress',
    featured: 'true'
}

const abstractCloth3 = {
    title: 'Two Part Bikini',
    pictureURL: 'http://arasharbabi.com/uploads/9122668-1-red.jpg',
    color: 'Red',
    price: '5',
    category: 'Bikini',
    featured: 'true'
}

const abstractCloth4 = {
    title: 'Myriam Lingerie Set',
    pictureURL: 'http://arasharbabi.com/uploads/download.jpg',
    color: 'Black',
    price: '5',
    category: 'Lingerie',
    featured: 'true'
}

const abstractCloth5 = {
    title: 'Bluebella Lingerie',
    pictureURL: 'http://arasharbabi.com/uploads/ede3fa3c6139f190c5c8af12cffecee9_ee04a9a2-e33a-4fa7-b395-2aa1445c85f0_large.jpg',
    color: 'Black',
    price: '5',
    category: 'Lingerie',
    featured: 'true'
}

const addTestsDB = async () => {
    let allAbstractClothes = [abstractCloth1, abstractCloth2, abstractCloth3, abstractCloth4, abstractCloth5]
    let sizes = ['S', 'M', 'L', 'XL', 'XLL']
    let allAbstractIDs = []
    for(let abstractCloth of allAbstractClothes){
        let savedAbstract = await addAbstractCloth(abstractCloth.title, abstractCloth.price, abstractCloth.color, abstractCloth.category, abstractCloth.pictureURL, abstractCloth.featured)
        allAbstractIDs.push(savedAbstract._id)
    }
    for(let abstractID of allAbstractIDs){
        await addCloth(abstractID, sizes[Math.floor(Math.random() * 5)], Math.floor(Math.random() * 50))
    }
}

module.exports = addTestsDB