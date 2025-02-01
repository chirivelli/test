import {useState} from "react";

const App = () => {
    const [count, setCount] = useState(0)
    return (
        <div className="flex h-screen items-center justify-center bg-slate-600">
            <button className='font-mono shadow-xl p-5 rounded-2xl bg-slate-900 ring-1 ring-slate-400 text-white'
            onClick={() => {setCount(count + 1)}}>
                count : {count}
            </button>
        </div>
    )
}

export default App;