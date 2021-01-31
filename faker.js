const mongoose = require('mongoose')
const faker = require('faker')
const Menu = require('./models/menus')

mongoose.connect('mongodb://localhost:27017/food', {
    useNewUrlParser: true,
})

for (let i = 0; i < 10; i++) {
    const menu = new Menu({
        menu_name: faker.name.firstName(),
        price: faker.random.number(),
        description: faker.lorem.words()
    })
    menu.save()
        .then(menus => {
            console.log(`${menus.menu_name} saved successfully`);
        })

}