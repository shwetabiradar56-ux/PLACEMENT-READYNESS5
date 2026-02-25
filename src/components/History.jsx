import { useState } from 'react'

function History() {
  const [filter, setFilter] = useState('all')

  const historyItems = [
    {
      id: 1,
      type: 'jd-analysis',
      title: 'Job Description Analysis',
      description: 'Analyzed Senior Frontend Developer position at TechCorp',
      date: 'Feb 25, 2026',
      time: '2:30 PM',
      result: '78% Match',
    },
    {
      id: 2,
      type: 'mock-interview',
      title: 'Mock Interview Session',
      description: 'Frontend Developer - Medium Difficulty (30 min)',
      date: 'Feb 24, 2026',
      time: '10:15 AM',
      result: 'Completed',
    },
    {
      id: 3,
      type: 'practice',
      title: 'Practice Problem Solved',
      description: 'Solved "Two Sum" - Arrays category',
      date: 'Feb 24, 2026',
      time: '9:45 AM',
      result: 'Success',
    },
    {
      id: 4,
      type: 'assessment',
      title: 'Assessment Completed',
      description: 'React & Modern JavaScript - Score: 72%',
      date: 'Feb 23, 2026',
      time: '3:00 PM',
      result: '72%',
    },
    {
      id: 5,
      type: 'resource',
      title: 'Resource Viewed',
      description: 'Viewed "Dynamic Programming Fundamentals"',
      date: 'Feb 23, 2026',
      time: '11:20 AM',
      result: 'Viewed',
    },
    {
      id: 6,
      type: 'practice',
      title: 'Practice Problem Solved',
      description: 'Solved "Reverse Linked List" - Linked List category',
      date: 'Feb 22, 2026',
      time: '4:30 PM',
      result: 'Success',
    },
    {
      id: 7,
      type: 'mock-interview',
      title: 'Mock Interview Session',
      description: 'Full Stack Developer - Easy Difficulty (15 min)',
      date: 'Feb 21, 2026',
      time: '2:00 PM',
      result: 'Completed',
    },
    {
      id: 8,
      type: 'jd-analysis',
      title: 'Job Description Analysis',
      description: 'Analyzed Full Stack Developer position at StartupXYZ',
      date: 'Feb 20, 2026',
      time: '11:00 AM',
      result: '85% Match',
    },
  ]

  const filteredItems = filter === 'all' 
    ? historyItems 
    : historyItems.filter(item => item.type === filter)

  const getTypeIcon = (type) => {
    switch (type) {
      case 'jd-analysis':
        return '📄'
      case 'mock-interview':
        return '🎤'
      case 'practice':
        return '💻'
      case 'assessment':
        return '📝'
      case 'resource':
        return '📚'
      default:
        return '📌'
    }
  }

  const getTypeLabel = (type) => {
    switch (type) {
      case 'jd-analysis':
        return 'JD Analysis'
      case 'mock-interview':
        return 'Mock Interview'
      case 'practice':
        return 'Practice'
      case 'assessment':
        return 'Assessment'
      case 'resource':
        return 'Resource'
      default:
        return 'Activity'
    }
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Activity History</h2>
            <p className="text-sm text-gray-600 mt-1">
              Track all your activities and progress over time.
            </p>
          </div>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
          >
            <option value="all">All Activities</option>
            <option value="jd-analysis">JD Analysis</option>
            <option value="mock-interview">Mock Interviews</option>
            <option value="practice">Practice</option>
            <option value="assessment">Assessments</option>
            <option value="resource">Resources</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="divide-y divide-gray-200">
          {filteredItems.map((item) => (
            <div key={item.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-lg">
                  {getTypeIcon(item.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-indigo-600">
                      {getTypeLabel(item.type)}
                    </p>
                    <span className="text-xs text-gray-500">
                      {item.date} at {item.time}
                    </span>
                  </div>
                  <p className="text-base font-semibold text-gray-900 mt-1">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {item.description}
                  </p>
                  <div className="mt-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      item.result.includes('%') 
                        ? parseInt(item.result) >= 80 
                          ? 'bg-green-100 text-green-800'
                          : parseInt(item.result) >= 60
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        : item.result === 'Success'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                    }`}>
                      {item.result}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Activity Summary</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { label: 'JD Analysis', count: historyItems.filter(i => i.type === 'jd-analysis').length, icon: '📄' },
            { label: 'Mock Interviews', count: historyItems.filter(i => i.type === 'mock-interview').length, icon: '🎤' },
            { label: 'Practice', count: historyItems.filter(i => i.type === 'practice').length, icon: '💻' },
            { label: 'Assessments', count: historyItems.filter(i => i.type === 'assessment').length, icon: '📝' },
            { label: 'Resources', count: historyItems.filter(i => i.type === 'resource').length, icon: '📚' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
              <span className="text-2xl">{stat.icon}</span>
              <p className="text-2xl font-bold text-gray-900 mt-2">{stat.count}</p>
              <p className="text-xs text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default History
