const Person = ({ person, handleDelete }) => {
  return (
    <div>
      {person.name} {person.number} &nbsp;
      <button onClick={() => {
        if (window.confirm(`Delete ${person.name}?`)) {
          handleDelete(person.id)
        }
      }}>
        delete
      </button>
    </div>
  )
}

export default Person