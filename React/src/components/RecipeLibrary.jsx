import { useState } from 'react';
import { Search, Eye, Filter, Sparkles } from 'lucide-react';
import { recipes } from '../data/recipes';

export default function RecipeLibrary({ onViewRecipe }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMealType, setSelectedMealType] = useState('all');
  const [selectedDiet, setSelectedDiet] = useState('all');

  const dietFilters = ['all', 'Keto', 'Vegan', 'Vegetarian', 'Gluten-Free', 'Low-Carb', 'High-Protein'];
  const mealTypes = [
    { id: 'all', label: 'All Meals' },
    { id: 'breakfast', label: 'Breakfast' },
    { id: 'lunch', label: 'Lunch' },
    { id: 'dinner', label: 'Dinner' },
    { id: 'snack', label: 'Snack' }
  ];

  // Filter recipes based on search, mealType, and diet tag
  const filteredRecipes = recipes.filter((recipe) => {
    // Search match
    const matchesSearch = recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          recipe.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    // Meal type match
    const matchesMealType = selectedMealType === 'all' || recipe.mealType === selectedMealType;
    
    // Diet match
    const matchesDiet = selectedDiet === 'all' || recipe.tags.some(tag => tag.toLowerCase() === selectedDiet.toLowerCase());

    return matchesSearch && matchesMealType && matchesDiet;
  });

  return (
    <div className="animate-fade">
      <div className="dashboard-header" style={{ marginBottom: '1.5rem' }}>
        <div>
          <h1 style={{ fontSize: '2.0rem', margin: 0, fontFamily: 'var(--font-heading)' }}>
            Healthy Recipe Library
          </h1>
          <p style={{ color: 'var(--text-muted)' }}>
            Explore our curated database of delicious, dietitian-approved meals.
          </p>
        </div>
      </div>

      {/* Search and Filters panel */}
      <div style={{ marginBottom: '2rem' }}>
        <div className="search-bar-container">
          <div className="search-input-wrapper">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search recipes, ingredients, or nutrition styles..."
              className="form-input search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Meal Type Tabs */}
        <div style={{ display: 'flex', borderBottom: '1px solid var(--border-color)', marginBottom: '1.25rem', overflowX: 'auto', paddingBottom: '0.25rem' }}>
          {mealTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedMealType(type.id)}
              className="btn btn-ghost"
              style={{
                borderRadius: 0,
                borderBottom: selectedMealType === type.id ? '2px solid var(--primary)' : '2px solid transparent',
                color: selectedMealType === type.id ? 'var(--primary)' : 'var(--text-muted)',
                fontWeight: selectedMealType === type.id ? '600' : '400',
                padding: '0.75rem 1.25rem',
                whiteSpace: 'nowrap'
              }}
            >
              {type.label}
            </button>
          ))}
        </div>

        {/* Diet Tags filter */}
        <div className="filter-tags-list">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginRight: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            <Filter size={14} /> <span>Diet:</span>
          </div>
          {dietFilters.map((diet) => (
            <button
              key={diet}
              onClick={() => setSelectedDiet(diet)}
              className={`filter-tag-btn ${selectedDiet === diet ? 'active' : ''}`}
            >
              {diet === 'all' ? 'All Diets' : diet}
            </button>
          ))}
        </div>
      </div>

      {/* Recipe List Grid */}
      {filteredRecipes.length > 0 ? (
        <div className="recipes-grid animate-slide">
          {filteredRecipes.map((recipe) => (
            <div 
              key={recipe.id} 
              className="recipe-card"
              onClick={() => onViewRecipe(recipe)}
              style={{ cursor: 'pointer' }}
            >
              <div className="recipe-card-header">
                <span className="float">{recipe.image}</span>
                <span className="badge badge-primary recipe-card-badge" style={{ textTransform: 'capitalize', fontSize: '0.65rem' }}>
                  {recipe.mealType}
                </span>
              </div>
              <div className="recipe-card-content">
                <div className="recipe-card-tags">
                  {recipe.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="recipe-card-tag">{tag}</span>
                  ))}
                </div>
                <h3 className="recipe-card-title">{recipe.name}</h3>
                <p className="recipe-card-desc">{recipe.description}</p>
              </div>
              <div className="recipe-card-footer">
                <div>
                  <span className="recipe-card-nutrition">{recipe.calories}</span>
                  <span> kcal</span>
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <Eye size={14} /> View Details
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="glass-card" style={{ padding: '3rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <Sparkles size={48} style={{ color: 'var(--text-muted)', strokeWidth: 1.5 }} />
          <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)' }}>No Recipes Found</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '400px' }}>
            We couldn't find any recipes matching your search query or dietary filters. Try broadening your keywords.
          </p>
          <button 
            className="btn btn-primary" 
            style={{ marginTop: '0.5rem' }}
            onClick={() => {
              setSearchQuery('');
              setSelectedMealType('all');
              setSelectedDiet('all');
            }}
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
