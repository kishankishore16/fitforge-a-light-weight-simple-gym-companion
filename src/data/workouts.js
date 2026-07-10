export const workoutPlans = [
  // ========================================
  // BEGINNER PLANS
  // ========================================
  {
    id: 'full-body-basics',
    name: 'Full Body Basics',
    description: 'Perfect for complete beginners. This plan hits every muscle group 3 times per week with simple, effective exercises. Low volume to build a foundation without overwhelming you.',
    level: 'beginner',
    daysPerWeek: 3,
    duration: '4 weeks',
    focusArea: 'Full Body',
    schedule: [
      {
        day: 1,
        name: 'Full Body A',
        warmup: '5 minutes light cardio (jumping jacks or jogging in place) + arm circles + leg swings',
        cooldown: '5 minutes stretching focusing on worked muscles',
        exercises: [
          { exerciseId: 'barbell-squat', sets: 3, reps: '10-12', restSeconds: 90 },
          { exerciseId: 'barbell-bench-press', sets: 3, reps: '10-12', restSeconds: 90 },
          { exerciseId: 'barbell-row', sets: 3, reps: '10-12', restSeconds: 90 },
          { exerciseId: 'overhead-press', sets: 3, reps: '10-12', restSeconds: 60 },
          { exerciseId: 'barbell-curl', sets: 2, reps: '12-15', restSeconds: 60 },
          { exerciseId: 'plank', sets: 3, reps: '30 sec', restSeconds: 45 }
        ]
      },
      {
        day: 2,
        name: 'Rest Day',
        warmup: '',
        cooldown: '',
        exercises: []
      },
      {
        day: 3,
        name: 'Full Body B',
        warmup: '5 minutes light cardio + dynamic stretches',
        cooldown: '5 minutes full body stretching',
        exercises: [
          { exerciseId: 'leg-press', sets: 3, reps: '12-15', restSeconds: 90 },
          { exerciseId: 'dumbbell-bench-press', sets: 3, reps: '10-12', restSeconds: 90 },
          { exerciseId: 'lat-pulldown', sets: 3, reps: '10-12', restSeconds: 90 },
          { exerciseId: 'dumbbell-shoulder-press', sets: 3, reps: '10-12', restSeconds: 60 },
          { exerciseId: 'tricep-pushdown', sets: 2, reps: '12-15', restSeconds: 60 },
          { exerciseId: 'crunches', sets: 3, reps: '15-20', restSeconds: 45 }
        ]
      },
      {
        day: 4,
        name: 'Rest Day',
        warmup: '',
        cooldown: '',
        exercises: []
      },
      {
        day: 5,
        name: 'Full Body C',
        warmup: '5 minutes cardio + hip circles + shoulder warm-up',
        cooldown: '5 minutes stretching + deep breathing',
        exercises: [
          { exerciseId: 'goblet-squat', sets: 3, reps: '12-15', restSeconds: 90 },
          { exerciseId: 'incline-dumbbell-press', sets: 3, reps: '10-12', restSeconds: 90 },
          { exerciseId: 'seated-cable-row', sets: 3, reps: '10-12', restSeconds: 90 },
          { exerciseId: 'lateral-raise', sets: 3, reps: '12-15', restSeconds: 60 },
          { exerciseId: 'hammer-curl', sets: 2, reps: '12-15', restSeconds: 60 },
          { exerciseId: 'mountain-climbers', sets: 3, reps: '20 each side', restSeconds: 45 }
        ]
      },
      {
        day: 6,
        name: 'Rest Day',
        warmup: '',
        cooldown: '',
        exercises: []
      },
      {
        day: 7,
        name: 'Rest Day',
        warmup: '',
        cooldown: '',
        exercises: []
      }
    ]
  },
  {
    id: 'ppl-starter',
    name: 'Push/Pull/Legs Starter',
    description: 'A classic 3-day split that groups muscles logically. Push day (chest, shoulders, triceps), Pull day (back, biceps), and Legs day. Great for building the habit of structured training.',
    level: 'beginner',
    daysPerWeek: 3,
    duration: '4 weeks',
    focusArea: 'Balanced',
    schedule: [
      {
        day: 1,
        name: 'Push (Chest, Shoulders, Triceps)',
        warmup: '5 minutes light cardio + shoulder rotations + push-up warm-up set',
        cooldown: '5 minutes chest and shoulder stretches',
        exercises: [
          { exerciseId: 'barbell-bench-press', sets: 3, reps: '8-10', restSeconds: 90 },
          { exerciseId: 'incline-dumbbell-press', sets: 3, reps: '10-12', restSeconds: 90 },
          { exerciseId: 'overhead-press', sets: 3, reps: '10-12', restSeconds: 90 },
          { exerciseId: 'lateral-raise', sets: 3, reps: '12-15', restSeconds: 60 },
          { exerciseId: 'tricep-pushdown', sets: 3, reps: '12-15', restSeconds: 60 },
          { exerciseId: 'overhead-tricep-extension', sets: 2, reps: '12-15', restSeconds: 60 }
        ]
      },
      {
        day: 2,
        name: 'Rest Day',
        warmup: '',
        cooldown: '',
        exercises: []
      },
      {
        day: 3,
        name: 'Pull (Back, Biceps)',
        warmup: '5 minutes cardio + band pull-aparts + arm swings',
        cooldown: '5 minutes back and bicep stretches',
        exercises: [
          { exerciseId: 'lat-pulldown', sets: 3, reps: '8-10', restSeconds: 90 },
          { exerciseId: 'barbell-row', sets: 3, reps: '8-10', restSeconds: 90 },
          { exerciseId: 'seated-cable-row', sets: 3, reps: '10-12', restSeconds: 90 },
          { exerciseId: 'face-pull', sets: 3, reps: '15-20', restSeconds: 60 },
          { exerciseId: 'barbell-curl', sets: 3, reps: '10-12', restSeconds: 60 },
          { exerciseId: 'hammer-curl', sets: 2, reps: '12-15', restSeconds: 60 }
        ]
      },
      {
        day: 4,
        name: 'Rest Day',
        warmup: '',
        cooldown: '',
        exercises: []
      },
      {
        day: 5,
        name: 'Legs (Quads, Hamstrings, Glutes, Calves)',
        warmup: '5 minutes cardio + bodyweight squats + leg swings',
        cooldown: '5 minutes leg stretches + quad and hamstring stretches',
        exercises: [
          { exerciseId: 'barbell-squat', sets: 3, reps: '8-10', restSeconds: 120 },
          { exerciseId: 'leg-press', sets: 3, reps: '10-12', restSeconds: 90 },
          { exerciseId: 'romanian-deadlift', sets: 3, reps: '10-12', restSeconds: 90 },
          { exerciseId: 'leg-extension', sets: 3, reps: '12-15', restSeconds: 60 },
          { exerciseId: 'leg-curl', sets: 3, reps: '12-15', restSeconds: 60 },
          { exerciseId: 'calf-raise-standing', sets: 4, reps: '15-20', restSeconds: 45 }
        ]
      },
      {
        day: 6,
        name: 'Rest Day',
        warmup: '',
        cooldown: '',
        exercises: []
      },
      {
        day: 7,
        name: 'Rest Day',
        warmup: '',
        cooldown: '',
        exercises: []
      }
    ]
  },
  {
    id: 'home-no-equipment',
    name: 'Home Workout (No Equipment)',
    description: 'No gym? No problem! This bodyweight-only plan can be done anywhere. Perfect for beginners who want to build strength and fitness at home without any equipment.',
    level: 'beginner',
    daysPerWeek: 3,
    duration: '4 weeks',
    focusArea: 'Full Body',
    schedule: [
      {
        day: 1,
        name: 'Upper Body & Core',
        warmup: '5 minutes jumping jacks + arm circles + torso twists',
        cooldown: '5 minutes stretching',
        exercises: [
          { exerciseId: 'push-up', sets: 3, reps: '8-12', restSeconds: 60 },
          { exerciseId: 'diamond-push-up', sets: 2, reps: '6-10', restSeconds: 60 },
          { exerciseId: 'decline-push-up', sets: 3, reps: '8-12', restSeconds: 60 },
          { exerciseId: 'plank', sets: 3, reps: '30-45 sec', restSeconds: 45 },
          { exerciseId: 'mountain-climbers', sets: 3, reps: '20 each', restSeconds: 45 },
          { exerciseId: 'bicycle-crunch', sets: 3, reps: '15 each', restSeconds: 45 }
        ]
      },
      {
        day: 2,
        name: 'Rest Day',
        warmup: '',
        cooldown: '',
        exercises: []
      },
      {
        day: 3,
        name: 'Lower Body',
        warmup: '5 minutes jogging in place + bodyweight squats + hip circles',
        cooldown: '5 minutes quad and hamstring stretches',
        exercises: [
          { exerciseId: 'goblet-squat', sets: 3, reps: '15-20', restSeconds: 60 },
          { exerciseId: 'lunges', sets: 3, reps: '12 each leg', restSeconds: 60 },
          { exerciseId: 'bulgarian-split-squat', sets: 3, reps: '10 each', restSeconds: 60 },
          { exerciseId: 'step-up', sets: 3, reps: '12 each', restSeconds: 60 },
          { exerciseId: 'calf-raise-standing', sets: 3, reps: '20', restSeconds: 45 },
          { exerciseId: 'flutter-kicks', sets: 3, reps: '20 each', restSeconds: 45 }
        ]
      },
      {
        day: 4,
        name: 'Rest Day',
        warmup: '',
        cooldown: '',
        exercises: []
      },
      {
        day: 5,
        name: 'Full Body HIIT',
        warmup: '3 minutes light jumping + dynamic stretching',
        cooldown: '5 minutes walking + full body stretches',
        exercises: [
          { exerciseId: 'burpees', sets: 3, reps: '8-10', restSeconds: 60 },
          { exerciseId: 'push-up', sets: 3, reps: '10-15', restSeconds: 45 },
          { exerciseId: 'goblet-squat', sets: 3, reps: '15', restSeconds: 45 },
          { exerciseId: 'mountain-climbers', sets: 3, reps: '20 each', restSeconds: 45 },
          { exerciseId: 'russian-twist', sets: 3, reps: '15 each', restSeconds: 45 },
          { exerciseId: 'side-plank', sets: 2, reps: '20 sec each', restSeconds: 30 }
        ]
      },
      {
        day: 6,
        name: 'Rest Day',
        warmup: '',
        cooldown: '',
        exercises: []
      },
      {
        day: 7,
        name: 'Rest Day',
        warmup: '',
        cooldown: '',
        exercises: []
      }
    ]
  },
  // ========================================
  // INTERMEDIATE PLANS
  // ========================================
  {
    id: 'ppl-6day',
    name: 'Push/Pull/Legs (6-Day)',
    description: 'The gold standard for muscle building. Each muscle group is trained twice per week with higher volume and intensity. Designed for those with at least 3-6 months of consistent training.',
    level: 'intermediate',
    daysPerWeek: 6,
    duration: '6 weeks',
    focusArea: 'Hypertrophy',
    schedule: [
      {
        day: 1,
        name: 'Push A (Heavy)',
        warmup: '5 minutes cardio + rotator cuff warm-up + light bench press sets',
        cooldown: '5 minutes chest and shoulder stretches',
        exercises: [
          { exerciseId: 'barbell-bench-press', sets: 4, reps: '6-8', restSeconds: 120 },
          { exerciseId: 'overhead-press', sets: 4, reps: '6-8', restSeconds: 120 },
          { exerciseId: 'incline-dumbbell-press', sets: 3, reps: '8-10', restSeconds: 90 },
          { exerciseId: 'lateral-raise', sets: 4, reps: '12-15', restSeconds: 60 },
          { exerciseId: 'tricep-pushdown', sets: 3, reps: '10-12', restSeconds: 60 },
          { exerciseId: 'skull-crusher', sets: 3, reps: '10-12', restSeconds: 60 },
          { exerciseId: 'cable-crossover', sets: 3, reps: '12-15', restSeconds: 60 }
        ]
      },
      {
        day: 2,
        name: 'Pull A (Heavy)',
        warmup: '5 minutes cardio + band pull-aparts + light pulldown warm-up',
        cooldown: '5 minutes back and bicep stretches',
        exercises: [
          { exerciseId: 'deadlift', sets: 4, reps: '5-6', restSeconds: 180 },
          { exerciseId: 'pull-up', sets: 4, reps: '6-8', restSeconds: 120 },
          { exerciseId: 'barbell-row', sets: 4, reps: '6-8', restSeconds: 90 },
          { exerciseId: 'face-pull', sets: 3, reps: '15-20', restSeconds: 60 },
          { exerciseId: 'barbell-curl', sets: 3, reps: '8-10', restSeconds: 60 },
          { exerciseId: 'hammer-curl', sets: 3, reps: '10-12', restSeconds: 60 },
          { exerciseId: 'barbell-shrug', sets: 3, reps: '12-15', restSeconds: 60 }
        ]
      },
      {
        day: 3,
        name: 'Legs A (Heavy)',
        warmup: '5 minutes cardio + bodyweight squats + leg swings + hip mobility',
        cooldown: '5 minutes leg stretches + foam rolling',
        exercises: [
          { exerciseId: 'barbell-squat', sets: 4, reps: '6-8', restSeconds: 180 },
          { exerciseId: 'romanian-deadlift', sets: 4, reps: '8-10', restSeconds: 120 },
          { exerciseId: 'leg-press', sets: 3, reps: '10-12', restSeconds: 90 },
          { exerciseId: 'leg-curl', sets: 3, reps: '10-12', restSeconds: 60 },
          { exerciseId: 'leg-extension', sets: 3, reps: '12-15', restSeconds: 60 },
          { exerciseId: 'calf-raise-standing', sets: 4, reps: '15-20', restSeconds: 45 },
          { exerciseId: 'hanging-leg-raise', sets: 3, reps: '12-15', restSeconds: 60 }
        ]
      },
      {
        day: 4,
        name: 'Push B (Volume)',
        warmup: '5 minutes cardio + shoulder warm-up + light dumbbell pressing',
        cooldown: '5 minutes stretching',
        exercises: [
          { exerciseId: 'dumbbell-bench-press', sets: 4, reps: '8-10', restSeconds: 90 },
          { exerciseId: 'dumbbell-shoulder-press', sets: 4, reps: '8-10', restSeconds: 90 },
          { exerciseId: 'dumbbell-fly', sets: 3, reps: '10-12', restSeconds: 60 },
          { exerciseId: 'cable-lateral-raise', sets: 4, reps: '12-15', restSeconds: 60 },
          { exerciseId: 'pec-deck-fly', sets: 3, reps: '12-15', restSeconds: 60 },
          { exerciseId: 'overhead-tricep-extension', sets: 3, reps: '10-12', restSeconds: 60 },
          { exerciseId: 'diamond-push-up', sets: 3, reps: '10-15', restSeconds: 60 }
        ]
      },
      {
        day: 5,
        name: 'Pull B (Volume)',
        warmup: '5 minutes cardio + band pull-aparts + scapular retractions',
        cooldown: '5 minutes stretching',
        exercises: [
          { exerciseId: 'chin-up', sets: 4, reps: '8-10', restSeconds: 90 },
          { exerciseId: 'dumbbell-row', sets: 4, reps: '8-10', restSeconds: 90 },
          { exerciseId: 't-bar-row', sets: 3, reps: '10-12', restSeconds: 90 },
          { exerciseId: 'straight-arm-pulldown', sets: 3, reps: '12-15', restSeconds: 60 },
          { exerciseId: 'dumbbell-reverse-fly', sets: 3, reps: '12-15', restSeconds: 60 },
          { exerciseId: 'dumbbell-curl', sets: 3, reps: '10-12', restSeconds: 60 },
          { exerciseId: 'concentration-curl', sets: 3, reps: '10-12', restSeconds: 60 }
        ]
      },
      {
        day: 6,
        name: 'Legs B (Volume)',
        warmup: '5 minutes cardio + hip mobility + bodyweight lunges',
        cooldown: '5 minutes deep stretching + foam rolling',
        exercises: [
          { exerciseId: 'front-squat', sets: 4, reps: '8-10', restSeconds: 120 },
          { exerciseId: 'hip-thrust', sets: 4, reps: '10-12', restSeconds: 90 },
          { exerciseId: 'bulgarian-split-squat', sets: 3, reps: '10 each', restSeconds: 90 },
          { exerciseId: 'leg-curl', sets: 3, reps: '12-15', restSeconds: 60 },
          { exerciseId: 'leg-extension', sets: 3, reps: '12-15', restSeconds: 60 },
          { exerciseId: 'calf-raise-standing', sets: 4, reps: '15-20', restSeconds: 45 },
          { exerciseId: 'cable-woodchop', sets: 3, reps: '12 each', restSeconds: 60 }
        ]
      },
      {
        day: 7,
        name: 'Rest Day',
        warmup: '',
        cooldown: '',
        exercises: []
      }
    ]
  },
  {
    id: 'upper-lower-4day',
    name: 'Upper/Lower Split (4-Day)',
    description: 'Train 4 days per week alternating between upper and lower body. Each muscle group is hit twice per week. Great balance between training and recovery for intermediate lifters.',
    level: 'intermediate',
    daysPerWeek: 4,
    duration: '6 weeks',
    focusArea: 'Strength & Size',
    schedule: [
      {
        day: 1,
        name: 'Upper A (Strength Focus)',
        warmup: '5 minutes cardio + band pull-aparts + shoulder rotations',
        cooldown: '5 minutes upper body stretches',
        exercises: [
          { exerciseId: 'barbell-bench-press', sets: 4, reps: '5-6', restSeconds: 180 },
          { exerciseId: 'barbell-row', sets: 4, reps: '5-6', restSeconds: 120 },
          { exerciseId: 'overhead-press', sets: 3, reps: '6-8', restSeconds: 120 },
          { exerciseId: 'lat-pulldown', sets: 3, reps: '8-10', restSeconds: 90 },
          { exerciseId: 'dumbbell-fly', sets: 3, reps: '10-12', restSeconds: 60 },
          { exerciseId: 'barbell-curl', sets: 3, reps: '8-10', restSeconds: 60 },
          { exerciseId: 'skull-crusher', sets: 3, reps: '8-10', restSeconds: 60 }
        ]
      },
      {
        day: 2,
        name: 'Lower A (Strength Focus)',
        warmup: '5 minutes cardio + bodyweight squats + hip mobility drills',
        cooldown: '5 minutes leg stretches',
        exercises: [
          { exerciseId: 'barbell-squat', sets: 4, reps: '5-6', restSeconds: 180 },
          { exerciseId: 'romanian-deadlift', sets: 4, reps: '6-8', restSeconds: 120 },
          { exerciseId: 'leg-press', sets: 3, reps: '8-10', restSeconds: 90 },
          { exerciseId: 'leg-curl', sets: 3, reps: '10-12', restSeconds: 60 },
          { exerciseId: 'calf-raise-standing', sets: 4, reps: '12-15', restSeconds: 45 },
          { exerciseId: 'plank', sets: 3, reps: '45-60 sec', restSeconds: 45 },
          { exerciseId: 'hanging-leg-raise', sets: 3, reps: '10-12', restSeconds: 60 }
        ]
      },
      {
        day: 3,
        name: 'Rest Day',
        warmup: '',
        cooldown: '',
        exercises: []
      },
      {
        day: 4,
        name: 'Upper B (Hypertrophy Focus)',
        warmup: '5 minutes cardio + dynamic stretching',
        cooldown: '5 minutes stretching',
        exercises: [
          { exerciseId: 'incline-dumbbell-press', sets: 4, reps: '8-10', restSeconds: 90 },
          { exerciseId: 'chin-up', sets: 4, reps: '8-10', restSeconds: 90 },
          { exerciseId: 'arnold-press', sets: 3, reps: '10-12', restSeconds: 90 },
          { exerciseId: 'seated-cable-row', sets: 3, reps: '10-12', restSeconds: 90 },
          { exerciseId: 'lateral-raise', sets: 4, reps: '12-15', restSeconds: 60 },
          { exerciseId: 'hammer-curl', sets: 3, reps: '10-12', restSeconds: 60 },
          { exerciseId: 'tricep-pushdown', sets: 3, reps: '10-12', restSeconds: 60 }
        ]
      },
      {
        day: 5,
        name: 'Lower B (Hypertrophy Focus)',
        warmup: '5 minutes cardio + leg swings + hip circles',
        cooldown: '5 minutes deep stretching',
        exercises: [
          { exerciseId: 'front-squat', sets: 4, reps: '8-10', restSeconds: 120 },
          { exerciseId: 'hip-thrust', sets: 4, reps: '10-12', restSeconds: 90 },
          { exerciseId: 'bulgarian-split-squat', sets: 3, reps: '10 each', restSeconds: 90 },
          { exerciseId: 'leg-extension', sets: 3, reps: '12-15', restSeconds: 60 },
          { exerciseId: 'leg-curl', sets: 3, reps: '12-15', restSeconds: 60 },
          { exerciseId: 'calf-raise-standing', sets: 4, reps: '15-20', restSeconds: 45 },
          { exerciseId: 'russian-twist', sets: 3, reps: '15 each', restSeconds: 45 }
        ]
      },
      {
        day: 6,
        name: 'Rest Day',
        warmup: '',
        cooldown: '',
        exercises: []
      },
      {
        day: 7,
        name: 'Rest Day',
        warmup: '',
        cooldown: '',
        exercises: []
      }
    ]
  },
  {
    id: 'chest-arms-specialization',
    name: 'Chest & Arms Specialization',
    description: 'For intermediate lifters who want to bring up their chest and arms. These muscle groups get extra volume while still maintaining the rest of the body. Train 5 days per week.',
    level: 'intermediate',
    daysPerWeek: 5,
    duration: '4 weeks',
    focusArea: 'Chest & Arms',
    schedule: [
      {
        day: 1,
        name: 'Chest & Triceps (Heavy)',
        warmup: '5 minutes cardio + rotator cuff work + light bench pressing',
        cooldown: '5 minutes chest and tricep stretches',
        exercises: [
          { exerciseId: 'barbell-bench-press', sets: 5, reps: '5-6', restSeconds: 180 },
          { exerciseId: 'incline-dumbbell-press', sets: 4, reps: '8-10', restSeconds: 90 },
          { exerciseId: 'cable-crossover', sets: 3, reps: '12-15', restSeconds: 60 },
          { exerciseId: 'chest-dip', sets: 3, reps: '8-12', restSeconds: 90 },
          { exerciseId: 'close-grip-bench-press', sets: 3, reps: '8-10', restSeconds: 90 },
          { exerciseId: 'skull-crusher', sets: 3, reps: '10-12', restSeconds: 60 },
          { exerciseId: 'tricep-kickback', sets: 3, reps: '12-15', restSeconds: 60 }
        ]
      },
      {
        day: 2,
        name: 'Back & Biceps',
        warmup: '5 minutes cardio + band pull-aparts',
        cooldown: '5 minutes stretching',
        exercises: [
          { exerciseId: 'pull-up', sets: 4, reps: '6-8', restSeconds: 120 },
          { exerciseId: 'barbell-row', sets: 4, reps: '6-8', restSeconds: 90 },
          { exerciseId: 'dumbbell-row', sets: 3, reps: '8-10', restSeconds: 90 },
          { exerciseId: 'face-pull', sets: 3, reps: '15-20', restSeconds: 60 },
          { exerciseId: 'ez-bar-curl', sets: 4, reps: '8-10', restSeconds: 60 },
          { exerciseId: 'incline-dumbbell-curl', sets: 3, reps: '10-12', restSeconds: 60 },
          { exerciseId: 'hammer-curl', sets: 3, reps: '10-12', restSeconds: 60 }
        ]
      },
      {
        day: 3,
        name: 'Legs & Abs',
        warmup: '5 minutes cardio + hip mobility + bodyweight squats',
        cooldown: '5 minutes stretching + foam rolling',
        exercises: [
          { exerciseId: 'barbell-squat', sets: 4, reps: '6-8', restSeconds: 180 },
          { exerciseId: 'romanian-deadlift', sets: 3, reps: '8-10', restSeconds: 120 },
          { exerciseId: 'leg-press', sets: 3, reps: '10-12', restSeconds: 90 },
          { exerciseId: 'leg-curl', sets: 3, reps: '12-15', restSeconds: 60 },
          { exerciseId: 'calf-raise-standing', sets: 4, reps: '15-20', restSeconds: 45 },
          { exerciseId: 'hanging-leg-raise', sets: 3, reps: '12-15', restSeconds: 60 },
          { exerciseId: 'ab-wheel-rollout', sets: 3, reps: '8-10', restSeconds: 60 }
        ]
      },
      {
        day: 4,
        name: 'Shoulders & Arms',
        warmup: '5 minutes cardio + shoulder rotations + band work',
        cooldown: '5 minutes stretching',
        exercises: [
          { exerciseId: 'overhead-press', sets: 4, reps: '6-8', restSeconds: 120 },
          { exerciseId: 'lateral-raise', sets: 4, reps: '12-15', restSeconds: 60 },
          { exerciseId: 'front-raise', sets: 3, reps: '12-15', restSeconds: 60 },
          { exerciseId: 'barbell-curl', sets: 4, reps: '8-10', restSeconds: 60 },
          { exerciseId: 'tricep-pushdown', sets: 4, reps: '10-12', restSeconds: 60 },
          { exerciseId: 'concentration-curl', sets: 3, reps: '10-12', restSeconds: 60 },
          { exerciseId: 'cable-overhead-extension', sets: 3, reps: '10-12', restSeconds: 60 }
        ]
      },
      {
        day: 5,
        name: 'Chest (Pump Day)',
        warmup: '5 minutes cardio + push-up warm-up',
        cooldown: '5 minutes chest stretching',
        exercises: [
          { exerciseId: 'incline-barbell-bench-press', sets: 4, reps: '8-10', restSeconds: 90 },
          { exerciseId: 'dumbbell-bench-press', sets: 4, reps: '10-12', restSeconds: 90 },
          { exerciseId: 'pec-deck-fly', sets: 3, reps: '12-15', restSeconds: 60 },
          { exerciseId: 'push-up', sets: 3, reps: '15-20', restSeconds: 45 },
          { exerciseId: 'dumbbell-fly', sets: 3, reps: '12-15', restSeconds: 60 },
          { exerciseId: 'preacher-curl', sets: 3, reps: '10-12', restSeconds: 60 },
          { exerciseId: 'tricep-dip', sets: 3, reps: '10-12', restSeconds: 60 }
        ]
      },
      {
        day: 6,
        name: 'Rest Day',
        warmup: '',
        cooldown: '',
        exercises: []
      },
      {
        day: 7,
        name: 'Rest Day',
        warmup: '',
        cooldown: '',
        exercises: []
      }
    ]
  }
];
