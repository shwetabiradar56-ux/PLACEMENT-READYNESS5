import { useState } from 'react'

function Assessments() {
  const [activeAssessment, setActiveAssessment] = useState(null)

  const assessments = [
    {
      id: 1,
      title: 'Frontend Fundamentals',
      description: 'Test your knowledge of HTML, CSS, and JavaScript basics',
      questions: 20,
      duration: 30,
      difficulty: 'Easy',
      completed: true,
      score: 85,
    },
    {
      id: 2,
      title: 'React & Modern JS',
      description: 'Advanced concepts in React and ES6+ JavaScript',
      questions: 25,
      duration: 45,
      difficulty: 'Medium',
      completed: true,
      score: 72,
    },
    {
      id: 3,
      title: 'Data Structures',
      description: 'Arrays, Linked Lists, Trees, and Graphs',
      questions: 15,
      duration: 40,
      difficulty: 'Hard',
      completed: false,
      score: null,
    },
    {
      id: 4,
      title: 'System Design Basics',
      description: 'Introduction to scalable system design principles',
      questions: 10,
      duration: 30,
      difficulty: 'Medium',
      completed: false,
      score: null,
    },
  ]

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

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600'
    if (score >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  if (activeAssessment) {
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={() => setActiveAssessment(null)}
              className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
            >
              ← Back to Assessments
            </button>
            <span className="text-sm text-gray-500">Question 1 of {activeAssessment.questions}</span>
          </div>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">{activeAssessment.title}</h2>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <p className="text-gray-900 font-medium mb-4">
              What is the output of the following code?
            </p>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`const arr = [1, 2, 3];
const result = arr.map(x => x * 2);
console.log(result);`}</code>
            </pre>
          </div>

          <div className="space-y-3">
            {['[1, 2, 3]', '[2, 4, 6]', 'undefined', '[NaN, NaN, NaN]'].map((option, index) => (
              <button
                key={index}
                className="w-full text-left p-4 border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-indigo-300 transition-colors"
              >
                <span className="font-medium text-gray-700">{String.fromCharCode(65 + index)}.</span>{' '}
                <span className="text-gray-900">{option}</span>
              </button>
            ))}
          </div>

          <div className="flex justify-between mt-6">
            <button className="bg-gray-200 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-300 transition-colors">
              Previous
            </button>
            <button className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Assessments</h2>
        <p className="text-sm text-gray-600">
          Take assessments to evaluate your skills and track your progress over time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {assessments.map((assessment) => (
          <div key={assessment.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{assessment.title}</h3>
              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getDifficultyColor(assessment.difficulty)}`}>
                {assessment.difficulty}
              </span>
            </div>
            
            <p className="text-sm text-gray-600 mb-4">{assessment.description}</p>
            
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
              <span>{assessment.questions} questions</span>
              <span>•</span>
              <span>{assessment.duration} minutes</span>
            </div>

            {assessment.completed ? (
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm text-gray-500">Score: </span>
                  <span className={`text-lg font-bold ${getScoreColor(assessment.score)}`}>
                    {assessment.score}%
                  </span>
                </div>
                <button
                  onClick={() => setActiveAssessment(assessment)}
                  className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
                >
                  Retake
                </button>
              </div>
            ) : (
              <button
                onClick={() => setActiveAssessment(assessment)}
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
              >
                Start Assessment
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Assessment Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-3xl font-bold text-indigo-600">{assessments.length}</p>
            <p className="text-sm text-gray-500">Total Assessments</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-3xl font-bold text-green-600">
              {assessments.filter(a => a.completed).length}
            </p>
            <p className="text-sm text-gray-500">Completed</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-3xl font-bold text-purple-600">
              {Math.round(assessments.filter(a => a.completed).reduce((acc, a) => acc + a.score, 0) / assessments.filter(a => a.completed).length || 0)}%
            </p>
            <p className="text-sm text-gray-500">Average Score</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Assessments
