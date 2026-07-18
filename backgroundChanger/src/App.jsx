import { useState } from 'react'

const COLOR_OPTIONS = [
  { name: 'Red', value: 'red', darkText: true},
  { name: 'Blue', value: 'blue', darkText: false },
  { name: 'Green', value: 'green', darkText: false },
  { name: 'Yellow', value: 'yellow', darkText: true },
  { name: 'Maroon', value: 'maroon', darkText: false },
  { name: 'Cyan', value: 'cyan', darkText: true },
  { name: 'Emerald', value: '#50C878', darkText: false },
  { name: 'Violet', value: 'Violet', darkText: false },
]

function App() {
  const [color,setColor]=useState('purple')

  return (
    <div 
      className="w-full h-screen transition-colors duration-1000" 
      style={{ backgroundColor:color }}
    >
      <div className="fixed bottom-48 inset-x-0 px-2 flex justify-center">
        <div className="flex flex-wrap items-center justify-center gap-3 shadow-lg bg-amber-100 px-3 py-2 rounded-2xl">
          {COLOR_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setColor(opt.value)}
              className={`outline-none px-4 py-2 rounded-full shadow-lg transform active:scale-90 transition-all ${
                opt.darkText ? 'text-slate-900' : 'text-white'
              }`}
              style={{ backgroundColor: opt.value }}
            >
              {opt.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App