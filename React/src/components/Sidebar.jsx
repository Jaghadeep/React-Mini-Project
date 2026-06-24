import { useState } from 'react';
import { 
  LayoutDashboard, 
  Utensils, 
  BookOpen, 
  ShoppingCart, 
  User,
  Menu,
  X,
  RotateCcw,
  Apple
} from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab, profile, onReset }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'planner', label: 'Meal Planner', icon: Utensils },
    { id: 'recipes', label: 'Recipe Library', icon: BookOpen },
    { id: 'shopping', label: 'Shopping List', icon: ShoppingCart },
  ];

  const getGoalText = (goal) => {
    switch (goal) {
      case 'lose': return 'Weight Loss';
      case 'gain': return 'Weight Gain';
      case 'maintain': default: return 'Maintain Weight';
    }
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
  };

  const menuContent = (
    <>
      <div className="logo-container">
        <Apple className="logo-icon" />
        <span className="logo-text">NutriGuide</span>
      </div>

      <nav style={{ flexGrow: 1 }}>
        <ul className="nav-links">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <li key={item.id}>
                <div
                  className={`nav-link ${activeTab === item.id ? 'active' : ''}`}
                  onClick={() => handleTabClick(item.id)}
                >
                  <IconComponent className="nav-link-icon" />
                  <span>{item.label}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>

      {profile && (
        <div className="sidebar-footer">
          <div className="user-snippet" style={{ marginBottom: '1rem' }}>
            <div className="avatar">
              {profile.name.charAt(0).toUpperCase()}
            </div>
            <div style={{ overflow: 'hidden' }}>
              <div className="user-info-name" style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>
                {profile.name}
              </div>
              <div className="user-info-goal">
                {profile.dietType} • {getGoalText(profile.goal)}
              </div>
            </div>
          </div>
          <button 
            onClick={onReset} 
            className="btn btn-ghost" 
            style={{ 
              width: '100%', 
              justifyContent: 'flex-start', 
              fontSize: '0.85rem', 
              padding: '0.5rem 0.75rem',
              color: 'var(--accent)'
            }}
          >
            <RotateCcw size={14} />
            <span>Reset Profile</span>
          </button>
        </div>
      )}
    </>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="sidebar glass-panel">
        {menuContent}
      </aside>

      {/* Floating Mobile Top Bar */}
      <div className="mobile-nav glass-panel">
        <div className="logo-container" style={{ margin: 0, padding: 0 }}>
          <Apple className="logo-icon" style={{ width: '1.75rem', height: '1.75rem' }} />
          <span className="logo-text" style={{ fontSize: '1.1rem' }}>NutriGuide</span>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="btn btn-ghost"
          style={{ padding: '0.25rem' }}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      <div className={`mobile-menu-drawer ${isMobileMenuOpen ? 'open' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
        <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn btn-ghost"
              style={{ padding: '0.25rem' }}
            >
              <X size={24} />
            </button>
          </div>
          {menuContent}
        </div>
      </div>
    </>
  );
}
