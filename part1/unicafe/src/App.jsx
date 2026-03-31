import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <div>
      <StatisticLine text = 'good' value = {props.good} />
      <StatisticLine text = 'neutral' value = {props.neutral} />
      <StatisticLine text = 'bad' value = {props.bad} />
      <StatisticLine text = 'all' value = {props.all} />
      <StatisticLine text = 'average' value = {props.average} />
      <StatisticLine text = 'positive' value = {props.positive * 100 + ' %'} />
    </div>
  )
}

const StatisticLine = ({text, value}) => <p>{text} {value}</p>

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
      <Button onClick = {handleGood} text = 'good' />
      <Button onClick = {handleNeutral} text = 'neutral' />
      <Button onClick = {handleBad} text = 'bad' />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
    </div>
  )
}

export default App