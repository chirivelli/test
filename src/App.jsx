import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-gray-100 w-full flex items-center justify-center'>
      <button
          className='bg-blue-500 py-2 px-10 rounded-3xl'
          onClick={e => setCount(count + 1)}
      >
          {count}
      </button>
    </div>
  )
}

export default App
