const prisma= require ("../src/db");


async function main() {
  await prisma.recipe.createMany({
    data: [
      {
        title: "Vegan Pumpkin Soup",
        image: "https://www.thepetitecook.com/wp-content/uploads/2021/10/vegan-pumpkin-soup-recipe.jpg",
        description: "Creamy and comforting pumpkin soup.",
        ingredients: "pumpkin, onion, garlic, vegetable broth, coconut milk",
        instructions: "Cook pumpkin and onion, add broth, blend, stir in coconut milk.",
        category: "Soups"
      },
      {
        title: "Chickpea Salad",
        image: "https://cleananddelicious.com/wp-content/uploads/2022/07/Mediterranean-Chickpea-Salad-F-scaled.jpg",
        description: "Fresh and protein-packed chickpea salad.",
        ingredients: "chickpeas, cucumber, tomato, red onion, lemon juice",
        instructions: "Chop vegetables, mix with chickpeas and dressing.",
        category: "Salads"
      },
      {
        title: "Green Smoothie",
        image: "https://cdn.loveandlemons.com/wp-content/uploads/2022/12/green-smoothie-recipes.jpg",
        description: "Healthy and energizing green smoothie.",
        ingredients: "spinach, banana, almond milk, chia seeds, maple syrup",
        instructions: "Blend all ingredients until smooth.",
        category: "Drinks"
      },
      {
        title: "Vegan Lasagna",
        image: "https://sculptedkitchen.com/wp-content/uploads/2023/01/cauliflower-lasagna-slice.jpg",
        description: "Layered lasagna with vegan cheese and veggies.",
        ingredients: "lasagna sheets, tomato sauce, zucchini, spinach, vegan cheese",
        instructions: "Layer ingredients, bake at 180°C for 40 minutes.",
        category: "Dishes"
      },
      {
        title: "Chocolate Avocado Mousse",
        image: "https://mhkcviamdmu.s3.us-east-1.amazonaws.com/images/DarkChocolateAvocadoMousse.jpg",
        description: "Rich and healthy chocolate dessert.",
        ingredients: "avocado, cocoa powder, maple syrup, vanilla extract",
        instructions: "Blend all ingredients until creamy, chill before serving.",
        category: "Desserts"
      },
      {
        title: "Lentil Soup",
        image: "https://www.sipandfeast.com/wp-content/uploads/2023/10/sausage-lentil-soup-recipe-snippet-3.jpg",
        description: "Hearty and warming lentil soup.",
        ingredients: "lentils, carrot, celery, onion, vegetable broth",
        instructions: "Cook vegetables, add broth and lentils, simmer until tender.",
        category: "Soups"
      },
      {
        title: "Quinoa & Kale Salad",
        image: "https://betterfoodguru.com/wp-content/uploads/2022/01/Easy-Kale-and-Quinoa-Salad-scaled.jpg",
        description: "Nutritious quinoa salad with fresh kale.",
        ingredients: "quinoa, kale, cherry tomatoes, olive oil, lemon juice",
        instructions: "Cook quinoa, massage kale, mix with other ingredients.",
        category: "Salads"
      },
      {
        title: "Vegan Pad Thai",
        image: "https://biancazapatka.com/wp-content/uploads/2019/05/vegan-pad-thai-recipe-easy-healthy-crispy-tofu-veggie-noodles-peanut-sauce-creamy-pasta-stir-fry-gemuese-nudeln-zoodles-rezept-asian-food.jpg",
        description: "Flavorful and spicy vegan pad thai.",
        ingredients: "rice noodles, tofu, peanut sauce, bean sprouts, lime",
        instructions: "Cook noodles, stir-fry tofu, toss everything together.",
        category: "Dishes"
      },
      {
        title: "Mango Coconut Smoothie",
        image: "https://integrativecare.com.au/wp-content/uploads/2023/05/Coconut-and-Mango-Smoothie-Integrative-Care-Healthy-Cancer-Diet-Recipies.jpg",
        description: "Tropical and refreshing drink.",
        ingredients: "mango, coconut milk, banana, lime juice",
        instructions: "Blend all ingredients until smooth.",
        category: "Drinks"
      },
      {
        title: "Vegan Brownies",
        image: "https://www.rainbownourishments.com/wp-content/uploads/2022/08/no-bake-raw-vegan-brownies-1-1.jpg",
        description: "Fudgy and rich chocolate brownies.",
        ingredients: "flour, cocoa powder, sugar, almond milk, vegan chocolate",
        instructions: "Mix ingredients, bake at 180°C for 25 minutes.",
        category: "Desserts"
      }
      
  
      // more recipes...
    ],
    skipDuplicates: true,
  });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  });
 