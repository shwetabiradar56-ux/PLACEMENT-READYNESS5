import { useState } from 'react'

function Resources() {
  const [activeCategory, setActiveCategory] = useState('dsa')

  const categories = [
    {
      id: 'dsa',
      name: 'Data Structures & Algorithms',
      topics: [
        { id: 1, title: 'Arrays & Strings', description: 'Fundamental operations and common patterns', resources: 12 },
        { id: 2, title: 'Linked Lists', description: 'Singly, doubly linked lists and operations', resources: 8 },
        { id: 3, title: 'Trees & BST', description: 'Binary trees, traversals, and search trees', resources: 15 },
        { id: 4, title: 'Dynamic Programming', description: 'Memoization, tabulation, and common problems', resources: 10 },
      ],
    },
    {
      id: 'system-design',
      name: 'System Design',
      topics: [
        { id: 5, title: 'Scalability Fundamentals', description: 'Horizontal vs vertical scaling, load balancing', resources: 6 },
        { id: 6, title: 'Database Design', description: 'SQL vs NoSQL, indexing, sharding', resources: 8 },
        { id: 7, title: 'Microservices', description: 'Service architecture, inter-service communication', resources: 5 },
        { id: 8, title: 'Caching Strategies', description: 'Redis, CDN, cache invalidation patterns', resources: 4 },
      ],
    },
    {
      id: 'interview',
      name: 'Interview Preparation',
      topics: [
        { id: 9, title: 'Behavioral Questions', description: 'STAR method and common questions', resources: 20 },
        { id: 10, title: 'Resume Tips', description: 'Writing effective technical resumes', resources: 5 },
        { id: 11, title: 'Company Research', description: 'How to research companies effectively', resources: 3 },
        { id: 12, title: 'Salary Negotiation', description: 'Strategies for negotiating offers', resources: 4 },
      ],
    },
    {
      id: 'resume',
      name: 'Resume & Portfolio',
      topics: [
        { id: 13, title: 'Resume Templates', description: 'ATS-friendly resume formats', resources: 8 },
        { id: 14, title: 'Portfolio Projects', description: 'Project ideas to showcase skills', resources: 12 },
        { id: 15, title: 'GitHub Profile', description: 'Optimizing your GitHub presence', resources: 6 },
        { id: 16, title: 'LinkedIn Optimization', description: 'Building a strong LinkedIn profile', resources: 5 },
      ],
    },
  ]

  const activeTopics = categories.find(c => c.id === activeCategory)?.topics || []

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Learning Resources</h2>
        <p className="text-sm text-gray-600">
          Curated study materials to help you prepare for technical interviews and improve your skills.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeCategory === category.id
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {activeTopics.map((topic) => (
          <div key={topic.id} className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-gray-900">{topic.title}</h3>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                {topic.resources} resources
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-4">{topic.description}</p>
            <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
              View Resources →
            </button>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow p-6 text-white">
        <h3 className="text-lg font-semibold mb-2">Study Schedule</h3>
        <p className="text-sm opacity-90 mb-4">
          Create a personalized study plan based on your target companies and interview timeline.
        </p>
        <button className="bg-white text-indigo-600 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
          Create Study Plan
        </button>
      </div>
    </div>
  )
}

export default Resources
