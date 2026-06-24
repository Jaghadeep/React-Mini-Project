import { useState, useEffect } from 'react';
import Onboarding from './components/Onboarding';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import MealPlanner from './components/MealPlanner';
import RecipeLibrary from './components/RecipeLibrary';
import ShoppingList from './components/ShoppingList';
import RecipeModal from './components/RecipeModal';
import { recipes } from './data/recipes';
import './App.css';

export default function App() {
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem('nutriguide_profile');
    return saved ? JSON.parse(saved) : null;
  });

  const [activeTab, setActiveTab] = useState('dashboard');
  
  const [mealPlan, setMealPlan] = useState(() => {
    const saved = localStorage.getItem('nutriguide_mealplan');
    return saved ? JSON.parse(saved) : null;
  });

  const [completedMeals, setCompletedMeals] = useState(() => {
    const saved = localStorage.getItem('nutriguide_completed_meals');
    return saved ? JSON.parse(saved) : { breakfast: false, lunch: false, dinner: false, snack: false };
  });

  const [waterIntake, setWaterIntake] = useState(() => {
    const saved = localStorage.getItem('nutriguide_water');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [shoppingCheckedItems, setShoppingCheckedItems] = useState(() => {
    const saved = localStorage.getItem('nutriguide_shopping_checked');
    return saved ? JSON.parse(saved) : {};
  });

  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Sync to local storage
  useEffect(() => {
    if (profile) {
      localStorage.setItem('nutriguide_profile', JSON.stringify(profile));
    } else {
      localStorage.removeItem('nutriguide_profile');
    }
  }, [profile]);

  useEffect(() => {
    if (mealPlan) {
      localStorage.setItem('nutriguide_mealplan', JSON.stringify(mealPlan));
    } else {
      localStorage.removeItem('nutriguide_mealplan');
    }
  }, [mealPlan]);

  useEffect(() => {
    localStorage.setItem('nutriguide_completed_meals', JSON.stringify(completedMeals));
  }, [completedMeals]);

  useEffect(() => {
    localStorage.setItem('nutriguide_water', waterIntake.toString());
  }, [waterIntake]);

  useEffect(() => {
    localStorage.setItem('nutriguide_shopping_checked', JSON.stringify(shoppingCheckedItems));
  }, [shoppingCheckedItems]);

  // Helper: Filter recipes by user's diet selection
  const getEligibleRecipes = (dietType, mealType) => {
    let filtered = recipes.filter(r => r.mealType === mealType);
    
    if (dietType === 'Balanced') {
      return filtered;
    }
    
    return filtered.filter(r => r.tags.some(tag => {
      if (dietType === 'Vegetarian') {
        return tag === 'Vegetarian' || tag === 'Vegan';
      }
      return tag.toLowerCase() === dietType.toLowerCase();
    }));
  };

  // Generate initial meal plan matching calorie targets and diet
  const generateInitialMealPlan = (userProfile) => {
    const mealTypes = ['breakfast', 'lunch', 'dinner', 'snack'];
    const newPlan = {};
    
    mealTypes.forEach((type) => {
      const eligible = getEligibleRecipes(userProfile.dietType, type);
      if (eligible.length > 0) {
        newPlan[type] = eligible[Math.floor(Math.random() * eligible.length)];
      } else {
        // Fallback to any recipe of that meal type
        const fallbackList = recipes.filter(r => r.mealType === type);
        newPlan[type] = fallbackList[Math.floor(Math.random() * fallbackList.length)];
      }
    });

    setMealPlan(newPlan);
    setCompletedMeals({ breakfast: false, lunch: false, dinner: false, snack: false });
    setShoppingCheckedItems({});
    setWaterIntake(0);
  };

  const handleOnboardingComplete = (calculatedProfile) => {
    setProfile(calculatedProfile);
    generateInitialMealPlan(calculatedProfile);
    setActiveTab('dashboard');
  };

  const handleResetProfile = () => {
    if (window.confirm('Are you sure you want to reset your profile and clear all logged data?')) {
      setProfile(null);
      setMealPlan(null);
      setCompletedMeals({ breakfast: false, lunch: false, dinner: false, snack: false });
      setWaterIntake(0);
      setShoppingCheckedItems({});
      localStorage.clear();
    }
  };

  const handleSwapMeal = (mealType) => {
    if (!profile) return;
    
    const eligible = getEligibleRecipes(profile.dietType, mealType);
    const currentMeal = mealPlan[mealType];
    
    // Filter out the current recipe to ensure we select a different one (if possible)
    const alternatives = eligible.filter(r => r.id !== currentMeal?.id);
    const pool = alternatives.length > 0 ? alternatives : eligible;
    
    const nextRecipe = pool[Math.floor(Math.random() * pool.length)];
    
    setMealPlan((prev) => ({
      ...prev,
      [mealType]: nextRecipe
    }));

    // Reset this specific meal as not eaten
    setCompletedMeals((prev) => ({
      ...prev,
      [mealType]: false
    }));
  };

  const handleToggleMealEaten = (mealType) => {
    setCompletedMeals((prev) => ({
      ...prev,
      [mealType]: !prev[mealType]
    }));
  };

  const handleToggleShoppingItem = (itemKey) => {
    setShoppingCheckedItems((prev) => ({
      ...prev,
      [itemKey]: !prev[itemKey]
    }));
  };

  const handleClearShoppingChecklist = () => {
    setShoppingCheckedItems({});
  };

  // Render Page Content based on selected tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'planner':
        return (
          <MealPlanner
            profile={profile}
            mealPlan={mealPlan}
            completedMeals={completedMeals}
            toggleMealEaten={handleToggleMealEaten}
            onSwapMeal={handleSwapMeal}
            onViewRecipe={setSelectedRecipe}
          />
        );
      case 'recipes':
        return <RecipeLibrary onViewRecipe={setSelectedRecipe} />;
      case 'shopping':
        return (
          <ShoppingList
            mealPlan={mealPlan}
            checkedItems={shoppingCheckedItems}
            toggleCheckedItem={handleToggleShoppingItem}
            clearCheckedItems={handleClearShoppingChecklist}
          />
        );
      case 'dashboard':
      default:
        return (
          <Dashboard
            profile={profile}
            mealPlan={mealPlan}
            completedMeals={completedMeals}
            toggleMealEaten={handleToggleMealEaten}
            waterIntake={waterIntake}
            setWaterIntake={setWaterIntake}
          />
        );
    }
  };

  if (!profile) {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
        <Onboarding onComplete={handleOnboardingComplete} />
      </main>
    );
  }

  return (
    <div className="app-container">
      {/* Navigation sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        profile={profile}
        onReset={handleResetProfile}
      />

      {/* Main viewport panels */}
      <main className="main-content">
        {renderTabContent()}
      </main>

      {/* Detailed Recipe Overlay Modal */}
      {selectedRecipe && (
        <RecipeModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}
    </div>
  );
}
