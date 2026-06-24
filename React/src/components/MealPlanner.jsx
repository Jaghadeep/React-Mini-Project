import { Eye, RefreshCw, CheckSquare, Square, Info } from 'lucide-react';

export default function MealPlanner({ profile, mealPlan, completedMeals, toggleMealEaten, onSwapMeal, onViewRecipe }) {
  
  // Calculate total calories & macros in the current meal plan
  let plannedCal = 0;
  let plannedProtein = 0;
  let plannedCarbs = 0;
  let plannedFat = 0;

  if (mealPlan) {
    Object.keys(mealPlan).forEach((mealType) => {
      const recipe = mealPlan[mealType];
      if (recipe) {
        plannedCal += recipe.calories;
        plannedProtein += recipe.protein;
        plannedCarbs += recipe.carbs;
        plannedFat += recipe.fat;
      }
    });
  }

  const calDiff = plannedCal - profile.targetCalories;
  const calDiffAbs = Math.abs(calDiff);

  return (
    <div className="animate-fade">
      <div className="dashboard-header" style={{ marginBottom: '1.5rem' }}>
        <div>
          <h1 style={{ fontSize: '2.0rem', margin: 0, fontFamily: 'var(--font-heading)' }}>
            Daily Meal Planner
          </h1>
          <p style={{ color: 'var(--text-muted)' }}>
            A personalized nutrition plan balanced for your {profile.dietType} profile.
          </p>
        </div>
      </div>

      {/* Target Comparison stats panel */}
      <div className="planner-stats animate-slide">
        <div className="planner-stat">
          <div className="planner-stat-title">Target Calories</div>
          <div className="planner-stat-value">{profile.targetCalories} kcal</div>
        </div>
        <div className="planner-stat">
          <div className="planner-stat-title">Planned Calories</div>
          <div className="planner-stat-value">{plannedCal} kcal</div>
        </div>
        <div className="planner-stat">
          <div className="planner-stat-title">Difference</div>
          <div className={`planner-stat-value ${calDiffAbs <= 150 ? 'success' : 'error'}`}>
            {calDiff === 0 && 'Perfect Match'}
            {calDiff > 0 && `+${calDiff} kcal (Surplus)`}
            {calDiff < 0 && `-${calDiffAbs} kcal (Deficit)`}
          </div>
        </div>
      </div>

      {/* Nutrition Plan Summary bar */}
      <div className="glass-card" style={{ marginBottom: '2rem', padding: '1rem 1.5rem' }}>
        <h4 style={{ fontSize: '0.9rem', marginBottom: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Planned Macros vs. Targets
        </h4>
        <div className="grid-3" style={{ gap: '1rem' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.25rem' }}>
              <span>Protein: <strong>{plannedProtein}g</strong> / {profile.targetProtein}g</span>
            </div>
            <div className="progress-container" style={{ height: '6px' }}>
              <div className="progress-bar primary" style={{ width: `${Math.min((plannedProtein / profile.targetProtein) * 100, 100)}%` }} />
            </div>
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.25rem' }}>
              <span>Carbs: <strong>{plannedCarbs}g</strong> / {profile.targetCarbs}g</span>
            </div>
            <div className="progress-container" style={{ height: '6px' }}>
              <div className="progress-bar info" style={{ width: `${Math.min((plannedCarbs / profile.targetCarbs) * 100, 100)}%` }} />
            </div>
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.25rem' }}>
              <span>Fat: <strong>{plannedFat}g</strong> / {profile.targetFat}g</span>
            </div>
            <div className="progress-container" style={{ height: '6px' }}>
              <div className="progress-bar secondary" style={{ width: `${Math.min((plannedFat / profile.targetFat) * 100, 100)}%` }} />
            </div>
          </div>
        </div>
      </div>

      {/* Meal Cards */}
      <div className="meal-cards-container">
        {mealPlan && Object.keys(mealPlan).map((mealType) => {
          const recipe = mealPlan[mealType];
          if (!recipe) return null;
          
          const isEaten = completedMeals[mealType];

          return (
            <div key={mealType} className={`meal-card animate-slide ${isEaten ? 'eaten' : ''}`}>
              <div className="meal-card-left">
                <div className="meal-emoji-badge">
                  {recipe.image}
                </div>
                <div className="meal-card-details">
                  <span className="meal-card-type">{mealType}</span>
                  <h3 className="meal-card-name">{recipe.name}</h3>
                  <div className="meal-card-macros">
                    <span>{recipe.calories} kcal</span>
                    <span>•</span>
                    <span>P: {recipe.protein}g</span>
                    <span>•</span>
                    <span>C: {recipe.carbs}g</span>
                    <span>•</span>
                    <span>F: {recipe.fat}g</span>
                  </div>
                </div>
              </div>

              <div className="meal-card-actions">
                {/* Complete meal toggle */}
                <button 
                  onClick={() => toggleMealEaten(mealType)}
                  className={`btn ${isEaten ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                >
                  {isEaten ? (
                    <>
                      <CheckSquare size={16} /> Eaten
                    </>
                  ) : (
                    <>
                      <Square size={16} /> Mark Eaten
                    </>
                  )}
                </button>

                {/* View recipe details */}
                <button 
                  onClick={() => onViewRecipe(recipe)}
                  className="btn btn-secondary"
                  style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                  title="View Recipe"
                >
                  <Eye size={16} /> View Recipe
                </button>

                {/* Swap meal recommendation */}
                <button 
                  onClick={() => onSwapMeal(mealType)}
                  className="btn btn-secondary"
                  style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', color: 'var(--info)' }}
                  title="Swap Meal"
                >
                  <RefreshCw size={16} /> Swap
                </button>
              </div>
            </div>
          );
        })}
      </div>
      
      <div style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--primary-glow)', padding: '1rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--primary-border)' }}>
        <Info size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
          <strong>Tip:</strong> Don't like a recommendation? You can click the <strong>Swap</strong> button on any meal card to get an alternative recipe that matches your dietary requirements. All changes are compiled to your <strong>Shopping List</strong> automatically!
        </span>
      </div>
    </div>
  );
}
