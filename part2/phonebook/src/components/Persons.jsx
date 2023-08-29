import Person from './Person'

const Persons = ({ personsToShow, handleDelete }) => {
  return (
    <>
      {personsToShow.map(person => 
        <Person 
          key={person.name} 
          person={person} 
          handleDelete={() => handleDelete(person.id)}
        />)}
    </>
  )
}

export default Persons