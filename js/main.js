var recipes = [
  {
    name: "Caesar Salad",
    desc: "Classic salad with crispy romaine and creamy dressing",
    img: "./images/Caesar Salad.avif",
    rating: "4.4 (198 reviews)",
    prep: "15 min",
    cook: "15 min",
    servings: "4 people",
    tags: ["Easy", "Mediterranean"],
    ingredients: [
      "500g ground beef",
      "1 tsp salt",
      "1 tsp black pepper",
      "Burger buns",
      "Sliced cheese",
      "Lettuce, onion, tomato",
    ],
    instructions: [
      "Season the beef with salt & pepper.",
      "Form into patties.",
      "Cook on a hot grill for 3–4 minutes per side.",
      "Add cheese and let it melt.",
      "Assemble the burger with vegetables.",
    ],
    nutrition: ["Calories: 520", "Protein: 32g", "Carbs: 28g", "Fat: 31g"],
    tips: [
      "Use 80/20 beef for best flavor.",
      "Don’t press the burger while cooking.",
      "Toast the buns for extra crunch.",
      "Add caramelized onions for sweetness.",
    ],
  },

  {
    name: "Chicken Alfredo Pasta",
    desc: "Creamy pasta with grilled chicken and parmesan",
    img: "./images/pasta.avif",
    rating: "4.7 (310 reviews)",
    prep: "10 min",
    cook: "20 min",
    servings: "2 people",
    tags: ["Quick", "Italian"],
    ingredients: [
      "200g pasta",
      "1 chicken breast",
      "1 cup heavy cream",
      "1/2 cup parmesan",
      "Salt & pepper",
    ],
    instructions: [
      "Boil the pasta until al dente.",
      "Season & grill the chicken.",
      "Mix cream with parmesan.",
      "Combine pasta & sauce.",
      "Top with sliced chicken.",
    ],
    nutrition: ["Calories: 610", "Protein: 45g", "Carbs: 40g", "Fat: 28g"],
    tips: ["Use fresh parmesan.", "Add garlic for extra flavor."],
  },

  {
    name: "Beef Tacos",
    desc: "Crispy tacos filled with spicy beef and veggies",
    img: "./images/beef tacos.avif",
    rating: "4.6 (250 reviews)",
    prep: "12 min",
    cook: "18 min",
    servings: "3 people",
    tags: ["Mexican", "Spicy"],
    ingredients: [
      "300g ground beef",
      "Taco shells",
      "Taco seasoning",
      "Lettuce, tomato, cheese",
    ],
    instructions: [
      "Cook beef with seasoning.",
      "Warm taco shells.",
      "Fill with beef & veggies.",
    ],
    nutrition: ["Calories: 420", "Protein: 28g", "Carbs: 22g", "Fat: 20g"],
    tips: ["Add lime juice.", "Use fresh coriander."],
  },
  {
    name: "Margherita Pizza",
    desc: "Classic pizza with fresh tomatoes, mozzarella, and basil",
    img: "./images/pizza.avif",
    rating: "4.8 (400 reviews)",
    prep: "15 min",
    cook: "20 min",
    servings: "2 people",
    tags: ["Italian", "Vegetarian"],
    ingredients: [
      "Pizza dough",
      "1 cup tomato sauce",
      "150g mozzarella",
      "Fresh basil leaves",
      "Olive oil",
      "Salt & pepper",
    ],
    instructions: [
      "Preheat oven to 220°C (430°F).",
      "Roll out dough and place on tray.",
      "Spread tomato sauce.",
      "Add mozzarella and basil.",
      "Bake until golden.",
    ],
    nutrition: ["Calories: 350", "Protein: 14g", "Carbs: 45g", "Fat: 12g"],
    tips: [
      "Use fresh mozzarella.",
      "Brush crust with olive oil.",
      "Add chili flakes for spice.",
    ],
  },
  {
    name: "Garlic Butter Shrimp",
    desc: "Juicy shrimp cooked in garlic butter and herbs",
    img: "./images/shrimp.avif",
    rating: "4.9 (510 reviews)",
    prep: "5 min",
    cook: "10 min",
    servings: "2 people",
    tags: ["Seafood", "Quick"],
    ingredients: [
      "300g shrimp, peeled",
      "3 tbsp butter",
      "3 garlic cloves, minced",
      "1 tbsp lemon juice",
      "Salt & pepper",
      "Fresh parsley",
    ],
    instructions: [
      "Melt butter in a pan.",
      "Add garlic and cook until fragrant.",
      "Add shrimp and season with salt & pepper.",
      "Cook 2–3 minutes per side until pink.",
      "Add lemon juice and parsley before serving.",
    ],
    nutrition: ["Calories: 260", "Protein: 24g", "Carbs: 2g", "Fat: 16g"],
    tips: [
      "Don’t overcook the shrimp.",
      "Add chili flakes for spicy flavor.",
      "Serve with pasta or rice.",
    ],
  },
  {
    name: "Beef Soup",
    desc: "Warm beef soup with vegetables and rich broth",
    img: "./images/soup.avif",
    rating: "4.8 (300 reviews)",
    prep: "15 min",
    cook: "45 min",
    servings: "4 people",
    tags: ["Soup", "Comfort Food"],
    ingredients: [
      "300g beef chunks",
      "1 onion, chopped",
      "2 carrots, sliced",
      "1 potato, diced",
      "2 cups beef broth",
      "1 tsp black pepper",
      "Salt",
      "Bay leaf",
    ],
    instructions: [
      "Sauté onion until soft.",
      "Add beef and cook until browned.",
      "Add carrots, potato, and broth.",
      "Season with salt, pepper, and a bay leaf.",
      "Simmer for 35–45 minutes until beef is tender.",
    ],
    nutrition: ["Calories: 280", "Protein: 25g", "Carbs: 18g", "Fat: 12g"],
    tips: [
      "Use bone-in beef for richer broth.",
      "Add celery for extra flavor.",
      "Serve hot with bread.",
    ],
  },
  {
    name: "Shrimp Pasta",
    img: "./images/shrimp pasta.avif",
    rating: "4.7 (320 reviews)",
    prep: "10 min",
    cook: "20 min",
    servings: "3 people",
    desc: "Creamy garlic shrimp pasta with parmesan and herbs.",
    tags: ["Easy", "Seafood"],

    ingredients: [
      "200g pasta",
      "250g shrimp (peeled)",
      "2 tbsp butter",
      "3 cloves garlic (minced)",
      "1 cup heavy cream",
      "1/2 cup parmesan cheese",
      "Salt & black pepper",
      "Parsley for garnish",
    ],

    instructions: [
      "Boil pasta until al dente.",
      "In a pan, melt butter and cook garlic until fragrant.",
      "Add shrimp and cook until pink.",
      "Pour heavy cream and simmer.",
      "Add parmesan and mix until sauce thickens.",
      "Combine pasta with sauce.",
      "Garnish with parsley and serve hot.",
    ],

    nutrition: ["Calories: 540", "Protein: 32g", "Carbs: 48g", "Fat: 24g"],

    tips: [
      "Use fresh shrimp for richer flavor.",
      "Don’t overcook shrimp—they turn rubbery.",
      "Add chili flakes for a spicy version.",
    ],
  },
  {
    name: "Chicken Sandwich",
    img: "./images/chicken sandwich.avif",
    rating: "4.5 (250 reviews)",
    prep: "10 min",
    cook: "15 min",
    servings: "2 people",
    desc: "Grilled chicken sandwich with fresh lettuce, tomato, and mayo.",
    tags: ["Easy", "Quick"],

    ingredients: [
      "2 sandwich buns",
      "200g grilled chicken breast",
      "Lettuce leaves",
      "2 tomato slices",
      "Mayonnaise",
      "Salt & black pepper",
    ],

    instructions: [
      "Season and grill the chicken breast until cooked.",
      "Slice the sandwich buns and toast lightly.",
      "Spread mayonnaise on the buns.",
      "Add lettuce, tomato slices, and grilled chicken.",
      "Close the sandwich and serve.",
    ],

    nutrition: ["Calories: 450", "Protein: 30g", "Carbs: 35g", "Fat: 18g"],

    tips: [
      "Use fresh bread for better taste.",
      "You can add cheese for extra flavor.",
      "Serve with a side of fries or salad.",
    ],
  },
];
function loadRandomRecipe() {
  var recipe = recipes[Math.floor(Math.random() * recipes.length)];

  document.querySelector(".recipe-card img").src = recipe.img;
  document.querySelector(
    ".rating-box"
  ).innerHTML = `<i class="fa-solid fa-star text-warning"></i> ${recipe.rating}`;

  document.querySelector(".bottom-info div:nth-child(1) small").innerText =
    recipe.prep;
  document.querySelector(".bottom-info div:nth-child(2) small").innerText =
    recipe.cook;
  document.querySelector(".bottom-info div:nth-child(3) small").innerText =
    recipe.servings;

  document.querySelector(".col-md-6 h2").innerText = recipe.name;
  document.querySelector(".col-md-6 p.text-muted").innerText = recipe.desc;

  var tagsHTML = "";
  for (var i = 0; i < recipe.tags.length; i++) {
    tagsHTML += `<span class="badge bg-primary me-1">${recipe.tags[i]}</span>`;
  }
  document.querySelector(".tags").innerHTML = tagsHTML;
  var ingredientsHTML = "";
  for (var i = 0; i < recipe.ingredients.length; i++) {
    ingredientsHTML +=
      '<li data-num="' + (i + 1) + '">' + recipe.ingredients[i] + "</li>";
  }
  document.querySelector(".ingredients-list").innerHTML = ingredientsHTML;
  var instructionsHTML = "";
  for (var i = 0; i < recipe.instructions.length; i++) {
    instructionsHTML +=
      '<li data-num="' + (i + 1) + '">' + recipe.instructions[i] + "</li>";
  }
  document.querySelector(".instructions-list").innerHTML = instructionsHTML;
  var nutritionHTML = "";
  for (var i = 0; i < recipe.nutrition.length; i++) {
    nutritionHTML += "<div>" + recipe.nutrition[i] + "</div>";
  }
  document.querySelector(".nutrition-box").innerHTML = nutritionHTML;
  var tipsHTML = "";
  for (var i = 0; i < recipe.tips.length; i++) {
    tipsHTML +=
      '<li class="d-flex align-items-start text-secondary tip-1 bg-warning-subtle rounded p-2 me-1">';
    tipsHTML +=
      '<i class="fa-solid fa-circle-check text-orange me-2"></i>' +
      recipe.tips[i];
    tipsHTML += "</li>";
  }
  document.querySelector(".tips-list").innerHTML = tipsHTML;
}
window.onload = loadRandomRecipe;
function showRandomRecipe() {
  loadRandomRecipe();
}

window.onload = loadRandomRecipe;

function showRandomRecipe() {
  loadRandomRecipe();
}
