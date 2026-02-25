import { useState } from 'react'
import Dashboard from './components/Dashboard'
import JDAnalysis from './components/JDAnalysis'
import Practice from './components/Practice'
import MockInterview from './components/MockInterview'
import TrackProgress from './components/TrackProgress'
import Assessments from './components/Assessments'
import Resources from './components/Resources'
import History from './components/History'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />
      case 'jd-analysis':
        return <JDAnalysis />
      case 'practice':
        return <Practice />
      case 'mock-interview':
        return <MockInterview />
      case 'track-progress':
        return <TrackProgress />
      case 'assessments':
        return <Assessments />
      case 'resources':
        return <Resources />
      case 'history':
        return <History />
      default:
        return <Dashboard />
    }
  }

  const navItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'jd-analysis', label: 'JD Analysis' },
    { id: 'practice', label: 'Practice' },
    { id: 'mock-interview', label: 'Mock Interview' },
    { id: 'track-progress', label: 'Track Progress' },
    { id: 'assessments', label: 'Assessments' },
    { id: 'resources', label: 'Resources' },
    { id: 'history', label: 'History' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold text-gray-900">Placement Readiness Platform</h1>
            <nav className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === item.id
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
    </div>
  )
}

export default App
