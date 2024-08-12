import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  /**
 * Fetches jokes data from the backend API and updates the state with the received data.
 *
 * @param {Object} props - The React component props.
 * @param {Function} props.setJokes - A function to update the jokes state.
 *
 * @returns {JSX.Element} - A React component that displays the jokes fetched from the backend API.
 */

  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    // get jokes data
    axios.get('/api/jokes')
      .then(response => {
        console.log(response.data);
        setJokes(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Backend with JavaScript</h1>
      <p>Jokes: {jokes.length}</p>

      <ul>
        {
          jokes && jokes.length > 0 && jokes.map(singleJoke => <li key={singleJoke.id}>{singleJoke.joke}</li>)
        }
      </ul>
    </>
  )

}
export default App
