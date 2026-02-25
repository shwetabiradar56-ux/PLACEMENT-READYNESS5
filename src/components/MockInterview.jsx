import { useState } from 'react'

function MockInterview() {
  const [config, setConfig] = useState({
    role: 'frontend',
    difficulty: 'medium',
    duration: 30,
  })
  const [isInterviewActive, setIsInterviewActive] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const questions = [
    {
      id: 1,
      question: 'Explain the Virtual DOM and how it works in React.',
      type: 'technical',
    },
    {
      id: 2,
      question: 'What are the differences between useState and useEffect hooks?',
      type: 'technical',
    },
    {
      id: 3,
      question: 'Describe a challenging project you worked on and how you overcame obstacles.',
      type: 'behavioral',
    },
    {
      id: 4,
      question: 'How do you handle state management in large applications?',
      type: 'technical',
    },
    {
      id: 5,
      question: 'Tell me about a time when you had to learn a new technology quickly.',
      type: 'behavioral',
    },
  ]

  const startInterview = () => {
    setIsInterviewActive(true)
    setCurrentQuestion(0)
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const endInterview = () => {
    setIsInterviewActive(false)
    setCurrentQuestion(0)
  }

  if (!isInterviewActive) {
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Mock Interview Setup</h2>
          <p className="text-sm text-gray-600 mb-6">
            Configure your mock interview settings and practice with realistic interview questions.
          </p>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Role
              </label>
              <select
                value={config.role}
                onChange={(e) => setConfig({ ...config, role: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="frontend">Frontend Developer</option>
                <option value="backend">Backend Developer</option>
                <option value="fullstack">Full Stack Developer</option>
                <option value="devops">DevOps Engineer</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Difficulty Level
              </label>
              <select
                value={config.difficulty}
                onChange={(e) => setConfig({ ...config, difficulty: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duration (minutes)
              </label>
              <select
                value={config.duration}
                onChange={(e) => setConfig({ ...config, duration: parseInt(e.target.value) })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value={15}>15 minutes</option>
                <option value={30}>30 minutes</option>
                <option value={45}>45 minutes</option>
                <option value={60}>60 minutes</option>
              </select>
            </div>
          </div>

          <button
            onClick={startInterview}
            className="mt-6 w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
          >
            Start Mock Interview
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h3 className="text-3xl font-bold text-indigo-600">5</h3>
            <p className="text-sm text-gray-500 mt-1">Mock Interviews Completed</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h3 className="text-3xl font-bold text-green-600">4.2</h3>
            <p className="text-sm text-gray-500 mt-1">Average Rating</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h3 className="text-3xl font-bold text-purple-600">85%</h3>
            <p className="text-sm text-gray-500 mt-1">Improvement Rate</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Mock Interview in Progress</h2>
          <button
            onClick={endInterview}
            className="text-red-600 hover:text-red-800 text-sm font-medium"
          >
            End Interview
          </button>
        </div>

        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full mb-4 ${
            questions[currentQuestion].type === 'technical' 
              ? 'bg-blue-100 text-blue-800' 
              : 'bg-purple-100 text-purple-800'
          }`}>
            {questions[currentQuestion].type === 'technical' ? 'Technical' : 'Behavioral'}
          </span>
          <h3 className="text-xl font-medium text-gray-900">
            {questions[currentQuestion].question}
          </h3>
        </div>

        <div className="space-y-4">
          <textarea
            placeholder="Type your answer here..."
            className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
          />
          
          <div className="flex justify-between">
            <button
              onClick={nextQuestion}
              disabled={currentQuestion === questions.length - 1}
              className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              Skip
            </button>
            <button
              onClick={nextQuestion}
              disabled={currentQuestion === questions.length - 1}
              className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              {currentQuestion === questions.length - 1 ? 'Finish' : 'Next Question'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MockInterview
