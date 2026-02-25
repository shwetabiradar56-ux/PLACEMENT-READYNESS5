import { useState } from 'react'

function TrackProgress() {
  const [timeRange, setTimeRange] = useState('week')

  const progressData = {
    week: {
      problemsSolved: [2, 4, 1, 5, 3, 2, 4],
      mockInterviews: [0, 1, 0, 0, 1, 0, 1],
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    month: {
      problemsSolved: [15, 22, 18, 25, 30, 20, 28],
      mockInterviews: [2, 3, 1, 4, 2, 3, 2],
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
    },
  }

  const skills = [
    { name: 'Data Structures', level: 75, color: 'bg-blue-500' },
    { name: 'Algorithms', level: 68, color: 'bg-green-500' },
    { name: 'System Design', level: 45, color: 'bg-purple-500' },
    { name: 'JavaScript/React', level: 85, color: 'bg-yellow-500' },
    { name: 'Behavioral', level: 70, color: 'bg-pink-500' },
  ]

  const achievements = [
    { id: 1, title: 'First Problem Solved', description: 'Solved your first practice problem', earned: true, date: 'Jan 15, 2026' },
    { id: 2, title: 'Streak Master', description: 'Maintained a 7-day practice streak', earned: true, date: 'Jan 22, 2026' },
    { id: 3, title: 'Mock Interview Pro', description: 'Completed 5 mock interviews', earned: true, date: 'Feb 1, 2026' },
    { id: 4, title: 'Problem Solver', description: 'Solved 50 practice problems', earned: false, progress: 42 },
    { id: 5, title: 'Assessment Champion', description: 'Scored 90%+ on all assessments', earned: false, progress: 2 },
  ]

  const data = progressData[timeRange]

  const maxProblems = Math.max(...data.problemsSolved)

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-lg font-semibold text-gray-900">Progress Overview</h2>
          <div className="flex space-x-2">
            <button
              onClick={() => setTimeRange('week')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                timeRange === 'week'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              This Week
            </button>
            <button
              onClick={() => setTimeRange('month')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                timeRange === 'month'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              This Month
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Problems Solved</h3>
          <div className="h-64 flex items-end justify-between space-x-2">
            {data.problemsSolved.map((value, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-indigo-500 rounded-t transition-all duration-300"
                  style={{ height: `${(value / maxProblems) * 200}px` }}
                ></div>
                <span className="text-xs text-gray-500 mt-2">{data.labels[index]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Skill Levels</h3>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${skill.color}`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`p-4 rounded-lg border-2 ${
                achievement.earned
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 bg-gray-50'
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className={`font-semibold ${achievement.earned ? 'text-green-800' : 'text-gray-700'}`}>
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">{achievement.description}</p>
                  {achievement.earned ? (
                    <p className="text-xs text-green-600 mt-2">Earned on {achievement.date}</p>
                  ) : (
                    <div className="mt-2">
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>Progress</span>
                        <span>{achievement.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div
                          className="bg-gray-400 h-1.5 rounded-full"
                          style={{ width: `${achievement.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
                {achievement.earned && (
                  <span className="text-2xl">🏆</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrackProgress
