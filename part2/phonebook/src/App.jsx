import { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [messageText, setMessageText] = useState('')
  const [messageType, setMessageType] = useState('')

  const hook = () => {
    console.log('effect')
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }

  useEffect(hook, [])
  console.log('render', persons.length, 'persons')

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName.trim(),
      number: newNumber.trim()
    }

    if (persons.map(person => person.name).includes(personObject.name)) {
      if (window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)) {
        const person = persons.find(p => p.name === personObject.name)
        const changedPerson = { ...person, number: personObject.number }
        personService
          .update(changedPerson.id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(p => p.id !== changedPerson.id ? p : returnedPerson))
            setNewName('')
            setNewNumber('')
          })
          .catch(error => {
            setMessageText(
              `Information of ${changedPerson.name} has already been removed from the server`
            )
            setMessageType('error')
            setTimeout(() => {
              setMessageText(null)
            }, 5000)
          })
      }
    } else {
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
      setMessageText(
        `Added ${personObject.name}`
      )
      setMessageType('success')
      setTimeout(() => {
        setMessageText(null)
      }, 5000)
    }
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const personsToShow = newFilter.length === 0
  ? persons
  : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  const handleDelete = (id) => {
    const person = persons.find(p => p.id === id)
    personService
    .remove(id)
    .then(() => {
      setPersons(persons.filter(p => p.id !== id))
    })
    .catch(error => {
      alert(
        `the person '${person.name}' was already deleted from the server`
      )
      setPersons(persons.filter(p => p.id !== id))
    })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification 
        messageText={messageText}
        messageType={messageType} 
      />
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm 
        addName={addName} 
        newName={newName} 
        handlePersonChange={handlePersonChange} 
        newNumber={newNumber}
        handleNumberChange={handleNumberChange} 
      />
      <h2>Numbers</h2>
      <Persons 
        personsToShow={personsToShow}
        handleDelete={handleDelete}
      />
    </div>
  )
}

export default App