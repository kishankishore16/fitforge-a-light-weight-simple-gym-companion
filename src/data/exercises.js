export const bodyParts = [
  { id: 'chest', name: 'Chest', icon: '🫁' },
  { id: 'back', name: 'Back', icon: '🔙' },
  { id: 'shoulders', name: 'Shoulders', icon: '💪' },
  { id: 'biceps', name: 'Biceps', icon: '💪' },
  { id: 'triceps', name: 'Triceps', icon: '💪' },
  { id: 'legs', name: 'Legs', icon: '🦵' },
  { id: 'core', name: 'Core', icon: '🎯' },
  { id: 'fullBody', name: 'Full Body', icon: '🏋️' }
];

export const equipmentList = [
  { id: 'bodyweight', name: 'Bodyweight', icon: '🧍' },
  { id: 'dumbbell', name: 'Dumbbell', icon: '🏋️' },
  { id: 'barbell', name: 'Barbell', icon: '🏋️‍♂️' },
  { id: 'machine', name: 'Machine', icon: '⚙️' },
  { id: 'cable', name: 'Cable', icon: '🔗' },
  { id: 'band', name: 'Resistance Band', icon: '🟡' },
  { id: 'kettlebell', name: 'Kettlebell', icon: '🔔' }
];

export const exercises = [
  // ========================================
  // CHEST EXERCISES (10)
  // ========================================
  {
    id: 'barbell-bench-press',
    name: 'Barbell Bench Press',
    bodyPart: 'chest',
    targetMuscle: 'Pectoralis Major',
    secondaryMuscles: ['Anterior Deltoid', 'Triceps'],
    equipment: 'barbell',
    difficulty: 'beginner',
    instructions: [
      'Lie flat on a bench with your eyes directly under the barbell.',
      'Grip the bar slightly wider than shoulder-width apart.',
      'Unrack the bar and hold it above your chest with arms fully extended.',
      'Lower the bar slowly to your mid-chest, keeping elbows at a 45-degree angle.',
      'Press the bar back up to the starting position, fully extending your arms.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Flaring elbows too wide (90 degrees)',
      'Bouncing the bar off the chest',
      'Lifting hips off the bench',
      'Not using a full range of motion'
    ],
    tips: [
      'Keep your feet flat on the floor for stability',
      'Maintain a slight arch in your lower back',
      'Squeeze your shoulder blades together',
      'Use a spotter when lifting heavy'
    ],
    sets: 4,
    reps: '8-12',
    restSeconds: 90,
    calories: 8
  },
  {
    id: 'incline-barbell-bench-press',
    name: 'Incline Barbell Bench Press',
    bodyPart: 'chest',
    targetMuscle: 'Upper Pectoralis Major',
    secondaryMuscles: ['Anterior Deltoid', 'Triceps'],
    equipment: 'barbell',
    difficulty: 'intermediate',
    instructions: [
      'Set the bench to a 30-45 degree incline.',
      'Lie back and grip the barbell slightly wider than shoulder width.',
      'Unrack the bar and hold it above your upper chest.',
      'Lower the bar to your upper chest in a controlled manner.',
      'Press the bar back up to full arm extension.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Setting the incline too steep (turns into a shoulder press)',
      'Flaring elbows out wide',
      'Not controlling the negative portion'
    ],
    tips: [
      'Keep the incline between 30-45 degrees',
      'Focus on squeezing the upper chest at the top',
      'Drive your feet into the floor for stability'
    ],
    sets: 3,
    reps: '8-12',
    restSeconds: 90,
    calories: 7
  },
  {
    id: 'dumbbell-bench-press',
    name: 'Dumbbell Bench Press',
    bodyPart: 'chest',
    targetMuscle: 'Pectoralis Major',
    secondaryMuscles: ['Anterior Deltoid', 'Triceps'],
    equipment: 'dumbbell',
    difficulty: 'beginner',
    instructions: [
      'Sit on a flat bench holding a dumbbell in each hand on your thighs.',
      'Lie back, using your knees to kick the dumbbells up to chest level.',
      'Hold the dumbbells at chest height with palms facing forward.',
      'Press the dumbbells up until your arms are fully extended.',
      'Lower the dumbbells back to chest level with control.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Using momentum to swing the weights up',
      'Not lowering the dumbbells deep enough',
      'Letting the dumbbells drift too far apart at the top'
    ],
    tips: [
      'Dumbbells allow a greater range of motion than barbell',
      'Squeeze your chest muscles at the top of each rep',
      'Keep your wrists straight throughout the movement'
    ],
    sets: 3,
    reps: '10-12',
    restSeconds: 75,
    calories: 7
  },
  {
    id: 'incline-dumbbell-press',
    name: 'Incline Dumbbell Press',
    bodyPart: 'chest',
    targetMuscle: 'Upper Pectoralis Major',
    secondaryMuscles: ['Anterior Deltoid', 'Triceps'],
    equipment: 'dumbbell',
    difficulty: 'beginner',
    instructions: [
      'Set an adjustable bench to a 30-45 degree incline.',
      'Sit back and hold a dumbbell in each hand at chest height.',
      'Press the dumbbells up and slightly inward until arms are extended.',
      'Lower the dumbbells back to chest level slowly.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Setting the bench too steep',
      'Dropping the dumbbells too fast on the way down',
      'Not keeping a controlled tempo'
    ],
    tips: [
      'Focus on feeling the stretch in your upper chest at the bottom',
      'Bring the dumbbells slightly together at the top for a better squeeze',
      'Control the weight throughout the entire range of motion'
    ],
    sets: 3,
    reps: '10-12',
    restSeconds: 75,
    calories: 7
  },
  {
    id: 'dumbbell-fly',
    name: 'Dumbbell Fly',
    bodyPart: 'chest',
    targetMuscle: 'Pectoralis Major',
    secondaryMuscles: ['Anterior Deltoid'],
    equipment: 'dumbbell',
    difficulty: 'intermediate',
    instructions: [
      'Lie on a flat bench holding dumbbells above your chest with arms extended.',
      'Keep a slight bend in your elbows throughout the movement.',
      'Lower the dumbbells out to the sides in a wide arc until you feel a stretch.',
      'Squeeze your chest to bring the dumbbells back together above your chest.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Using too heavy a weight and turning it into a press',
      'Straightening arms completely (stresses elbow joints)',
      'Going too deep and overstretching the shoulder'
    ],
    tips: [
      'Imagine hugging a large tree as you bring the dumbbells together',
      'Use lighter weight than your press – this is an isolation move',
      'Focus on the stretch and squeeze of the chest'
    ],
    sets: 3,
    reps: '12-15',
    restSeconds: 60,
    calories: 5
  },
  {
    id: 'cable-crossover',
    name: 'Cable Crossover',
    bodyPart: 'chest',
    targetMuscle: 'Pectoralis Major',
    secondaryMuscles: ['Anterior Deltoid'],
    equipment: 'cable',
    difficulty: 'intermediate',
    instructions: [
      'Set both pulleys on a cable machine to the highest position.',
      'Grab a handle in each hand and step forward to create tension.',
      'With a slight bend in your elbows, bring your hands together in front of your chest.',
      'Squeeze your chest muscles at the bottom of the movement.',
      'Slowly return to the starting position with arms wide.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Using too much weight and losing form',
      'Not stepping far enough forward',
      'Using momentum instead of controlled movement'
    ],
    tips: [
      'Experiment with pulley height – high for lower chest, low for upper chest',
      'Lean slightly forward for better chest activation',
      'Cross your hands slightly at the bottom for a deeper contraction'
    ],
    sets: 3,
    reps: '12-15',
    restSeconds: 60,
    calories: 5
  },
  {
    id: 'push-up',
    name: 'Push-Up',
    bodyPart: 'chest',
    targetMuscle: 'Pectoralis Major',
    secondaryMuscles: ['Anterior Deltoid', 'Triceps', 'Core'],
    equipment: 'bodyweight',
    difficulty: 'beginner',
    instructions: [
      'Start in a high plank position with hands slightly wider than shoulder width.',
      'Keep your body in a straight line from head to heels.',
      'Lower your body until your chest nearly touches the floor.',
      'Push yourself back up to the starting position.',
      'Keep your core engaged throughout the movement.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Sagging hips or piking them up',
      'Flaring elbows out to 90 degrees',
      'Not going low enough',
      'Holding breath'
    ],
    tips: [
      'If too hard, start with knee push-ups or wall push-ups',
      'Keep elbows at a 45-degree angle to your body',
      'Squeeze your glutes and abs for a stable position',
      'Breathe in on the way down, out on the way up'
    ],
    sets: 3,
    reps: '10-20',
    restSeconds: 60,
    calories: 5
  },
  {
    id: 'decline-push-up',
    name: 'Decline Push-Up',
    bodyPart: 'chest',
    targetMuscle: 'Upper Pectoralis Major',
    secondaryMuscles: ['Anterior Deltoid', 'Triceps', 'Core'],
    equipment: 'bodyweight',
    difficulty: 'intermediate',
    instructions: [
      'Place your feet on an elevated surface (bench, chair, or step).',
      'Place your hands on the floor slightly wider than shoulder width.',
      'Keep your body in a straight line from head to feet.',
      'Lower your chest towards the floor by bending your elbows.',
      'Push back up to the starting position.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Letting hips sag or pike up',
      'Placing feet too high (makes it more of a shoulder exercise)',
      'Not maintaining a neutral spine'
    ],
    tips: [
      'Start with a low elevation and gradually increase height',
      'Keep your core tight throughout the movement',
      'Higher elevation = more upper chest and shoulder emphasis'
    ],
    sets: 3,
    reps: '8-15',
    restSeconds: 60,
    calories: 6
  },
  {
    id: 'chest-dip',
    name: 'Chest Dip',
    bodyPart: 'chest',
    targetMuscle: 'Lower Pectoralis Major',
    secondaryMuscles: ['Triceps', 'Anterior Deltoid'],
    equipment: 'bodyweight',
    difficulty: 'intermediate',
    instructions: [
      'Grip the parallel bars and lift yourself up with arms fully extended.',
      'Lean your torso forward about 15-20 degrees.',
      'Lower your body by bending your elbows until you feel a stretch in your chest.',
      'Push yourself back up to the starting position.',
      'Keep the forward lean throughout to target chest over triceps.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Staying too upright (shifts focus to triceps)',
      'Going too deep and straining shoulders',
      'Using momentum/swinging'
    ],
    tips: [
      'Lean forward to target chest, stay upright for triceps focus',
      'If too hard, use an assisted dip machine or resistance band',
      'Aim for a 90-degree elbow angle at the bottom'
    ],
    sets: 3,
    reps: '8-12',
    restSeconds: 90,
    calories: 8
  },
  {
    id: 'pec-deck-fly',
    name: 'Pec Deck Fly (Machine)',
    bodyPart: 'chest',
    targetMuscle: 'Pectoralis Major',
    secondaryMuscles: ['Anterior Deltoid'],
    equipment: 'machine',
    difficulty: 'beginner',
    instructions: [
      'Sit on the pec deck machine and adjust the seat height so handles are at chest level.',
      'Place your forearms against the pads or grip the handles.',
      'Push the handles together in front of your chest using your chest muscles.',
      'Squeeze your chest at the peak contraction.',
      'Slowly return to the starting position.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Using too much weight and using momentum',
      'Not bringing the handles all the way together',
      'Hunching shoulders forward'
    ],
    tips: [
      'Great machine for beginners to learn the fly movement pattern',
      'Focus on the squeeze at the top for maximum chest activation',
      'Keep your back flat against the pad'
    ],
    sets: 3,
    reps: '12-15',
    restSeconds: 60,
    calories: 5
  },

  // ========================================
  // BACK EXERCISES (11)
  // ========================================
  {
    id: 'pull-up',
    name: 'Pull-Up',
    bodyPart: 'back',
    targetMuscle: 'Latissimus Dorsi',
    secondaryMuscles: ['Biceps', 'Rhomboids', 'Rear Deltoid'],
    equipment: 'bodyweight',
    difficulty: 'intermediate',
    instructions: [
      'Grab a pull-up bar with an overhand grip, hands slightly wider than shoulder width.',
      'Hang with arms fully extended and feet off the ground.',
      'Pull your body up until your chin clears the bar.',
      'Squeeze your back muscles at the top.',
      'Lower yourself back down with control.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Using momentum/kipping to swing up',
      'Not going through full range of motion',
      'Shrugging shoulders up to the ears',
      'Not engaging the back (pulling with arms only)'
    ],
    tips: [
      'If you cannot do a pull-up, start with lat pulldowns or assisted pull-ups',
      'Imagine pulling your elbows down to your hips',
      'Engage your lats before you start pulling',
      'Dead hang at the bottom for full stretch'
    ],
    sets: 3,
    reps: '5-10',
    restSeconds: 120,
    calories: 10
  },
  {
    id: 'chin-up',
    name: 'Chin-Up',
    bodyPart: 'back',
    targetMuscle: 'Latissimus Dorsi',
    secondaryMuscles: ['Biceps', 'Brachialis', 'Lower Trapezius'],
    equipment: 'bodyweight',
    difficulty: 'intermediate',
    instructions: [
      'Grab the pull-up bar with an underhand (supinated) grip, hands shoulder-width apart.',
      'Hang with arms fully extended.',
      'Pull yourself up until your chin is above the bar.',
      'Focus on squeezing your biceps and lats.',
      'Lower yourself back down slowly.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Swinging or kipping',
      'Not fully extending at the bottom',
      'Using only arms and not engaging the back'
    ],
    tips: [
      'Chin-ups are easier than pull-ups for most beginners',
      'Great exercise for building both biceps and back',
      'Keep your chest up and shoulders back'
    ],
    sets: 3,
    reps: '6-10',
    restSeconds: 120,
    calories: 9
  },
  {
    id: 'lat-pulldown',
    name: 'Lat Pulldown',
    bodyPart: 'back',
    targetMuscle: 'Latissimus Dorsi',
    secondaryMuscles: ['Biceps', 'Rhomboids', 'Rear Deltoid'],
    equipment: 'cable',
    difficulty: 'beginner',
    instructions: [
      'Sit at the lat pulldown machine and adjust the thigh pad to lock you in.',
      'Grab the bar with a wide overhand grip.',
      'Lean back slightly and pull the bar down to your upper chest.',
      'Squeeze your shoulder blades together at the bottom.',
      'Slowly release the bar back up with control.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Pulling the bar behind the neck (dangerous for shoulders)',
      'Leaning too far back (turns it into a row)',
      'Using too much weight and swinging'
    ],
    tips: [
      'Pull with your elbows, not your hands',
      'Keep your chest up and proud throughout',
      'Great alternative if you cannot do pull-ups yet'
    ],
    sets: 3,
    reps: '10-12',
    restSeconds: 75,
    calories: 6
  },
  {
    id: 'barbell-row',
    name: 'Barbell Bent-Over Row',
    bodyPart: 'back',
    targetMuscle: 'Latissimus Dorsi',
    secondaryMuscles: ['Rhomboids', 'Rear Deltoid', 'Biceps', 'Erector Spinae'],
    equipment: 'barbell',
    difficulty: 'intermediate',
    instructions: [
      'Stand with feet shoulder-width apart, holding a barbell with an overhand grip.',
      'Bend your knees slightly and hinge forward at the hips until torso is nearly parallel to the floor.',
      'Let the bar hang at arm\'s length below your shoulders.',
      'Pull the bar up to your lower chest / upper abdomen.',
      'Squeeze your shoulder blades together at the top.',
      'Lower the bar back down with control.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Rounding the lower back',
      'Standing too upright',
      'Using momentum to jerk the weight up',
      'Not squeezing at the top'
    ],
    tips: [
      'Keep your core braced and back flat throughout',
      'Pull the bar to your belly button for lower lats, to your chest for upper back',
      'Start with lighter weight to master the hip hinge'
    ],
    sets: 4,
    reps: '8-12',
    restSeconds: 90,
    calories: 8
  },
  {
    id: 'dumbbell-row',
    name: 'Single-Arm Dumbbell Row',
    bodyPart: 'back',
    targetMuscle: 'Latissimus Dorsi',
    secondaryMuscles: ['Rhomboids', 'Biceps', 'Rear Deltoid'],
    equipment: 'dumbbell',
    difficulty: 'beginner',
    instructions: [
      'Place one knee and same-side hand on a flat bench for support.',
      'Hold a dumbbell in the opposite hand with arm fully extended.',
      'Keep your back flat and parallel to the floor.',
      'Pull the dumbbell up towards your hip, driving your elbow back.',
      'Squeeze your lat at the top of the movement.',
      'Lower the dumbbell back down with control.',
      'Complete all reps on one side, then switch.'
    ],
    commonMistakes: [
      'Rotating the torso to heave the weight up',
      'Not pulling the dumbbell high enough',
      'Rounding the back',
      'Using too heavy a weight'
    ],
    tips: [
      'Think about pulling your elbow to the ceiling',
      'Keep your hips square and avoid rotating',
      'This exercise is great for fixing muscle imbalances between sides'
    ],
    sets: 3,
    reps: '10-12',
    restSeconds: 75,
    calories: 6
  },
  {
    id: 'seated-cable-row',
    name: 'Seated Cable Row',
    bodyPart: 'back',
    targetMuscle: 'Rhomboids',
    secondaryMuscles: ['Latissimus Dorsi', 'Biceps', 'Trapezius'],
    equipment: 'cable',
    difficulty: 'beginner',
    instructions: [
      'Sit at the cable row machine with your feet on the footrests.',
      'Grab the V-bar or straight bar attachment.',
      'Sit upright with a slight forward lean, arms fully extended.',
      'Pull the handle towards your lower chest / upper abdomen.',
      'Squeeze your shoulder blades together at the end of the pull.',
      'Slowly extend your arms back to the starting position.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Leaning too far forward or backward',
      'Using momentum to swing the weight',
      'Rounding the back',
      'Not fully extending arms on the return'
    ],
    tips: [
      'Keep your torso stationary – only your arms should move',
      'Focus on retracting your shoulder blades',
      'Keep your chest up and proud throughout'
    ],
    sets: 3,
    reps: '10-12',
    restSeconds: 75,
    calories: 6
  },
  {
    id: 't-bar-row',
    name: 'T-Bar Row',
    bodyPart: 'back',
    targetMuscle: 'Middle Back',
    secondaryMuscles: ['Latissimus Dorsi', 'Rhomboids', 'Biceps'],
    equipment: 'barbell',
    difficulty: 'intermediate',
    instructions: [
      'Straddle the T-bar machine or landmine barbell setup.',
      'Bend at the hips with knees slightly bent, keeping back flat.',
      'Grab the handles or V-bar attachment.',
      'Pull the weight up towards your chest.',
      'Squeeze your back muscles at the top.',
      'Lower the weight back down with control.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Rounding the lower back',
      'Standing too upright and not hinging enough',
      'Jerking the weight up'
    ],
    tips: [
      'Keep your chest up and back flat',
      'Great for building overall back thickness',
      'Use a narrower grip to target the inner back more'
    ],
    sets: 3,
    reps: '8-12',
    restSeconds: 90,
    calories: 8
  },
  {
    id: 'deadlift',
    name: 'Conventional Deadlift',
    bodyPart: 'back',
    targetMuscle: 'Erector Spinae',
    secondaryMuscles: ['Glutes', 'Hamstrings', 'Trapezius', 'Core', 'Forearms'],
    equipment: 'barbell',
    difficulty: 'intermediate',
    instructions: [
      'Stand with feet hip-width apart, barbell over the middle of your feet.',
      'Bend at the hips and knees, gripping the bar just outside your knees.',
      'Keep your back flat, chest up, and shoulders over or slightly ahead of the bar.',
      'Drive through your heels, extending your hips and knees simultaneously.',
      'Stand up fully, locking out your hips at the top.',
      'Lower the bar by hinging at the hips first, then bending the knees.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Rounding the lower back',
      'Starting with the bar too far from the body',
      'Lifting with the back instead of the legs',
      'Hyperextending at the top'
    ],
    tips: [
      'The bar should travel in a straight vertical line close to your body',
      'Brace your core hard before each rep',
      'Start with light weight and perfect the form before going heavy',
      'Use mixed grip or straps if grip is limiting you'
    ],
    sets: 3,
    reps: '5-8',
    restSeconds: 180,
    calories: 12
  },
  {
    id: 'face-pull',
    name: 'Face Pull',
    bodyPart: 'back',
    targetMuscle: 'Rear Deltoid',
    secondaryMuscles: ['Rhomboids', 'Trapezius', 'Rotator Cuff'],
    equipment: 'cable',
    difficulty: 'beginner',
    instructions: [
      'Set a cable pulley to upper chest or face height with a rope attachment.',
      'Grab the rope with an overhand grip, thumbs pointing towards you.',
      'Step back to create tension in the cable.',
      'Pull the rope towards your face, separating the ends of the rope.',
      'Squeeze your rear delts and upper back at the peak.',
      'Slowly return to the starting position.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Using too much weight and leaning back',
      'Not pulling the rope apart at the end',
      'Pulling to the chest instead of the face'
    ],
    tips: [
      'Essential exercise for shoulder health and posture',
      'Keep your elbows high throughout the movement',
      'Rotate your hands outward at the end of the pull for extra rotator cuff work'
    ],
    sets: 3,
    reps: '15-20',
    restSeconds: 60,
    calories: 4
  },
  {
    id: 'straight-arm-pulldown',
    name: 'Straight Arm Pulldown',
    bodyPart: 'back',
    targetMuscle: 'Latissimus Dorsi',
    secondaryMuscles: ['Teres Major', 'Rear Deltoid'],
    equipment: 'cable',
    difficulty: 'intermediate',
    instructions: [
      'Stand facing a high cable pulley with a straight bar or rope attachment.',
      'Grab the bar with an overhand grip, arms extended at shoulder height.',
      'Keep a slight bend in your elbows.',
      'Pull the bar down in an arc until it reaches your thighs.',
      'Squeeze your lats at the bottom.',
      'Slowly return to the starting position.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Bending the elbows too much (turns into a pushdown)',
      'Using momentum',
      'Leaning too far forward'
    ],
    tips: [
      'Great for learning to activate your lats',
      'Keep arms mostly straight – only a slight elbow bend',
      'Focus on the mind-muscle connection with your lats'
    ],
    sets: 3,
    reps: '12-15',
    restSeconds: 60,
    calories: 5
  },
  {
    id: 'back-extension',
    name: 'Back Extension (Hyperextension)',
    bodyPart: 'back',
    targetMuscle: 'Erector Spinae',
    secondaryMuscles: ['Glutes', 'Hamstrings'],
    equipment: 'bodyweight',
    difficulty: 'beginner',
    instructions: [
      'Position yourself on a hyperextension bench with your hips on the pad.',
      'Cross your arms over your chest or place hands behind your head.',
      'Lower your upper body towards the ground by bending at the waist.',
      'Raise your torso back up until your body is in a straight line.',
      'Do not hyperextend beyond a straight line.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Hyperextending the back too far',
      'Using momentum to swing up',
      'Rounding the back at the bottom'
    ],
    tips: [
      'Keep the movement controlled and slow',
      'Great exercise for strengthening the lower back',
      'Hold a plate to your chest for added resistance'
    ],
    sets: 3,
    reps: '12-15',
    restSeconds: 60,
    calories: 5
  },

  // ========================================
  // SHOULDER EXERCISES (10)
  // ========================================
  {
    id: 'overhead-press',
    name: 'Barbell Overhead Press',
    bodyPart: 'shoulders',
    targetMuscle: 'Anterior Deltoid',
    secondaryMuscles: ['Lateral Deltoid', 'Triceps', 'Upper Chest', 'Core'],
    equipment: 'barbell',
    difficulty: 'intermediate',
    instructions: [
      'Stand with feet shoulder-width apart, holding the barbell at shoulder height.',
      'Grip the bar slightly wider than shoulder width.',
      'Brace your core and squeeze your glutes.',
      'Press the barbell overhead until your arms are fully locked out.',
      'Move your head slightly forward as the bar passes your face.',
      'Lower the bar back to shoulder height with control.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Leaning back excessively (turning it into an incline press)',
      'Not locking out fully at the top',
      'Flaring the ribcage',
      'Using leg drive (unless doing push press)'
    ],
    tips: [
      'Keep your core tight and ribs down',
      'Start with a weight you can press with strict form',
      'The barbell path should be as vertical as possible'
    ],
    sets: 4,
    reps: '6-10',
    restSeconds: 120,
    calories: 8
  },
  {
    id: 'dumbbell-shoulder-press',
    name: 'Dumbbell Shoulder Press',
    bodyPart: 'shoulders',
    targetMuscle: 'Anterior Deltoid',
    secondaryMuscles: ['Lateral Deltoid', 'Triceps'],
    equipment: 'dumbbell',
    difficulty: 'beginner',
    instructions: [
      'Sit on a bench with back support, holding dumbbells at shoulder height.',
      'Palms should face forward, elbows out to the sides.',
      'Press the dumbbells overhead until arms are fully extended.',
      'Bring the dumbbells slightly together at the top.',
      'Lower the dumbbells back to shoulder height.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Arching the back excessively',
      'Not pressing to full lockout',
      'Letting the dumbbells drift forward'
    ],
    tips: [
      'Can be done standing for more core engagement',
      'Use a bench with back support if you have lower back issues',
      'Dumbbells allow a more natural range of motion than barbell'
    ],
    sets: 3,
    reps: '8-12',
    restSeconds: 90,
    calories: 7
  },
  {
    id: 'lateral-raise',
    name: 'Dumbbell Lateral Raise',
    bodyPart: 'shoulders',
    targetMuscle: 'Lateral Deltoid',
    secondaryMuscles: ['Anterior Deltoid', 'Trapezius'],
    equipment: 'dumbbell',
    difficulty: 'beginner',
    instructions: [
      'Stand with feet hip-width apart, holding dumbbells at your sides.',
      'Keep a slight bend in your elbows.',
      'Raise the dumbbells out to the sides until they reach shoulder height.',
      'Hold for a brief moment at the top.',
      'Lower the dumbbells back to your sides with control.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Using too heavy a weight and swinging',
      'Raising the dumbbells above shoulder height',
      'Shrugging the shoulders up',
      'Using momentum'
    ],
    tips: [
      'Use light weight – this is an isolation exercise',
      'Lead with your elbows, not your hands',
      'Slight forward lean can help isolate the lateral delt',
      'Think about pouring water from a pitcher at the top'
    ],
    sets: 3,
    reps: '12-15',
    restSeconds: 60,
    calories: 4
  },
  {
    id: 'front-raise',
    name: 'Dumbbell Front Raise',
    bodyPart: 'shoulders',
    targetMuscle: 'Anterior Deltoid',
    secondaryMuscles: ['Lateral Deltoid'],
    equipment: 'dumbbell',
    difficulty: 'beginner',
    instructions: [
      'Stand with feet hip-width apart, holding dumbbells in front of your thighs.',
      'Keep a slight bend in your elbows.',
      'Raise one or both dumbbells in front of you to shoulder height.',
      'Hold for a moment at the top.',
      'Lower the dumbbell(s) back down with control.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Swinging the weights up with momentum',
      'Raising above shoulder height',
      'Leaning back'
    ],
    tips: [
      'Can be done alternating or with both arms simultaneously',
      'Use a neutral grip (palms facing each other) for variety',
      'Keep your core engaged to prevent swaying'
    ],
    sets: 3,
    reps: '12-15',
    restSeconds: 60,
    calories: 4
  },
  {
    id: 'reverse-pec-deck-fly',
    name: 'Reverse Pec Deck Fly',
    bodyPart: 'shoulders',
    targetMuscle: 'Rear Deltoid',
    secondaryMuscles: ['Rhomboids', 'Trapezius'],
    equipment: 'machine',
    difficulty: 'beginner',
    instructions: [
      'Sit facing the pec deck machine (chest against the pad).',
      'Adjust the handles so they are in front of you at shoulder height.',
      'Grab the handles with a neutral or overhand grip.',
      'Push the handles outward and back in a reverse fly motion.',
      'Squeeze your rear delts at the peak contraction.',
      'Slowly return to the starting position.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Using too much weight',
      'Not squeezing at the back',
      'Shrugging the shoulders'
    ],
    tips: [
      'Focus on your rear delts doing the work, not your traps',
      'Keep shoulders down and relaxed',
      'Great for posture improvement'
    ],
    sets: 3,
    reps: '12-15',
    restSeconds: 60,
    calories: 4
  },
  {
    id: 'arnold-press',
    name: 'Arnold Press',
    bodyPart: 'shoulders',
    targetMuscle: 'Anterior Deltoid',
    secondaryMuscles: ['Lateral Deltoid', 'Triceps'],
    equipment: 'dumbbell',
    difficulty: 'intermediate',
    instructions: [
      'Sit on a bench with back support, holding dumbbells in front of your shoulders.',
      'Start with palms facing you (supinated grip).',
      'Press the dumbbells up while rotating your palms to face forward.',
      'At the top, your palms should face away from you with arms extended.',
      'Reverse the motion, rotating palms back as you lower the dumbbells.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Rushing the rotation',
      'Not completing the full rotation',
      'Arching the back'
    ],
    tips: [
      'The rotation activates all three heads of the deltoid',
      'Use lighter weight than regular shoulder press',
      'Named after Arnold Schwarzenegger who popularized this exercise'
    ],
    sets: 3,
    reps: '8-12',
    restSeconds: 90,
    calories: 7
  },
  {
    id: 'upright-row',
    name: 'Dumbbell Upright Row',
    bodyPart: 'shoulders',
    targetMuscle: 'Lateral Deltoid',
    secondaryMuscles: ['Trapezius', 'Biceps'],
    equipment: 'dumbbell',
    difficulty: 'intermediate',
    instructions: [
      'Stand with feet shoulder-width apart, holding dumbbells in front of your thighs.',
      'Pull the dumbbells up along your body towards your chin.',
      'Lead with your elbows, keeping them higher than your wrists.',
      'Raise until elbows are at shoulder height.',
      'Lower the dumbbells back down with control.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Pulling too high (above shoulder height can impinge the shoulder)',
      'Using a grip that is too narrow',
      'Swinging the weight up'
    ],
    tips: [
      'Use dumbbells instead of barbell for a more natural wrist angle',
      'Stop at shoulder height to protect your shoulders',
      'Keep the dumbbells close to your body'
    ],
    sets: 3,
    reps: '10-12',
    restSeconds: 75,
    calories: 5
  },
  {
    id: 'barbell-shrug',
    name: 'Barbell Shrug',
    bodyPart: 'shoulders',
    targetMuscle: 'Trapezius',
    secondaryMuscles: ['Levator Scapulae'],
    equipment: 'barbell',
    difficulty: 'beginner',
    instructions: [
      'Stand with feet shoulder-width apart, holding a barbell in front of your thighs.',
      'Keep your arms straight throughout the movement.',
      'Shrug your shoulders straight up towards your ears as high as possible.',
      'Hold the contraction at the top for 1-2 seconds.',
      'Lower your shoulders back down slowly.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Rolling the shoulders (unnecessary and can cause injury)',
      'Bending the elbows',
      'Using too heavy weight with limited range of motion'
    ],
    tips: [
      'Think about trying to touch your ears with your shoulders',
      'Hold at the top for a better contraction',
      'Can also be done with dumbbells'
    ],
    sets: 3,
    reps: '12-15',
    restSeconds: 60,
    calories: 4
  },
  {
    id: 'cable-lateral-raise',
    name: 'Cable Lateral Raise',
    bodyPart: 'shoulders',
    targetMuscle: 'Lateral Deltoid',
    secondaryMuscles: ['Anterior Deltoid'],
    equipment: 'cable',
    difficulty: 'intermediate',
    instructions: [
      'Set a cable pulley to the lowest position.',
      'Stand sideways to the machine and grab the handle with the far hand.',
      'Keep a slight bend in your elbow.',
      'Raise your arm out to the side until it reaches shoulder height.',
      'Hold briefly at the top.',
      'Lower back down with control.',
      'Repeat for all reps, then switch sides.'
    ],
    commonMistakes: [
      'Using too much weight',
      'Swinging or using momentum',
      'Raising above shoulder height'
    ],
    tips: [
      'Cable provides constant tension throughout the range of motion',
      'Stand slightly offset from the cable for a better angle',
      'Can also be done behind the back for a different feel'
    ],
    sets: 3,
    reps: '12-15',
    restSeconds: 60,
    calories: 4
  },
  {
    id: 'dumbbell-reverse-fly',
    name: 'Dumbbell Reverse Fly (Bent Over)',
    bodyPart: 'shoulders',
    targetMuscle: 'Rear Deltoid',
    secondaryMuscles: ['Rhomboids', 'Trapezius'],
    equipment: 'dumbbell',
    difficulty: 'beginner',
    instructions: [
      'Stand with feet shoulder-width apart, holding dumbbells at your sides.',
      'Hinge forward at the hips until your torso is nearly parallel to the floor.',
      'Let the dumbbells hang below your chest with a slight bend in your elbows.',
      'Raise the dumbbells out to the sides until they reach shoulder height.',
      'Squeeze your rear delts at the top.',
      'Lower the dumbbells back down with control.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Using too heavy a weight',
      'Standing too upright',
      'Rounding the back',
      'Swinging the weights'
    ],
    tips: [
      'Use light weight and focus on feeling the rear delts',
      'Keep your torso stationary throughout',
      'Can also be done seated on a bench, leaning forward'
    ],
    sets: 3,
    reps: '12-15',
    restSeconds: 60,
    calories: 4
  },

  // ========================================
  // BICEPS EXERCISES (8)
  // ========================================
  {
    id: 'barbell-curl',
    name: 'Barbell Curl',
    bodyPart: 'biceps',
    targetMuscle: 'Biceps Brachii',
    secondaryMuscles: ['Brachialis', 'Forearms'],
    equipment: 'barbell',
    difficulty: 'beginner',
    instructions: [
      'Stand with feet shoulder-width apart, holding a barbell with an underhand grip.',
      'Keep your elbows pinned to your sides.',
      'Curl the barbell up towards your shoulders by contracting your biceps.',
      'Squeeze your biceps at the top of the movement.',
      'Lower the bar back down slowly with control.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Swinging the body to lift the weight',
      'Moving the elbows forward',
      'Not using full range of motion',
      'Going too fast'
    ],
    tips: [
      'Keep your upper arms stationary throughout',
      'Control the negative (lowering) portion',
      'Use a straight bar or EZ-bar depending on wrist comfort'
    ],
    sets: 3,
    reps: '10-12',
    restSeconds: 60,
    calories: 5
  },
  {
    id: 'dumbbell-curl',
    name: 'Dumbbell Bicep Curl',
    bodyPart: 'biceps',
    targetMuscle: 'Biceps Brachii',
    secondaryMuscles: ['Brachialis', 'Forearms'],
    equipment: 'dumbbell',
    difficulty: 'beginner',
    instructions: [
      'Stand with feet hip-width apart, holding a dumbbell in each hand at your sides.',
      'Keep your palms facing forward (supinated grip).',
      'Curl both dumbbells up simultaneously or alternating.',
      'Squeeze your biceps at the top.',
      'Lower the dumbbells back to the starting position slowly.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Swinging the dumbbells',
      'Not fully extending at the bottom',
      'Raising the elbows as you curl'
    ],
    tips: [
      'Supinate (turn palms up) as you curl for extra bicep activation',
      'Alternating arms allows you to use slightly heavier weight',
      'Keep your wrists straight'
    ],
    sets: 3,
    reps: '10-12',
    restSeconds: 60,
    calories: 5
  },
  {
    id: 'hammer-curl',
    name: 'Hammer Curl',
    bodyPart: 'biceps',
    targetMuscle: 'Brachialis',
    secondaryMuscles: ['Biceps Brachii', 'Brachioradialis'],
    equipment: 'dumbbell',
    difficulty: 'beginner',
    instructions: [
      'Stand with feet hip-width apart, holding dumbbells with a neutral grip (palms facing each other).',
      'Keep your elbows close to your sides.',
      'Curl the dumbbells up while maintaining the neutral grip.',
      'Squeeze at the top.',
      'Lower the dumbbells back down with control.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Swinging the body',
      'Rotating the wrists during the curl',
      'Moving elbows away from the body'
    ],
    tips: [
      'Hammer curls target the brachialis which adds thickness to your arms',
      'Also strengthens the forearms significantly',
      'Can be done alternating or simultaneously'
    ],
    sets: 3,
    reps: '10-12',
    restSeconds: 60,
    calories: 5
  },
  {
    id: 'concentration-curl',
    name: 'Concentration Curl',
    bodyPart: 'biceps',
    targetMuscle: 'Biceps Brachii (Peak)',
    secondaryMuscles: ['Brachialis'],
    equipment: 'dumbbell',
    difficulty: 'beginner',
    instructions: [
      'Sit on a bench with your legs spread apart.',
      'Hold a dumbbell in one hand with your elbow resting against your inner thigh.',
      'Let the dumbbell hang with your arm fully extended.',
      'Curl the dumbbell up towards your shoulder.',
      'Squeeze your bicep hard at the top.',
      'Lower the dumbbell back down slowly.',
      'Complete all reps, then switch arms.'
    ],
    commonMistakes: [
      'Using momentum to swing the weight',
      'Moving the upper arm off the thigh',
      'Not fully extending at the bottom'
    ],
    tips: [
      'This exercise isolates the bicep better than most curls',
      'Focus on the squeeze at the top for peak contraction',
      'Use a slow, controlled tempo'
    ],
    sets: 3,
    reps: '10-12',
    restSeconds: 60,
    calories: 4
  },
  {
    id: 'preacher-curl',
    name: 'Preacher Curl',
    bodyPart: 'biceps',
    targetMuscle: 'Biceps Brachii (Lower)',
    secondaryMuscles: ['Brachialis'],
    equipment: 'barbell',
    difficulty: 'intermediate',
    instructions: [
      'Sit at a preacher curl bench and adjust the pad height.',
      'Place the back of your upper arms flat on the pad.',
      'Grab an EZ-bar or straight bar with an underhand grip.',
      'Curl the bar up by contracting your biceps.',
      'Squeeze at the top, then lower the bar back down slowly.',
      'Do not lock out completely at the bottom to keep tension.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Lifting the elbows off the pad',
      'Locking out at the bottom (strains the elbow)',
      'Using momentum'
    ],
    tips: [
      'Great for eliminating cheating and isolating the biceps',
      'Do not fully straighten the arm at the bottom to protect your elbows',
      'Use an EZ-bar for a more comfortable wrist position'
    ],
    sets: 3,
    reps: '10-12',
    restSeconds: 60,
    calories: 5
  },
  {
    id: 'cable-curl',
    name: 'Cable Bicep Curl',
    bodyPart: 'biceps',
    targetMuscle: 'Biceps Brachii',
    secondaryMuscles: ['Brachialis', 'Forearms'],
    equipment: 'cable',
    difficulty: 'beginner',
    instructions: [
      'Set a cable pulley to the lowest position with a straight bar or EZ-bar attachment.',
      'Stand facing the machine and grab the bar with an underhand grip.',
      'Keep your elbows pinned to your sides.',
      'Curl the bar up towards your shoulders.',
      'Squeeze your biceps at the top.',
      'Lower the bar back down with control.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Leaning back to curl the weight',
      'Moving the elbows forward',
      'Not controlling the negative'
    ],
    tips: [
      'Cables provide constant tension unlike dumbbells',
      'Great for finishing off your bicep workout',
      'Try using a rope attachment for a different grip'
    ],
    sets: 3,
    reps: '12-15',
    restSeconds: 60,
    calories: 4
  },
  {
    id: 'incline-dumbbell-curl',
    name: 'Incline Dumbbell Curl',
    bodyPart: 'biceps',
    targetMuscle: 'Biceps Brachii (Long Head)',
    secondaryMuscles: ['Brachialis'],
    equipment: 'dumbbell',
    difficulty: 'intermediate',
    instructions: [
      'Set a bench to a 45-degree incline.',
      'Sit back with a dumbbell in each hand, arms hanging straight down.',
      'Curl the dumbbells up towards your shoulders.',
      'Keep your upper arms stationary and perpendicular to the floor.',
      'Squeeze your biceps at the top.',
      'Lower the dumbbells back down slowly.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Bringing the elbows forward',
      'Not going to full extension at the bottom',
      'Setting the bench too upright'
    ],
    tips: [
      'The incline creates a greater stretch on the long head of the bicep',
      'Use lighter weight than standing curls',
      'Let your arms hang naturally for the deepest stretch'
    ],
    sets: 3,
    reps: '10-12',
    restSeconds: 60,
    calories: 5
  },
  {
    id: 'ez-bar-curl',
    name: 'EZ-Bar Curl',
    bodyPart: 'biceps',
    targetMuscle: 'Biceps Brachii',
    secondaryMuscles: ['Brachialis', 'Forearms'],
    equipment: 'barbell',
    difficulty: 'beginner',
    instructions: [
      'Stand with feet shoulder-width apart, holding an EZ-bar on the inner angled grips.',
      'Keep your elbows close to your sides.',
      'Curl the bar up towards your shoulders.',
      'Squeeze the biceps at the top.',
      'Lower the bar back down slowly.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Swinging the body',
      'Moving the elbows',
      'Going too fast on the way down'
    ],
    tips: [
      'The angled grip reduces wrist strain compared to a straight bar',
      'Great option if straight bar curls cause wrist pain',
      'Can also use the outer grip for a wider curl variation'
    ],
    sets: 3,
    reps: '10-12',
    restSeconds: 60,
    calories: 5
  },

  // ========================================
  // TRICEPS EXERCISES (8)
  // ========================================
  {
    id: 'tricep-pushdown',
    name: 'Tricep Pushdown (Cable)',
    bodyPart: 'triceps',
    targetMuscle: 'Triceps (Lateral Head)',
    secondaryMuscles: ['Triceps (Medial Head)'],
    equipment: 'cable',
    difficulty: 'beginner',
    instructions: [
      'Stand facing a high cable pulley with a straight bar or V-bar attachment.',
      'Grab the bar with an overhand grip.',
      'Keep your elbows pinned to your sides.',
      'Push the bar down until your arms are fully extended.',
      'Squeeze your triceps at the bottom.',
      'Slowly let the bar come back up to about chest height.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Flaring elbows out to the sides',
      'Leaning over the bar and using body weight',
      'Not fully extending the arms',
      'Using too much weight'
    ],
    tips: [
      'Keep your elbows locked at your sides throughout',
      'Only your forearms should move',
      'Try a rope attachment for a different angle'
    ],
    sets: 3,
    reps: '12-15',
    restSeconds: 60,
    calories: 4
  },
  {
    id: 'skull-crusher',
    name: 'Skull Crusher (Lying Tricep Extension)',
    bodyPart: 'triceps',
    targetMuscle: 'Triceps (Long Head)',
    secondaryMuscles: ['Triceps (Lateral Head)', 'Triceps (Medial Head)'],
    equipment: 'barbell',
    difficulty: 'intermediate',
    instructions: [
      'Lie on a flat bench holding an EZ-bar with a close grip.',
      'Extend your arms straight up above your chest.',
      'Keeping your upper arms stationary, bend your elbows to lower the bar towards your forehead.',
      'Lower until the bar is just above your forehead.',
      'Extend your arms back to the starting position.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Moving the upper arms (elbows should be fixed)',
      'Lowering the bar to the face instead of above the head',
      'Using too much weight'
    ],
    tips: [
      'Lower the bar slightly behind your head for a better stretch on the long head',
      'Use an EZ-bar for a more comfortable wrist position',
      'Always use a spotter or be cautious with heavy weight'
    ],
    sets: 3,
    reps: '10-12',
    restSeconds: 75,
    calories: 5
  },
  {
    id: 'overhead-tricep-extension',
    name: 'Overhead Dumbbell Tricep Extension',
    bodyPart: 'triceps',
    targetMuscle: 'Triceps (Long Head)',
    secondaryMuscles: ['Triceps (Lateral Head)'],
    equipment: 'dumbbell',
    difficulty: 'beginner',
    instructions: [
      'Stand or sit with a dumbbell held overhead with both hands.',
      'Grip the inner plate of the dumbbell with both palms.',
      'Keep your upper arms close to your head.',
      'Lower the dumbbell behind your head by bending your elbows.',
      'Extend your arms back up to the starting position.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Flaring elbows out wide',
      'Not going through a full range of motion',
      'Using too heavy a weight'
    ],
    tips: [
      'Keep your elbows pointing forward and close to your head',
      'This exercise targets the long head of the triceps well',
      'Can also be done with a cable rope attachment'
    ],
    sets: 3,
    reps: '10-12',
    restSeconds: 60,
    calories: 5
  },
  {
    id: 'tricep-dip',
    name: 'Tricep Dip (Bench)',
    bodyPart: 'triceps',
    targetMuscle: 'Triceps',
    secondaryMuscles: ['Anterior Deltoid', 'Chest'],
    equipment: 'bodyweight',
    difficulty: 'beginner',
    instructions: [
      'Sit on the edge of a bench with your hands gripping the edge beside your hips.',
      'Slide your hips off the bench with your legs extended in front of you.',
      'Lower your body by bending your elbows to about 90 degrees.',
      'Push yourself back up by extending your arms.',
      'Keep your back close to the bench throughout.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Going too deep (strains the shoulders)',
      'Flaring the elbows out wide',
      'Moving too far from the bench'
    ],
    tips: [
      'Bend your knees to make it easier, extend legs to make it harder',
      'Great bodyweight exercise for triceps',
      'Can place a weight plate on your lap for added resistance'
    ],
    sets: 3,
    reps: '10-15',
    restSeconds: 60,
    calories: 5
  },
  {
    id: 'close-grip-bench-press',
    name: 'Close-Grip Bench Press',
    bodyPart: 'triceps',
    targetMuscle: 'Triceps',
    secondaryMuscles: ['Chest', 'Anterior Deltoid'],
    equipment: 'barbell',
    difficulty: 'intermediate',
    instructions: [
      'Lie on a flat bench and grip the barbell with hands shoulder-width apart or slightly narrower.',
      'Unrack the bar and hold it above your chest.',
      'Lower the bar to your mid/lower chest, keeping elbows close to your body.',
      'Press the bar back up, focusing on using your triceps.',
      'Lock out at the top.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Gripping too narrow (strains wrists)',
      'Flaring elbows out (reduces tricep activation)',
      'Bouncing the bar off the chest'
    ],
    tips: [
      'Hands should be about shoulder-width apart, not extremely close',
      'Keep elbows tucked close to your body',
      'Great compound movement for building tricep strength'
    ],
    sets: 3,
    reps: '8-10',
    restSeconds: 90,
    calories: 7
  },
  {
    id: 'cable-overhead-extension',
    name: 'Cable Overhead Tricep Extension',
    bodyPart: 'triceps',
    targetMuscle: 'Triceps (Long Head)',
    secondaryMuscles: ['Triceps (Lateral Head)'],
    equipment: 'cable',
    difficulty: 'intermediate',
    instructions: [
      'Set a cable pulley to the lowest position with a rope attachment.',
      'Grab the rope and face away from the machine.',
      'Lean forward slightly, holding the rope behind your head.',
      'Extend your arms forward and up until fully straight.',
      'Squeeze your triceps at the peak.',
      'Slowly bend your elbows to return to the starting position.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Moving the upper arms',
      'Using too much weight',
      'Not fully extending the arms'
    ],
    tips: [
      'Stagger your feet for better stability',
      'Keep your elbows close to your head',
      'Cables provide constant tension for a great pump'
    ],
    sets: 3,
    reps: '12-15',
    restSeconds: 60,
    calories: 4
  },
  {
    id: 'diamond-push-up',
    name: 'Diamond Push-Up',
    bodyPart: 'triceps',
    targetMuscle: 'Triceps',
    secondaryMuscles: ['Chest', 'Anterior Deltoid', 'Core'],
    equipment: 'bodyweight',
    difficulty: 'intermediate',
    instructions: [
      'Get into a push-up position with your hands close together under your chest.',
      'Form a diamond shape with your thumbs and index fingers touching.',
      'Lower your body until your chest touches your hands.',
      'Push yourself back up by extending your arms.',
      'Keep your elbows close to your body throughout.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Flaring elbows outward',
      'Sagging hips',
      'Not going deep enough'
    ],
    tips: [
      'One of the best bodyweight exercises for triceps',
      'If too hard, do them from your knees',
      'Keep your core tight and body in a straight line'
    ],
    sets: 3,
    reps: '8-15',
    restSeconds: 60,
    calories: 6
  },
  {
    id: 'tricep-kickback',
    name: 'Dumbbell Tricep Kickback',
    bodyPart: 'triceps',
    targetMuscle: 'Triceps',
    secondaryMuscles: [],
    equipment: 'dumbbell',
    difficulty: 'beginner',
    instructions: [
      'Hold a dumbbell in one hand and place the opposite knee and hand on a bench.',
      'Keep your back flat and parallel to the floor.',
      'Pin your upper arm to your side with your elbow bent at 90 degrees.',
      'Extend your forearm back until your arm is straight.',
      'Squeeze your tricep at full extension.',
      'Slowly bend your elbow to return to the starting position.',
      'Complete all reps, then switch arms.'
    ],
    commonMistakes: [
      'Swinging the dumbbell',
      'Dropping the upper arm',
      'Using too heavy a weight'
    ],
    tips: [
      'Use a light weight and focus on the squeeze at the top',
      'Keep your upper arm parallel to the floor throughout',
      'This is a finisher exercise – use it at the end of your tricep workout'
    ],
    sets: 3,
    reps: '12-15',
    restSeconds: 60,
    calories: 4
  },

  // ========================================
  // LEG EXERCISES (13)
  // ========================================
  {
    id: 'barbell-squat',
    name: 'Barbell Back Squat',
    bodyPart: 'legs',
    targetMuscle: 'Quadriceps',
    secondaryMuscles: ['Glutes', 'Hamstrings', 'Core', 'Erector Spinae'],
    equipment: 'barbell',
    difficulty: 'intermediate',
    instructions: [
      'Set the barbell on a squat rack at shoulder height.',
      'Step under the bar and position it on your upper traps (high bar) or rear delts (low bar).',
      'Unrack the bar and step back with feet shoulder-width apart.',
      'Brace your core and keep your chest up.',
      'Bend your knees and hips to lower your body as if sitting into a chair.',
      'Descend until your thighs are at least parallel to the floor.',
      'Drive through your heels to stand back up.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Knees caving inward',
      'Rounding the lower back',
      'Not going deep enough (partial reps)',
      'Leaning too far forward',
      'Coming up on toes'
    ],
    tips: [
      'Push your knees out over your toes',
      'Keep your chest up and core braced',
      'Start with just the bar to learn proper form',
      'Depth is key – at least parallel or below'
    ],
    sets: 4,
    reps: '8-12',
    restSeconds: 120,
    calories: 10
  },
  {
    id: 'leg-press',
    name: 'Leg Press',
    bodyPart: 'legs',
    targetMuscle: 'Quadriceps',
    secondaryMuscles: ['Glutes', 'Hamstrings'],
    equipment: 'machine',
    difficulty: 'beginner',
    instructions: [
      'Sit on the leg press machine with your back flat against the pad.',
      'Place your feet on the platform shoulder-width apart.',
      'Release the safety handles and lower the platform by bending your knees.',
      'Lower until your knees are at about 90 degrees.',
      'Press the platform back up by extending your legs.',
      'Do not lock out your knees at the top.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Placing feet too high or low on the platform',
      'Locking out knees at the top',
      'Letting the lower back round off the pad',
      'Using too much weight with limited range of motion'
    ],
    tips: [
      'Feet higher on platform = more glutes/hamstrings; lower = more quads',
      'Keep your lower back pressed firmly against the pad',
      'A great alternative for people who struggle with squats'
    ],
    sets: 3,
    reps: '10-15',
    restSeconds: 90,
    calories: 8
  },
  {
    id: 'lunges',
    name: 'Walking Lunges',
    bodyPart: 'legs',
    targetMuscle: 'Quadriceps',
    secondaryMuscles: ['Glutes', 'Hamstrings', 'Core'],
    equipment: 'bodyweight',
    difficulty: 'beginner',
    instructions: [
      'Stand with feet hip-width apart.',
      'Take a large step forward with one leg.',
      'Lower your body until both knees are at 90-degree angles.',
      'Your back knee should nearly touch the floor.',
      'Push off the front foot and step forward with the other leg.',
      'Continue alternating legs as you walk forward.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Knee going past the toes excessively',
      'Leaning forward too much',
      'Taking too short a step',
      'Losing balance'
    ],
    tips: [
      'Keep your torso upright throughout',
      'Can hold dumbbells for added resistance',
      'If space is limited, do reverse or stationary lunges instead'
    ],
    sets: 3,
    reps: '12-16 (each leg)',
    restSeconds: 90,
    calories: 8
  },
  {
    id: 'leg-curl',
    name: 'Lying Leg Curl',
    bodyPart: 'legs',
    targetMuscle: 'Hamstrings',
    secondaryMuscles: ['Calves'],
    equipment: 'machine',
    difficulty: 'beginner',
    instructions: [
      'Lie face down on the leg curl machine.',
      'Adjust the pad so it sits just above your heels.',
      'Grip the handles for support.',
      'Curl your legs up by bending your knees.',
      'Squeeze your hamstrings at the top of the movement.',
      'Lower the weight back down slowly.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Lifting the hips off the bench',
      'Using momentum to swing the weight',
      'Not fully extending the legs on the way down'
    ],
    tips: [
      'Point your toes towards your shins for better hamstring activation',
      'Control the negative (lowering) phase',
      'Can also do single-leg curls to fix imbalances'
    ],
    sets: 3,
    reps: '10-12',
    restSeconds: 60,
    calories: 5
  },
  {
    id: 'leg-extension',
    name: 'Leg Extension',
    bodyPart: 'legs',
    targetMuscle: 'Quadriceps',
    secondaryMuscles: [],
    equipment: 'machine',
    difficulty: 'beginner',
    instructions: [
      'Sit on the leg extension machine and adjust the back pad.',
      'Place your legs behind the pad, which should rest on your shins just above the feet.',
      'Grip the side handles for stability.',
      'Extend your legs out until they are straight.',
      'Squeeze your quads at the top.',
      'Lower the weight back down slowly.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Using too much weight and swinging',
      'Not fully extending the legs',
      'Going too fast'
    ],
    tips: [
      'Great for quad isolation and warming up before squats',
      'Pause at the top for a stronger contraction',
      'Use a controlled tempo throughout'
    ],
    sets: 3,
    reps: '12-15',
    restSeconds: 60,
    calories: 5
  },
  {
    id: 'calf-raise-standing',
    name: 'Standing Calf Raise',
    bodyPart: 'legs',
    targetMuscle: 'Gastrocnemius',
    secondaryMuscles: ['Soleus'],
    equipment: 'machine',
    difficulty: 'beginner',
    instructions: [
      'Stand on the edge of a step or calf raise machine with your heels hanging off.',
      'Place the balls of your feet on the edge.',
      'Rise up on your toes as high as possible.',
      'Hold the top position for 1-2 seconds.',
      'Lower your heels below the platform level for a full stretch.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Not going through full range of motion',
      'Bouncing at the bottom',
      'Bending the knees'
    ],
    tips: [
      'Calves respond well to higher reps and slower tempos',
      'Get a full stretch at the bottom and full squeeze at the top',
      'Toes pointed inward targets outer calf; outward targets inner calf'
    ],
    sets: 4,
    reps: '15-20',
    restSeconds: 45,
    calories: 3
  },
  {
    id: 'romanian-deadlift',
    name: 'Romanian Deadlift',
    bodyPart: 'legs',
    targetMuscle: 'Hamstrings',
    secondaryMuscles: ['Glutes', 'Erector Spinae'],
    equipment: 'barbell',
    difficulty: 'intermediate',
    instructions: [
      'Stand with feet hip-width apart, holding a barbell in front of your thighs.',
      'Keep a slight bend in your knees (do not lock them out).',
      'Hinge forward at the hips, pushing your butt back.',
      'Lower the bar along your legs until you feel a deep stretch in your hamstrings.',
      'Keep your back flat and the bar close to your body.',
      'Drive your hips forward to stand back up.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Rounding the lower back',
      'Bending the knees too much (turns into a squat)',
      'Not hinging at the hips properly',
      'Letting the bar drift away from the body'
    ],
    tips: [
      'Think about pushing your hips back, not bending forward',
      'The bar should travel in a straight line close to your legs',
      'You should feel a strong stretch in your hamstrings',
      'Start light and focus on the hip hinge pattern'
    ],
    sets: 3,
    reps: '8-12',
    restSeconds: 90,
    calories: 8
  },
  {
    id: 'goblet-squat',
    name: 'Goblet Squat',
    bodyPart: 'legs',
    targetMuscle: 'Quadriceps',
    secondaryMuscles: ['Glutes', 'Core'],
    equipment: 'dumbbell',
    difficulty: 'beginner',
    instructions: [
      'Hold a dumbbell vertically against your chest with both hands cupping one end.',
      'Stand with feet slightly wider than shoulder-width, toes slightly turned out.',
      'Brace your core and squat down by bending your knees and hips.',
      'Lower until your elbows touch your inner knees or thighs are parallel.',
      'Push through your heels to stand back up.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Leaning forward',
      'Knees caving inward',
      'Not going deep enough'
    ],
    tips: [
      'Great exercise for learning squat form as a beginner',
      'The weight in front acts as a counterbalance for better depth',
      'Keep your elbows inside your knees to push them out'
    ],
    sets: 3,
    reps: '12-15',
    restSeconds: 75,
    calories: 7
  },
  {
    id: 'bulgarian-split-squat',
    name: 'Bulgarian Split Squat',
    bodyPart: 'legs',
    targetMuscle: 'Quadriceps',
    secondaryMuscles: ['Glutes', 'Hamstrings', 'Core'],
    equipment: 'dumbbell',
    difficulty: 'intermediate',
    instructions: [
      'Stand about 2 feet in front of a bench, facing away from it.',
      'Place the top of one foot on the bench behind you.',
      'Hold dumbbells at your sides.',
      'Lower your body by bending the front knee until the back knee nearly touches the floor.',
      'Keep your front knee tracking over your toes.',
      'Push through the front heel to stand back up.',
      'Complete all reps on one leg, then switch.'
    ],
    commonMistakes: [
      'Standing too close or too far from the bench',
      'Front knee going past the toes excessively',
      'Leaning forward too much',
      'Losing balance'
    ],
    tips: [
      'One of the best single-leg exercises for building leg strength',
      'Start with bodyweight before adding dumbbells',
      'Keep your torso upright throughout'
    ],
    sets: 3,
    reps: '10-12 (each leg)',
    restSeconds: 90,
    calories: 8
  },
  {
    id: 'hip-thrust',
    name: 'Barbell Hip Thrust',
    bodyPart: 'legs',
    targetMuscle: 'Glutes',
    secondaryMuscles: ['Hamstrings', 'Core'],
    equipment: 'barbell',
    difficulty: 'intermediate',
    instructions: [
      'Sit on the floor with your upper back resting against a bench.',
      'Roll a barbell over your hips (use a pad for comfort).',
      'Place your feet flat on the floor, shoulder-width apart, knees bent.',
      'Drive through your heels and push your hips up until your body forms a straight line from shoulders to knees.',
      'Squeeze your glutes hard at the top.',
      'Lower your hips back down with control.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Hyperextending the lower back at the top',
      'Not squeezing the glutes',
      'Placing feet too close or too far from the body'
    ],
    tips: [
      'The best exercise for directly targeting the glutes',
      'Push through your heels, not your toes',
      'Keep your chin tucked to maintain a neutral spine'
    ],
    sets: 3,
    reps: '10-12',
    restSeconds: 90,
    calories: 7
  },
  {
    id: 'sumo-deadlift',
    name: 'Sumo Deadlift',
    bodyPart: 'legs',
    targetMuscle: 'Glutes',
    secondaryMuscles: ['Hamstrings', 'Quadriceps', 'Adductors', 'Core'],
    equipment: 'barbell',
    difficulty: 'intermediate',
    instructions: [
      'Stand with a very wide stance, toes pointed outward at 30-45 degrees.',
      'Bend at the hips and knees to grip the bar with arms inside your legs.',
      'Keep your chest up and back flat.',
      'Drive through your heels and extend your hips and knees to stand up.',
      'Lock out at the top by squeezing your glutes.',
      'Lower the bar back down by reversing the movement.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Stance not wide enough',
      'Knees caving inward',
      'Rounding the back',
      'Hips shooting up too fast'
    ],
    tips: [
      'Sumo stance puts more emphasis on glutes and inner thighs',
      'Push your knees out over your toes',
      'The wider stance reduces the range of motion compared to conventional deadlift'
    ],
    sets: 3,
    reps: '6-10',
    restSeconds: 120,
    calories: 10
  },
  {
    id: 'front-squat',
    name: 'Front Squat',
    bodyPart: 'legs',
    targetMuscle: 'Quadriceps',
    secondaryMuscles: ['Glutes', 'Core', 'Upper Back'],
    equipment: 'barbell',
    difficulty: 'advanced',
    instructions: [
      'Set the barbell on a rack at shoulder height.',
      'Position the bar on your front deltoids, crossing your arms to hold it or using a clean grip.',
      'Unrack the bar and step back.',
      'Brace your core and keep your elbows high.',
      'Squat down until your thighs are at least parallel to the floor.',
      'Drive through your heels to stand back up, keeping your torso upright.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Letting the elbows drop (bar falls forward)',
      'Leaning forward',
      'Not going deep enough'
    ],
    tips: [
      'Front squats require more mobility than back squats',
      'Work on wrist and thoracic spine flexibility',
      'The upright torso puts more emphasis on quads and core'
    ],
    sets: 3,
    reps: '6-10',
    restSeconds: 120,
    calories: 10
  },
  {
    id: 'step-up',
    name: 'Dumbbell Step-Up',
    bodyPart: 'legs',
    targetMuscle: 'Quadriceps',
    secondaryMuscles: ['Glutes', 'Hamstrings'],
    equipment: 'dumbbell',
    difficulty: 'beginner',
    instructions: [
      'Stand in front of a sturdy bench or elevated platform holding dumbbells at your sides.',
      'Place one foot firmly on the bench.',
      'Push through the heel of the elevated foot to step up.',
      'Bring the other foot up to stand on the bench.',
      'Step back down with the trailing leg first.',
      'Complete all reps on one leg, then switch.'
    ],
    commonMistakes: [
      'Pushing off with the back foot instead of driving through the front foot',
      'Using a platform that is too high',
      'Leaning forward too much'
    ],
    tips: [
      'The higher the platform, the more glute activation',
      'Focus on using only the working leg to lift your body',
      'Great exercise for building single-leg strength'
    ],
    sets: 3,
    reps: '10-12 (each leg)',
    restSeconds: 75,
    calories: 6
  },

  // ========================================
  // CORE EXERCISES (11)
  // ========================================
  {
    id: 'plank',
    name: 'Plank',
    bodyPart: 'core',
    targetMuscle: 'Rectus Abdominis',
    secondaryMuscles: ['Obliques', 'Transverse Abdominis', 'Shoulders', 'Glutes'],
    equipment: 'bodyweight',
    difficulty: 'beginner',
    instructions: [
      'Get into a push-up position but rest on your forearms instead of your hands.',
      'Keep your elbows directly under your shoulders.',
      'Engage your core and glutes to keep your body in a straight line.',
      'Keep your head in a neutral position, looking at the floor.',
      'Hold this position for the prescribed time.',
      'Breathe steadily throughout.'
    ],
    commonMistakes: [
      'Sagging hips down',
      'Piking hips up too high',
      'Holding breath',
      'Looking up or forward (strains the neck)'
    ],
    tips: [
      'Start with 20-30 seconds and build up to 60+ seconds',
      'Squeeze your glutes and abs as hard as possible',
      'If too hard, start with knee planks'
    ],
    sets: 3,
    reps: '30-60 sec',
    restSeconds: 60,
    calories: 4
  },
  {
    id: 'crunches',
    name: 'Crunches',
    bodyPart: 'core',
    targetMuscle: 'Rectus Abdominis (Upper)',
    secondaryMuscles: ['Obliques'],
    equipment: 'bodyweight',
    difficulty: 'beginner',
    instructions: [
      'Lie on your back with knees bent and feet flat on the floor.',
      'Place your hands behind your head or across your chest.',
      'Engage your core and curl your upper body towards your knees.',
      'Lift your shoulder blades off the floor.',
      'Hold for a moment, squeezing your abs.',
      'Lower back down with control.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Pulling on the neck with hands',
      'Using momentum to swing up',
      'Coming up too high (sit-up instead of crunch)',
      'Not engaging the core'
    ],
    tips: [
      'Focus on curling your ribcage towards your pelvis',
      'Keep a fist-sized gap between your chin and chest',
      'Exhale as you crunch up for better ab contraction'
    ],
    sets: 3,
    reps: '15-20',
    restSeconds: 45,
    calories: 3
  },
  {
    id: 'hanging-leg-raise',
    name: 'Hanging Leg Raise',
    bodyPart: 'core',
    targetMuscle: 'Rectus Abdominis (Lower)',
    secondaryMuscles: ['Hip Flexors', 'Obliques'],
    equipment: 'bodyweight',
    difficulty: 'intermediate',
    instructions: [
      'Hang from a pull-up bar with an overhand grip, arms fully extended.',
      'Keep your legs straight together.',
      'Raise your legs in front of you until they are parallel to the floor or higher.',
      'Hold for a moment at the top.',
      'Lower your legs back down slowly and with control.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Swinging the body',
      'Using momentum to swing legs up',
      'Bending the knees too much',
      'Not controlling the descent'
    ],
    tips: [
      'If straight legs are too hard, start with bent knee raises',
      'Avoid swinging – use controlled movements',
      'To target abs more, curl your pelvis up at the top'
    ],
    sets: 3,
    reps: '10-15',
    restSeconds: 60,
    calories: 5
  },
  {
    id: 'russian-twist',
    name: 'Russian Twist',
    bodyPart: 'core',
    targetMuscle: 'Obliques',
    secondaryMuscles: ['Rectus Abdominis', 'Hip Flexors'],
    equipment: 'bodyweight',
    difficulty: 'beginner',
    instructions: [
      'Sit on the floor with knees bent and feet flat (or slightly elevated).',
      'Lean back slightly to engage your core, keeping your back straight.',
      'Hold your hands together or hold a weight at chest level.',
      'Rotate your torso to the right, bringing your hands beside your right hip.',
      'Rotate to the left side in the same manner.',
      'Each rotation to one side counts as one rep.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Rounding the back',
      'Moving only the arms instead of rotating the torso',
      'Going too fast without control'
    ],
    tips: [
      'Lift your feet off the ground for added difficulty',
      'Hold a dumbbell, plate, or medicine ball for extra resistance',
      'Focus on rotating through your core, not just your arms'
    ],
    sets: 3,
    reps: '20-30 (total)',
    restSeconds: 45,
    calories: 4
  },
  {
    id: 'mountain-climbers',
    name: 'Mountain Climbers',
    bodyPart: 'core',
    targetMuscle: 'Rectus Abdominis',
    secondaryMuscles: ['Hip Flexors', 'Shoulders', 'Quadriceps'],
    equipment: 'bodyweight',
    difficulty: 'beginner',
    instructions: [
      'Start in a high plank position with hands under shoulders.',
      'Keep your body in a straight line.',
      'Drive one knee towards your chest.',
      'Quickly switch legs, extending the first leg back while bringing the other knee forward.',
      'Continue alternating legs at a rapid pace.',
      'Keep your core engaged and hips level throughout.'
    ],
    commonMistakes: [
      'Bouncing the hips up and down',
      'Not bringing the knees far enough forward',
      'Losing the plank position'
    ],
    tips: [
      'Start slow and increase speed as you get comfortable',
      'Great exercise for both core strength and cardio',
      'Keep your hands directly under your shoulders'
    ],
    sets: 3,
    reps: '30-40 (total)',
    restSeconds: 45,
    calories: 6
  },
  {
    id: 'bicycle-crunch',
    name: 'Bicycle Crunch',
    bodyPart: 'core',
    targetMuscle: 'Obliques',
    secondaryMuscles: ['Rectus Abdominis', 'Hip Flexors'],
    equipment: 'bodyweight',
    difficulty: 'beginner',
    instructions: [
      'Lie on your back with hands behind your head.',
      'Lift your shoulders and feet off the ground.',
      'Bring your right elbow towards your left knee while extending your right leg.',
      'Switch sides, bringing your left elbow towards your right knee.',
      'Continue alternating in a pedaling motion.',
      'Each side counts as one rep.'
    ],
    commonMistakes: [
      'Pulling on the neck',
      'Moving too fast without control',
      'Not fully rotating the torso'
    ],
    tips: [
      'Focus on the rotation, not just the elbow-to-knee touch',
      'Keep your lower back pressed into the floor',
      'Slow and controlled reps are more effective than fast ones'
    ],
    sets: 3,
    reps: '20-30 (total)',
    restSeconds: 45,
    calories: 4
  },
  {
    id: 'dead-bug',
    name: 'Dead Bug',
    bodyPart: 'core',
    targetMuscle: 'Transverse Abdominis',
    secondaryMuscles: ['Rectus Abdominis', 'Obliques'],
    equipment: 'bodyweight',
    difficulty: 'beginner',
    instructions: [
      'Lie on your back with arms extended straight up towards the ceiling.',
      'Lift your legs so your knees are bent at 90 degrees (tabletop position).',
      'Press your lower back into the floor.',
      'Slowly extend your right arm behind your head and left leg forward simultaneously.',
      'Return to the starting position.',
      'Repeat with the left arm and right leg.',
      'Alternate sides for the desired number of reps.'
    ],
    commonMistakes: [
      'Letting the lower back arch off the floor',
      'Moving too quickly',
      'Not coordinating arm and leg movement'
    ],
    tips: [
      'Your lower back should stay pressed into the floor the entire time',
      'Excellent exercise for core stability and lower back health',
      'Breathe out as you extend the arm and leg'
    ],
    sets: 3,
    reps: '10-12 (each side)',
    restSeconds: 45,
    calories: 3
  },
  {
    id: 'ab-wheel-rollout',
    name: 'Ab Wheel Rollout',
    bodyPart: 'core',
    targetMuscle: 'Rectus Abdominis',
    secondaryMuscles: ['Obliques', 'Shoulders', 'Lats'],
    equipment: 'bodyweight',
    difficulty: 'advanced',
    instructions: [
      'Kneel on the floor and grip the ab wheel handles with both hands.',
      'Position the wheel directly below your shoulders.',
      'Brace your core and slowly roll the wheel forward.',
      'Extend your body as far as you can while maintaining a flat back.',
      'Squeeze your abs to pull the wheel back to the starting position.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Arching the lower back',
      'Going too far out and collapsing',
      'Not engaging the core before rolling out'
    ],
    tips: [
      'Start with small range of motion and gradually increase',
      'Keep your hips tucked under (posterior pelvic tilt)',
      'If no ab wheel, use a barbell with round plates'
    ],
    sets: 3,
    reps: '8-12',
    restSeconds: 60,
    calories: 5
  },
  {
    id: 'cable-woodchop',
    name: 'Cable Woodchop',
    bodyPart: 'core',
    targetMuscle: 'Obliques',
    secondaryMuscles: ['Rectus Abdominis', 'Shoulders'],
    equipment: 'cable',
    difficulty: 'intermediate',
    instructions: [
      'Set a cable pulley to the highest position with a single handle.',
      'Stand sideways to the machine, feet shoulder-width apart.',
      'Grab the handle with both hands, arms extended.',
      'Pull the handle diagonally across your body from high to low.',
      'Rotate your torso as you pull, pivoting on your back foot.',
      'Return to the starting position with control.',
      'Complete all reps on one side, then switch.'
    ],
    commonMistakes: [
      'Using too much weight',
      'Moving the arms instead of rotating the torso',
      'Not controlling the return'
    ],
    tips: [
      'The power comes from your core rotation, not your arms',
      'Can also do low-to-high woodchops',
      'Great for rotational core strength used in sports'
    ],
    sets: 3,
    reps: '12-15 (each side)',
    restSeconds: 60,
    calories: 5
  },
  {
    id: 'flutter-kicks',
    name: 'Flutter Kicks',
    bodyPart: 'core',
    targetMuscle: 'Rectus Abdominis (Lower)',
    secondaryMuscles: ['Hip Flexors'],
    equipment: 'bodyweight',
    difficulty: 'beginner',
    instructions: [
      'Lie on your back with legs extended and arms at your sides or under your hips.',
      'Lift both legs a few inches off the ground.',
      'Alternately kick your legs up and down in a small, controlled motion.',
      'Keep your core engaged and lower back pressed into the floor.',
      'Continue for the prescribed time or reps.',
      'Each kick counts as one rep.'
    ],
    commonMistakes: [
      'Lower back arching off the floor',
      'Kicking too high',
      'Holding breath'
    ],
    tips: [
      'Place your hands under your hips for lower back support',
      'The lower your legs, the harder it is',
      'Keep movements small and controlled'
    ],
    sets: 3,
    reps: '30-40 (total)',
    restSeconds: 45,
    calories: 4
  },
  {
    id: 'side-plank',
    name: 'Side Plank',
    bodyPart: 'core',
    targetMuscle: 'Obliques',
    secondaryMuscles: ['Transverse Abdominis', 'Glutes', 'Shoulders'],
    equipment: 'bodyweight',
    difficulty: 'beginner',
    instructions: [
      'Lie on your side with your elbow directly under your shoulder.',
      'Stack your feet on top of each other or stagger them.',
      'Lift your hips off the ground to form a straight line from head to feet.',
      'Hold this position, keeping your core engaged.',
      'Lower back down after the prescribed time.',
      'Switch sides and repeat.'
    ],
    commonMistakes: [
      'Letting the hips sag down',
      'Rotating the torso forward or backward',
      'Not stacking the shoulder over the elbow'
    ],
    tips: [
      'Start with 15-20 seconds per side and build up',
      'Stack feet for more challenge, stagger them for more stability',
      'Add hip dips for dynamic movement'
    ],
    sets: 3,
    reps: '20-40 sec (each side)',
    restSeconds: 45,
    calories: 3
  },

  // ========================================
  // FULL BODY EXERCISES (8)
  // ========================================
  {
    id: 'burpees',
    name: 'Burpees',
    bodyPart: 'fullBody',
    targetMuscle: 'Full Body',
    secondaryMuscles: ['Chest', 'Shoulders', 'Quadriceps', 'Core', 'Hamstrings'],
    equipment: 'bodyweight',
    difficulty: 'intermediate',
    instructions: [
      'Stand with feet shoulder-width apart.',
      'Drop into a squat and place your hands on the floor.',
      'Jump or step your feet back into a plank position.',
      'Perform a push-up (optional for beginners).',
      'Jump or step your feet back towards your hands.',
      'Explosively jump up with arms overhead.',
      'Land softly and immediately begin the next rep.'
    ],
    commonMistakes: [
      'Not going down into a full squat',
      'Sagging hips in the plank position',
      'Landing with locked knees',
      'Skipping the push-up'
    ],
    tips: [
      'Start slowly and focus on form before speed',
      'Modify by stepping instead of jumping if needed',
      'One of the best exercises for burning calories'
    ],
    sets: 3,
    reps: '8-15',
    restSeconds: 60,
    calories: 10
  },
  {
    id: 'clean-and-press',
    name: 'Barbell Clean and Press',
    bodyPart: 'fullBody',
    targetMuscle: 'Full Body',
    secondaryMuscles: ['Shoulders', 'Trapezius', 'Glutes', 'Hamstrings', 'Core'],
    equipment: 'barbell',
    difficulty: 'advanced',
    instructions: [
      'Stand with feet hip-width apart, barbell on the floor in front of you.',
      'Bend at the hips and knees to grip the bar with an overhand grip.',
      'Explosively extend your hips and knees, pulling the bar upward.',
      'As the bar reaches chest height, flip your elbows under to catch it on your front deltoids.',
      'From this front rack position, press the bar overhead.',
      'Lower the bar back to the front rack, then to the floor.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Using arms to pull instead of using hip drive',
      'Not catching the bar properly in the front rack',
      'Rounding the back during the clean',
      'Pressing without stabilizing first'
    ],
    tips: [
      'This is a complex movement – learn the clean and press separately first',
      'Start with very light weight or even a PVC pipe',
      'Great for building explosive power and overall strength'
    ],
    sets: 3,
    reps: '5-8',
    restSeconds: 120,
    calories: 12
  },
  {
    id: 'thrusters',
    name: 'Dumbbell Thrusters',
    bodyPart: 'fullBody',
    targetMuscle: 'Full Body',
    secondaryMuscles: ['Quadriceps', 'Glutes', 'Shoulders', 'Triceps', 'Core'],
    equipment: 'dumbbell',
    difficulty: 'intermediate',
    instructions: [
      'Hold dumbbells at shoulder height with palms facing each other.',
      'Stand with feet shoulder-width apart.',
      'Squat down until your thighs are parallel to the floor.',
      'Drive through your heels to stand up explosively.',
      'Use the momentum to press the dumbbells overhead.',
      'Lower the dumbbells back to shoulder height as you begin the next squat.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Not squatting deep enough',
      'Pressing the dumbbells separately from the squat',
      'Leaning forward',
      'Not using leg drive for the press'
    ],
    tips: [
      'The press should flow seamlessly from the squat – one continuous movement',
      'Great for building conditioning and burning calories',
      'Can also be done with a barbell'
    ],
    sets: 3,
    reps: '10-15',
    restSeconds: 90,
    calories: 10
  },
  {
    id: 'kettlebell-swing',
    name: 'Kettlebell Swing',
    bodyPart: 'fullBody',
    targetMuscle: 'Full Body',
    secondaryMuscles: ['Glutes', 'Hamstrings', 'Core', 'Shoulders', 'Back'],
    equipment: 'kettlebell',
    difficulty: 'intermediate',
    instructions: [
      'Stand with feet slightly wider than shoulder-width apart.',
      'Hold a kettlebell with both hands in front of you.',
      'Hinge at the hips, swinging the kettlebell between your legs.',
      'Drive your hips forward explosively to swing the kettlebell to chest or eye height.',
      'Let the kettlebell swing back between your legs as you hinge again.',
      'Repeat for the desired number of reps.'
    ],
    commonMistakes: [
      'Squatting instead of hinging at the hips',
      'Using the arms to lift the weight instead of hip drive',
      'Rounding the back',
      'Swinging too high (above head)'
    ],
    tips: [
      'Power comes from the hip snap, not the arms',
      'Keep the kettlebell close to your body on the downswing',
      'Squeeze your glutes hard at the top of each swing'
    ],
    sets: 3,
    reps: '15-20',
    restSeconds: 60,
    calories: 10
  },
  {
    id: 'man-maker',
    name: 'Man Maker',
    bodyPart: 'fullBody',
    targetMuscle: 'Full Body',
    secondaryMuscles: ['Chest', 'Back', 'Shoulders', 'Legs', 'Core'],
    equipment: 'dumbbell',
    difficulty: 'advanced',
    instructions: [
      'Start standing with a dumbbell in each hand.',
      'Place the dumbbells on the floor and jump your feet back into a plank.',
      'Perform a push-up on the dumbbells.',
      'Do a renegade row with each arm (row one dumbbell to your hip, then the other).',
      'Jump your feet forward to the dumbbells.',
      'Clean the dumbbells to your shoulders and press them overhead.',
      'Lower the dumbbells and repeat.'
    ],
    commonMistakes: [
      'Rushing through the movement',
      'Not stabilizing during the renegade rows',
      'Using too heavy a weight'
    ],
    tips: [
      'Start with very light dumbbells',
      'This is an extremely demanding full-body exercise',
      'Focus on quality of each component movement'
    ],
    sets: 3,
    reps: '5-8',
    restSeconds: 120,
    calories: 15
  },
  {
    id: 'turkish-get-up',
    name: 'Turkish Get-Up',
    bodyPart: 'fullBody',
    targetMuscle: 'Full Body',
    secondaryMuscles: ['Shoulders', 'Core', 'Glutes', 'Legs'],
    equipment: 'kettlebell',
    difficulty: 'advanced',
    instructions: [
      'Lie on your back holding a kettlebell in one hand, arm extended towards the ceiling.',
      'Bend the knee on the same side as the kettlebell, foot flat on the floor.',
      'Roll onto your opposite elbow, then push up to your hand.',
      'Lift your hips off the ground and sweep the extended leg underneath you into a kneeling position.',
      'Stand up from the kneeling position while keeping the kettlebell overhead.',
      'Reverse the entire sequence to return to the starting position.',
      'Complete all reps on one side, then switch.'
    ],
    commonMistakes: [
      'Losing eye contact with the kettlebell',
      'Rushing through the steps',
      'Not keeping the arm vertical',
      'Using too heavy a weight'
    ],
    tips: [
      'Learn each step of the get-up individually before combining',
      'Start with no weight or a shoe balanced on your fist',
      'Keep your eyes on the kettlebell at all times'
    ],
    sets: 3,
    reps: '3-5 (each side)',
    restSeconds: 90,
    calories: 8
  },
  {
    id: 'battle-ropes',
    name: 'Battle Ropes (Alternating Waves)',
    bodyPart: 'fullBody',
    targetMuscle: 'Full Body',
    secondaryMuscles: ['Shoulders', 'Arms', 'Core', 'Legs'],
    equipment: 'bodyweight',
    difficulty: 'intermediate',
    instructions: [
      'Stand with feet shoulder-width apart, knees slightly bent.',
      'Hold one end of the battle rope in each hand.',
      'Alternately raise and lower each arm to create waves in the rope.',
      'Maintain a slight squat position throughout.',
      'Keep your core engaged and shoulders down.',
      'Continue for the prescribed time.'
    ],
    commonMistakes: [
      'Standing too upright',
      'Only moving the arms without engaging the core',
      'Holding breath'
    ],
    tips: [
      'Keep your feet planted and knees slightly bent',
      'Try different patterns: alternating, double, slams, circles',
      'Great for building cardio endurance and arm strength'
    ],
    sets: 3,
    reps: '30-45 sec',
    restSeconds: 60,
    calories: 12
  },
  {
    id: 'bear-crawl',
    name: 'Bear Crawl',
    bodyPart: 'fullBody',
    targetMuscle: 'Full Body',
    secondaryMuscles: ['Shoulders', 'Core', 'Quadriceps', 'Hip Flexors'],
    equipment: 'bodyweight',
    difficulty: 'beginner',
    instructions: [
      'Start on all fours with your hands under shoulders and knees under hips.',
      'Lift your knees a few inches off the ground.',
      'Move forward by stepping the opposite hand and foot at the same time.',
      'Keep your back flat and hips low.',
      'Continue crawling forward for the desired distance or time.',
      'You can also crawl backward for added challenge.'
    ],
    commonMistakes: [
      'Hips rising too high',
      'Moving same-side hand and foot together (should be opposite)',
      'Moving too fast and losing form'
    ],
    tips: [
      'Keep your core tight and back flat',
      'Take small, controlled steps',
      'Great warm-up or finisher exercise'
    ],
    sets: 3,
    reps: '30-45 sec',
    restSeconds: 45,
    calories: 7
  }
];
