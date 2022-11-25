// Header
const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

// Content
const Content = (props) => {
  return (
    <div>
      <p>{props.parts[0].name} : {props.parts[0].exercise}</p>
      <p>{props.parts[1].name} : {props.parts[1].exercise}</p>
      <p>{props.parts[2].name} : {props.parts[2].exercise}</p>
    </div>
  )
}

// Total
const Total = (props) => {
  return (
    <div>
      <p>Total : {props.parts[0].exercise + props.parts[1].exercise + props.parts[2].exercise}</p>
    </div>
  )
}

// App
const App = () => {
  const course = {
    name: 'Half Stack app development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercise: 10
      },
      {
        name: 'Using props to pass data',
        exercise: 7
      },
      {
        name: 'State of a component',
        exercise: 14
      }
    ]
  }
  return (<div>
    <Header name = {course.name} />
    <Content parts = {course.parts} />
    <Total parts = {course.parts} />
  </div>)
}

export default App;