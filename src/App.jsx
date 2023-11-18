import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'
function App() {
  const [count, setCount] = useState(0)

  const books=[
    {id:1,name:'physics', age:78,price:120},
    {id:2,name:'math',age:70,price:130},
    {id:3,name:'chemistry',age:60,price:140},
    { id:4 ,name:"biology",age:40,price:150}
    ]

  const actors = ['amit hasan','bappa raj',
  'salmansha','omorsani','onota zolil','hero alom'];

  const singers=[
  {id:1,name:'mahfujur rahman', age:78,titel:'pop'},
  {id:2,name:'runa lila',age:70,titel:'malodey'},
  {id:3,name:'hero alom',age:60,titel:'shob doroner gan gie'},
  { id:4 ,name:"A R Rhaman",age:40,titel:"sound specialist"}
  ]
    
  
return (

<>

<h1>Vite + React</h1>

<BookStore book={books}></BookStore>


{
  singers.map(singer=><Singer sin={singer}></Singer>)
}

<Actor name='amit hasan faysal' age='23'></Actor>
{
  actors.map(actor=> <Actor name={actor}></Actor>)
}

{/* <Todo Task="learn React" 
isDone={true}></Todo>

<Todo Task="Expore core Concept React" 
isDone={false}></Todo>

<Todo Task="Try JSX" 
isDone={true}></Todo> */}
{/* <Device name="laptop" price="55"></Device>
<Device name="mobile" price="30"></Device>
<Device name="watch" price="20"></Device>
<Person></Person>


<Student grade="7" score="99"></Student>
<Student grade={6}  score={87}></Student>
<Student ></Student>
<Student ></Student>
<Student></Student>
<Student></Student>
<Devoloper></Devoloper> */}
    </>
  )
}

function Device(props){
  // console.log(props);
return(
  <h3> My devices:{props.name}Price:{props.price}</h3>
)
}

function Person (){
  const age=25;
  const money =20
  const person={
    name:'sakib',
    age:21
  }
  return <h3>I am {person.name } With age {age +money} </h3>
}
const {name,grade, score} ={name:'amit',grade:'5',score:'95'};

function Student({grade=0,score=1}){
  console.log(grade,score);
  return(
    <div className='student'>
      <h3>This is a student:{name}</h3>
      <p>Grade:{grade}</p>
      <p>Score:{score}</p>
    </div>
  )
}
function Devoloper(){
  const devoloperstyle={
margin:'20px',
padding:'20px',
border:'2px solid purpel',
borderRadiuse:'20px'
}

  return(
    <div style={devoloperstyle}>
      <h5>My name is amit hasan faysal</h5>
      <p>codin:html css javascript react</p>
    </div>
  )
}
export default App
