const prisma= require ("../src/db");


async function main() {
  await prisma.recipe.createMany({
    data: [
      {
        title: "Vegan Pumpkin Soup",
        image: "https://www.thepetitecook.com/wp-content/uploads/2021/10/vegan-pumpkin-soup-recipe.jpg",
        description: "Creamy and comforting pumpkin soup.",
        ingredients: "pumpkin, onion, garlic, vegetable broth, coconut milk",
        instructions: `1. Peel and dice the pumpkin, onion, and garlic.
2. In a large pot, sauté the onion and garlic in a little olive oil until fragrant.
3. Add the diced pumpkin and cook for 5 minutes, stirring occasionally.
4. Pour in the vegetable broth and bring to a boil.
5. Lower the heat and simmer until the pumpkin is tender (about 20 minutes).
6. Use an immersion blender to puree the soup until smooth.
7. Stir in the coconut milk and season with salt and pepper to taste.
8. Simmer for another 5 minutes, then serve hot with fresh herbs.`,
        category: "Soups"
      },
      {
        title: "Chickpea Salad",
        image: "https://cleananddelicious.com/wp-content/uploads/2022/07/Mediterranean-Chickpea-Salad-F-scaled.jpg",
        description: "Fresh and protein-packed chickpea salad.",
        ingredients: "chickpeas, cucumber, tomato, red onion, lemon juice",
        instructions: `1. Drain and rinse canned chickpeas.
2. Dice cucumber, tomatoes, and red onion into small cubes.
3. In a large bowl, combine chickpeas, cucumber, tomatoes, and red onion.
4. In a small bowl, whisk together olive oil, lemon juice, salt, and pepper.
5. Pour the dressing over the salad and toss gently.
6. Chill in the fridge for at least 20 minutes before serving. Optionally, garnish with fresh parsley.`,
        category: "Salads"
      },
      {
        title: "Green Smoothie",
        image: "https://cdn.loveandlemons.com/wp-content/uploads/2022/12/green-smoothie-recipes.jpg",
        description: "Healthy and energizing green smoothie.",
        ingredients: "spinach, banana, almond milk, chia seeds, maple syrup",
        instructions: `1. Wash spinach leaves thoroughly.
2. Peel and slice the banana.
3. Add spinach, banana, almond milk, chia seeds, and maple syrup to a blender.
4. Blend on high until smooth and creamy.
5. Pour into a glass and serve immediately. Optionally, sprinkle chia seeds on top.`,
        category: "Drinks"
      },
      {
        title: "Vegan Lasagna",
        image: "https://sculptedkitchen.com/wp-content/uploads/2023/01/cauliflower-lasagna-slice.jpg",
        description: "Layered lasagna with vegan cheese and veggies.",
        ingredients: "lasagna sheets, tomato sauce, zucchini, spinach, vegan cheese",
        instructions: `1. Preheat oven to 180°C (350°F).
2. Slice zucchini and sauté it with spinach in a pan for 5 minutes.
3. In a baking dish, spread a layer of tomato sauce.
4. Place a layer of lasagna sheets over the sauce.
5. Add a layer of sautéed veggies, then a layer of vegan cheese.
6. Repeat the layers, ending with sauce and vegan cheese on top.
7. Cover with foil and bake for 30 minutes.
8. Remove foil and bake for another 10 minutes until cheese is melted.
9. Let it rest for 10 minutes before serving.`,
        category: "Dishes"
      },
      {
        title: "Chocolate Avocado Mousse",
        image: "https://mhkcviamdmu.s3.us-east-1.amazonaws.com/images/DarkChocolateAvocadoMousse.jpg",
        description: "Rich and healthy chocolate dessert.",
        ingredients: "avocado, cocoa powder, maple syrup, vanilla extract",
        instructions: `1. Cut avocados in half, remove pits, and scoop the flesh into a blender.
2. Add cocoa powder, maple syrup, and vanilla extract.
3. Blend until completely smooth and creamy.
4. Taste and adjust sweetness if necessary.
5. Transfer to serving glasses and chill in the fridge for at least 30 minutes.
6. Serve topped with fresh berries or coconut flakes.`,
        category: "Desserts"
      },
      {
        title: "Lentil Soup",
        image: "https://www.sipandfeast.com/wp-content/uploads/2023/10/sausage-lentil-soup-recipe-snippet-3.jpg",
        description: "Hearty and warming lentil soup.",
        ingredients: "lentils, carrot, celery, onion, vegetable broth",
        instructions: `1. Dice carrot, celery, and onion.
2. In a large pot, heat a little olive oil and sauté the onion, carrot, and celery until soft.
3. Add rinsed lentils and stir for 2 minutes.
4. Pour in the vegetable broth and bring to a boil.
5. Reduce heat and simmer for 25-30 minutes until lentils are tender.
6. Season with salt, pepper, and fresh herbs.
7. Serve with crusty bread.`,
        category: "Soups"
      },
      {
        title: "Quinoa & Kale Salad",
        image: "https://betterfoodguru.com/wp-content/uploads/2022/01/Easy-Kale-and-Quinoa-Salad-scaled.jpg",
        description: "Nutritious quinoa salad with fresh kale.",
        ingredients: "quinoa, kale, cherry tomatoes, olive oil, lemon juice",
        instructions: `1. Rinse quinoa under cold water and cook according to package instructions.
2. Wash and chop kale, removing tough stems.
3. Massage kale with a pinch of salt and olive oil until softened.
4. Cut cherry tomatoes in half.
5. In a large bowl, combine quinoa, kale, and tomatoes.
6. Drizzle with olive oil and lemon juice, season with salt and pepper.
7. Toss well and serve chilled or at room temperature.`,
        category: "Salads"
      },
      {
        title: "Vegan Pad Thai",
        image: "https://biancazapatka.com/wp-content/uploads/2019/05/vegan-pad-thai-recipe-easy-healthy-crispy-tofu-veggie-noodles-peanut-sauce-creamy-pasta-stir-fry-gemuese-nudeln-zoodles-rezept-asian-food.jpg",
        description: "Flavorful and spicy vegan pad thai.",
        ingredients: "rice noodles, tofu, peanut sauce, bean sprouts, lime",
        instructions: `1. Cook rice noodles according to package instructions, then drain.
2. In a pan, sauté tofu cubes until golden and crispy.
3. Add sliced veggies like bell peppers and bean sprouts, and stir-fry for 3-4 minutes.
4. In a small bowl, mix peanut butter, soy sauce, lime juice, maple syrup, and a splash of water to make the sauce.
5. Add cooked noodles and sauce to the pan, toss to coat evenly.
6. Serve with crushed peanuts, lime wedges, and fresh cilantro.`,
        category: "Dishes"
      },
      {
        title: "Mango Coconut Smoothie",
        image: "https://integrativecare.com.au/wp-content/uploads/2023/05/Coconut-and-Mango-Smoothie-Integrative-Care-Healthy-Cancer-Diet-Recipies.jpg",
        description: "Tropical and refreshing drink.",
        ingredients: "mango, coconut milk, banana, lime juice",
        instructions: `1. Peel and dice the mango.
2. Add mango, coconut milk, banana, and lime juice to a blender.
3. Blend on high until smooth and creamy.
4. Pour into a glass and serve with a slice of lime on the rim. Optionally add ice for extra chill.`,
        category: "Drinks"
      },
      {
        title: "Vegan Brownies",
        image: "https://www.rainbownourishments.com/wp-content/uploads/2022/08/no-bake-raw-vegan-brownies-1-1.jpg",
        description: "Fudgy and rich chocolate brownies.",
        ingredients: "flour, cocoa powder, sugar, almond milk, vegan chocolate",
        instructions:`1. Preheat oven to 180°C (350°F).
2. In a bowl, mix flour, cocoa powder, sugar, and a pinch of salt.
3. Add almond milk and melted vegan chocolate, stir until combined.
4. Pour batter into a lined baking tray.
5. Bake for 25 minutes or until a toothpick comes out with moist crumbs.
6. Let cool in the pan before cutting into squares.
7. Optionally, sprinkle with powdered sugar or drizzle with melted chocolate.`,
        category: "Desserts"
      },
      {
        title: "Spicy Carrot Ginger Soup",
        image: "https://www.theendlessmeal.com/wp-content/uploads/2020/03/Carrot-Soup-4.jpg",
        description: "Warming and slightly spicy vegan soup.",
        ingredients: "carrots, ginger, onion, garlic, vegetable broth, coconut milk",
        instructions: `1. Peel and chop carrots, onion, garlic, and fresh ginger.
      2. In a large pot, heat olive oil and sauté onion and garlic until translucent.
      3. Add ginger and carrots, cooking for another 5 minutes.
      4. Pour in vegetable broth and bring to a boil.
      5. Lower heat and simmer for 20 minutes until carrots are tender.
      6. Use an immersion blender to blend the soup until smooth.
      7. Stir in coconut milk and season with salt, pepper, and a pinch of chili flakes.
      8. Heat through and serve with fresh cilantro.`,
        category: "Soups"
      },
      {
        title: "Rainbow Veggie Salad",
        image: "https://veggiefunkitchen.com/wp-content/uploads/2023/06/rainbow-salad-4-scaled.jpg",
        description: "Colorful and crunchy vegetable salad.",
        ingredients: "carrot, red cabbage, bell pepper, cucumber, edamame, sesame seeds",
        instructions: `1. Grate carrots and shred red cabbage.
      2. Dice bell pepper and cucumber into small cubes.
      3. Cook edamame and let it cool.
      4. In a large bowl, combine all veggies and edamame.
      5. Prepare a dressing with rice vinegar, sesame oil, maple syrup, and soy sauce.
      6. Pour dressing over the salad and toss well.
      7. Sprinkle with sesame seeds and serve chilled.`,
        category: "Salads"
      },
      {
        title: "Berry Almond Smoothie",
        image: "https://madcreationshub.com/wp-content/uploads/2018/02/Lamington-12.jpg",
        description: "Sweet and antioxidant-packed smoothie.",
        ingredients: "mixed berries, almond milk, banana, almond butter, chia seeds",
        instructions: `1. Wash fresh or frozen mixed berries.
      2. Peel and slice banana.
      3. Add berries, banana, almond milk, almond butter, and chia seeds to a blender.
      4. Blend on high until smooth and creamy.
      5. Serve immediately with extra berries on top if desired.`,
        category: "Drinks"
      },
      {
        title: "Stuffed Bell Peppers",
        image: "https://www.howtocook.recipes/wp-content/uploads/2021/09/Stuffed-peppers-recipe.jpg",
        description: "Oven-baked bell peppers stuffed with grains and veggies.",
        ingredients: "bell peppers, quinoa, black beans, corn, tomato, spices",
        instructions: `1. Preheat oven to 180°C (350°F).
      2. Cut tops off bell peppers and remove seeds.
      3. Cook quinoa according to package instructions.
      4. In a pan, sauté diced tomatoes, corn, and black beans with cumin, paprika, salt, and pepper.
      5. Mix cooked quinoa into the veggie mixture.
      6. Stuff each bell pepper with the filling and place in a baking dish.
      7. Cover with foil and bake for 30 minutes.
      8. Remove foil and bake another 10 minutes.
      9. Serve hot, garnished with fresh parsley.`,
        category: "Dishes"
      },
      {
        title: "Vegan Lemon Tart",
        image: "https://biancazapatka.com/wp-content/uploads/2020/05/vegan-lemon-tart-with-strawberries.jpg",
        description: "Tangy and refreshing lemon dessert.",
        ingredients: "vegan pie crust, lemon juice, coconut milk, corn starch, maple syrup",
        instructions: `1. Pre-bake a vegan pie crust at 180°C (350°F) for 10 minutes.
      2. In a saucepan, whisk together lemon juice, coconut milk, corn starch, and maple syrup.
      3. Heat over medium heat, stirring constantly, until thickened.
      4. Pour the lemon filling into the pre-baked crust.
      5. Chill in the fridge for at least 2 hours.
      6. Garnish with fresh berries and lemon zest before serving.`,
        category: "Desserts"
      },
      {
        title: "Vegan Cauliflower Tacos",
        image: "https://rainbowplantlife.com/wp-content/uploads/2020/11/cauliflowertacosongreen281of129.jpg",
        description: "Crispy cauliflower tacos with a spicy lime dressing.",
        ingredients: "cauliflower, taco shells, avocado, lime, cilantro, chili powder",
        instructions: `1. Preheat oven to 200°C (400°F).
      2. Cut cauliflower into bite-sized florets.
      3. Toss cauliflower with olive oil, chili powder, salt, and pepper.
      4. Arrange on a baking sheet and roast for 20-25 minutes, flipping halfway through.
      5. In a small bowl, mix lime juice, olive oil, and a pinch of salt for the dressing.
      6. Warm taco shells in the oven for 5 minutes.
      7. Assemble tacos by adding roasted cauliflower, sliced avocado, and a drizzle of lime dressing.
      8. Garnish with fresh cilantro and serve.`,
        category: "Dishes"
      },
      {
        title: "Vegan Chocolate Chip Cookies",
        image: "https://biancazapatka.com/wp-content/uploads/2023/02/chocolate-chip-cookies-vegan-720x1008.jpg",
        description: "Crispy on the outside and soft on the inside chocolate chip cookies.",
        ingredients: "flour, baking soda, sugar, vegan butter, almond milk, chocolate chips",
        instructions: `1. Preheat oven to 180°C (350°F).
      2. In a large bowl, whisk together flour and baking soda.
      3. In another bowl, cream together vegan butter and sugar until fluffy.
      4. Add almond milk and vanilla extract, then mix in dry ingredients.
      5. Fold in chocolate chips.
      6. Scoop cookie dough onto a baking sheet, spacing them 2 inches apart.
      7. Bake for 10-12 minutes or until golden.
      8. Let cool on the baking sheet for 5 minutes before transferring to a wire rack.`,
        category: "Desserts"
      },
      {
        title: "Vegan Buddha Bowl",
        image: "https://biancazapatka.com/wp-content/uploads/2021/07/buddha-bowl.jpg",
        description: "A wholesome bowl of grains, veggies, and a creamy tahini dressing.",
        ingredients: "quinoa, chickpeas, spinach, avocado, carrot, tahini",
        instructions: `1. Cook quinoa according to package instructions.
      2. In a pan, sauté chickpeas with olive oil and spices until crispy.
      3. Grate or slice carrot, and slice avocado.
      4. Assemble the bowl with quinoa, sautéed chickpeas, fresh spinach, carrot, and avocado.
      5. In a small bowl, mix tahini, lemon juice, water, and salt to make the dressing.
      6. Drizzle the tahini dressing over the bowl and serve.`,
        category: "Salads"
      },
      {
        title: "Vegan Mushroom Risotto",
        image: "https://wowitsveggie.com/wp-content/uploads/2023/09/Vegan-Mushroom-Risotto-Recipe-2-720x540.jpg",
        description: "Creamy and comforting mushroom risotto.",
        ingredients: "arborio rice, mushrooms, vegetable broth, onion, garlic, white wine",
        instructions: `1. In a large pan, sauté onion and garlic in olive oil until translucent.
      2. Add sliced mushrooms and cook until browned, about 5-7 minutes.
      3. Stir in arborio rice and cook for 2 minutes to toast it slightly.
      4. Add white wine and stir until it evaporates.
      5. Gradually add vegetable broth, one ladle at a time, stirring constantly until absorbed before adding more.
      6. Continue until the rice is tender and creamy, about 20 minutes.
      7. Season with salt, pepper, and fresh parsley before serving.`,
        category: "Dishes"
      },
      {
        title: "Vegan Pancakes",
        image: "https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2022/08/vegan-pancakes-for-one-800x1200.jpg",
        description: "Fluffy and light vegan pancakes.",
        ingredients: "flour, almond milk, baking powder, sugar, vanilla extract",
        instructions: `1. In a large bowl, mix together flour, baking powder, and sugar.
      2. Add almond milk and vanilla extract, stirring until smooth.
      3. Heat a non-stick pan over medium heat and lightly grease it.
      4. Pour batter onto the pan, forming small pancakes.
      5. Cook for 2-3 minutes on each side, until golden brown.
      6. Serve with maple syrup, berries, and vegan butter.`,
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
 