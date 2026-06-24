import { CheckSquare, Square, ShoppingBag, Trash2 } from 'lucide-react';

const categorizeIngredient = (name) => {
  const nameLower = name.toLowerCase();
  
  const produceKeywords = [
    'avocado', 'spinach', 'berry', 'berries', 'banana', 'lemon', 'chives', 
    'romaine', 'lettuce', 'tomato', 'tomatoes', 'cucumber', 'onion', 'onions', 
    'garlic', 'carrot', 'carrots', 'celery', 'broccoli', 'asparagus', 'ginger', 
    'bell pepper', 'peppers', 'snap peas', 'cabbage'
  ];
  
  const proteinKeywords = [
    'egg', 'eggs', 'tofu', 'chicken', 'salmon', 'turkey', 'beef', 'steak', 
    'bacon', 'whey', 'protein powder', 'shrimp'
  ];
  
  const dairyKeywords = [
    'yogurt', 'mayonnaise', 'parmesan', 'cheese', 'butter', 'almond milk', 
    'coconut milk', 'cream', 'milk'
  ];
  
  if (produceKeywords.some(keyword => nameLower.includes(keyword))) {
    return 'Produce 🥦';
  }
  if (proteinKeywords.some(keyword => nameLower.includes(keyword))) {
    return 'Proteins & Meats 🥩';
  }
  if (dairyKeywords.some(keyword => nameLower.includes(keyword))) {
    return 'Dairy & Alternatives 🥛';
  }
  return 'Pantry, Grains & Spices 🧂';
};

export default function ShoppingList({ mealPlan, checkedItems, toggleCheckedItem, clearCheckedItems }) {
  
  // 1. Compile and sum ingredients from the active meal plan
  const compileIngredients = () => {
    if (!mealPlan) return [];
    
    const totals = {};
    
    Object.values(mealPlan).forEach((recipe) => {
      if (!recipe) return;
      recipe.ingredients.forEach((ing) => {
        // Create key combining name and unit to avoid mixing cups and grams
        const key = `${ing.name.toLowerCase().trim()}_${ing.unit.toLowerCase().trim()}`;
        
        if (totals[key]) {
          totals[key].quantity += ing.quantity;
        } else {
          totals[key] = {
            name: ing.name.trim(),
            quantity: ing.quantity,
            unit: ing.unit.trim(),
            category: categorizeIngredient(ing.name),
            key: key
          };
        }
      });
    });

    return Object.values(totals);
  };

  const ingredientsList = compileIngredients();

  // Group by category
  const categories = {};
  ingredientsList.forEach((item) => {
    if (!categories[item.category]) {
      categories[item.category] = [];
    }
    categories[item.category].push(item);
  });

  const hasItems = ingredientsList.length > 0;

  return (
    <div className="animate-fade">
      <div className="dashboard-header" style={{ marginBottom: '1.5rem' }}>
        <div>
          <h1 style={{ fontSize: '2.0rem', margin: 0, fontFamily: 'var(--font-heading)' }}>
            Groceries Shopping List
          </h1>
          <p style={{ color: 'var(--text-muted)' }}>
            Automatically compiled and summed ingredients from your active meal recommendations.
          </p>
        </div>
        {hasItems && (
          <button 
            onClick={clearCheckedItems} 
            className="btn btn-secondary"
            style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', color: 'var(--accent)', borderColor: 'var(--accent-glow)' }}
          >
            <Trash2 size={16} /> Reset Checklist
          </button>
        )}
      </div>

      {hasItems ? (
        <div className="grid-2">
          {Object.keys(categories).sort().map((catName) => (
            <div key={catName} className="glass-card shopping-card animate-slide">
              <h3 className="shopping-card-title">{catName}</h3>
              <ul className="shopping-items-list">
                {categories[catName].map((item) => {
                  const isChecked = !!checkedItems[item.key];
                  return (
                    <li 
                      key={item.key} 
                      className={`shopping-item ${isChecked ? 'checked' : ''}`}
                      onClick={() => toggleCheckedItem(item.key)}
                    >
                      <div className="shopping-checkbox">
                        <div className="shopping-checkbox-check" />
                      </div>
                      <span className="shopping-item-text">
                        {item.name}
                      </span>
                      <span className="shopping-item-qty">
                        {parseFloat(item.quantity.toFixed(2))} {item.unit}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <div className="glass-card" style={{ padding: '4rem 2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{ backgroundColor: 'var(--primary-glow)', padding: '1.5rem', borderRadius: '50%', color: 'var(--primary)' }}>
            <ShoppingBag size={48} className="float" />
          </div>
          <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)' }}>Your Shopping List is Empty</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '400px' }}>
            It looks like you don't have an active meal plan or any scheduled recommendations. Go to the <strong>Meal Planner</strong> to check your daily food targets.
          </p>
        </div>
      )}
    </div>
  );
}
