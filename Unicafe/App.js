import { useState } from 'react'

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>
            {props.text}
        </button>
        )
}

const StatisticLine = (props) => {
    return (
        <div>{props.text} {props.value} {props.symbol}</div>
        )
}

const Statistics = (props) => {
    const all = props.good + props.neutral + props.bad
    const value = props.good - props.bad
    if (all === 0) {
        return (
            <div>
                <h1>statistics</h1>
                <div>No feedback given</div>
            </div>
            )
    }
    return (
        <div>
            <h1>statistics</h1>
            <table>
                <tr>
                    <td><StatisticLine text="good" /></td>
                    <td><StatisticLine value={props.good} /></td>
                </tr>
                <tr>
                    <td><StatisticLine text="neutral" /></td>
                    <td><StatisticLine value={props.neutral} /></td>
                </tr>
                <tr>
                    <td><StatisticLine text="bad" /></td>
                    <td><StatisticLine value={props.bad} /></td>
                </tr>
                <tr>
                    <td><StatisticLine text="good" /></td>
                    <td><StatisticLine value={props.good} /></td>
                </tr>
                <tr>
                    <td><StatisticLine text="all" /></td>
                    <StatisticLine value={all}/>
                </tr>
                <tr>
                    <td><StatisticLine text="average" /></td>
                    <td><StatisticLine value={value / all} /></td>
                </tr>
                <tr>
                    <td><StatisticLine text="positive" /></td>
                    <td><StatisticLine value={(props.good / all) * 100} symbol="%" /></td>
                </tr>
            </table>
        </div>
        )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const voteGood = () => setGood(good + 1)
    const voteNeutral = () => setNeutral(neutral + 1)
    const voteBad = () => setBad(bad + 1)

    return (
        <div>
            <h1> give feedback</h1>
            <Button
                handleClick={voteGood}
                text='good'
            />
            <Button
                handleClick={voteNeutral}
                text='neutral'
            />
            <Button
                handleClick={voteBad}
                text='bad'
            />
            <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
            />

        </div>
        )
}

export default App;
