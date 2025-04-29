const prisma= require ("../src/db");


async function main() {
  await prisma.recipe.createMany({
    data: [
      { title: "Vegan Pancakes", description: "Fluffy pancakes..." },
      { title: "Quinoa Salad", description: "Healthy quinoa salad..." },
      {
        "title": "Vegan Pancakes",
        "image": "https://example.com/vegan-pancakes.jpg",
        "description": "Fluffy and light vegan pancakes.",
        "ingredients": "flour, sugar, almond milk, baking powder, salt",
        "instructions": "Mix ingredients, cook on a hot pan for 2-3 minutes per side."
      },
      {
        "title": "Vegan Banana Bread",
        "image": "https://example.com/banana-bread.jpg",
        "description": "A soft and delicious vegan banana bread.",
        "ingredients": "flour, bananas, sugar, baking powder, salt",
        "instructions": "Mash bananas, mix with dry ingredients, bake at 350°F (175°C) for 50 minutes."
      },
      {
      "title": "Vegan Banana Bread bread",
      "image": "https://examgggple.com/banana-bread.jpg",
      "description": "A really soft and delicious vegan banana bread.",
      "ingredients": "flour, bananas, salt, sugar, baking powder, salt",
      "instructions": "Mash bananas, mix with dry ingredients, bake at 350°F (175°C) for 50 minutes."
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
 