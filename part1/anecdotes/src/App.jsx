import { useState } from 'react'

const Header = ({name}) => {
  return (
    <h1>{name}</h1>
  )
}

const AnecdoteSection = (props) => {
  if (props.isActive) {
    return (
      <>
        {props.anecdote}
        <br />
        has {props.voteCount} votes
        <br />
      </>
    )
  } 
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(Array(anecdotes.length).fill(0))
  const [isActive, setIsActive] = useState(false);

  const randomVal = () => {
    let currVal = selected;
    let newVal = Math.floor(Math.random() * (anecdotes.length - 1))
    while (currVal === newVal) {
      newVal = Math.floor(Math.random() * (anecdotes.length - 1))
    }
    return newVal
  }

  const handleVote = () => {
    let newVotes = [...votes]
    newVotes[selected] += 1
    setVote(newVotes)
    setIsActive(true)
  }

  const mostVotesIndex = () => {
    return votes.indexOf(Math.max(...votes))
  }

  return (
    <div>
      <Header name={"Anecdote of the day"} />
      <AnecdoteSection anecdote={anecdotes[selected]} voteCount={votes[selected]} isActive={true}/>
      <button onClick={handleVote}>
        vote
      </button>
      <button onClick={() => setSelected(randomVal())}>
        next anecdote
      </button>
      <Header name={"Anecdote with most votes"} />
      <AnecdoteSection anecdote={anecdotes[mostVotesIndex()]} voteCount={votes[mostVotesIndex()]} isActive={isActive}/>
    </div>
  )
}

export default App