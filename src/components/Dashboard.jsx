import { useState } from 'react'

function Dashboard() {
  const [readinessScore, setReadinessScore] = useState(75)

  const stats = [
    { label: 'Problems Solved', value: 42, total: 100 },
    { label: 'Mock Interviews', value: 5, total: 10 },
    { label: 'Assessments Taken', value: 3, total: 5 },
    { label: 'Resources Viewed', value: 12, total: 20 },
  ]

  const recentActivity = [
    { id: 1, action: 'Completed Mock Interview', date: '2 hours ago', type: 'interview' },
    { id: 2, action: 'Solved "Two Sum" problem', date: '5 hours ago', type: 'practice' },
    { id: 3, action: 'Viewed System Design Resources', date: '1 day ago', type: 'resource' },
    { id: 4, action: 'Completed Assessment #2', date: '2 days ago', type: 'assessment' },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500">{stat.label}</h3>
            <div className="mt-2 flex items-baseline">
              <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
              <span className="ml-2 text-sm text-gray-500">/ {stat.total}</span>
            </div>
            <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full"
                style={{ width: `${(stat.value / stat.total) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Readiness Score</h2>
          <div className="flex items-center justify-center">
            <div className="relative w-48 h-48">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#4f46e5"
                  strokeWidth="3"
                  strokeDasharray={`${readinessScore}, 100`}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold text-gray-900">{readinessScore}%</span>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            Based on your practice, assessments, and mock interviews
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.type === 'interview' ? 'bg-purple-500' :
                  activity.type === 'practice' ? 'bg-green-500' :
                  activity.type === 'resource' ? 'bg-blue-500' : 'bg-orange-500'
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
