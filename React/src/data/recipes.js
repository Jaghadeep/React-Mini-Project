// Recipe database containing 20 high-quality, nutrition-rich recipes for different dietary goals and styles.

export const recipes = [
  // BREAKFAST
  {
    id: 'b1',
    name: 'Keto Avocado & Egg Salad',
    mealType: 'breakfast',
    calories: 420,
    protein: 18,
    carbs: 6,
    fat: 36,
    prepTime: '10 mins',
    cookTime: '0 mins',
    difficulty: 'Easy',
    tags: ['Keto', 'Gluten-Free', 'Vegetarian', 'Low-Carb'],
    image: '🥑🍳',
    description: 'A creamy, high-fat, low-carb breakfast classic loaded with healthy fats and quality protein.',
    ingredients: [
      { name: 'Ripe Avocados', quantity: 1, unit: 'pc' },
      { name: 'Hard-boiled Eggs', quantity: 2, unit: 'pcs' },
      { name: 'Mayonnaise (Olive Oil based)', quantity: 1.5, unit: 'tbsp' },
      { name: 'Lemon Juice', quantity: 1, unit: 'tsp' },
      { name: 'Chopped Chives', quantity: 1, unit: 'tbsp' },
      { name: 'Salt & Pepper', quantity: 1, unit: 'pinch' }
    ],
    instructions: [
      'Peel and dice the hard-boiled eggs.',
      'Cut avocado in half, remove the pit, scoop out the flesh and cube it.',
      'In a bowl, combine the eggs, avocado, mayonnaise, and lemon juice.',
      'Gently stir to mix, keeping the avocado slightly chunky.',
      'Season with salt, pepper, and garnish with fresh chives.'
    ]
  },
  {
    id: 'b2',
    name: 'Vegan Tofu Spinach Scramble',
    mealType: 'breakfast',
    calories: 280,
    protein: 22,
    carbs: 10,
    fat: 16,
    prepTime: '5 mins',
    cookTime: '10 mins',
    difficulty: 'Easy',
    tags: ['Vegan', 'Vegetarian', 'Gluten-Free', 'Low-Carb'],
    image: '🌱🫓',
    description: 'A protein-packed, egg-free scramble made with crumbled tofu, turmeric, and fresh baby spinach.',
    ingredients: [
      { name: 'Firm Tofu', quantity: 200, unit: 'g' },
      { name: 'Baby Spinach', quantity: 1, unit: 'cup' },
      { name: 'Olive Oil', quantity: 1, unit: 'tbsp' },
      { name: 'Nutritional Yeast', quantity: 1, unit: 'tbsp' },
      { name: 'Turmeric Powder', quantity: 0.25, unit: 'tsp' },
      { name: 'Garlic Powder', quantity: 0.5, unit: 'tsp' },
      { name: 'Salt & Black Pepper', quantity: 1, unit: 'pinch' }
    ],
    instructions: [
      'Drain the tofu and crumble it with a fork or your hands.',
      'Heat olive oil in a skillet over medium heat.',
      'Add crumbled tofu, turmeric, garlic powder, salt, and pepper. Sauté for 5 minutes.',
      'Add baby spinach and nutritional yeast. Cook until spinach is wilted (about 2-3 minutes).',
      'Serve hot with a side of sliced tomatoes.'
    ]
  },
  {
    id: 'b3',
    name: 'Protein-Rich Berry Parfait',
    mealType: 'breakfast',
    calories: 320,
    protein: 26,
    carbs: 34,
    fat: 6,
    prepTime: '5 mins',
    cookTime: '0 mins',
    difficulty: 'Easy',
    tags: ['Vegetarian', 'High-Protein', 'Balanced'],
    image: '🍓🥛',
    description: 'Thick, creamy Greek yogurt layered with high-antioxidant fresh berries, chia seeds, and light granola.',
    ingredients: [
      { name: '0% Fat Greek Yogurt', quantity: 200, unit: 'g' },
      { name: 'Mixed Berries (Strawberries, Blueberries)', quantity: 0.5, unit: 'cup' },
      { name: 'Low-Sugar Granola', quantity: 2, unit: 'tbsp' },
      { name: 'Chia Seeds', quantity: 1, unit: 'tsp' },
      { name: 'Honey or Maple Syrup', quantity: 1, unit: 'tsp' }
    ],
    instructions: [
      'Whisk Greek yogurt in a bowl until smooth.',
      'In a serving glass, layer half of the Greek yogurt, followed by half of the mixed berries.',
      'Add the remaining yogurt, then layer the remaining berries and granola on top.',
      'Sprinkle with chia seeds and drizzle with honey just before eating.'
    ]
  },
  {
    id: 'b4',
    name: 'Peanut Butter Banana Oats',
    mealType: 'breakfast',
    calories: 390,
    protein: 12,
    carbs: 58,
    fat: 14,
    prepTime: '5 mins',
    cookTime: '5 mins',
    difficulty: 'Easy',
    tags: ['Vegan', 'Vegetarian', 'Balanced'],
    image: '🥣🍌',
    description: 'Hearty rolled oats cooked in almond milk, topped with rich peanut butter, banana slices, and flaxseeds.',
    ingredients: [
      { name: 'Rolled Oats', quantity: 0.5, unit: 'cup' },
      { name: 'Unsweetened Almond Milk', quantity: 1, unit: 'cup' },
      { name: 'Creamy Peanut Butter', quantity: 1.5, unit: 'tbsp' },
      { name: 'Medium Banana (sliced)', quantity: 0.5, unit: 'pc' },
      { name: 'Ground Flaxseeds', quantity: 1, unit: 'tsp' },
      { name: 'Cinnamon', quantity: 0.25, unit: 'tsp' }
    ],
    instructions: [
      'Combine oats and almond milk in a small saucepan over medium heat.',
      'Bring to a gentle boil, then simmer for 4-5 minutes, stirring occasionally, until thick.',
      'Pour oats into a bowl and stir in cinnamon.',
      'Top with banana slices, peanut butter, and ground flaxseeds.'
    ]
  },
  {
    id: 'b5',
    name: 'Gluten-Free Almond Flour Pancakes',
    mealType: 'breakfast',
    calories: 450,
    protein: 16,
    carbs: 15,
    fat: 38,
    prepTime: '10 mins',
    cookTime: '10 mins',
    difficulty: 'Medium',
    tags: ['Gluten-Free', 'Vegetarian', 'Keto', 'Low-Carb'],
    image: '🥞🍯',
    description: 'Fluffy, grain-free pancakes made with almond flour, eggs, and a touch of vanilla.',
    ingredients: [
      { name: 'Almond Flour', quantity: 1, unit: 'cup' },
      { name: 'Eggs', quantity: 2, unit: 'pcs' },
      { name: 'Almond Milk', quantity: 0.25, unit: 'cup' },
      { name: 'Baking Powder', quantity: 1, unit: 'tsp' },
      { name: 'Vanilla Extract', quantity: 1, unit: 'tsp' },
      { name: 'Butter (for pan)', quantity: 1, unit: 'tbsp' }
    ],
    instructions: [
      'In a bowl, whisk the eggs, almond milk, vanilla extract, and baking powder.',
      'Stir in the almond flour until a smooth batter forms.',
      'Melt butter in a large skillet over medium-low heat.',
      'Pour batter in small circles. Cook until bubbles form on top (about 3 mins), then flip and cook for 2 mins.',
      'Serve with sugar-free syrup or fresh berries.'
    ]
  },

  // LUNCH
  {
    id: 'l1',
    name: 'Grilled Chicken Caesar Salad',
    mealType: 'lunch',
    calories: 480,
    protein: 38,
    carbs: 8,
    fat: 32,
    prepTime: '15 mins',
    cookTime: '10 mins',
    difficulty: 'Medium',
    tags: ['High-Protein', 'Keto', 'Low-Carb', 'Gluten-Free'],
    image: '🥗🍗',
    description: 'Juicy grilled chicken breast slices served over fresh romaine lettuce with a light parmesan Caesar dressing.',
    ingredients: [
      { name: 'Chicken Breast', quantity: 150, unit: 'g' },
      { name: 'Romaine Lettuce (chopped)', quantity: 2, unit: 'cups' },
      { name: 'Shaved Parmesan Cheese', quantity: 2, unit: 'tbsp' },
      { name: 'Caesar Dressing', quantity: 2, unit: 'tbsp' },
      { name: 'Olive Oil (for chicken)', quantity: 1, unit: 'tsp' },
      { name: 'Italian Herbs', quantity: 0.5, unit: 'tsp' }
    ],
    instructions: [
      'Season chicken breast with Italian herbs, salt, and pepper.',
      'Heat olive oil in a grill pan and cook chicken for 5-6 minutes on each side until fully cooked.',
      'Let the chicken rest for 3 minutes, then slice into strips.',
      'Toss romaine lettuce with Caesar dressing and half of the parmesan in a bowl.',
      'Top lettuce with chicken slices and remaining parmesan cheese.'
    ]
  },
  {
    id: 'l2',
    name: 'Mediterranean Chickpea Salad',
    mealType: 'lunch',
    calories: 380,
    protein: 14,
    carbs: 48,
    fat: 16,
    prepTime: '10 mins',
    cookTime: '0 mins',
    difficulty: 'Easy',
    tags: ['Vegan', 'Vegetarian', 'Gluten-Free', 'Balanced'],
    image: '🥗🫛',
    description: 'A bright, refreshing salad loaded with fiber-rich chickpeas, cucumbers, cherry tomatoes, and red onion.',
    ingredients: [
      { name: 'Canned Chickpeas (rinsed)', quantity: 1, unit: 'can' },
      { name: 'Cucumber (diced)', quantity: 0.5, unit: 'pc' },
      { name: 'Cherry Tomatoes (halved)', quantity: 0.5, unit: 'cup' },
      { name: 'Red Onion (diced)', quantity: 0.25, unit: 'cup' },
      { name: 'Olive Oil', quantity: 1.5, unit: 'tbsp' },
      { name: 'Lemon Juice', quantity: 1, unit: 'tbsp' },
      { name: 'Dried Oregano', quantity: 0.5, unit: 'tsp' }
    ],
    instructions: [
      'In a large bowl, combine the rinsed chickpeas, diced cucumber, cherry tomatoes, and red onion.',
      'In a separate small bowl, whisk together the olive oil, lemon juice, dried oregano, salt, and pepper.',
      'Pour the dressing over the salad and toss well.',
      'Let sit for 5 minutes before serving to allow flavors to meld.'
    ]
  },
  {
    id: 'l3',
    name: 'Avocado Salmon Quinoa Bowl',
    mealType: 'lunch',
    calories: 520,
    protein: 34,
    carbs: 42,
    fat: 24,
    prepTime: '10 mins',
    cookTime: '15 mins',
    difficulty: 'Medium',
    tags: ['High-Protein', 'Gluten-Free', 'Balanced'],
    image: '🥑🐟',
    description: 'Nutritious quinoa base topped with pan-seared salmon fillet, creamy avocado slices, and steamed broccoli.',
    ingredients: [
      { name: 'Salmon Fillet', quantity: 120, unit: 'g' },
      { name: 'Cooked Quinoa', quantity: 1, unit: 'cup' },
      { name: 'Avocado', quantity: 0.5, unit: 'pc' },
      { name: 'Broccoli Florets', quantity: 1, unit: 'cup' },
      { name: 'Soy Sauce or Tamari', quantity: 1, unit: 'tbsp' },
      { name: 'Sesame Seeds', quantity: 1, unit: 'tsp' }
    ],
    instructions: [
      'Steam the broccoli florets for 5 minutes until tender-crisp.',
      'Season salmon with salt and pepper. Pan-sear in a non-stick pan for 4-5 minutes per side.',
      'Place cooked quinoa in the bottom of a bowl.',
      'Arrange sliced salmon, sliced avocado, and steamed broccoli on top.',
      'Drizzle with soy sauce/tamari and sprinkle with sesame seeds.'
    ]
  },
  {
    id: 'l4',
    name: 'Lentil & Vegetable Soup',
    mealType: 'lunch',
    calories: 340,
    protein: 18,
    carbs: 52,
    fat: 8,
    prepTime: '15 mins',
    cookTime: '30 mins',
    difficulty: 'Medium',
    tags: ['Vegan', 'Vegetarian', 'Gluten-Free', 'Balanced'],
    image: '🍲🥕',
    description: 'A comforting, hearty soup packed with brown lentils, carrots, celery, and diced tomatoes in a savory broth.',
    ingredients: [
      { name: 'Brown Lentils (dry)', quantity: 0.5, unit: 'cup' },
      { name: 'Carrots (chopped)', quantity: 1, unit: 'pc' },
      { name: 'Celery Rib (chopped)', quantity: 1, unit: 'pc' },
      { name: 'Diced Tomatoes (canned)', quantity: 0.5, unit: 'can' },
      { name: 'Vegetable Broth', quantity: 2, unit: 'cups' },
      { name: 'Olive Oil', quantity: 1, unit: 'tsp' },
      { name: 'Garlic (minced)', quantity: 2, unit: 'cloves' }
    ],
    instructions: [
      'Heat olive oil in a soup pot. Add garlic, carrots, and celery. Cook for 5 minutes.',
      'Rinse dry lentils and add them to the pot with diced tomatoes and vegetable broth.',
      'Bring to a boil, then reduce heat, cover, and simmer for 25-30 minutes until lentils are soft.',
      'Season with salt, pepper, and a pinch of cumin to taste.'
    ]
  },
  {
    id: 'l5',
    name: 'Low-Carb Turkey Lettuce Wraps',
    mealType: 'lunch',
    calories: 310,
    protein: 28,
    carbs: 10,
    fat: 18,
    prepTime: '10 mins',
    cookTime: '10 mins',
    difficulty: 'Easy',
    tags: ['High-Protein', 'Low-Carb', 'Keto', 'Gluten-Free'],
    image: '🥬🦃',
    description: 'Savory ground turkey cooked with ginger, garlic, and green onions, served inside crisp butter lettuce cups.',
    ingredients: [
      { name: 'Lean Ground Turkey', quantity: 150, unit: 'g' },
      { name: 'Butter Lettuce Leaves', quantity: 4, unit: 'pcs' },
      { name: 'Sesame Oil', quantity: 1, unit: 'tsp' },
      { name: 'Ginger (grated)', quantity: 0.5, unit: 'tsp' },
      { name: 'Soy Sauce', quantity: 1, unit: 'tbsp' },
      { name: 'Green Onions (chopped)', quantity: 2, unit: 'tbsp' }
    ],
    instructions: [
      'Heat sesame oil in a skillet over medium heat.',
      'Add ground turkey and cook until browned, breaking it up as it cooks (about 7-8 minutes).',
      'Stir in grated ginger, garlic, soy sauce, and chopped green onions. Cook for another 2 minutes.',
      'Spoon turkey mixture into clean, dry butter lettuce leaves and serve like tacos.'
    ]
  },

  // DINNER
  {
    id: 'd1',
    name: 'Garlic Butter Steak & Asparagus',
    mealType: 'dinner',
    calories: 590,
    protein: 44,
    carbs: 6,
    fat: 42,
    prepTime: '10 mins',
    cookTime: '12 mins',
    difficulty: 'Medium',
    tags: ['Keto', 'Low-Carb', 'High-Protein', 'Gluten-Free'],
    image: '🥩🎋',
    description: 'Tender pan-seared beef steak strips tossed with fresh asparagus spears in a rich garlic butter sauce.',
    ingredients: [
      { name: 'Sirloin Steak (cubed)', quantity: 200, unit: 'g' },
      { name: 'Asparagus (trimmed)', quantity: 1, unit: 'bunch' },
      { name: 'Butter', quantity: 2, unit: 'tbsp' },
      { name: 'Garlic (minced)', quantity: 3, unit: 'cloves' },
      { name: 'Olive Oil', quantity: 1, unit: 'tsp' },
      { name: 'Red Pepper Flakes', quantity: 0.25, unit: 'tsp' }
    ],
    instructions: [
      'Heat olive oil and 1 tbsp butter in a large skillet over high heat.',
      'Add steak bites and sear for 2 minutes on each side until browned. Transfer to a plate.',
      'Reduce heat to medium, add remaining butter, garlic, and asparagus to the skillet.',
      'Cook asparagus for 4-5 minutes until tender-crisp.',
      'Return steak to the pan, toss together with asparagus, sprinkle with red pepper flakes and serve.'
    ]
  },
  {
    id: 'd2',
    name: 'Vegan Sweet Potato & Chickpea Curry',
    mealType: 'dinner',
    calories: 460,
    protein: 12,
    carbs: 68,
    fat: 15,
    prepTime: '15 mins',
    cookTime: '25 mins',
    difficulty: 'Medium',
    tags: ['Vegan', 'Vegetarian', 'Gluten-Free', 'Balanced'],
    image: '🍠🍛',
    description: 'A creamy and warming coconut curry cooked with sweet potato cubes, tender chickpeas, and baby spinach.',
    ingredients: [
      { name: 'Sweet Potato (cubed)', quantity: 1, unit: 'medium' },
      { name: 'Canned Chickpeas', quantity: 0.5, unit: 'can' },
      { name: 'Light Coconut Milk', quantity: 0.75, unit: 'cup' },
      { name: 'Curry Powder', quantity: 1, unit: 'tbsp' },
      { name: 'Tomato Paste', quantity: 1, unit: 'tbsp' },
      { name: 'Baby Spinach', quantity: 1, unit: 'cup' },
      { name: 'Olive Oil', quantity: 1, unit: 'tsp' }
    ],
    instructions: [
      'Heat olive oil in a deep pan. Add tomato paste and curry powder, stirring for 1 minute.',
      'Add sweet potato cubes, drained chickpeas, and coconut milk.',
      'Bring to a boil, then cover and simmer over low heat for 15-20 minutes, until sweet potatoes are tender.',
      'Stir in spinach and cook for 2 minutes until wilted. Season with salt to taste.'
    ]
  },
  {
    id: 'd3',
    name: 'Baked Lemon Herb Salmon',
    mealType: 'dinner',
    calories: 450,
    protein: 36,
    carbs: 4,
    fat: 32,
    prepTime: '5 mins',
    cookTime: '15 mins',
    difficulty: 'Easy',
    tags: ['High-Protein', 'Keto', 'Low-Carb', 'Gluten-Free'],
    image: '🍋🐟',
    description: 'Oven-baked salmon fillet seasoned with dill, garlic, and fresh lemon slices, served with roasted broccoli.',
    ingredients: [
      { name: 'Salmon Fillet', quantity: 180, unit: 'g' },
      { name: 'Lemon (sliced)', quantity: 0.5, unit: 'pc' },
      { name: 'Olive Oil', quantity: 1, unit: 'tbsp' },
      { name: 'Fresh Dill (chopped)', quantity: 1, unit: 'tbsp' },
      { name: 'Garlic Powder', quantity: 0.5, unit: 'tsp' },
      { name: 'Broccoli Florets', quantity: 1.5, unit: 'cups' }
    ],
    instructions: [
      'Preheat oven to 400°F (200°C). Line a baking sheet with foil.',
      'Place salmon and broccoli florets on the baking sheet.',
      'Drizzle both with olive oil, and season with garlic powder, salt, and pepper.',
      'Place lemon slices and fresh dill on top of the salmon.',
      'Bake for 12-15 minutes until salmon flakes easily with a fork.'
    ]
  },
  {
    id: 'd4',
    name: 'Tofu stir-fry with Mixed Veggies',
    mealType: 'dinner',
    calories: 370,
    protein: 20,
    carbs: 26,
    fat: 20,
    prepTime: '15 mins',
    cookTime: '15 mins',
    difficulty: 'Medium',
    tags: ['Vegan', 'Vegetarian', 'Gluten-Free', 'Balanced'],
    image: '🫛🥢',
    description: 'Crispy pan-fried tofu cubes stir-fried with bell peppers, broccoli, and snap peas in a savory tamari glaze.',
    ingredients: [
      { name: 'Extra-Firm Tofu', quantity: 200, unit: 'g' },
      { name: 'Mixed Bell Peppers (sliced)', quantity: 1, unit: 'cup' },
      { name: 'Snap Peas', quantity: 0.5, unit: 'cup' },
      { name: 'Tamari (Gluten-Free Soy Sauce)', quantity: 2, unit: 'tbsp' },
      { name: 'Sesame Oil', quantity: 1, unit: 'tbsp' },
      { name: 'Ginger & Garlic (minced)', quantity: 1, unit: 'tsp' },
      { name: 'Maple Syrup', quantity: 1, unit: 'tsp' }
    ],
    instructions: [
      'Press tofu to remove excess water, then cut into cubes.',
      'Heat half the sesame oil in a skillet and cook tofu cubes until golden on all sides. Remove from pan.',
      'Add remaining oil, ginger, garlic, bell peppers, and snap peas to the pan. Sauté for 5 minutes.',
      'Whisk tamari and maple syrup together, pour into the pan with tofu.',
      'Toss everything to glaze and cook for another 2 minutes.'
    ]
  },
  {
    id: 'd5',
    name: 'Lean Beef & Broccoli Bowl',
    mealType: 'dinner',
    calories: 490,
    protein: 40,
    carbs: 18,
    fat: 28,
    prepTime: '10 mins',
    cookTime: '10 mins',
    difficulty: 'Easy',
    tags: ['High-Protein', 'Low-Carb', 'Balanced'],
    image: '🥩🥦',
    description: 'A classic stir-fry featuring tender strips of lean beef and broccoli florets tossed in a light ginger-soy sauce.',
    ingredients: [
      { name: 'Lean Beef Sirloin (sliced)', quantity: 180, unit: 'g' },
      { name: 'Broccoli Florets', quantity: 2, unit: 'cups' },
      { name: 'Soy Sauce', quantity: 2, unit: 'tbsp' },
      { name: 'Sesame Oil', quantity: 1, unit: 'tsp' },
      { name: 'Garlic (minced)', quantity: 2, unit: 'cloves' },
      { name: 'Cornstarch (or Arrowroot)', quantity: 0.5, unit: 'tsp' }
    ],
    instructions: [
      'Whisk soy sauce, minced garlic, cornstarch, and 2 tbsp water in a small bowl.',
      'Heat sesame oil in a wok or skillet over high heat.',
      'Add sliced beef and stir-fry for 3-4 minutes until cooked through. Remove beef.',
      'Add broccoli florets and 2 tbsp of water to the pan. Cover and steam for 3 minutes.',
      'Return beef to the pan, pour in the sauce, and toss until the sauce thickens (about 1 minute).'
    ]
  },

  // SNACK
  {
    id: 's1',
    name: 'Chia Seed Coconut Pudding',
    mealType: 'snack',
    calories: 180,
    protein: 4,
    carbs: 12,
    fat: 13,
    prepTime: '5 mins',
    cookTime: '0 mins',
    difficulty: 'Easy',
    tags: ['Vegan', 'Vegetarian', 'Keto', 'Gluten-Free', 'Low-Carb'],
    image: '🥥🥣',
    description: 'A highly nutritious snack made of chia seeds soaked in light coconut milk, vanilla, and erythritol/honey.',
    ingredients: [
      { name: 'Chia Seeds', quantity: 2.5, unit: 'tbsp' },
      { name: 'Light Coconut Milk', quantity: 0.5, unit: 'cup' },
      { name: 'Vanilla Extract', quantity: 0.5, unit: 'tsp' },
      { name: 'Honey or Keto Sweetener', quantity: 1, unit: 'tsp' }
    ],
    instructions: [
      'In a jar or small bowl, combine chia seeds, coconut milk, vanilla, and sweetener.',
      'Stir vigorously for 1 minute to prevent clumping.',
      'Let sit for 5 minutes, stir again, then refrigerate for at least 2 hours (or overnight) to set.',
      'Top with a raspberry or coconut flakes if desired.'
    ]
  },
  {
    id: 's2',
    name: 'Mixed Nuts & Dark Chocolate',
    mealType: 'snack',
    calories: 220,
    protein: 6,
    carbs: 14,
    fat: 18,
    prepTime: '2 mins',
    cookTime: '0 mins',
    difficulty: 'Easy',
    tags: ['Vegetarian', 'Keto', 'Gluten-Free', 'Low-Carb'],
    image: '🥜🍫',
    description: 'An energy-dense snack combining unsalted almonds, walnuts, and a square of 85% dark chocolate.',
    ingredients: [
      { name: 'Almonds', quantity: 10, unit: 'pcs' },
      { name: 'Walnut Halves', quantity: 5, unit: 'pcs' },
      { name: '85% Dark Chocolate', quantity: 1, unit: 'square' }
    ],
    instructions: [
      'Measure out the almonds and walnuts.',
      'Chop the dark chocolate square into small bits.',
      'Combine them together in a small bag or bowl for a quick, crunchy, and satisfying treat.'
    ]
  },
  {
    id: 's3',
    name: 'Hummus & Cucumber Slices',
    mealType: 'snack',
    calories: 140,
    protein: 4,
    carbs: 16,
    fat: 7,
    prepTime: '5 mins',
    cookTime: '0 mins',
    difficulty: 'Easy',
    tags: ['Vegan', 'Vegetarian', 'Gluten-Free', 'Balanced'],
    image: '🫓🥒',
    description: 'Fresh, hydrating cucumber wheels served alongside savory, fiber-packed garlic hummus.',
    ingredients: [
      { name: 'Cucumber (sliced into rounds)', quantity: 1, unit: 'pc' },
      { name: 'Hummus', quantity: 3, unit: 'tbsp' },
      { name: 'Paprika', quantity: 1, unit: 'pinch' }
    ],
    instructions: [
      'Wash and slice the cucumber into thick rounds.',
      'Spoon hummus onto a small plate or dipping bowl.',
      'Dust the hummus with a pinch of paprika for flavor.',
      'Dip cucumber slices into the hummus and enjoy.'
    ]
  },
  {
    id: 's4',
    name: 'Apple Slices with Almond Butter',
    mealType: 'snack',
    calories: 210,
    protein: 4,
    carbs: 24,
    fat: 12,
    prepTime: '3 mins',
    cookTime: '0 mins',
    difficulty: 'Easy',
    tags: ['Vegan', 'Vegetarian', 'Gluten-Free', 'Balanced'],
    image: '🍎🥜',
    description: 'Crisp apple wedges paired with smooth almond butter for a delicious sweet and savory snack.',
    ingredients: [
      { name: 'Medium Apple', quantity: 1, unit: 'pc' },
      { name: 'Almond Butter', quantity: 1, unit: 'tbsp' },
      { name: 'Cinnamon', quantity: 1, unit: 'pinch' }
    ],
    instructions: [
      'Core and slice the apple into wedges.',
      'Place almond butter on a plate.',
      'Dust apple slices with a pinch of cinnamon.',
      'Dip the wedges into the almond butter.'
    ]
  },
  {
    id: 's5',
    name: 'High-Protein Whey Shake',
    mealType: 'snack',
    calories: 170,
    protein: 26,
    carbs: 6,
    fat: 3,
    prepTime: '2 mins',
    cookTime: '0 mins',
    difficulty: 'Easy',
    tags: ['High-Protein', 'Low-Carb', 'Gluten-Free', 'Vegetarian'],
    image: '🥤🥛',
    description: 'A fast, protein-dense shake made with whey isolate, almond milk, and a dash of cocoa powder.',
    ingredients: [
      { name: 'Whey Protein Isolate (Vanilla/Chocolate)', quantity: 1, unit: 'scoop' },
      { name: 'Unsweetened Almond Milk', quantity: 1.25, unit: 'cups' },
      { name: 'Cocoa Powder', quantity: 1, unit: 'tsp' }
    ],
    instructions: [
      'Combine all ingredients in a blender cup or protein shaker bottle.',
      'Blend or shake vigorously for 30 seconds until fully smooth and lump-free.',
      'Pour over ice if desired and drink immediately.'
    ]
  }
];
