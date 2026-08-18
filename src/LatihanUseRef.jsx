import { useRef, useState } from 'react'

function LatihanUseRef() {
  const [inputValue, setInputValue] = useState('John')
  const [displayName, setDisplayName] = useState('John')
  const inputRef = useRef(null)

  const focusInput = () => {
    inputRef.current?.focus()
  }

  const showName = () => {
    setDisplayName(inputValue)
  }

  return (
    <div>
      <input
        ref={inputRef}
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <br> </br>
      <button onClick={showName}>Show Name</button>
      <h2>Current Input: {displayName}</h2>
    </div>
  )
}

export default LatihanUseRef
