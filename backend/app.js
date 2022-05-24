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
            description: faker.lorem.paragraph(5),
            active: faker.datatype.boolean()
        });
        num--;
    }

    return cats;
}

const generateCatBreeds = (num) => {
    const breeds = [];
    const breedNames = []
    
    while (num >= 0) {
        const breed = faker.animal.cat()

        if (!breedNames.includes(breed)) {
            breedNames.push(breed);
            breeds.push({
                category: 'cat',
                name: breed
            });
            num--;
        }
    }

    return breeds;
}

fs.writeFileSync(
    "./db.json",
    JSON.stringify({ 
        cats: generateCats(20),
        breeds: generateCatBreeds(54)
    })
);