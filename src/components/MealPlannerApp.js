import React, {useState} from 'react';
import { Camera, DollarSign, Home, Search, Calendar, PlusCircle, ChevronLeft, ChevronRight, BarChart2 } from 'lucide-react';
import bananasImage from './image.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

const MainApp = () => {
      const [searchQuery, setSearchQuery] = useState('');
  const [selectedDay, setSelectedDay] = useState(new Date());

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const currentWeek = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - date.getDay() + i);
    return date;
  });

  const mealSchedule = {
    'Mon': { recipe: 'Vegetable Stir Fry', ingredients: ['Broccoli', 'Carrots', 'Tofu'] },
    'Tue': { recipe: 'Quinoa Bowl', ingredients: ['Quinoa', 'Chickpeas', 'Avocado'] },
    'Wed': { recipe: 'Pasta Primavera', ingredients: ['Pasta', 'Zucchini', 'Tomatoes'] },
    'Thu': { recipe: 'Buddha Bowl', ingredients: ['Sweet Potato', 'Kale', 'Tahini'] },
    'Fri': { recipe: 'Green Curry', ingredients: ['Coconut Milk', 'Vegetables', 'Rice'] },
    'Sat': { recipe: 'Mediterranean Plate', ingredients: ['Hummus', 'Falafel', 'Pita'] },
    'Sun': { recipe: 'Lentil Soup', ingredients: ['Lentils', 'Carrots', 'Celery'] },
  };
  return (
    <div className="w-full h-full bg-white font-sans">
       <div className="w-full h-full bg-gray-50 font-sans pb-16">
      {/* Header */}
      <header className="bg-emerald-600 text-white shadow-lg p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Smart Kitchen App</h1>
          <button className="p-2 bg-emerald-500 rounded-full">
            <Camera size={24} />
          </button>
        </div>
        
        {/* Search Bar */}
        <div className="mt-4 relative">
          <input
            type="text"
            placeholder="Search recipes, ingredients..."
            className="w-full p-3 rounded-lg bg-white text-gray-800 placeholder-gray-400"
          />
          <Search className="absolute right-3 top-3 text-gray-400" size={20} />
        </div>
      </header>

      {/* Quick Actions */}
      <div className="grid grid-cols-5 gap-3 p-4">
        {[
          { icon: '🥦', label: 'Fridge' },
          { icon: '📅', label: 'Planning' },
          { icon: '🍽️', label: 'Recipes' },
          { icon: '📊', label: 'Analytics' },
          { icon: '💰', label: 'Pricing' }
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-2xl mb-2">
              {item.icon}
            </div>
            <span className="text-xs text-gray-600 text-center">{item.label}</span>
          </div>
        ))}
      </div>
    </div>

      {/* Expiring Items */}
      <section className="p-4">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Soon-to-Expire Ingredients</h2>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
          <div className="relative">
            <div className="absolute top-0 left-0 bg-red-500 text-white text-xs px-3 py-1 rounded-br">
              Urgent
            </div>
            <div className="h-48 bg-emerald-50 flex items-center justify-center">
            <div>
                <img 
                    src={bananasImage} 
                    alt="Bananas" 
                    style={{ width: '100%', maxWidth: '150px', height: 'auto' }} 
                />
                </div>
            </div>
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-600">Bananas</p>
            <p className="text-base font-medium text-gray-800">Expiring in 2 days</p>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="p-4 bg-gray-50">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Calendar</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
            <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">📆</div>
            <span className="text-sm text-gray-600">Google Calendar Integration</span>
          </div>
          <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
            <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">⏰</div>
            <span className="text-sm text-gray-600">Customize Notifications</span>
          </div>
        </div>
      </section>

      {/* Dietary Preferences */}
      <section className="p-4">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Dietary Preferences</h2>
        <div className="flex gap-3">
          <div className="flex-1 flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
            <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center">🥑</div>
            <span className="text-sm font-medium">Vegetarian</span>
          </div>
          <div className="flex-1 flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
            <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center">🌾</div>
            <span className="text-sm font-medium">Gluten-Free</span>
          </div>
        </div>
      </section>

      
         {/* Weekly Calendar */}
         <section className="p-4 bg-white shadow-sm">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Meal Schedule</h2>
        <div className="flex justify-between items-center mb-4">
          <ChevronLeft className="text-gray-600" />
          <span className="text-sm font-medium">Current Week</span>
          <ChevronRight className="text-gray-600" />
        </div>
        <div className="grid grid-cols-7 gap-2 mb-4">
          {currentWeek.map((date, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-2 rounded-lg ${
                date.toDateString() === selectedDay.toDateString()
                  ? 'bg-emerald-100 text-emerald-700'
                  : 'bg-gray-50'
              }`}
              onClick={() => setSelectedDay(date)}
            >
              <span className="text-xs font-medium">{days[index]}</span>
              <span className="text-lg font-bold">{date.getDate()}</span>
            </div>
          ))}
        </div>

        {/* Daily Meal Plan */}
        <div className="bg-white rounded-lg p-4 border border-gray-100">
          <h3 className="font-medium mb-2">
            {mealSchedule[days[selectedDay.getDay()]]?.recipe || 'No meal planned'}
          </h3>
          <div className="flex flex-wrap gap-2">
            {mealSchedule[days[selectedDay.getDay()]]?.ingredients.map((ingredient, index) => (
              <span key={index} className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm">
                {ingredient}
              </span>
            ))}
          </div>
        </div>
      </section>
      

      {/* Action Buttons */}
      <div className="px-4 space-y-3">
        <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors">
          Add Ingredients
        </button>
        <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors">
          Start Planning
        </button>
      </div>

      {/* Smart Suggestions */}
      <section className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Smart Suggestions</h2>
          <button className="text-emerald-600 text-sm font-medium">See All</button>
        </div>
        <div className="p-4 mb-4 bg-emerald-50 border-emerald-200 rounded-lg">
          <p className="text-emerald-800">Based on your ingredients, you can make: Vegetable Stir Fry 🥘</p>
        </div>
      </section>
      

      {/* Shopping List */}
      <section className="p-4 bg-white shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Shopping List</h2>
          
        </div>
        <div className="space-y-2">
          {['Broccoli', 'Tofu', 'Quinoa'].map((item, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <input type="checkbox" className="form-checkbox text-emerald-600" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>

          {/* Price Tracking */}
          <section className="p-4 mb-12">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Price Tracking</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500">Weekly Budget</p>
            <p className="text-xl font-semibold text-emerald-600">$150</p>
            <p className="text-xs text-emerald-600">$50 remaining</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500">Savings</p>
            <p className="text-xl font-semibold text-emerald-600">$25</p>
            <p className="text-xs text-emerald-600">This week</p>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-100">
        <div className="grid grid-cols-3 gap-1">
            {[
            { icon: '🏠', label: 'Home', path: '/' },
            { icon: '🔍', label: 'Search', path: '/search' },
            { icon: '💰', label: 'Pricing', path: '/pricing' }
            ].map((item, index) => (
            <Link 
                to={item.path} 
                key={index} 
                className="flex flex-col items-center p-2 hover:bg-gray-50 transition-colors"
            >
                <span className="text-xl">{item.icon}</span>
                <span className="text-xs text-gray-600">{item.label}</span>
            </Link>
            ))}
        </div>
        </nav>
    </div>
  );
};

const PricingPage = () => (
    <div className="w-full min-h-screen bg-gray-50 p-4 ">
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto mt-40">
        {/* Free Plan */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-xl font-semibold mb-2">Free Plan</h3>
          <p className="text-3xl font-bold mb-4">$0<span className="text-gray-500 text-base font-normal">/month</span></p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center">
              <span className="text-emerald-500 mr-2">✓</span>
              Basic meal planning
            </li>
            <li className="flex items-center">
              <span className="text-emerald-500 mr-2">✓</span>
              Simple shopping list
            </li>
            <li className="flex items-center">
              <span className="text-emerald-500 mr-2">✓</span>
              5 recipes per month
            </li>
          </ul>
          <button className="w-full py-2 px-4 bg-emerald-100 text-emerald-700 rounded-lg font-medium">
            Current Plan
          </button>
        </div>
  
        {/* Premium Plan */}
        <div className="bg-emerald-50 p-6 rounded-xl shadow-sm border border-emerald-200 transform scale-105">
          <div className="bg-emerald-500 text-white text-xs px-2 py-1 rounded-full inline-block mb-2">
            MOST POPULAR
          </div>
          <h3 className="text-xl font-semibold mb-2">Premium</h3>
          <p className="text-3xl font-bold mb-4">$9.99<span className="text-gray-500 text-base font-normal">/month</span></p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center">
              <span className="text-emerald-500 mr-2">✓</span>
              Advanced meal planning
            </li>
            <li className="flex items-center">
              <span className="text-emerald-500 mr-2">✓</span>
              Smart shopping lists
            </li>
            <li className="flex items-center">
              <span className="text-emerald-500 mr-2">✓</span>
              Unlimited recipes
            </li>
          </ul>
          <button className="w-full py-2 px-4 bg-emerald-600 text-white rounded-lg font-medium">
            Upgrade Now
          </button>
        </div>
  
        {/* Pro Plan */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-xl font-semibold mb-2">Pro</h3>
          <p className="text-3xl font-bold mb-4">$19.99<span className="text-gray-500 text-base font-normal">/month</span></p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center">
              <span className="text-emerald-500 mr-2">✓</span>
              All Premium features
            </li>
            <li className="flex items-center">
              <span className="text-emerald-500 mr-2">✓</span>
              AI meal suggestions
            </li>
            <li className="flex items-center">
              <span className="text-emerald-500 mr-2">✓</span>
              Priority support
            </li>
          </ul>
          <button className="w-full py-2 px-4 bg-gray-100 text-gray-700 rounded-lg font-medium">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );

  const MealPlannerApp = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<MainApp />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
      </Router>
    );
  };

export default MealPlannerApp;