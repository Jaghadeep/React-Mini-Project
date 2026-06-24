import { useState, useEffect } from 'react';
import { Flame, Droplet, Dumbbell, Award, Plus, Minus, CheckCircle, Circle } from 'lucide-react';

const tipsByGoal = {
  lose: [
    "Focus on high-volume, low-calorie foods like leafy greens, broccoli, and zucchini to feel full.",
    "Protein is highly satiating. Prioritize getting 25-30g of protein per main meal to curb cravings.",
    "Drinking a glass of water 15 minutes before your meal helps you feel satisfied faster.",
    "A brisk 10-minute walk after meals aids digestion and helps stabilize blood sugar spikes.",
    "Fiber is your weight-loss ally. Oats, chia seeds, and legumes keep you full for hours."
  ],
  gain: [
    "Include healthy, calorie-dense fats like nuts, seed butter, avocados, and olive oil.",
    "Smoothies made with oats, protein powder, and peanut butter are great for calorie density.",
    "Don't skip meals. Try eating 4-5 smaller meals/snacks throughout the day.",
    "Eat enough protein (1.6 - 2.2g per kg of bodyweight) to support clean muscle building.",
    "Incorporate healthy starches like sweet potatoes, quinoa, and brown rice to fuel your training."
  ],
  maintain: [
    "Consistency over perfection. Keep your daily habits aligned with healthy whole foods.",
    "Eat the rainbow. Aim for 3-5 colors on your plate to ensure a rich intake of antioxidants.",
    "Listen closely to hunger cues. Eat when hungry, and stop when comfortably full.",
    "Hydration is vital for cognitive function. Keep a reusable water bottle handy all day.",
    "Balance is sustainable. Standardize 80% whole nutrient-dense foods and 20% comfort foods."
  ]
};

export default function Dashboard({ profile, mealPlan, completedMeals, toggleMealEaten, waterIntake, setWaterIntake }) {
  const [tip, setTip] = useState('');

  useEffect(() => {
    if (profile && profile.goal) {
      const tipsList = tipsByGoal[profile.goal] || tipsByGoal.maintain;
      const randomTip = tipsList[Math.floor(Math.random() * tipsList.length)];
      setTip(randomTip);
    }
  }, [profile]);

  // Calculate consumed calories & macros based on completed meals
  let consumedCal = 0;
  let consumedProtein = 0;
  let consumedCarbs = 0;
  let consumedFat = 0;

  if (mealPlan) {
    Object.keys(mealPlan).forEach((mealType) => {
      const recipe = mealPlan[mealType];
      if (recipe && completedMeals[mealType]) {
        consumedCal += recipe.calories;
        consumedProtein += recipe.protein;
        consumedCarbs += recipe.carbs;
        consumedFat += recipe.fat;
      }
    });
  }

  const calTarget = profile.targetCalories;
  const calPercent = Math.min(Math.round((consumedCal / calTarget) * 100), 100);
  
  // Circular progress math (r = 75, circumference = 2 * pi * 75 = 471.24)
  const radius = 75;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (calPercent / 100) * circumference;

  const handleWaterClick = (index) => {
    if (index < waterIntake) {
      // De-select cups down to this point
      setWaterIntake(index);
    } else {
      // Select cups up to this point
      setWaterIntake(index + 1);
    }
  };

  const getGoalLabel = (goal) => {
    switch (goal) {
      case 'lose': return 'Weight Loss (Deficit)';
      case 'gain': return 'Weight Gain (Surplus)';
      case 'maintain': default: return 'Maintain Weight';
    }
  };

  return (
    <div className="animate-fade">
      <div className="dashboard-header">
        <div>
          <h1 style={{ fontSize: '2rem', margin: 0, fontFamily: 'var(--font-heading)' }}>
            Welcome back, {profile.name}!
          </h1>
          <p style={{ color: 'var(--text-muted)' }}>
            Here is your nutrition tracking dashboard for today.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <span className="badge badge-primary">{profile.dietType}</span>
          <span className="badge badge-secondary">{getGoalLabel(profile.goal)}</span>
        </div>
      </div>

      <div className="grid-3" style={{ marginBottom: '2rem' }}>
        {/* Calorie Card */}
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Flame className="float" style={{ color: 'var(--primary)', width: '1.25rem', height: '1.25rem' }} /> Calorie Budget
          </h3>
          
          <div className="circle-progress-container">
            <svg className="circle-progress-svg">
              <circle className="circle-progress-bg" cx="90" cy="90" r={radius} />
              <circle 
                className="circle-progress-bar" 
                cx="90" 
                cy="90" 
                r={radius} 
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
              />
            </svg>
            <div className="circle-progress-text">
              <span className="circle-cal-number">{consumedCal}</span>
              <div className="circle-cal-label">of {calTarget} kcal</div>
            </div>
          </div>

          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textAlign: 'center' }}>
            {calTarget - consumedCal > 0 
              ? `${calTarget - consumedCal} kcal remaining for today`
              : 'Daily calorie budget achieved!'
            }
          </div>
        </div>

        {/* Macronutrients Card */}
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Dumbbell style={{ color: 'var(--secondary)', width: '1.25rem', height: '1.25rem' }} /> Macronutrient Split
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', flexGrow: 1, justifyContent: 'center' }}>
            {/* Protein */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
                <span style={{ fontWeight: '600' }}>Protein</span>
                <span style={{ color: 'var(--text-muted)' }}>{consumedProtein}g / {profile.targetProtein}g</span>
              </div>
              <div className="progress-container">
                <div 
                  className="progress-bar primary" 
                  style={{ width: `${Math.min((consumedProtein / profile.targetProtein) * 100, 100)}%` }}
                />
              </div>
            </div>

            {/* Carbs */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
                <span style={{ fontWeight: '600' }}>Carbohydrates</span>
                <span style={{ color: 'var(--text-muted)' }}>{consumedCarbs}g / {profile.targetCarbs}g</span>
              </div>
              <div className="progress-container">
                <div 
                  className="progress-bar info" 
                  style={{ width: `${Math.min((consumedCarbs / profile.targetCarbs) * 100, 100)}%` }}
                />
              </div>
            </div>

            {/* Fats */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
                <span style={{ fontWeight: '600' }}>Fats</span>
                <span style={{ color: 'var(--text-muted)' }}>{consumedFat}g / {profile.targetFat}g</span>
              </div>
              <div className="progress-container">
                <div 
                  className="progress-bar secondary" 
                  style={{ width: `${Math.min((consumedFat / profile.targetFat) * 100, 100)}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Water Tracker Card */}
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Droplet style={{ color: 'var(--info)', width: '1.25rem', height: '1.25rem' }} /> Water Hydration
          </h3>

          <div className="water-tracker-container" style={{ textAlign: 'center' }}>
            <div className="water-grid">
              {Array.from({ length: 8 }).map((_, idx) => (
                <div 
                  key={idx} 
                  className={`water-cup ${idx < waterIntake ? 'filled' : ''}`}
                  onClick={() => handleWaterClick(idx)}
                >
                  <div className="water-cup-fill" />
                </div>
              ))}
            </div>

            <div style={{ marginTop: '1rem' }}>
              <div style={{ fontWeight: '700', fontSize: '1.2rem' }}>
                {waterIntake} / 8 Cups
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                ({(waterIntake * 250) / 1000}L / 2.0L)
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginTop: '1rem' }}>
              <button 
                className="btn btn-secondary" 
                style={{ padding: '0.4rem 0.8rem' }}
                onClick={() => setWaterIntake(Math.max(0, waterIntake - 1))}
              >
                <Minus size={14} />
              </button>
              <button 
                className="btn btn-primary" 
                style={{ padding: '0.4rem 0.8rem' }}
                onClick={() => setWaterIntake(Math.min(8, waterIntake + 1))}
              >
                <Plus size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-2">
        {/* Dynamic Tip of the Day */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Award style={{ color: 'var(--secondary)' }} /> Daily Health Suggestion
          </h3>
          <div className="tip-box animate-slide">
            <p style={{ fontWeight: '500' }}>{tip}</p>
          </div>
          
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: 1 }}>
            <h4 style={{ fontSize: '1rem', fontFamily: 'var(--font-heading)' }}>Calculated Metabolic Metrics</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.50rem', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.25rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Basal Metabolic Rate (BMR)</span>
                <span style={{ fontWeight: '600' }}>{profile.bmr} kcal</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.25rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Total Daily Energy Expenditure (TDEE)</span>
                <span style={{ fontWeight: '600' }}>{profile.tdee} kcal</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.25rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Activity Multiplier Applied</span>
                <span style={{ fontWeight: '600' }}>
                  {profile.activityLevel === 'sedentary' && '1.20 (Sedentary)'}
                  {profile.activityLevel === 'light' && '1.375 (Light Active)'}
                  {profile.activityLevel === 'moderate' && '1.55 (Moderate Active)'}
                  {profile.activityLevel === 'active' && '1.725 (Very Active)'}
                  {profile.activityLevel === 'extreme' && '1.90 (Extra Active)'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Daily Eaten Checklist */}
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>
            Daily Meal checklist
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            Check the meals you've completed today to update your daily calorie and macro intake above.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flexGrow: 1, justifyContent: 'center' }}>
            {mealPlan && Object.keys(mealPlan).map((mealType) => {
              const recipe = mealPlan[mealType];
              if (!recipe) return null;
              
              const isEaten = completedMeals[mealType];

              return (
                <div 
                  key={mealType} 
                  onClick={() => toggleMealEaten(mealType)}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between', 
                    padding: '0.75rem 1rem', 
                    borderRadius: 'var(--border-radius-sm)', 
                    backgroundColor: isEaten ? 'var(--primary-glow)' : 'var(--bg-base)', 
                    border: '1px solid',
                    borderColor: isEaten ? 'var(--primary-border)' : 'transparent',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    {isEaten 
                      ? <CheckCircle size={18} style={{ color: 'var(--primary)' }} /> 
                      : <Circle size={18} style={{ color: 'var(--text-muted)' }} />
                    }
                    <div>
                      <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', fontWeight: '700', color: 'var(--primary)', display: 'block', lineHeight: 1 }}>
                        {mealType}
                      </span>
                      <span style={{ fontSize: '0.95rem', fontWeight: '600', textDecoration: isEaten ? 'line-through' : 'none', color: isEaten ? 'var(--text-muted)' : 'var(--text-main)' }}>
                        {recipe.name}
                      </span>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: '700', color: isEaten ? 'var(--text-muted)' : 'var(--text-main)' }}>
                    +{recipe.calories} kcal
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
