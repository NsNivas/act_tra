export const weeklySteps = [
  { day: "Mon", steps: 8420, calories: 320, active: 45 },
  { day: "Tue", steps: 10230, calories: 410, active: 62 },
  { day: "Wed", steps: 7890, calories: 285, active: 38 },
  { day: "Thu", steps: 12480, calories: 495, active: 78 },
  { day: "Fri", steps: 9560, calories: 372, active: 55 },
  { day: "Sat", steps: 14320, calories: 580, active: 92 },
  { day: "Sun", steps: 11240, calories: 445, active: 68 },
];

export const weeklyCalories = [
  { day: "Mon", consumed: 2100, burned: 2320 },
  { day: "Tue", consumed: 2250, burned: 2410 },
  { day: "Wed", consumed: 1980, burned: 2185 },
  { day: "Thu", consumed: 2340, burned: 2495 },
  { day: "Fri", consumed: 2180, burned: 2372 },
  { day: "Sat", consumed: 2420, burned: 2580 },
  { day: "Sun", consumed: 2210, burned: 2445 },
];

export const weightHistory = [
  { week: "W1", weight: 78.5, bodyFat: 18.2, muscle: 42.1 },
  { week: "W2", weight: 78.1, bodyFat: 17.9, muscle: 42.3 },
  { week: "W3", weight: 77.6, bodyFat: 17.5, muscle: 42.6 },
  { week: "W4", weight: 77.2, bodyFat: 17.2, muscle: 42.9 },
  { week: "W5", weight: 76.8, bodyFat: 16.9, muscle: 43.2 },
  { week: "W6", weight: 76.3, bodyFat: 16.5, muscle: 43.5 },
  { week: "W7", weight: 75.9, bodyFat: 16.2, muscle: 43.8 },
  { week: "W8", weight: 75.4, bodyFat: 15.9, muscle: 44.1 },
];

export const sleepData = [
  { day: "Mon", deep: 1.8, light: 4.2, rem: 1.6, total: 7.6 },
  { day: "Tue", deep: 2.1, light: 4.5, rem: 1.4, total: 8.0 },
  { day: "Wed", deep: 1.5, light: 3.8, rem: 1.2, total: 6.5 },
  { day: "Thu", deep: 2.0, light: 4.3, rem: 1.7, total: 8.0 },
  { day: "Fri", deep: 1.7, light: 4.0, rem: 1.5, total: 7.2 },
  { day: "Sat", deep: 2.3, light: 4.8, rem: 1.8, total: 8.9 },
  { day: "Sun", deep: 2.1, light: 4.6, rem: 1.7, total: 8.4 },
];

export const workoutCategories = [
  { id: "strength", name: "Strength", exercises: 42, color: "from-emerald-400 to-teal-500", icon: "Dumbbell" },
  { id: "cardio", name: "Cardio", exercises: 28, color: "from-orange-400 to-red-500", icon: "Heart" },
  { id: "yoga", name: "Yoga & Flexibility", exercises: 35, color: "from-purple-400 to-pink-500", icon: "Flower2" },
  { id: "hiit", name: "HIIT", exercises: 24, color: "from-yellow-400 to-orange-500", icon: "Flame" },
  { id: "core", name: "Core", exercises: 31, color: "from-blue-400 to-cyan-500", icon: "Waves" },
  { id: "mobility", name: "Mobility", exercises: 18, color: "from-indigo-400 to-purple-500", icon: "PersonStanding" },
];

export const exercises = [
  { id: "1", name: "Barbell Squat", category: "strength", sets: 4, reps: "8-10", rest: 90, muscles: ["Quads", "Glutes"], difficulty: "Intermediate" },
  { id: "2", name: "Bench Press", category: "strength", sets: 4, reps: "8-10", rest: 90, muscles: ["Chest", "Triceps"], difficulty: "Intermediate" },
  { id: "3", name: "Deadlift", category: "strength", sets: 3, reps: "5-6", rest: 120, muscles: ["Back", "Hamstrings"], difficulty: "Advanced" },
  { id: "4", name: "Pull-Ups", category: "strength", sets: 3, reps: "8-12", rest: 60, muscles: ["Back", "Biceps"], difficulty: "Intermediate" },
  { id: "5", name: "Running Intervals", category: "cardio", sets: 6, reps: "400m", rest: 60, muscles: ["Full Body"], difficulty: "Intermediate" },
  { id: "6", name: "Mountain Climbers", category: "hiit", sets: 4, reps: "40s", rest: 20, muscles: ["Core", "Cardio"], difficulty: "Beginner" },
  { id: "7", name: "Plank Hold", category: "core", sets: 3, reps: "60s", rest: 45, muscles: ["Core"], difficulty: "Beginner" },
  { id: "8", name: "Sun Salutation", category: "yoga", sets: 5, reps: "Flow", rest: 30, muscles: ["Full Body"], difficulty: "Beginner" },
];

export const recentWorkouts = [
  { id: "w1", name: "Upper Body Power", date: "Today", duration: 52, calories: 385, exercises: 8 },
  { id: "w2", name: "HIIT Cardio Blast", date: "Yesterday", duration: 28, calories: 320, exercises: 6 },
  { id: "w3", name: "Leg Day", date: "2 days ago", duration: 65, calories: 480, exercises: 7 },
  { id: "w4", name: "Morning Yoga Flow", date: "3 days ago", duration: 35, calories: 145, exercises: 12 },
];

export const foodDiary = {
  breakfast: [
    { name: "Oatmeal with Berries", calories: 320, protein: 12, carbs: 58, fat: 6 },
    { name: "Greek Yogurt", calories: 150, protein: 15, carbs: 12, fat: 4 },
  ],
  lunch: [
    { name: "Grilled Chicken Salad", calories: 480, protein: 42, carbs: 22, fat: 24 },
    { name: "Whole Grain Bread", calories: 180, protein: 8, carbs: 32, fat: 3 },
  ],
  dinner: [
    { name: "Salmon with Quinoa", calories: 620, protein: 45, carbs: 48, fat: 22 },
    { name: "Steamed Vegetables", calories: 90, protein: 4, carbs: 18, fat: 1 },
  ],
  snacks: [
    { name: "Mixed Nuts", calories: 210, protein: 7, carbs: 8, fat: 18 },
    { name: "Protein Shake", calories: 180, protein: 25, carbs: 12, fat: 3 },
  ],
};

export const achievements = [
  { id: "a1", name: "Early Bird", desc: "Complete 10 morning workouts", icon: "Sunrise", earned: true, progress: 100 },
  { id: "a2", name: "Consistency King", desc: "30 day workout streak", icon: "Flame", earned: true, progress: 100 },
  { id: "a3", name: "Iron Warrior", desc: "Lift 10,000 kg total", icon: "Dumbbell", earned: true, progress: 100 },
  { id: "a4", name: "Marathon Ready", desc: "Run 100km this month", icon: "Footprints", earned: false, progress: 68 },
  { id: "a5", name: "Hydration Hero", desc: "Hit water goal 30 days", icon: "Droplets", earned: false, progress: 84 },
  { id: "a6", name: "Sleep Master", desc: "8h+ sleep for 14 days", icon: "Moon", earned: false, progress: 42 },
  { id: "a7", name: "Nutrition Pro", desc: "Log meals for 60 days", icon: "Apple", earned: false, progress: 76 },
  { id: "a8", name: "Century Club", desc: "100 total workouts", icon: "Trophy", earned: false, progress: 89 },
];

export const notifications = [
  { id: "n1", type: "workout", title: "Time to move!", body: "Your evening workout is scheduled in 30 min.", time: "5m ago", unread: true },
  { id: "n2", type: "water", title: "Stay hydrated", body: "You're 500ml short of your daily goal.", time: "1h ago", unread: true },
  { id: "n3", type: "achievement", title: "New badge unlocked!", body: "You earned 'Iron Warrior' 🏆", time: "3h ago", unread: true },
  { id: "n4", type: "sleep", title: "Wind down time", body: "Aim for bed by 22:30 for optimal recovery.", time: "5h ago", unread: false },
  { id: "n5", type: "goal", title: "Daily goal complete", body: "You hit 10,000 steps today!", time: "Yesterday", unread: false },
];
