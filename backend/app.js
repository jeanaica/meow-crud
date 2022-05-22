const { faker } = require('@faker-js/faker');

const fs = require("fs");

const generateCats = (num) => {
    const cats = [];
    
    while (num >= 0) {
        const gender = faker.name.gender(true)
        const lastName = faker.name.lastName()
        cats.push({
            id: num,
            name: `${faker.name.firstName(gender)} ${lastName}`,
            breed: faker.animal.cat(),
            owner: `${faker.name.firstName()} ${lastName}`,
            image: faker.image.cats(400, 400, true),
            gender: gender,
            age: faker.datatype.number({ min: 1, max: 10}),
            active: faker.datatype.boolean()
        });
        num--;
    }

    return cats;
}

fs.writeFileSync(
    "./db.json",
    JSON.stringify({ cats: generateCats(20) })
);