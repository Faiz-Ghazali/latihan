import React from 'react'

function LatihanControlComponent() {
  return (
    <div>
      <h1 className='text-3xl font-light'>Login</h1>
      <form className="flex flex-row gap-4 p-4 m-5">
        <input type="text" name="username" className="border border-gray-300" placeholder="Username"/>
        <input type="password" name="password"className="border border-gray-300" placeholder="Password" />
        <button type="submit" className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-lg">Login</button>
      </form>
    </div>
  )
}

export default LatihanControlComponent
