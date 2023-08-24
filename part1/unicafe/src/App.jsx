import { useState } from 'react'

const Header = ({name}) => {
  return (
    <h1>{name}</h1>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistic = (props) => {
  const average = () => {
    return ((props.good - props.bad) / props.total) || 0
  }

  const positive = () => {
    return (props.good / props.total) * 100 || 0
  }

  if (props.isActive) {
    return (
      <table>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={props.total} />
        <StatisticLine text="average" value={String(average().toFixed(1))} />
        <StatisticLine text="positive" value={String(positive().toFixed(1)) + " %"} />
      </table>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [isActive, setIsActive] = useState(false);

  const setToValue = (newValue, setValue) => {
    setValue(newValue)
    setIsActive(true)
  }

  const total = () => {
    return (good + neutral + bad) || 0
  }

  return (
    <div>
      <Header name="give feedback" />
      <Button handleClick={() => setToValue(good + 1, setGood)} text="good" />
      <Button handleClick={() => setToValue(neutral + 1, setNeutral)} text="neutral" />
      <Button handleClick={() => setToValue(bad + 1, setBad)} text="bad" />
      <Header name="statistics" />
      <Statistic good={good} neutral={neutral} bad={bad} total={total()} isActive={isActive} />
    </div>
  )
}

export default App