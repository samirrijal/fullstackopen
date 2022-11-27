import { useState } from "react"

// Header
const Header = ({ title }) => <h1>{title}</h1>

// Button
const Button = ({ name, onClick }) => <button onClick={onClick}>{name}</button>

// Statistic Line
const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

// Statistics
const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = all > 0 ? all / 3 : 0
  const positive = all > 0 ? (good / all) * 100 : 0
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive} />
      </tbody>
    </table>
  )
}

const App = () => {
  // UseState Functions
  const [good, goodCounter] = useState(0)
  const [neutral, neutralCounter] = useState(0)
  const [bad, badCounter] = useState(0)

  // UseState Button Handles
  const handleGood = () => goodCounter(good + 1)
  const handleNeutral = () => neutralCounter(neutral + 1)
  const handleBad = () => badCounter(bad + 1)

  return (
    <div>
      <Header title="give feedback" />
      <Button name="good" onClick={handleGood} />
      <Button name="neutral" onClick={handleNeutral} />
      <Button name="bad" onClick={handleBad} />
      <Header title="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
