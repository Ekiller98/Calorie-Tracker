import React, { useState } from 'react'

export default function Login(){
    //state to hold form inputs
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //handler for form submit
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault() // prevents page reload
        alert(`Logging in with Email: ${email} and Password ${password}`)
        //will connect backend authentication service later
    }

    return (
        <div className = "max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
            <h2 className = "text-2xl font-bold mb-6 text-center">Login to Lose N Bulk </h2>
            <form onSubmit = {handleSubmit} className = "flex flex-col gap-4">
                <input
                    type = "email"
                    placeholder = "Email"
                    value = {email}
                    onChange={e => setEmail(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required/>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required/>    
                <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"> Login
                </button>
            </form>
        </div>
    )
}