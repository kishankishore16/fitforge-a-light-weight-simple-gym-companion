export const dietGoals = [
  { id: 'weightLoss', name: 'Weight Loss', emoji: '🔥', calories: '1600-1800', description: 'Calorie deficit to burn fat while preserving muscle' },
  { id: 'muscleGain', name: 'Muscle Gain', emoji: '💪', calories: '2500-3000', description: 'Calorie surplus with high protein for muscle growth' },
  { id: 'maintenance', name: 'Maintenance', emoji: '⚖️', calories: '2000-2200', description: 'Balanced intake to maintain current weight and health' }
];

export const dietPlans = [
  // ========================================
  // WEIGHT LOSS - VEGETARIAN
  // ========================================
  {
    id: 'weight-loss-veg',
    name: 'Weight Loss - Vegetarian',
    goal: 'weightLoss',
    dietType: 'vegetarian',
    dailyCalories: '1600-1800',
    description: 'A budget-friendly Indian vegetarian plan focused on high protein, moderate carbs, and low fat to support fat loss while keeping you full and energized.',
    dailyBudget: '₹100-150',
    macroSplit: { protein: 30, carbs: 45, fat: 25 },
    weeklyPlan: [
      {
        day: 'Monday',
        meals: [
          { type: 'breakfast', name: 'Moong Dal Cheela with Curd', ingredients: ['1 cup moong dal batter', '100g low-fat curd', '1 tsp oil', 'Onion, green chilli'], calories: 280, protein: 18, carbs: 32, fat: 8, prepTime: '15 min', cost: '₹25' },
          { type: 'midMorning', name: 'Green Tea + Apple', ingredients: ['1 cup green tea', '1 medium apple'], calories: 95, protein: 1, carbs: 22, fat: 0, prepTime: '3 min', cost: '₹15' },
          { type: 'lunch', name: 'Roti + Palak Paneer + Salad', ingredients: ['2 wheat roti', '150g palak paneer', 'Cucumber-tomato salad'], calories: 450, protein: 22, carbs: 48, fat: 18, prepTime: '25 min', cost: '₹35' },
          { type: 'preWorkout', name: 'Banana + Black Coffee', ingredients: ['1 banana', '1 cup black coffee'], calories: 115, protein: 2, carbs: 28, fat: 0, prepTime: '2 min', cost: '₹10' },
          { type: 'postWorkout', name: 'Sattu Shake', ingredients: ['30g sattu', '200ml water', 'Lemon, salt, jeera'], calories: 120, protein: 12, carbs: 15, fat: 2, prepTime: '3 min', cost: '₹10' },
          { type: 'dinner', name: 'Moong Dal + 1 Roti + Sabzi', ingredients: ['1 cup moong dal', '1 roti', '100g mixed veg sabzi'], calories: 380, protein: 20, carbs: 52, fat: 8, prepTime: '20 min', cost: '₹25' }
        ]
      },
      {
        day: 'Tuesday',
        meals: [
          { type: 'breakfast', name: 'Oats Upma with Vegetables', ingredients: ['1 cup oats', 'Mixed vegetables', '1 tsp oil', 'Mustard seeds, curry leaves'], calories: 260, protein: 10, carbs: 42, fat: 6, prepTime: '12 min', cost: '₹20' },
          { type: 'midMorning', name: 'Roasted Chana + Nimbu Pani', ingredients: ['30g roasted chana', '1 glass nimbu pani'], calories: 130, protein: 8, carbs: 18, fat: 3, prepTime: '3 min', cost: '₹10' },
          { type: 'lunch', name: 'Brown Rice + Rajma + Raita', ingredients: ['1 cup brown rice', '1 cup rajma curry', '100g raita'], calories: 480, protein: 22, carbs: 65, fat: 12, prepTime: '30 min', cost: '₹30' },
          { type: 'preWorkout', name: 'Toast + Peanut Butter', ingredients: ['1 whole wheat toast', '1 tbsp peanut butter'], calories: 150, protein: 6, carbs: 16, fat: 8, prepTime: '3 min', cost: '₹12' },
          { type: 'postWorkout', name: 'Buttermilk + Sprouts', ingredients: ['1 glass buttermilk', '50g boiled sprouts'], calories: 110, protein: 10, carbs: 12, fat: 2, prepTime: '5 min', cost: '₹10' },
          { type: 'dinner', name: 'Besan Chilla + Curd', ingredients: ['2 besan chilla', '100g curd', 'Green chutney'], calories: 310, protein: 18, carbs: 28, fat: 14, prepTime: '15 min', cost: '₹20' }
        ]
      },
      {
        day: 'Wednesday',
        meals: [
          { type: 'breakfast', name: 'Poha with Peanuts', ingredients: ['1 cup poha', '15g peanuts', 'Onion, curry leaves, turmeric'], calories: 290, protein: 8, carbs: 45, fat: 9, prepTime: '10 min', cost: '₹15' },
          { type: 'midMorning', name: 'Curd + Flax Seeds', ingredients: ['150g curd', '1 tbsp flax seeds'], calories: 120, protein: 8, carbs: 10, fat: 5, prepTime: '2 min', cost: '₹12' },
          { type: 'lunch', name: 'Roti + Chole + Salad', ingredients: ['2 roti', '1 cup chole', 'Onion-cucumber salad'], calories: 460, protein: 20, carbs: 62, fat: 14, prepTime: '25 min', cost: '₹30' },
          { type: 'preWorkout', name: 'Banana', ingredients: ['1 large banana'], calories: 105, protein: 1, carbs: 27, fat: 0, prepTime: '1 min', cost: '₹5' },
          { type: 'postWorkout', name: 'Paneer Bhurji (dry)', ingredients: ['80g paneer', '1 tsp oil', 'Onion, tomato, spices'], calories: 200, protein: 16, carbs: 5, fat: 14, prepTime: '10 min', cost: '₹25' },
          { type: 'dinner', name: 'Masoor Dal + Rice', ingredients: ['1 cup masoor dal', '0.5 cup rice', 'Tadka'], calories: 350, protein: 18, carbs: 52, fat: 6, prepTime: '20 min', cost: '₹20' }
        ]
      },
      {
        day: 'Thursday',
        meals: [
          { type: 'breakfast', name: 'Idli + Sambar', ingredients: ['3 idli', '1 cup sambar', 'Coconut chutney'], calories: 300, protein: 10, carbs: 52, fat: 6, prepTime: '20 min', cost: '₹20' },
          { type: 'midMorning', name: 'Papaya + Green Tea', ingredients: ['1 cup papaya', '1 cup green tea'], calories: 65, protein: 1, carbs: 15, fat: 0, prepTime: '3 min', cost: '₹12' },
          { type: 'lunch', name: 'Roti + Soya Chunk Curry + Raita', ingredients: ['2 roti', '1 cup soya chunk curry', '80g raita'], calories: 470, protein: 32, carbs: 48, fat: 14, prepTime: '25 min', cost: '₹25' },
          { type: 'preWorkout', name: 'Makhana (Fox Nuts)', ingredients: ['30g roasted makhana'], calories: 100, protein: 4, carbs: 18, fat: 1, prepTime: '5 min', cost: '₹15' },
          { type: 'postWorkout', name: 'Milk + Banana', ingredients: ['200ml toned milk', '1 banana'], calories: 200, protein: 9, carbs: 34, fat: 4, prepTime: '2 min', cost: '₹15' },
          { type: 'dinner', name: 'Mixed Veg Curry + Roti', ingredients: ['1 cup mixed veg curry', '1 roti', 'Dal tadka'], calories: 340, protein: 14, carbs: 45, fat: 10, prepTime: '20 min', cost: '₹25' }
        ]
      },
      {
        day: 'Friday',
        meals: [
          { type: 'breakfast', name: 'Sprout Salad with Lemon', ingredients: ['1 cup mixed sprouts', 'Onion, tomato, lemon, chaat masala'], calories: 180, protein: 14, carbs: 28, fat: 2, prepTime: '10 min', cost: '₹15' },
          { type: 'midMorning', name: 'Coconut Water', ingredients: ['1 coconut'], calories: 45, protein: 1, carbs: 9, fat: 0, prepTime: '1 min', cost: '₹20' },
          { type: 'lunch', name: 'Dal Khichdi + Curd', ingredients: ['1 cup dal khichdi', '100g curd', 'Papad'], calories: 420, protein: 18, carbs: 58, fat: 12, prepTime: '25 min', cost: '₹25' },
          { type: 'preWorkout', name: 'Apple + Peanuts', ingredients: ['1 apple', '15g peanuts'], calories: 155, protein: 5, carbs: 22, fat: 7, prepTime: '2 min', cost: '₹15' },
          { type: 'postWorkout', name: 'Curd + Honey', ingredients: ['150g curd', '1 tsp honey'], calories: 130, protein: 6, carbs: 18, fat: 4, prepTime: '2 min', cost: '₹12' },
          { type: 'dinner', name: 'Toor Dal + Roti + Bhindi', ingredients: ['1 cup toor dal', '1 roti', '100g bhindi fry'], calories: 370, protein: 16, carbs: 45, fat: 12, prepTime: '25 min', cost: '₹25' }
        ]
      },
      {
        day: 'Saturday',
        meals: [
          { type: 'breakfast', name: 'Dalia (Daliya) with Milk', ingredients: ['1 cup dalia', '150ml milk', 'Jaggery'], calories: 280, protein: 12, carbs: 48, fat: 5, prepTime: '15 min', cost: '₹15' },
          { type: 'midMorning', name: 'Roasted Peanuts + Guava', ingredients: ['20g peanuts', '1 guava'], calories: 140, protein: 7, carbs: 12, fat: 8, prepTime: '2 min', cost: '₹10' },
          { type: 'lunch', name: 'Curd Rice + Pickle', ingredients: ['1 cup curd rice', 'Pickle', 'Pomegranate seeds'], calories: 350, protein: 12, carbs: 55, fat: 8, prepTime: '10 min', cost: '₹20' },
          { type: 'preWorkout', name: 'Dates + Almonds', ingredients: ['3 dates', '5 almonds'], calories: 145, protein: 3, carbs: 24, fat: 5, prepTime: '1 min', cost: '₹15' },
          { type: 'postWorkout', name: 'Sattu Shake', ingredients: ['30g sattu', '200ml water', 'Lemon, salt'], calories: 120, protein: 12, carbs: 15, fat: 2, prepTime: '3 min', cost: '₹10' },
          { type: 'dinner', name: 'Paneer Tikka + Salad', ingredients: ['100g paneer', 'Bell peppers, onion', 'Green salad'], calories: 320, protein: 22, carbs: 12, fat: 22, prepTime: '20 min', cost: '₹35' }
        ]
      },
      {
        day: 'Sunday',
        meals: [
          { type: 'breakfast', name: 'Vegetable Paratha + Curd', ingredients: ['1 stuffed paratha', '100g curd'], calories: 320, protein: 10, carbs: 38, fat: 14, prepTime: '20 min', cost: '₹20' },
          { type: 'midMorning', name: 'Banana Shake', ingredients: ['1 banana', '200ml milk'], calories: 195, protein: 9, carbs: 34, fat: 4, prepTime: '3 min', cost: '₹15' },
          { type: 'lunch', name: 'Rice + Dal Fry + Aloo Gobi', ingredients: ['1 cup rice', '1 cup dal fry', '100g aloo gobi'], calories: 500, protein: 18, carbs: 72, fat: 14, prepTime: '30 min', cost: '₹30' },
          { type: 'preWorkout', name: 'Rest Day - skip', ingredients: [], calories: 0, protein: 0, carbs: 0, fat: 0, prepTime: '0 min', cost: '₹0' },
          { type: 'postWorkout', name: 'Rest Day - skip', ingredients: [], calories: 0, protein: 0, carbs: 0, fat: 0, prepTime: '0 min', cost: '₹0' },
          { type: 'dinner', name: 'Roti + Chana Dal + Lauki Sabzi', ingredients: ['2 roti', '1 cup chana dal', '100g lauki sabzi'], calories: 420, protein: 18, carbs: 58, fat: 12, prepTime: '25 min', cost: '₹25' }
        ]
      }
    ]
  },
  // ========================================
  // WEIGHT LOSS - NON-VEGETARIAN
  // ========================================
  {
    id: 'weight-loss-nonveg',
    name: 'Weight Loss - Non-Vegetarian',
    goal: 'weightLoss',
    dietType: 'nonVegetarian',
    dailyCalories: '1600-1800',
    description: 'High-protein Indian non-vegetarian plan optimized for fat loss. Eggs and chicken provide affordable, lean protein to support your deficit.',
    dailyBudget: '₹120-170',
    macroSplit: { protein: 35, carbs: 40, fat: 25 },
    weeklyPlan: [
      {
        day: 'Monday',
        meals: [
          { type: 'breakfast', name: 'Egg White Omelette + Toast', ingredients: ['4 egg whites + 1 whole egg', '2 bread slices', 'Onion, tomato, green chilli'], calories: 280, protein: 24, carbs: 28, fat: 8, prepTime: '10 min', cost: '₹25' },
          { type: 'midMorning', name: 'Apple + Green Tea', ingredients: ['1 apple', '1 cup green tea'], calories: 95, protein: 1, carbs: 22, fat: 0, prepTime: '3 min', cost: '₹15' },
          { type: 'lunch', name: 'Chicken Curry + Rice', ingredients: ['150g chicken curry', '1 cup rice', 'Salad'], calories: 480, protein: 35, carbs: 48, fat: 14, prepTime: '30 min', cost: '₹40' },
          { type: 'preWorkout', name: 'Banana + Black Coffee', ingredients: ['1 banana', '1 cup black coffee'], calories: 115, protein: 2, carbs: 28, fat: 0, prepTime: '2 min', cost: '₹10' },
          { type: 'postWorkout', name: 'Boiled Eggs + Bread', ingredients: ['3 boiled egg whites', '1 bread slice'], calories: 130, protein: 15, carbs: 14, fat: 2, prepTime: '12 min', cost: '₹15' },
          { type: 'dinner', name: 'Fish Curry + Roti', ingredients: ['150g fish curry', '1 roti', 'Onion salad'], calories: 380, protein: 30, carbs: 32, fat: 14, prepTime: '25 min', cost: '₹35' }
        ]
      },
      {
        day: 'Tuesday',
        meals: [
          { type: 'breakfast', name: 'Boiled Eggs + Paratha', ingredients: ['3 boiled eggs', '1 wheat paratha'], calories: 340, protein: 22, carbs: 28, fat: 16, prepTime: '15 min', cost: '₹20' },
          { type: 'midMorning', name: 'Buttermilk + Roasted Chana', ingredients: ['1 glass buttermilk', '30g roasted chana'], calories: 130, protein: 10, carbs: 16, fat: 3, prepTime: '3 min', cost: '₹10' },
          { type: 'lunch', name: 'Roti + Egg Curry + Dal', ingredients: ['2 roti', '2-egg curry', '0.5 cup dal'], calories: 490, protein: 28, carbs: 52, fat: 18, prepTime: '25 min', cost: '₹30' },
          { type: 'preWorkout', name: 'Toast + Peanut Butter', ingredients: ['1 toast', '1 tbsp peanut butter'], calories: 150, protein: 6, carbs: 16, fat: 8, prepTime: '3 min', cost: '₹12' },
          { type: 'postWorkout', name: 'Chicken Salad', ingredients: ['100g grilled chicken', 'Cucumber, tomato, lemon'], calories: 165, protein: 25, carbs: 5, fat: 5, prepTime: '15 min', cost: '₹25' },
          { type: 'dinner', name: 'Moong Dal + Roti', ingredients: ['1 cup moong dal', '1 roti', 'Pickle'], calories: 310, protein: 16, carbs: 42, fat: 8, prepTime: '20 min', cost: '₹20' }
        ]
      },
      {
        day: 'Wednesday',
        meals: [
          { type: 'breakfast', name: 'Masala Omelette + Roti', ingredients: ['3 eggs', '1 roti', 'Onion, tomato, coriander'], calories: 330, protein: 22, carbs: 24, fat: 16, prepTime: '10 min', cost: '₹20' },
          { type: 'midMorning', name: 'Curd + Flax Seeds', ingredients: ['150g curd', '1 tbsp flax seeds'], calories: 120, protein: 8, carbs: 10, fat: 5, prepTime: '2 min', cost: '₹12' },
          { type: 'lunch', name: 'Rice + Chicken Stir-Fry', ingredients: ['1 cup rice', '150g chicken breast stir-fry', 'Mixed vegetables'], calories: 470, protein: 38, carbs: 45, fat: 12, prepTime: '20 min', cost: '₹40' },
          { type: 'preWorkout', name: 'Banana', ingredients: ['1 banana'], calories: 105, protein: 1, carbs: 27, fat: 0, prepTime: '1 min', cost: '₹5' },
          { type: 'postWorkout', name: 'Egg Whites + Milk', ingredients: ['4 boiled egg whites', '200ml milk'], calories: 160, protein: 22, carbs: 10, fat: 4, prepTime: '12 min', cost: '₹18' },
          { type: 'dinner', name: 'Grilled Fish + Salad', ingredients: ['150g grilled fish', 'Mixed salad', 'Lemon dressing'], calories: 250, protein: 32, carbs: 8, fat: 10, prepTime: '20 min', cost: '₹35' }
        ]
      },
      {
        day: 'Thursday',
        meals: [
          { type: 'breakfast', name: 'Poha with Peanuts', ingredients: ['1 cup poha', '15g peanuts', 'Onion, curry leaves'], calories: 290, protein: 8, carbs: 45, fat: 9, prepTime: '10 min', cost: '₹15' },
          { type: 'midMorning', name: 'Boiled Egg + Green Tea', ingredients: ['1 boiled egg', '1 cup green tea'], calories: 78, protein: 6, carbs: 1, fat: 5, prepTime: '12 min', cost: '₹8' },
          { type: 'lunch', name: 'Chicken Biryani (light)', ingredients: ['1 plate chicken biryani (1 cup rice + 100g chicken)', 'Raita'], calories: 480, protein: 28, carbs: 55, fat: 16, prepTime: '40 min', cost: '₹40' },
          { type: 'preWorkout', name: 'Dates + Almonds', ingredients: ['3 dates', '5 almonds'], calories: 145, protein: 3, carbs: 24, fat: 5, prepTime: '1 min', cost: '₹15' },
          { type: 'postWorkout', name: 'Sattu Shake', ingredients: ['30g sattu', '200ml water', 'Lemon, salt'], calories: 120, protein: 12, carbs: 15, fat: 2, prepTime: '3 min', cost: '₹10' },
          { type: 'dinner', name: 'Dal + Roti + Egg Bhurji', ingredients: ['0.5 cup dal', '1 roti', '2-egg bhurji'], calories: 380, protein: 22, carbs: 35, fat: 16, prepTime: '15 min', cost: '₹22' }
        ]
      },
      {
        day: 'Friday',
        meals: [
          { type: 'breakfast', name: 'Egg Dosa', ingredients: ['2 dosa', '2 eggs', 'Sambar'], calories: 350, protein: 18, carbs: 42, fat: 12, prepTime: '15 min', cost: '₹20' },
          { type: 'midMorning', name: 'Makhana + Tea', ingredients: ['30g roasted makhana', '1 cup tea'], calories: 130, protein: 5, carbs: 20, fat: 2, prepTime: '5 min', cost: '₹15' },
          { type: 'lunch', name: 'Roti + Keema + Salad', ingredients: ['2 roti', '1 cup chicken keema', 'Cucumber salad'], calories: 490, protein: 35, carbs: 40, fat: 18, prepTime: '25 min', cost: '₹40' },
          { type: 'preWorkout', name: 'Apple', ingredients: ['1 apple'], calories: 95, protein: 1, carbs: 22, fat: 0, prepTime: '1 min', cost: '₹10' },
          { type: 'postWorkout', name: 'Boiled Eggs', ingredients: ['3 boiled eggs (2 whites only)'], calories: 140, protein: 17, carbs: 1, fat: 7, prepTime: '12 min', cost: '₹12' },
          { type: 'dinner', name: 'Toor Dal + Rice', ingredients: ['1 cup toor dal', '0.5 cup rice'], calories: 320, protein: 16, carbs: 50, fat: 6, prepTime: '20 min', cost: '₹18' }
        ]
      },
      {
        day: 'Saturday',
        meals: [
          { type: 'breakfast', name: 'Bread Omelette + Juice', ingredients: ['3-egg omelette', '2 bread slices', '1 glass orange juice'], calories: 380, protein: 22, carbs: 38, fat: 14, prepTime: '10 min', cost: '₹25' },
          { type: 'midMorning', name: 'Coconut Water', ingredients: ['1 coconut'], calories: 45, protein: 1, carbs: 9, fat: 0, prepTime: '1 min', cost: '₹20' },
          { type: 'lunch', name: 'Tandoori Chicken + Roti + Raita', ingredients: ['150g tandoori chicken', '1 roti', '80g raita'], calories: 420, protein: 38, carbs: 28, fat: 16, prepTime: '30 min', cost: '₹45' },
          { type: 'preWorkout', name: 'Banana + Peanuts', ingredients: ['1 banana', '15g peanuts'], calories: 190, protein: 6, carbs: 30, fat: 7, prepTime: '1 min', cost: '₹10' },
          { type: 'postWorkout', name: 'Milk', ingredients: ['200ml toned milk'], calories: 100, protein: 6, carbs: 10, fat: 4, prepTime: '1 min', cost: '₹10' },
          { type: 'dinner', name: 'Egg Curry + Roti', ingredients: ['2-egg curry', '1 roti', 'Salad'], calories: 360, protein: 20, carbs: 32, fat: 16, prepTime: '20 min', cost: '₹20' }
        ]
      },
      {
        day: 'Sunday',
        meals: [
          { type: 'breakfast', name: 'Upma + Boiled Eggs', ingredients: ['1 cup upma', '2 boiled eggs'], calories: 340, protein: 18, carbs: 40, fat: 12, prepTime: '15 min', cost: '₹20' },
          { type: 'midMorning', name: 'Fruit Salad', ingredients: ['Mixed seasonal fruits 150g'], calories: 80, protein: 1, carbs: 20, fat: 0, prepTime: '5 min', cost: '₹15' },
          { type: 'lunch', name: 'Rice + Fish Fry + Dal', ingredients: ['1 cup rice', '150g fish fry', '0.5 cup dal'], calories: 500, protein: 35, carbs: 50, fat: 16, prepTime: '30 min', cost: '₹40' },
          { type: 'preWorkout', name: 'Rest Day', ingredients: [], calories: 0, protein: 0, carbs: 0, fat: 0, prepTime: '0 min', cost: '₹0' },
          { type: 'postWorkout', name: 'Rest Day', ingredients: [], calories: 0, protein: 0, carbs: 0, fat: 0, prepTime: '0 min', cost: '₹0' },
          { type: 'dinner', name: 'Chicken Soup + Bread', ingredients: ['1 bowl chicken soup', '2 bread slices', 'Salad'], calories: 300, protein: 22, carbs: 30, fat: 10, prepTime: '20 min', cost: '₹25' }
        ]
      }
    ]
  },
  // ========================================
  // MUSCLE GAIN - VEGETARIAN
  // ========================================
  {
    id: 'muscle-gain-veg',
    name: 'Muscle Gain - Vegetarian',
    goal: 'muscleGain',
    dietType: 'vegetarian',
    dailyCalories: '2500-3000',
    description: 'Calorie surplus vegetarian plan loaded with paneer, soya chunks, dal, nuts, and dairy. Designed to fuel heavy training and build lean muscle on a budget.',
    dailyBudget: '₹150-200',
    macroSplit: { protein: 30, carbs: 50, fat: 20 },
    weeklyPlan: [
      {
        day: 'Monday',
        meals: [
          { type: 'breakfast', name: 'Masala Oats + Banana Shake', ingredients: ['1.5 cups oats', '1 banana', '300ml milk', '20g peanuts', 'Jaggery'], calories: 550, protein: 22, carbs: 78, fat: 16, prepTime: '12 min', cost: '₹30' },
          { type: 'midMorning', name: 'Paneer Sandwich', ingredients: ['50g paneer', '2 bread slices', 'Mint chutney'], calories: 300, protein: 16, carbs: 28, fat: 14, prepTime: '8 min', cost: '₹25' },
          { type: 'lunch', name: 'Rice + Rajma + Curd + Salad', ingredients: ['1.5 cups rice', '1.5 cups rajma', '100g curd', 'Salad'], calories: 650, protein: 28, carbs: 95, fat: 14, prepTime: '30 min', cost: '₹35' },
          { type: 'preWorkout', name: 'Banana + Dates + Coffee', ingredients: ['1 banana', '4 dates', '1 cup coffee'], calories: 220, protein: 3, carbs: 52, fat: 1, prepTime: '3 min', cost: '₹15' },
          { type: 'postWorkout', name: 'Sattu Shake + Peanut Butter Toast', ingredients: ['40g sattu', '1 toast', '1 tbsp peanut butter', '300ml milk'], calories: 400, protein: 28, carbs: 40, fat: 14, prepTime: '5 min', cost: '₹25' },
          { type: 'dinner', name: 'Roti + Soya Chunk Curry + Dal', ingredients: ['3 roti', '1 cup soya chunks curry', '1 cup dal', 'Ghee 1 tsp'], calories: 680, protein: 42, carbs: 78, fat: 18, prepTime: '25 min', cost: '₹35' }
        ]
      },
      {
        day: 'Tuesday',
        meals: [
          { type: 'breakfast', name: 'Paratha + Curd + Almonds', ingredients: ['2 aloo paratha', '150g curd', '10 almonds'], calories: 580, protein: 18, carbs: 62, fat: 28, prepTime: '20 min', cost: '₹30' },
          { type: 'midMorning', name: 'Sprout Chaat', ingredients: ['1 cup mixed sprouts', 'Onion, lemon, chaat masala'], calories: 200, protein: 14, carbs: 30, fat: 2, prepTime: '5 min', cost: '₹15' },
          { type: 'lunch', name: 'Rice + Chole + Paneer Bhurji', ingredients: ['1.5 cups rice', '1 cup chole', '80g paneer bhurji', 'Salad'], calories: 700, protein: 34, carbs: 85, fat: 22, prepTime: '30 min', cost: '₹40' },
          { type: 'preWorkout', name: 'Banana + Peanuts', ingredients: ['1 banana', '30g peanuts'], calories: 275, protein: 9, carbs: 32, fat: 14, prepTime: '1 min', cost: '₹10' },
          { type: 'postWorkout', name: 'Milk + Dalia', ingredients: ['300ml milk', '1 cup cooked dalia', 'Jaggery'], calories: 380, protein: 18, carbs: 55, fat: 8, prepTime: '15 min', cost: '₹20' },
          { type: 'dinner', name: 'Roti + Palak Paneer + Dal', ingredients: ['3 roti', '150g palak paneer', '1 cup moong dal'], calories: 650, protein: 32, carbs: 68, fat: 24, prepTime: '25 min', cost: '₹40' }
        ]
      },
      {
        day: 'Wednesday',
        meals: [
          { type: 'breakfast', name: 'Besan Chilla + Shake', ingredients: ['3 besan chilla', 'Banana milkshake (1 banana, 300ml milk)'], calories: 530, protein: 24, carbs: 58, fat: 20, prepTime: '15 min', cost: '₹25' },
          { type: 'midMorning', name: 'Trail Mix', ingredients: ['20g almonds', '15g cashews', '10g raisins'], calories: 250, protein: 7, carbs: 18, fat: 18, prepTime: '1 min', cost: '₹25' },
          { type: 'lunch', name: 'Rice + Dal Fry + Aloo Gobi + Roti', ingredients: ['1 cup rice', '1 cup dal fry', '100g aloo gobi', '1 roti', 'Ghee'], calories: 680, protein: 24, carbs: 98, fat: 18, prepTime: '30 min', cost: '₹35' },
          { type: 'preWorkout', name: 'Peanut Butter Toast + Coffee', ingredients: ['2 toast', '2 tbsp peanut butter', '1 cup coffee'], calories: 310, protein: 12, carbs: 28, fat: 18, prepTime: '3 min', cost: '₹15' },
          { type: 'postWorkout', name: 'Soya Chunks (dry) + Curd', ingredients: ['50g soya chunks (boiled & stir-fried)', '150g curd'], calories: 280, protein: 30, carbs: 18, fat: 8, prepTime: '15 min', cost: '₹15' },
          { type: 'dinner', name: 'Roti + Paneer Butter Masala + Rice', ingredients: ['2 roti', '100g paneer curry', '0.5 cup rice'], calories: 650, protein: 26, carbs: 72, fat: 26, prepTime: '25 min', cost: '₹40' }
        ]
      },
      {
        day: 'Thursday',
        meals: [
          { type: 'breakfast', name: 'Idli + Peanut Chutney + Milk', ingredients: ['4 idli', 'Peanut chutney', '200ml milk'], calories: 480, protein: 18, carbs: 68, fat: 14, prepTime: '20 min', cost: '₹25' },
          { type: 'midMorning', name: 'Makhana + Curd', ingredients: ['40g roasted makhana', '100g curd'], calories: 210, protein: 10, carbs: 28, fat: 5, prepTime: '3 min', cost: '₹20' },
          { type: 'lunch', name: 'Rice + Soya Keema + Roti + Dal', ingredients: ['1 cup rice', '1 cup soya keema', '1 roti', '0.5 cup dal'], calories: 700, protein: 38, carbs: 88, fat: 16, prepTime: '25 min', cost: '₹30' },
          { type: 'preWorkout', name: 'Banana + Honey', ingredients: ['2 bananas', '1 tbsp honey'], calories: 275, protein: 3, carbs: 68, fat: 1, prepTime: '1 min', cost: '₹12' },
          { type: 'postWorkout', name: 'Paneer Tikka + Milk', ingredients: ['80g paneer tikka', '200ml milk'], calories: 340, protein: 24, carbs: 12, fat: 22, prepTime: '15 min', cost: '₹30' },
          { type: 'dinner', name: 'Roti + Mixed Dal + Sabzi', ingredients: ['3 roti', '1 cup mixed dal', '100g mixed veg sabzi', 'Ghee'], calories: 620, protein: 26, carbs: 80, fat: 18, prepTime: '25 min', cost: '₹30' }
        ]
      },
      {
        day: 'Friday',
        meals: [
          { type: 'breakfast', name: 'Poha + Boiled Peanuts + Milk', ingredients: ['1.5 cups poha', '30g boiled peanuts', '200ml milk'], calories: 500, protein: 18, carbs: 62, fat: 18, prepTime: '12 min', cost: '₹20' },
          { type: 'midMorning', name: 'Fruit + Curd', ingredients: ['1 banana', '1 apple', '100g curd'], calories: 240, protein: 8, carbs: 48, fat: 4, prepTime: '3 min', cost: '₹20' },
          { type: 'lunch', name: 'Rice + Rajma + Paneer + Roti', ingredients: ['1 cup rice', '1 cup rajma', '60g paneer', '1 roti'], calories: 720, protein: 32, carbs: 92, fat: 20, prepTime: '30 min', cost: '₹40' },
          { type: 'preWorkout', name: 'Dates + Almonds + Coffee', ingredients: ['4 dates', '8 almonds', 'Coffee'], calories: 250, protein: 5, carbs: 38, fat: 9, prepTime: '2 min', cost: '₹20' },
          { type: 'postWorkout', name: 'Sattu + Banana Shake', ingredients: ['40g sattu', '1 banana', '300ml milk'], calories: 380, protein: 24, carbs: 50, fat: 8, prepTime: '3 min', cost: '₹20' },
          { type: 'dinner', name: 'Roti + Soya Chunk Curry + Curd', ingredients: ['3 roti', '1 cup soya chunk curry', '100g curd'], calories: 620, protein: 38, carbs: 68, fat: 16, prepTime: '25 min', cost: '₹30' }
        ]
      },
      {
        day: 'Saturday',
        meals: [
          { type: 'breakfast', name: 'Moong Dal Cheela + Paneer + Shake', ingredients: ['3 moong dal cheela', '50g paneer filling', 'Banana shake'], calories: 550, protein: 30, carbs: 52, fat: 22, prepTime: '20 min', cost: '₹30' },
          { type: 'midMorning', name: 'Peanut Chikki + Milk', ingredients: ['2 peanut chikki', '200ml milk'], calories: 320, protein: 12, carbs: 32, fat: 16, prepTime: '1 min', cost: '₹15' },
          { type: 'lunch', name: 'Biryani (Veg) + Raita', ingredients: ['1.5 cups veg biryani', '100g raita', 'Papad'], calories: 650, protein: 18, carbs: 90, fat: 22, prepTime: '35 min', cost: '₹35' },
          { type: 'preWorkout', name: 'PB Toast + Banana', ingredients: ['2 toast', '2 tbsp peanut butter', '1 banana'], calories: 420, protein: 14, carbs: 50, fat: 20, prepTime: '3 min', cost: '₹18' },
          { type: 'postWorkout', name: 'Sprouts + Curd', ingredients: ['1 cup sprouts', '150g curd', 'Chaat masala'], calories: 240, protein: 18, carbs: 28, fat: 5, prepTime: '5 min', cost: '₹15' },
          { type: 'dinner', name: 'Roti + Paneer Bhurji + Dal', ingredients: ['3 roti', '100g paneer bhurji', '1 cup dal'], calories: 680, protein: 36, carbs: 70, fat: 24, prepTime: '25 min', cost: '₹40' }
        ]
      },
      {
        day: 'Sunday',
        meals: [
          { type: 'breakfast', name: 'Aloo Paratha + Curd + Shake', ingredients: ['2 aloo paratha', '150g curd', 'Banana milkshake'], calories: 620, protein: 20, carbs: 72, fat: 26, prepTime: '20 min', cost: '₹30' },
          { type: 'midMorning', name: 'Mixed Nuts + Fruit', ingredients: ['30g mixed nuts', '1 apple'], calories: 270, protein: 7, carbs: 28, fat: 16, prepTime: '1 min', cost: '₹25' },
          { type: 'lunch', name: 'Rice + Dal + Sabzi + Papad + Curd', ingredients: ['1.5 cups rice', '1 cup dal', 'Mixed sabzi', 'Papad', '100g curd'], calories: 700, protein: 24, carbs: 100, fat: 18, prepTime: '30 min', cost: '₹35' },
          { type: 'preWorkout', name: 'Rest Day', ingredients: [], calories: 0, protein: 0, carbs: 0, fat: 0, prepTime: '0 min', cost: '₹0' },
          { type: 'postWorkout', name: 'Rest Day', ingredients: [], calories: 0, protein: 0, carbs: 0, fat: 0, prepTime: '0 min', cost: '₹0' },
          { type: 'dinner', name: 'Roti + Chole + Raita', ingredients: ['3 roti', '1.5 cups chole', '100g raita', 'Pickle'], calories: 640, protein: 26, carbs: 82, fat: 18, prepTime: '25 min', cost: '₹30' }
        ]
      }
    ]
  },
  // ========================================
  // MUSCLE GAIN - NON-VEGETARIAN
  // ========================================
  {
    id: 'muscle-gain-nonveg',
    name: 'Muscle Gain - Non-Vegetarian',
    goal: 'muscleGain',
    dietType: 'nonVegetarian',
    dailyCalories: '2500-3000',
    description: 'The ultimate muscle-building Indian plan with chicken, eggs, and fish as primary protein sources. High protein, calorie-dense meals to fuel intense training.',
    dailyBudget: '₹180-250',
    macroSplit: { protein: 35, carbs: 45, fat: 20 },
    weeklyPlan: [
      {
        day: 'Monday',
        meals: [
          { type: 'breakfast', name: 'Egg Omelette + Paratha + Milk', ingredients: ['4-egg omelette', '2 paratha', '200ml milk'], calories: 600, protein: 32, carbs: 52, fat: 28, prepTime: '15 min', cost: '₹30' },
          { type: 'midMorning', name: 'Banana + Almonds', ingredients: ['2 bananas', '10 almonds'], calories: 280, protein: 7, carbs: 44, fat: 10, prepTime: '1 min', cost: '₹18' },
          { type: 'lunch', name: 'Rice + Chicken Curry + Dal + Salad', ingredients: ['1.5 cups rice', '200g chicken curry', '0.5 cup dal', 'Salad'], calories: 700, protein: 45, carbs: 72, fat: 20, prepTime: '35 min', cost: '₹50' },
          { type: 'preWorkout', name: 'PB Toast + Coffee', ingredients: ['2 toast', '2 tbsp peanut butter', 'Coffee'], calories: 310, protein: 12, carbs: 28, fat: 18, prepTime: '3 min', cost: '₹15' },
          { type: 'postWorkout', name: 'Boiled Eggs + Banana Shake', ingredients: ['4 boiled eggs', '1 banana', '300ml milk'], calories: 450, protein: 32, carbs: 38, fat: 18, prepTime: '12 min', cost: '₹28' },
          { type: 'dinner', name: 'Roti + Chicken Keema + Curd', ingredients: ['3 roti', '150g chicken keema', '100g curd'], calories: 620, protein: 40, carbs: 58, fat: 22, prepTime: '25 min', cost: '₹45' }
        ]
      },
      {
        day: 'Tuesday',
        meals: [
          { type: 'breakfast', name: 'Masala Oats + Eggs', ingredients: ['1.5 cups oats', '3 boiled eggs', '200ml milk'], calories: 520, protein: 30, carbs: 55, fat: 18, prepTime: '12 min', cost: '₹25' },
          { type: 'midMorning', name: 'Chicken Sandwich', ingredients: ['100g chicken breast', '2 bread slices', 'Lettuce, mayo'], calories: 320, protein: 25, carbs: 28, fat: 12, prepTime: '10 min', cost: '₹30' },
          { type: 'lunch', name: 'Rice + Fish Curry + Roti + Dal', ingredients: ['1 cup rice', '200g fish curry', '1 roti', '0.5 cup dal'], calories: 720, protein: 42, carbs: 78, fat: 20, prepTime: '35 min', cost: '₹50' },
          { type: 'preWorkout', name: 'Banana + Dates', ingredients: ['1 banana', '4 dates'], calories: 205, protein: 2, carbs: 52, fat: 0, prepTime: '1 min', cost: '₹12' },
          { type: 'postWorkout', name: 'Egg Whites + Milk + Peanuts', ingredients: ['5 egg whites', '300ml milk', '20g peanuts'], calories: 340, protein: 30, carbs: 18, fat: 15, prepTime: '12 min', cost: '₹25' },
          { type: 'dinner', name: 'Roti + Egg Curry + Sabzi', ingredients: ['3 roti', '3-egg curry', '100g mixed veg sabzi', 'Ghee'], calories: 650, protein: 30, carbs: 68, fat: 26, prepTime: '25 min', cost: '₹30' }
        ]
      },
      {
        day: 'Wednesday',
        meals: [
          { type: 'breakfast', name: 'Egg Bhurji + Paratha + Shake', ingredients: ['4-egg bhurji', '2 paratha', 'Banana shake'], calories: 650, protein: 32, carbs: 60, fat: 30, prepTime: '15 min', cost: '₹30' },
          { type: 'midMorning', name: 'Sprouts + Boiled Egg', ingredients: ['1 cup sprouts', '1 boiled egg', 'Chaat masala'], calories: 220, protein: 18, carbs: 22, fat: 6, prepTime: '5 min', cost: '₹15' },
          { type: 'lunch', name: 'Chicken Biryani + Raita', ingredients: ['2 cups chicken biryani', '100g raita'], calories: 750, protein: 40, carbs: 85, fat: 24, prepTime: '40 min', cost: '₹55' },
          { type: 'preWorkout', name: 'PB Banana Toast', ingredients: ['2 toast', '1 tbsp PB', '1 banana'], calories: 350, protein: 10, carbs: 52, fat: 12, prepTime: '3 min', cost: '₹15' },
          { type: 'postWorkout', name: 'Chicken Breast + Rice', ingredients: ['150g grilled chicken', '0.5 cup rice'], calories: 350, protein: 38, carbs: 28, fat: 8, prepTime: '20 min', cost: '₹35' },
          { type: 'dinner', name: 'Roti + Dal + Fish Fry', ingredients: ['2 roti', '1 cup dal', '100g fish fry'], calories: 550, protein: 34, carbs: 52, fat: 18, prepTime: '25 min', cost: '₹40' }
        ]
      },
      {
        day: 'Thursday',
        meals: [
          { type: 'breakfast', name: 'Dosa + Egg + Sambar', ingredients: ['2 dosa', '2 eggs (fried)', '1 cup sambar'], calories: 480, protein: 22, carbs: 55, fat: 18, prepTime: '15 min', cost: '₹25' },
          { type: 'midMorning', name: 'Trail Mix + Milk', ingredients: ['30g mixed nuts', '200ml milk'], calories: 300, protein: 12, carbs: 18, fat: 20, prepTime: '1 min', cost: '₹25' },
          { type: 'lunch', name: 'Rice + Mutton Curry + Roti', ingredients: ['1 cup rice', '150g mutton curry', '1 roti', 'Onion salad'], calories: 700, protein: 38, carbs: 68, fat: 28, prepTime: '45 min', cost: '₹60' },
          { type: 'preWorkout', name: 'Banana + Almonds', ingredients: ['1 banana', '10 almonds'], calories: 165, protein: 4, carbs: 30, fat: 7, prepTime: '1 min', cost: '₹15' },
          { type: 'postWorkout', name: 'Egg Whites + Sattu Shake', ingredients: ['4 egg whites', '30g sattu', '200ml milk'], calories: 280, protein: 30, carbs: 22, fat: 6, prepTime: '12 min', cost: '₹20' },
          { type: 'dinner', name: 'Roti + Chicken Curry + Curd', ingredients: ['3 roti', '150g chicken curry', '100g curd'], calories: 600, protein: 38, carbs: 58, fat: 20, prepTime: '25 min', cost: '₹45' }
        ]
      },
      {
        day: 'Friday',
        meals: [
          { type: 'breakfast', name: 'Poha + Eggs + Milk', ingredients: ['1.5 cups poha', '2 boiled eggs', '200ml milk'], calories: 500, protein: 22, carbs: 58, fat: 18, prepTime: '12 min', cost: '₹22' },
          { type: 'midMorning', name: 'Peanut Butter Banana', ingredients: ['1 banana', '2 tbsp peanut butter'], calories: 290, protein: 9, carbs: 32, fat: 16, prepTime: '2 min', cost: '₹15' },
          { type: 'lunch', name: 'Rice + Tandoori Chicken + Dal', ingredients: ['1.5 cups rice', '200g tandoori chicken', '0.5 cup dal'], calories: 700, protein: 48, carbs: 72, fat: 18, prepTime: '35 min', cost: '₹50' },
          { type: 'preWorkout', name: 'Dates + Coffee', ingredients: ['4 dates', '1 cup coffee'], calories: 130, protein: 1, carbs: 32, fat: 0, prepTime: '2 min', cost: '₹10' },
          { type: 'postWorkout', name: 'Chicken Salad + Bread', ingredients: ['150g chicken breast', 'Salad', '2 bread slices'], calories: 350, protein: 35, carbs: 28, fat: 10, prepTime: '15 min', cost: '₹30' },
          { type: 'dinner', name: 'Roti + Egg Bhurji + Sabzi', ingredients: ['3 roti', '3-egg bhurji', '100g sabzi', 'Ghee'], calories: 600, protein: 28, carbs: 60, fat: 26, prepTime: '20 min', cost: '₹25' }
        ]
      },
      {
        day: 'Saturday',
        meals: [
          { type: 'breakfast', name: 'Egg Paratha + Curd + Shake', ingredients: ['2 egg paratha', '100g curd', 'Banana shake'], calories: 620, protein: 28, carbs: 62, fat: 26, prepTime: '20 min', cost: '₹30' },
          { type: 'midMorning', name: 'Boiled Eggs + Fruit', ingredients: ['2 boiled eggs', '1 apple'], calories: 230, protein: 13, carbs: 22, fat: 10, prepTime: '12 min', cost: '₹15' },
          { type: 'lunch', name: 'Non-Veg Thali', ingredients: ['Rice', '200g chicken', 'Dal', 'Sabzi', 'Roti', 'Curd'], calories: 800, protein: 45, carbs: 88, fat: 24, prepTime: '40 min', cost: '₹55' },
          { type: 'preWorkout', name: 'PB Toast', ingredients: ['2 toast', '2 tbsp peanut butter'], calories: 300, protein: 12, carbs: 28, fat: 18, prepTime: '3 min', cost: '₹12' },
          { type: 'postWorkout', name: 'Egg Whites + Milk', ingredients: ['5 egg whites', '300ml milk'], calories: 250, protein: 28, carbs: 15, fat: 8, prepTime: '12 min', cost: '₹20' },
          { type: 'dinner', name: 'Roti + Fish Curry + Dal', ingredients: ['3 roti', '150g fish curry', '0.5 cup dal'], calories: 580, protein: 36, carbs: 58, fat: 18, prepTime: '25 min', cost: '₹40' }
        ]
      },
      {
        day: 'Sunday',
        meals: [
          { type: 'breakfast', name: 'Full English (Indian Style)', ingredients: ['3 eggs (scrambled)', '2 toast', 'Baked beans', '200ml milk'], calories: 550, protein: 30, carbs: 48, fat: 24, prepTime: '15 min', cost: '₹30' },
          { type: 'midMorning', name: 'Fruit + Nuts', ingredients: ['1 banana', '1 apple', '20g almonds'], calories: 280, protein: 6, carbs: 46, fat: 10, prepTime: '2 min', cost: '₹25' },
          { type: 'lunch', name: 'Chicken Biryani + Raita + Salad', ingredients: ['2 cups chicken biryani', '100g raita', 'Salad'], calories: 780, protein: 42, carbs: 88, fat: 24, prepTime: '40 min', cost: '₹55' },
          { type: 'preWorkout', name: 'Rest Day', ingredients: [], calories: 0, protein: 0, carbs: 0, fat: 0, prepTime: '0 min', cost: '₹0' },
          { type: 'postWorkout', name: 'Rest Day', ingredients: [], calories: 0, protein: 0, carbs: 0, fat: 0, prepTime: '0 min', cost: '₹0' },
          { type: 'dinner', name: 'Roti + Chicken Curry + Curd', ingredients: ['3 roti', '200g chicken curry', '100g curd'], calories: 650, protein: 42, carbs: 58, fat: 24, prepTime: '30 min', cost: '₹50' }
        ]
      }
    ]
  },
  // ========================================
  // MAINTENANCE - VEGETARIAN
  // ========================================
  {
    id: 'maintenance-veg',
    name: 'Maintenance - Vegetarian',
    goal: 'maintenance',
    dietType: 'vegetarian',
    dailyCalories: '2000-2200',
    description: 'Balanced vegetarian Indian meals to maintain your current weight and energy levels. Perfect macros for recovery and sustaining daily activity.',
    dailyBudget: '₹120-160',
    macroSplit: { protein: 25, carbs: 50, fat: 25 },
    weeklyPlan: [
      {
        day: 'Monday',
        meals: [
          { type: 'breakfast', name: 'Poha + Curd', ingredients: ['1 cup poha', '100g curd', 'Peanuts'], calories: 340, protein: 12, carbs: 48, fat: 12, prepTime: '10 min', cost: '₹18' },
          { type: 'midMorning', name: 'Fruit + Tea', ingredients: ['1 banana', '1 cup chai'], calories: 145, protein: 3, carbs: 30, fat: 3, prepTime: '3 min', cost: '₹10' },
          { type: 'lunch', name: 'Rice + Dal + Sabzi + Roti', ingredients: ['1 cup rice', '1 cup dal', '100g sabzi', '1 roti'], calories: 550, protein: 20, carbs: 78, fat: 14, prepTime: '25 min', cost: '₹30' },
          { type: 'preWorkout', name: 'Banana + Coffee', ingredients: ['1 banana', '1 cup coffee'], calories: 115, protein: 2, carbs: 28, fat: 0, prepTime: '2 min', cost: '₹8' },
          { type: 'postWorkout', name: 'Milk + Peanuts', ingredients: ['200ml milk', '20g peanuts'], calories: 220, protein: 12, carbs: 14, fat: 13, prepTime: '2 min', cost: '₹15' },
          { type: 'dinner', name: 'Roti + Paneer + Dal', ingredients: ['2 roti', '80g paneer curry', '0.5 cup dal'], calories: 480, protein: 24, carbs: 48, fat: 20, prepTime: '25 min', cost: '₹35' }
        ]
      },
      { day: 'Tuesday', meals: [
          { type: 'breakfast', name: 'Dalia + Milk', ingredients: ['1 cup dalia', '200ml milk', 'Jaggery'], calories: 320, protein: 14, carbs: 52, fat: 6, prepTime: '15 min', cost: '₹15' },
          { type: 'midMorning', name: 'Roasted Chana', ingredients: ['40g roasted chana'], calories: 150, protein: 8, carbs: 22, fat: 4, prepTime: '1 min', cost: '₹8' },
          { type: 'lunch', name: 'Rice + Chole + Raita', ingredients: ['1 cup rice', '1 cup chole', '100g raita', 'Salad'], calories: 550, protein: 22, carbs: 72, fat: 16, prepTime: '25 min', cost: '₹30' },
          { type: 'preWorkout', name: 'Apple + Tea', ingredients: ['1 apple', '1 cup green tea'], calories: 95, protein: 1, carbs: 22, fat: 0, prepTime: '3 min', cost: '₹12' },
          { type: 'postWorkout', name: 'Sattu Shake', ingredients: ['30g sattu', '200ml water', 'Lemon'], calories: 120, protein: 12, carbs: 15, fat: 2, prepTime: '3 min', cost: '₹10' },
          { type: 'dinner', name: 'Roti + Mixed Veg + Curd', ingredients: ['2 roti', '1 cup mixed veg curry', '100g curd'], calories: 420, protein: 16, carbs: 52, fat: 14, prepTime: '20 min', cost: '₹28' }
      ]},
      { day: 'Wednesday', meals: [
          { type: 'breakfast', name: 'Upma + Coconut Chutney', ingredients: ['1 cup upma', 'Coconut chutney', '200ml milk'], calories: 380, protein: 12, carbs: 55, fat: 12, prepTime: '12 min', cost: '₹18' },
          { type: 'midMorning', name: 'Curd + Honey', ingredients: ['150g curd', '1 tsp honey'], calories: 120, protein: 6, carbs: 16, fat: 4, prepTime: '1 min', cost: '₹12' },
          { type: 'lunch', name: 'Roti + Rajma + Salad', ingredients: ['2 roti', '1 cup rajma', 'Onion-tomato salad'], calories: 500, protein: 22, carbs: 68, fat: 12, prepTime: '25 min', cost: '₹28' },
          { type: 'preWorkout', name: 'Toast + PB', ingredients: ['1 toast', '1 tbsp peanut butter'], calories: 150, protein: 6, carbs: 16, fat: 8, prepTime: '2 min', cost: '₹10' },
          { type: 'postWorkout', name: 'Sprouts + Buttermilk', ingredients: ['0.5 cup sprouts', '1 glass buttermilk'], calories: 120, protein: 10, carbs: 14, fat: 2, prepTime: '5 min', cost: '₹10' },
          { type: 'dinner', name: 'Khichdi + Papad + Curd', ingredients: ['1.5 cups khichdi', 'Papad', '100g curd', 'Pickle'], calories: 450, protein: 16, carbs: 62, fat: 12, prepTime: '20 min', cost: '₹22' }
      ]},
      { day: 'Thursday', meals: [
          { type: 'breakfast', name: 'Moong Dal Cheela + Tea', ingredients: ['2 moong dal cheela', '1 cup tea', 'Coriander chutney'], calories: 260, protein: 16, carbs: 30, fat: 8, prepTime: '12 min', cost: '₹15' },
          { type: 'midMorning', name: 'Papaya', ingredients: ['1 cup papaya'], calories: 55, protein: 1, carbs: 14, fat: 0, prepTime: '2 min', cost: '₹10' },
          { type: 'lunch', name: 'Rice + Sambar + Soya Chunks', ingredients: ['1 cup rice', '1 cup sambar', '0.5 cup soya chunks dry'], calories: 520, protein: 28, carbs: 68, fat: 12, prepTime: '25 min', cost: '₹25' },
          { type: 'preWorkout', name: 'Banana', ingredients: ['1 banana'], calories: 105, protein: 1, carbs: 27, fat: 0, prepTime: '1 min', cost: '₹5' },
          { type: 'postWorkout', name: 'Paneer + Milk', ingredients: ['60g paneer', '200ml milk'], calories: 270, protein: 18, carbs: 10, fat: 18, prepTime: '5 min', cost: '₹25' },
          { type: 'dinner', name: 'Roti + Toor Dal + Bhindi', ingredients: ['2 roti', '1 cup toor dal', '100g bhindi fry'], calories: 440, protein: 18, carbs: 54, fat: 14, prepTime: '25 min', cost: '₹25' }
      ]},
      { day: 'Friday', meals: [
          { type: 'breakfast', name: 'Idli + Sambar', ingredients: ['3 idli', '1 cup sambar', 'Chutney'], calories: 300, protein: 10, carbs: 52, fat: 6, prepTime: '20 min', cost: '₹18' },
          { type: 'midMorning', name: 'Makhana + Green Tea', ingredients: ['30g makhana', 'Green tea'], calories: 100, protein: 4, carbs: 18, fat: 1, prepTime: '5 min', cost: '₹15' },
          { type: 'lunch', name: 'Roti + Palak Paneer + Rice', ingredients: ['1 roti', '100g palak paneer', '0.5 cup rice'], calories: 480, protein: 20, carbs: 50, fat: 20, prepTime: '25 min', cost: '₹35' },
          { type: 'preWorkout', name: 'Dates + Almonds', ingredients: ['3 dates', '5 almonds'], calories: 145, protein: 3, carbs: 24, fat: 5, prepTime: '1 min', cost: '₹15' },
          { type: 'postWorkout', name: 'Curd + Banana', ingredients: ['150g curd', '1 banana'], calories: 200, protein: 8, carbs: 36, fat: 4, prepTime: '2 min', cost: '₹15' },
          { type: 'dinner', name: 'Roti + Chana Dal + Aloo Sabzi', ingredients: ['2 roti', '1 cup chana dal', '80g aloo sabzi'], calories: 460, protein: 18, carbs: 62, fat: 14, prepTime: '25 min', cost: '₹25' }
      ]},
      { day: 'Saturday', meals: [
          { type: 'breakfast', name: 'Aloo Paratha + Curd', ingredients: ['1 paratha', '100g curd', 'Pickle'], calories: 340, protein: 10, carbs: 42, fat: 14, prepTime: '15 min', cost: '₹18' },
          { type: 'midMorning', name: 'Coconut Water + Peanuts', ingredients: ['1 coconut', '15g peanuts'], calories: 130, protein: 5, carbs: 12, fat: 8, prepTime: '2 min', cost: '₹22' },
          { type: 'lunch', name: 'Veg Biryani + Raita', ingredients: ['1.5 cups biryani', '100g raita'], calories: 520, protein: 14, carbs: 72, fat: 18, prepTime: '35 min', cost: '₹30' },
          { type: 'preWorkout', name: 'Banana + Coffee', ingredients: ['1 banana', 'Coffee'], calories: 115, protein: 2, carbs: 28, fat: 0, prepTime: '2 min', cost: '₹8' },
          { type: 'postWorkout', name: 'Milk + Honey', ingredients: ['300ml milk', '1 tsp honey'], calories: 180, protein: 10, carbs: 22, fat: 6, prepTime: '2 min', cost: '₹15' },
          { type: 'dinner', name: 'Roti + Moong Dal + Lauki Sabzi', ingredients: ['2 roti', '1 cup moong dal', '100g lauki sabzi'], calories: 400, protein: 18, carbs: 56, fat: 10, prepTime: '20 min', cost: '₹22' }
      ]},
      { day: 'Sunday', meals: [
          { type: 'breakfast', name: 'Besan Chilla + Shake', ingredients: ['2 besan chilla', 'Banana milkshake'], calories: 420, protein: 18, carbs: 48, fat: 16, prepTime: '12 min', cost: '₹20' },
          { type: 'midMorning', name: 'Mixed Fruit', ingredients: ['150g mixed seasonal fruits'], calories: 80, protein: 1, carbs: 20, fat: 0, prepTime: '5 min', cost: '₹15' },
          { type: 'lunch', name: 'Rice + Dal Tadka + Paneer + Roti', ingredients: ['1 cup rice', '1 cup dal', '60g paneer', '1 roti'], calories: 580, protein: 26, carbs: 72, fat: 18, prepTime: '30 min', cost: '₹35' },
          { type: 'preWorkout', name: 'Rest Day', ingredients: [], calories: 0, protein: 0, carbs: 0, fat: 0, prepTime: '0 min', cost: '₹0' },
          { type: 'postWorkout', name: 'Rest Day', ingredients: [], calories: 0, protein: 0, carbs: 0, fat: 0, prepTime: '0 min', cost: '₹0' },
          { type: 'dinner', name: 'Roti + Chole + Curd', ingredients: ['2 roti', '1 cup chole', '100g curd', 'Salad'], calories: 480, protein: 20, carbs: 60, fat: 16, prepTime: '25 min', cost: '₹28' }
      ]}
    ]
  },
  // ========================================
  // MAINTENANCE - NON-VEGETARIAN
  // ========================================
  {
    id: 'maintenance-nonveg',
    name: 'Maintenance - Non-Vegetarian',
    goal: 'maintenance',
    dietType: 'nonVegetarian',
    dailyCalories: '2000-2200',
    description: 'Balanced Indian non-vegetarian meals to maintain weight and support an active lifestyle. Good mix of eggs, chicken, and vegetarian protein sources.',
    dailyBudget: '₹140-180',
    macroSplit: { protein: 30, carbs: 45, fat: 25 },
    weeklyPlan: [
      {
        day: 'Monday',
        meals: [
          { type: 'breakfast', name: 'Egg Omelette + Toast', ingredients: ['3-egg omelette', '2 toast', 'Tea'], calories: 340, protein: 20, carbs: 28, fat: 16, prepTime: '8 min', cost: '₹18' },
          { type: 'midMorning', name: 'Fruit + Tea', ingredients: ['1 apple', '1 cup chai'], calories: 130, protein: 2, carbs: 28, fat: 3, prepTime: '3 min', cost: '₹12' },
          { type: 'lunch', name: 'Rice + Chicken Curry + Dal', ingredients: ['1 cup rice', '150g chicken curry', '0.5 cup dal', 'Salad'], calories: 560, protein: 35, carbs: 58, fat: 18, prepTime: '30 min', cost: '₹40' },
          { type: 'preWorkout', name: 'Banana', ingredients: ['1 banana'], calories: 105, protein: 1, carbs: 27, fat: 0, prepTime: '1 min', cost: '₹5' },
          { type: 'postWorkout', name: 'Boiled Eggs + Milk', ingredients: ['2 boiled eggs', '200ml milk'], calories: 240, protein: 18, carbs: 10, fat: 14, prepTime: '12 min', cost: '₹18' },
          { type: 'dinner', name: 'Roti + Fish Fry + Curd', ingredients: ['2 roti', '120g fish fry', '80g curd'], calories: 440, protein: 28, carbs: 38, fat: 18, prepTime: '20 min', cost: '₹35' }
        ]
      },
      { day: 'Tuesday', meals: [
          { type: 'breakfast', name: 'Poha + Boiled Egg', ingredients: ['1 cup poha', '2 boiled eggs', 'Tea'], calories: 360, protein: 16, carbs: 42, fat: 14, prepTime: '10 min', cost: '₹18' },
          { type: 'midMorning', name: 'Curd + Almonds', ingredients: ['100g curd', '8 almonds'], calories: 170, protein: 8, carbs: 10, fat: 10, prepTime: '1 min', cost: '₹15' },
          { type: 'lunch', name: 'Roti + Egg Curry + Sabzi', ingredients: ['2 roti', '2-egg curry', '100g sabzi'], calories: 480, protein: 22, carbs: 48, fat: 20, prepTime: '20 min', cost: '₹25' },
          { type: 'preWorkout', name: 'Toast + PB', ingredients: ['1 toast', '1 tbsp peanut butter'], calories: 150, protein: 6, carbs: 16, fat: 8, prepTime: '2 min', cost: '₹10' },
          { type: 'postWorkout', name: 'Chicken Salad', ingredients: ['100g chicken', 'Salad', 'Lemon'], calories: 165, protein: 25, carbs: 5, fat: 5, prepTime: '15 min', cost: '₹25' },
          { type: 'dinner', name: 'Dal + Rice + Papad', ingredients: ['1 cup dal', '1 cup rice', 'Papad', 'Pickle'], calories: 420, protein: 16, carbs: 62, fat: 10, prepTime: '20 min', cost: '₹22' }
      ]},
      { day: 'Wednesday', meals: [
          { type: 'breakfast', name: 'Dalia + Milk + Egg', ingredients: ['1 cup dalia', '200ml milk', '1 boiled egg'], calories: 380, protein: 18, carbs: 50, fat: 10, prepTime: '15 min', cost: '₹18' },
          { type: 'midMorning', name: 'Roasted Chana + Nimbu Pani', ingredients: ['30g chana', 'Nimbu pani'], calories: 130, protein: 8, carbs: 18, fat: 3, prepTime: '3 min', cost: '₹8' },
          { type: 'lunch', name: 'Rice + Fish Curry + Roti', ingredients: ['1 cup rice', '150g fish curry', '1 roti'], calories: 530, protein: 32, carbs: 60, fat: 16, prepTime: '30 min', cost: '₹40' },
          { type: 'preWorkout', name: 'Banana + Dates', ingredients: ['1 banana', '3 dates'], calories: 165, protein: 2, carbs: 42, fat: 0, prepTime: '1 min', cost: '₹10' },
          { type: 'postWorkout', name: 'Egg Whites + Bread', ingredients: ['3 egg whites', '1 bread'], calories: 110, protein: 12, carbs: 14, fat: 1, prepTime: '10 min', cost: '₹10' },
          { type: 'dinner', name: 'Roti + Paneer + Dal', ingredients: ['2 roti', '80g paneer', '0.5 cup dal'], calories: 460, protein: 22, carbs: 46, fat: 20, prepTime: '20 min', cost: '₹30' }
      ]},
      { day: 'Thursday', meals: [
          { type: 'breakfast', name: 'Upma + Eggs', ingredients: ['1 cup upma', '2 boiled eggs'], calories: 340, protein: 18, carbs: 38, fat: 12, prepTime: '12 min', cost: '₹18' },
          { type: 'midMorning', name: 'Buttermilk + Makhana', ingredients: ['1 glass buttermilk', '25g makhana'], calories: 110, protein: 6, carbs: 16, fat: 2, prepTime: '3 min', cost: '₹12' },
          { type: 'lunch', name: 'Chicken Rice Bowl', ingredients: ['1 cup rice', '150g chicken', 'Veggies', 'Soy sauce'], calories: 520, protein: 35, carbs: 55, fat: 14, prepTime: '20 min', cost: '₹35' },
          { type: 'preWorkout', name: 'Apple + Almonds', ingredients: ['1 apple', '5 almonds'], calories: 125, protein: 3, carbs: 22, fat: 4, prepTime: '1 min', cost: '₹15' },
          { type: 'postWorkout', name: 'Sattu Shake', ingredients: ['30g sattu', '200ml milk'], calories: 200, protein: 16, carbs: 22, fat: 5, prepTime: '3 min', cost: '₹12' },
          { type: 'dinner', name: 'Roti + Moong Dal + Salad', ingredients: ['2 roti', '1 cup moong dal', 'Cucumber-tomato salad'], calories: 380, protein: 18, carbs: 52, fat: 8, prepTime: '20 min', cost: '₹20' }
      ]},
      { day: 'Friday', meals: [
          { type: 'breakfast', name: 'Masala Omelette + Roti', ingredients: ['3-egg omelette', '1 roti', 'Chutney'], calories: 330, protein: 22, carbs: 24, fat: 16, prepTime: '10 min', cost: '₹18' },
          { type: 'midMorning', name: 'Banana + Peanuts', ingredients: ['1 banana', '15g peanuts'], calories: 190, protein: 6, carbs: 30, fat: 7, prepTime: '1 min', cost: '₹8' },
          { type: 'lunch', name: 'Roti + Keema + Raita', ingredients: ['2 roti', '1 cup chicken keema', '80g raita'], calories: 520, protein: 32, carbs: 42, fat: 22, prepTime: '25 min', cost: '₹40' },
          { type: 'preWorkout', name: 'Coffee + Dates', ingredients: ['Coffee', '3 dates'], calories: 70, protein: 1, carbs: 18, fat: 0, prepTime: '2 min', cost: '₹8' },
          { type: 'postWorkout', name: 'Milk + Banana', ingredients: ['200ml milk', '1 banana'], calories: 200, protein: 9, carbs: 34, fat: 4, prepTime: '2 min', cost: '₹12' },
          { type: 'dinner', name: 'Egg Fried Rice + Salad', ingredients: ['1 cup fried rice', '2 eggs', 'Mixed veg', 'Salad'], calories: 450, protein: 18, carbs: 55, fat: 16, prepTime: '15 min', cost: '₹22' }
      ]},
      { day: 'Saturday', meals: [
          { type: 'breakfast', name: 'Idli + Egg + Sambar', ingredients: ['3 idli', '1 boiled egg', 'Sambar'], calories: 350, protein: 16, carbs: 52, fat: 8, prepTime: '20 min', cost: '₹20' },
          { type: 'midMorning', name: 'Trail Mix', ingredients: ['25g mixed nuts + raisins'], calories: 160, protein: 4, carbs: 14, fat: 10, prepTime: '1 min', cost: '₹20' },
          { type: 'lunch', name: 'Tandoori Chicken + Roti + Salad', ingredients: ['150g tandoori chicken', '2 roti', 'Salad', 'Mint chutney'], calories: 480, protein: 36, carbs: 38, fat: 18, prepTime: '30 min', cost: '₹40' },
          { type: 'preWorkout', name: 'Banana', ingredients: ['1 banana'], calories: 105, protein: 1, carbs: 27, fat: 0, prepTime: '1 min', cost: '₹5' },
          { type: 'postWorkout', name: 'Curd + Honey', ingredients: ['150g curd', '1 tsp honey'], calories: 130, protein: 6, carbs: 18, fat: 4, prepTime: '1 min', cost: '₹12' },
          { type: 'dinner', name: 'Dal + Rice + Egg Bhurji', ingredients: ['0.5 cup dal', '1 cup rice', '2-egg bhurji'], calories: 460, protein: 22, carbs: 55, fat: 16, prepTime: '15 min', cost: '₹22' }
      ]},
      { day: 'Sunday', meals: [
          { type: 'breakfast', name: 'Bread Omelette + Milk', ingredients: ['3-egg omelette', '2 bread slices', '200ml milk'], calories: 400, protein: 26, carbs: 32, fat: 18, prepTime: '10 min', cost: '₹22' },
          { type: 'midMorning', name: 'Fruit Salad', ingredients: ['150g mixed fruits'], calories: 80, protein: 1, carbs: 20, fat: 0, prepTime: '5 min', cost: '₹15' },
          { type: 'lunch', name: 'Non-Veg Thali (light)', ingredients: ['1 cup rice', '150g chicken curry', 'Dal', 'Sabzi', '1 roti', 'Curd'], calories: 620, protein: 35, carbs: 68, fat: 20, prepTime: '35 min', cost: '₹45' },
          { type: 'preWorkout', name: 'Rest Day', ingredients: [], calories: 0, protein: 0, carbs: 0, fat: 0, prepTime: '0 min', cost: '₹0' },
          { type: 'postWorkout', name: 'Rest Day', ingredients: [], calories: 0, protein: 0, carbs: 0, fat: 0, prepTime: '0 min', cost: '₹0' },
          { type: 'dinner', name: 'Egg Curry + Roti + Salad', ingredients: ['2-egg curry', '2 roti', 'Salad'], calories: 420, protein: 20, carbs: 42, fat: 18, prepTime: '20 min', cost: '₹22' }
      ]}
    ]
  }
];
