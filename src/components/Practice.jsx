import { useState } from 'react'

function Practice() {
  const [filter, setFilter] = useState('all')

  const problems = [
    { id: 1, title: 'Two Sum', difficulty: 'Easy', category: 'Arrays', solved: true },
    { id: 2, title: 'Reverse Linked List', difficulty: 'Easy', category: 'Linked List', solved: true },
    { id: 3, title: 'Binary Tree Inorder Traversal', difficulty: 'Medium', category: 'Trees', solved: false },
    { id: 4, title: 'Valid Parentheses', difficulty: 'Easy', category: 'Stack', solved: true },
    { id: 5, title: 'Merge Intervals', difficulty: 'Medium', category: 'Arrays', solved: false },
    { id: 6, title: 'LRU Cache', difficulty: 'Medium', category: 'Design', solved: false },
    { id: 7, title: 'Word Break', difficulty: 'Medium', category: 'Dynamic Programming', solved: false },
    { id: 8, title: 'Median of Two Sorted Arrays', difficulty: 'Hard', category: 'Arrays', solved: false },
    { id: 9, title: 'Regular Expression Matching', difficulty: 'Hard', category: 'Dynamic Programming', solved: false },
    { id: 10, title: 'Trapping Rain Water', difficulty: 'Hard', category: 'Two Pointers', solved: false },
  ]

  const filteredProblems = filter === 'all' 
    ? problems 
    : filter === 'solved' 
      ? problems.filter(p => p.solved)
      : problems.filter(p => !p.solved)

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy':
        return 'text-green-600 bg-green-100'
      case 'Medium':
        return 'text-yellow-600 bg-yellow-100'
      case 'Hard':
        return 'text-red-600 bg-red-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-lg font-semibold text-gray-900">Practice Problems</h2>
          <div className="flex space-x-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('solved')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === 'solved'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Solved
            </button>
            <button
              onClick={() => setFilter('unsolved')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === 'unsolved'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Unsolved
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Difficulty
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredProblems.map((problem) => (
                <tr key={problem.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    {problem.solved ? (
                      <span className="text-green-600 text-lg">✓</span>
                    ) : (
                      <span className="text-gray-300 text-lg">○</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-900">{problem.title}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getDifficultyColor(problem.difficulty)}`}>
                      {problem.difficulty}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-500">{problem.category}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-indigo-600 hover:text-indigo-900 text-sm font-medium">
                      Solve
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-sm font-medium text-gray-500">Total Problems</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">{problems.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-sm font-medium text-gray-500">Solved</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">
            {problems.filter(p => p.solved).length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-sm font-medium text-gray-500">Success Rate</h3>
          <p className="text-3xl font-bold text-indigo-600 mt-2">
            {Math.round((problems.filter(p => p.solved).length / problems.length) * 100)}%
          </p>
        </div>
      </div>
    </div>
  )
}

export default Practice
