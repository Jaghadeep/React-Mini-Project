import { useState } from 'react';
import { Activity, Target, User, Heart, ArrowRight, ArrowLeft } from 'lucide-react';

export default function Onboarding({ onComplete }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    gender: 'male',
    age: '',
    weight: '',
    height: '',
    activityLevel: 'moderate',
    goal: 'maintain',
    dietType: 'Balanced',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelect = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step === 1) {
      if (!formData.name.trim() || !formData.age || !formData.weight || !formData.height) {
        alert('Please fill out all personal details before proceeding.');
        return;
      }
    }
    setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const weightNum = parseFloat(formData.weight);
    const heightNum = parseFloat(formData.height);
    const ageNum = parseInt(formData.age);
    
    // 1. Mifflin-St Jeor BMR calculation
    let bmr = 0;
    if (formData.gender === 'male') {
      bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum + 5;
    } else {
      bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum - 161;
    }
    
    // 2. Activity Multiplier
    const activityMultipliers = {
      sedentary: 1.2,      // little/no exercise
      light: 1.375,       // 1-3 days/week
      moderate: 1.55,     // 3-5 days/week
      active: 1.725,      // 6-7 days/week
      extreme: 1.9,       // twice daily training
    };
    
    const tdee = bmr * activityMultipliers[formData.activityLevel];
    
    // 3. Goal Adjustment
    let targetCalories = tdee;
    if (formData.goal === 'lose') {
      targetCalories = tdee - 500;
    } else if (formData.goal === 'gain') {
      targetCalories = tdee + 400;
    }
    
    // Round to nearest 50
    targetCalories = Math.round(targetCalories / 50) * 50;
    
    // Ensure healthy minimums
    const minCalories = formData.gender === 'male' ? 1500 : 1200;
    if (targetCalories < minCalories) {
      targetCalories = minCalories;
    }

    // 4. Macro Splits calculation based on diet types
    let carbPct = 0.45;
    let proteinPct = 0.30;
    let fatPct = 0.25;

    switch (formData.dietType) {
      case 'Keto':
        carbPct = 0.05;
        proteinPct = 0.25;
        fatPct = 0.70;
        break;
      case 'Vegan':
      case 'Vegetarian':
        carbPct = 0.55;
        proteinPct = 0.20;
        fatPct = 0.25;
        break;
      case 'Gluten-Free':
      case 'Balanced':
      default:
        if (formData.goal === 'gain') {
          // Lean bulk macro split
          carbPct = 0.40;
          proteinPct = 0.35;
          fatPct = 0.25;
        } else {
          carbPct = 0.45;
          proteinPct = 0.30;
          fatPct = 0.25;
        }
        break;
    }

    const targetCarbs = Math.round((targetCalories * carbPct) / 4);
    const targetProtein = Math.round((targetCalories * proteinPct) / 4);
    const targetFat = Math.round((targetCalories * fatPct) / 9);

    const calculatedProfile = {
      ...formData,
      weight: weightNum,
      height: heightNum,
      age: ageNum,
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      targetCalories,
      targetProtein,
      targetCarbs,
      targetFat,
    };

    onComplete(calculatedProfile);
  };

  return (
    <div className="onboarding-container animate-scale">
      <div className="onboarding-steps">
        <div className={`step-indicator ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>1</div>
        <div className={`step-indicator ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>2</div>
        <div className={`step-indicator ${step >= 3 ? 'active' : ''}`}>3</div>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="animate-fade">
            <h2 className="form-title" style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
              Let's create your profile
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>
              We need a few details to calculate your metabolic rate and personalized energy needs.
            </p>

            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder="e.g. Alex Johnson"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid-2">
              <div className="form-group">
                <label className="form-label">Gender</label>
                <select name="gender" className="form-select" value={formData.gender} onChange={handleChange}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Age (years)</label>
                <input
                  type="number"
                  name="age"
                  className="form-input"
                  min="12"
                  max="120"
                  placeholder="e.g. 28"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid-2">
              <div className="form-group">
                <label className="form-label">Weight (kg)</label>
                <input
                  type="number"
                  name="weight"
                  className="form-input"
                  min="30"
                  max="250"
                  step="0.1"
                  placeholder="e.g. 72.5"
                  value={formData.weight}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Height (cm)</label>
                <input
                  type="number"
                  name="height"
                  className="form-input"
                  min="100"
                  max="250"
                  placeholder="e.g. 175"
                  value={formData.height}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
              <button type="button" className="btn btn-primary" onClick={handleNext}>
                Continue <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-fade">
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
              Goal & Lifestyle
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>
              Select your physical activity level and what you want to achieve.
            </p>

            <div className="form-group">
              <label className="form-label" style={{ marginBottom: '0.75rem' }}>Select Your Primary Goal</label>
              <div className="selection-grid">
                <div
                  className={`select-card ${formData.goal === 'lose' ? 'active' : ''}`}
                  onClick={() => handleSelect('goal', 'lose')}
                >
                  <span className="select-card-icon">📉</span>
                  <span className="select-card-title">Weight Loss</span>
                  <span className="select-card-desc">Healthy caloric deficit to shed fat safely.</span>
                </div>
                <div
                  className={`select-card ${formData.goal === 'maintain' ? 'active' : ''}`}
                  onClick={() => handleSelect('goal', 'maintain')}
                >
                  <span className="select-card-icon">⚖️</span>
                  <span className="select-card-title">Maintenance</span>
                  <span className="select-card-desc">Keep your current weight and improve body composition.</span>
                </div>
                <div
                  className={`select-card ${formData.goal === 'gain' ? 'active' : ''}`}
                  onClick={() => handleSelect('goal', 'gain')}
                >
                  <span className="select-card-icon">💪</span>
                  <span className="select-card-title">Weight / Muscle Gain</span>
                  <span className="select-card-desc">Controlled caloric surplus to build muscle.</span>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Physical Activity Level</label>
              <select
                name="activityLevel"
                className="form-select"
                value={formData.activityLevel}
                onChange={handleChange}
              >
                <option value="sedentary">Sedentary (Little to no exercise, desk job)</option>
                <option value="light">Lightly Active (Light exercise 1-3 days/week)</option>
                <option value="moderate">Moderately Active (Moderate exercise 3-5 days/week)</option>
                <option value="active">Active (Heavy exercise 6-7 days/week)</option>
                <option value="extreme">Extra Active (Very intense exercise, twice daily training)</option>
              </select>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
              <button type="button" className="btn btn-secondary" onClick={handlePrev}>
                <ArrowLeft size={18} /> Back
              </button>
              <button type="button" className="btn btn-primary" onClick={handleNext}>
                Next Step <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-fade">
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
              Dietary Profile
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>
              Finally, let us know if you follow any specific dietary styles.
            </p>

            <div className="form-group">
              <label className="form-label" style={{ marginBottom: '0.75rem' }}>Select Diet Type</label>
              <div className="selection-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))' }}>
                {['Balanced', 'Keto', 'Vegan', 'Vegetarian', 'Gluten-Free'].map((diet) => {
                  const icons = {
                    Balanced: '🥗',
                    Keto: '🥑',
                    Vegan: '🌱',
                    Vegetarian: '🥦',
                    'Gluten-Free': '🌾',
                  };
                  const descriptions = {
                    Balanced: 'A wholesome mix of all macro food groups.',
                    Keto: 'Very low-carb, high-fat keto ratio.',
                    Vegan: '100% plant-based, no animal products.',
                    Vegetarian: 'Plant-based including dairy & eggs, no meats.',
                    'Gluten-Free': 'Free from wheat, barley, rye, and gluten.',
                  };

                  return (
                    <div
                      key={diet}
                      className={`select-card ${formData.dietType === diet ? 'active' : ''}`}
                      onClick={() => handleSelect('dietType', diet)}
                      style={{ padding: '1rem' }}
                    >
                      <span className="select-card-icon" style={{ fontSize: '1.5rem' }}>{icons[diet]}</span>
                      <span className="select-card-title" style={{ fontSize: '0.9rem' }}>{diet}</span>
                      <span className="select-card-desc" style={{ fontSize: '0.7rem' }}>{descriptions[diet]}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
              <button type="button" className="btn btn-secondary" onClick={handlePrev}>
                <ArrowLeft size={18} /> Back
              </button>
              <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'var(--primary)' }}>
                Calculate Recommendations <Heart size={18} />
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
