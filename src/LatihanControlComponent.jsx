import React, {useState} from 'react'

function LatihanControlComponent() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handlerSubmit = (event) => {
      event.preventDefault();
      console.log(event.target.elements.Username.value);
      console.log(event.target.elements.password.value);
    }
  return (
    <div className="flex flex-col">
      <h1 className='text-3xl font-light'>Login</h1>
      <form onSubmit={handlerSubmit} className="flex flex-col gap-4 p-4 m-5">
        <input type="text" name="username" className="border border-gray-300" placeholder="Username" value={username} onChange={(event) => 
        {setUsername(event.target.value);}}/>
        <p>{username}</p>
        <input type="password" name="password"className="border border-gray-300" placeholder="Password" value={password} onChange={(event) => 
        {setPassword(event.target.value);}}/>
        <p>{password}</p>
        <button type="submit" className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-lg">Login</button>
      </form>
    </div>
  )
}

export default LatihanControlComponent
