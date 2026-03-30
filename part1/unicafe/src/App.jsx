import { useState } from 'react'

const Statistics = (props) => {
  return (
    <>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.all}</p>
      <p>average {props.average}</p>
      <p>positive {props.positive}</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGood = () => {
    const goodIncrement = good + 1
    setGood(goodIncrement)
    const allIncrement = all + 1
    setAll(allIncrement)
    setAverage((goodIncrement - bad) / allIncrement)
    setPositive(goodIncrement / allIncrement)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    const allIncrement = all + 1
    setAll(allIncrement)
    setAverage((good - bad) / allIncrement)
    setPositive(good / allIncrement)
  }

  const handleBad = () => {
    const badIncrement = bad + 1
    setBad(badIncrement)
    const allIncrement = all + 1
    setAll(allIncrement)
    setAverage((good - badIncrement) / allIncrement)
    setPositive(good / allIncrement)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
    </div>
  )
}

export default App