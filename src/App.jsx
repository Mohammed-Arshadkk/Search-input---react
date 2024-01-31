import React, { useEffect, useState } from 'react'

function App() {
  const [name, setName] = useState("")
  const [initial, setInitial] = useState(true)

  const handleName = (e) => {
    setName(e.target.value)
    console.log(e.target.value);
  }


  const fetchData = async () => {
    console.log("fetching....", name);
  }

  useEffect(() => {

    if (!initial) {
      const timeOut = setTimeout(() => {
        fetchData()
      }, 4000)

      return () => {
        clearTimeout(timeOut)
      }
    } else {
      setInitial(false)
    }

  }, [name])

  return (
    <div>
      <h1>Enter Here</h1>
      <input onChange={handleName} type="text" />
    </div>
  )
}

export default App
