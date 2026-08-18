import React, {useRef, useState} from 'react'

function LatihanUseRef() {
    const [Name, setName] = useState('');
    const inputRef = useRef(null);
    function focusInput() {
        inputRef.current.focus();
    }
  return (
    <div>
      <input
        ref={inputRef}
        value={Name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default LatihanUseRef
