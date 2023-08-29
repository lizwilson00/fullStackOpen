import Part from './Part'

const Header = ({ courseName }) => <h2>{courseName}</h2>

const Total = ({ sum }) => <p><strong>total of {sum} exercises</strong></p>

const Course = ({ course }) => {
  const numExercises = () => {
    return course.parts.map(part => part.exercises).reduce((sum, num) => sum + num)
  }

  return (
    <>
      <Header courseName={course.name} />
      {course.parts.map(part => 
        <Part key={part.id} part={part} />
      )}
      <Total sum={numExercises()} />
    </>
  )
}


export default Course