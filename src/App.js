import React, { useEffect, useState } from 'react'
import './App.css';


function App() {

  const parson = {
    firstName: 'Rocky',
    lastName: 'Das',
    age: 20
  }

  const style = {
    margin: '5px 0',
    fontWeight: '600',
    color: '#7c76bb'
  }
  const languageName = ["Javascript", "Python", "PHP"];
  const images = {
    javascript: "./image/1.png",
    python: "./image/2.png",
    php: "./image/3.png"
  }
  const books = [
    {
      name: 'Think and Grow Rich',
      writer: 'Napoleon Hill'
    },
    {
      name: 'Rich Dad Poor Dad',
      writer: 'Robert Kiyosaki'
    }
  ]

  const booksOurMind = [
    {
      name: 'The Power of Your Subconsicious Mind',
      writer: 'Joseph Murphy'
    },
    {
      name: 'The Power of Habit',
      writer: 'Charles Duhigg'
    }
  ]

// Create Multiple Components from an array of Object 
const friends = ['joy', 'sukanta', 'sahid', 'sakib', 'noman', 'ajoy', 'sagar'];

const products =[
  {name: 'Photoshop', price: '$50'},
  {name: 'Illustrator', price: '$40'},
  {name: 'primire pro', price: '$60'},
  {name: 'After Effect', price: '$70'},
  {name: 'Indesign', price: '$50'}
]
  return (
    <div className="App">
      <h1>Walcame to Our First <span>React</span> Site!!</h1>
      <div style={{ backgroundColor: "#dcf0ff", borderRadius: "5px", padding: "20px" }} className="parson_info">
        <h2 style={style}>The Power of React:</h2>
        <h3 >Name: {parson.firstName + " " + parson.lastName}</h3>
        <h3>Age: {parson.age} </h3>
      </div>

      {/* use Component */}
      <h2 style={style}>Use Component:</h2>
      <Component />
      <Component />

      {/* (props) change Data to Component */}
      {/* <Language name = "javascript" />
        <Language name = "Python"/>
        <Language name = "PHP" /> */}
        
      <h2 style={style}> (props) change Data to component:</h2>
      <div style={{ display: 'flex' }}>
        <Language name={languageName[0]} image={images.javascript} />
        <Language name={languageName[1]} image={images.python} />
        <Language name={languageName[2]} image={images.php} />
      </div>

      

      <h2 style={style}>pass object to Component:</h2>
      {/* pass object to Component */}
      <BooksForMind books={booksOurMind[0]} />
      <BooksForMind books={booksOurMind[1]} />
      {/* Object Destructuring  */}
      <Book book={books[0]} />
      <Book book={books[1]} />

  {/* Create Multiple Components from an array of Object */}
        <div>
          <h2 style={style}>Create Multiple Components from an array of Object:</h2>
          
          {/* from array  */}
          <ul style={{backgroundColor: '#dcf0ff', padding: '20px',}}>
            {
              friends.map(friend =>{
                return(
                  <li>{friend}</li>
                )
              })
            }
          </ul>
          <div>
            {
              products.map(product => {
                return(
                  <>
                  <Product product={product} />
                  </>
                )
              })
            }
          </div>

        </div> 

        {/* State  */}
        <Counter />

        {/* load Dynamic Data,API call useEffect Integrate State  */}
        <h2 style={style}>load Dynamic Data,API call useEffect Integrate State:</h2>
            <User />
    </div>
  );
}

// create a component
function Component() {

  const divWraper = {
    backgroundColor: '#dcf0ff',
    margin: '10px 0',
    padding: '20px',
    borderRadius: '10px'
  }
  return (
    <div style={divWraper}>
      <h2 style={{ color: '#3f3f3f' }}>This a Component</h2>
      <h3 style={{ color: '#3f3f3f', marginTop: '10px' }}>First Component</h3>
    </div>
  )
}


// (props) Dynamic Data to Component

function Language(props) {
  const style = {
    margin: '30px 20px',
    width: '300px',
    padding: '20px 30px',
    backgroundColor: '#dcf0ff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px'
  }

  return (
    <div style={style}>
      <h1>{props.name}</h1>
      <img style={{ width: '240px' }} src={props.image} alt="" />
    </div>
  )
}

function Book(props) {
  const bookCard = {
    backgroundColor: '#dcf0ff',
    margin: '10px',
    padding: '20px',
  }
  // arrye Destructuring 
  const { name, writer } = props.book;
  return (
    <div style={bookCard}>
      {/*arrye Destructuring Mathod*/}
      <h2 style={{ fontWeight: '600', color: '#7c76bb' }}>{name} </h2>
      <h3 style={{color: '#3f3f3f'}}>{writer}</h3>
    </div>
  )
}

function BooksForMind(props){
  const bookCard = {
    backgroundColor: '#dcf0ff',
    margin: '10px',
    padding: '20px',
  }
  return(
    <div style={bookCard}>
      <h2 style = {{fontWeight: '600', color: '#7c76bb'}}>{props.books.name}</h2>
      <h3 style={{color: '#3f3f3f'}}>{props.books.writer}</h3>
    </div>
  )
}

function Product(props){
  const productCard ={
    backgroundColor: '#dcf0ff',
    padding: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '10px'
  }

  const {name, price} = props.product;
  
  return(
    <div style={productCard}>
      <h3>{name} </h3>
      <h2>{price}</h2>
    </div>
  )
}

// state 
function Counter(){
  const [count ,setCount] = useState(0);

  const hendleIncrease = () => {
    const plusCount = count + 1;
    setCount(plusCount)
  };
  const hendleDecrease = () => {
    const subtractionCount = count -1;
    setCount(subtractionCount);
  }
const btn ={
  padding: '10px 20px',
  border: 'none',
  outline: 'none',
  backgroundColor: '#ff87b0',
  fontSize: '20px',
  borderRadius: '5px',
  color: '#ffff',
  margin: '20px'

}
  return(
    <div style={{margin: '0 auto'}}>
      <h1>counter: {count}</h1>
      <div>
      <button style={btn} onClick={hendleIncrease}>Increase</button>
      <button style={btn} onClick={hendleDecrease}>Decrease</button>
      </div>
    </div>
  )
}

function User (props){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])

  return(
    <div style={{backgroundColor: '#dcf0ff',}}>
    {
      users.map(user => {
        const userStyle ={
          margin: '20px',
          backgroundColor: '#3f3f3f',
          padding: '10px',
          borderRadius: '5px'
          
        }
        const hThreeStyle = {
          color: '#fffff'
        }
        return(
          <div style={userStyle}>
            <h2 style={{color: '#7c76bb', fontWeight: '600'}}>Name: {user.name}</h2>
            <h3 style={hThreeStyle}>Email: {user.email} </h3>
            <h3 style={hThreeStyle}>Website: {user.website}</h3>
            <h3 style={hThreeStyle}>Phone: {user.phone} </h3>
          </div>
        )
        
      })
    }
    </div>
  )
}

export default App;
