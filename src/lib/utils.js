import { quotes } from '@/data/motivation';

export function calculateBMI(heightCm, weightKg) {
  if (!heightCm || !weightKg || heightCm <= 0 || weightKg <= 0) return 0;
  const heightM = heightCm / 100;
  return parseFloat((weightKg / (heightM * heightM)).toFixed(1));
}

export function getBMICategory(bmi) {
  if (bmi < 18.5) return { label: 'Underweight', color: '#3B82F6', advice: 'You may need to gain some weight. Focus on a calorie surplus with nutrient-dense foods.' };
  if (bmi < 25) return { label: 'Normal', color: '#22C55E', advice: 'Great job! Maintain your current weight with balanced nutrition and regular exercise.' };
  if (bmi < 30) return { label: 'Overweight', color: '#F59E0B', advice: 'Consider a moderate calorie deficit with regular exercise to reach a healthier weight.' };
  return { label: 'Obese', color: '#EF4444', advice: 'Consult a healthcare professional. Start with gentle exercise and a structured diet plan.' };
}

export function formatDate(date) {
  if (!date) return '';
  const d = new Date(date);
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

export function formatDateShort(date) {
  if (!date) return '';
  const d = new Date(date);
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
}

export function getTodayString() {
  return new Date().toISOString().split('T')[0];
}

export function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

export function calculateCalorieGoal(weightKg, heightCm, age, gender, goal) {
  // Mifflin-St Jeor Equation
  let bmr;
  if (gender === 'male') {
    bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
  } else {
    bmr = 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
  }
  
  // Moderate activity multiplier
  const tdee = Math.round(bmr * 1.55);
  
  switch (goal) {
    case 'weightLoss': return Math.round(tdee - 500);
    case 'muscleGain': return Math.round(tdee + 400);
    default: return tdee;
  }
}

export function getMealTypeIcon(type) {
  switch (type) {
    case 'breakfast': return '🌅';
    case 'midMorning': return '☕';
    case 'lunch': return '🍛';
    case 'preWorkout': return '⚡';
    case 'postWorkout': return '💪';
    case 'dinner': return '🌙';
    case 'snack': return '🍎';
    default: return '🍽️';
  }
}

export function getMealTypeLabel(type) {
  switch (type) {
    case 'breakfast': return 'Breakfast';
    case 'midMorning': return 'Mid-Morning';
    case 'lunch': return 'Lunch';
    case 'preWorkout': return 'Pre-Workout';
    case 'postWorkout': return 'Post-Workout';
    case 'dinner': return 'Dinner';
    case 'snack': return 'Snack';
    default: return type;
  }
}
