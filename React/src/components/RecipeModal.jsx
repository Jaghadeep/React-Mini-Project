import { useState } from 'react';
import { X, Clock, BarChart, Users, ChevronRight, Check } from 'lucide-react';

export default function RecipeModal({ recipe, onClose }) {
  const [servings, setServings] = useState(1);
  const [completedSteps, setCompletedSteps] = useState({});

  if (!recipe) return null;

  const handleStepToggle = (index) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const scaleQuantity = (qty) => {
    if (!qty) return '';
    // Multiply by servings count
    const scaled = qty * servings;
    // Format to 2 decimal places max, removing trailing zeros
    return parseFloat(scaled.toFixed(2));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>

        {/* Emoji Image Top Bar */}
        <div className="recipe-modal-image-bar">
          <span className="float">{recipe.image}</span>
        </div>

        <div className="recipe-modal-body">
          {/* Tags */}
          <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
            {recipe.tags.map((tag, i) => (
              <span key={i} className="badge badge-primary" style={{ fontSize: '0.65rem', padding: '0.15rem 0.5rem' }}>
                {tag}
              </span>
            ))}
          </div>

          <h2 className="recipe-modal-title">{recipe.name}</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: '1.4' }}>
            {recipe.description}
          </p>

          {/* Quick Info */}
          <div className="recipe-modal-meta">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Clock size={16} />
              <span>Prep: {recipe.prepTime}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <BarChart size={16} />
              <span>Difficulty: {recipe.difficulty}</span>
            </div>
          </div>

          {/* Macro Breakdown (Scaled by servings) */}
          <h3 className="recipe-section-title">Nutrition (Total for {servings} {servings === 1 ? 'serving' : 'servings'})</h3>
          <div className="recipe-modal-macros">
            <div className="recipe-modal-macro-box" style={{ borderLeft: '3px solid var(--primary)' }}>
              <span className="value">{recipe.calories * servings}</span>
              <span className="label">Calories (kcal)</span>
            </div>
            <div className="recipe-modal-macro-box" style={{ borderLeft: '3px solid var(--secondary)' }}>
              <span className="value">{recipe.protein * servings}g</span>
              <span className="label">Protein</span>
            </div>
            <div className="recipe-modal-macro-box" style={{ borderLeft: '3px solid var(--info)' }}>
              <span className="value">{recipe.carbs * servings}g</span>
              <span className="label">Carbs</span>
            </div>
            <div className="recipe-modal-macro-box" style={{ borderLeft: '3px solid var(--accent)' }}>
              <span className="value">{recipe.fat * servings}g</span>
              <span className="label">Fats</span>
            </div>
          </div>

          {/* Serving Size Scale Adjuster */}
          <div className="recipe-serving-selector">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Users size={18} style={{ color: 'var(--primary)' }} />
              <div>
                <span style={{ fontWeight: '600', fontSize: '0.95rem', display: 'block' }}>Adjust Servings</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Ingredients scale automatically</span>
              </div>
            </div>
            <div className="serving-stepper">
              <button 
                className="stepper-btn" 
                onClick={() => setServings(Math.max(1, servings - 1))}
                disabled={servings <= 1}
              >
                -
              </button>
              <span className="stepper-value">{servings}</span>
              <button 
                className="stepper-btn" 
                onClick={() => setServings(servings + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Ingredients list */}
          <h3 className="recipe-section-title">Ingredients</h3>
          <ul className="recipe-ingredients-list">
            {recipe.ingredients.map((ing, i) => (
              <li key={i} className="recipe-ingredient-item" style={{ borderBottom: '1px dashed var(--border-color)' }}>
                <span className="recipe-ingredient-name">{ing.name}</span>
                <span className="recipe-ingredient-qty">
                  {scaleQuantity(ing.quantity)} {ing.unit}
                </span>
              </li>
            ))}
          </ul>

          {/* Instructions checklist */}
          <h3 className="recipe-section-title">Preparation Steps</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginBottom: '1rem' }}>
            Tap on a step to cross it off as you cook.
          </p>
          <div className="recipe-instructions-list">
            {recipe.instructions.map((step, idx) => {
              const isDone = completedSteps[idx];
              return (
                <div 
                  key={idx} 
                  className={`recipe-instruction-step ${isDone ? 'done' : ''}`}
                  onClick={() => handleStepToggle(idx)}
                >
                  <div className="step-number">
                    {isDone ? <Check size={12} /> : idx + 1}
                  </div>
                  <span className="step-text">{step}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
