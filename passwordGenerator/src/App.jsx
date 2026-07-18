import { useState, useCallback, useEffect, useRef } from 'react'
// import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllow, setNumberAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")
  const [copied, setIsCopied]= useState(false)

  //useRef
  const passwordRef = useRef(null)
  const timeoutRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass =""
    let str ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    
    if(numberAllow) str += "0123456789"
    if(charAllow) str+= "~!@#$%^&*()_-+={}[]:<>.?"

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length,numberAllow,charAllow]) //dependencies  // setPassword omitted as React guarantees setter stability

  const copyPassToClipboard = useCallback(()=> {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,101);
    window.navigator.clipboard.writeText(password)
    setIsCopied(true)

    if(timeoutRef.current) clearTimeout(timeoutRef.current)
    
    //state reversion 2000ms in the future
    timeoutRef.current=setTimeout(()=>{
      setIsCopied(false)
    }, 2000)

  },[password])
  
  useEffect(()=>{
    return() =>{
      if(timeoutRef.current) clearTimeout(timeoutRef.current)
    }

  },[])

  useEffect(()=>{
    passwordGenerator()
  }, [length, numberAllow, charAllow, passwordGenerator])
  return (
      <div className="w-screen max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-green-400 bg-gray-700">
        <h1 className="text-2xl font-bold text-center">PASSWORD GENERATOR</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} className='outline-none w-full py-1 px-3'
          placeHolder ='password' 
          readOnly ref={passwordRef}/>
          <button onClick={copyPassToClipboard}  className={`font-semibold py-2 px-5 text-sm transition-all duration-200 ease-in-out shrink-0 outline-none
                                                            ${copied ? 'bg-emerald-600 text-white cursor-default':'bg-indigo-600 text-white hover:bg-indigo-500 active:scale-95'}`}>{copied? 'copied!' : 'copy'} </button>
            </div>
            <div className="flex text-sm gap-x-2">
              <div className='flex items-center gap-x-1'>
                <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(Number(e.target.value))}}/> 
                <label >Length:{length}</label>
              </div>
              <div className="flex items-center gap-x-1">
            <input type="checkbox" checked={numberAllow} id="numberInput" onChange={()=>{
              setNumberAllow((prev)=>!prev )
            }}/>
            <label htmlFor="numberInput">Include Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" checked={charAllow} id="charInput" onChange={()=>{
              setCharAllow((prev)=>!prev )
            }}/>
            <label htmlFor="charInput">Include Special Characters</label>
          </div>
        </div>
      </div>
  )
}

export default App
