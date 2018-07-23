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
    title: 'Black & White Beautiful Floral Skirt',
    pictureURL: 'http://arasharbabi.com/uploads/DB1115BW-2.jpg',
    color: 'Black',
    price: '25',
    category: 'Skirt',
    featured: 'true'
}

const abstractCloth4 = {
    title: 'High Waist Pleated Mini Flare Skirt',
    pictureURL: 'http://arasharbabi.com/uploads/1510796063344293512.jpg',
    color: 'Crimson',
    price: '15',
    category: 'Skirt',
    featured: 'true'
}

const abstractCloth5 = {
    title: 'Lovely Navy Blue',
    pictureURL: 'http://arasharbabi.com/uploads/2339062_370042.jpg',
    color: 'Navy Blue',
    price: '25',
    category: 'Skirt',
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