import { useEffect, useState } from 'react'
import { Container, Form, Pagination } from 'react-bootstrap'
import useGet from './api/useGet'
import './App.css'
import PokeCards from './components/PokeCards'

function App() {
  const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20'
  const [word, setWord] = useState('')
  const { data, loading, error, execute: getData } = useGet()

  useEffect(() => {
    getData(URL)
  }, [])

  return (
    <Container className='App'>
      <div className='d-flex align-items-center'>
        <div className='d-flex align-items-center'>
          <img src='./pokeball.png' alt='pokeball-logo' height={30} />
          <h4 className='fw-bolder m-2'>Poke Cards</h4>
        </div>
        <div className='search'>
          <Form.Control
            size='sm'
            type='text'
            placeholder='Search...'
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
        </div>
      </div>
      {error && <p>An error was ocurred...</p>}
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <Container className='grid-container'>
          {data?.results?.filter(({ name }) => name.match(word) ).map(({ name, url }, key) => (
            <PokeCards key={key} name={name} text={url} url={url} />
          ))}
        </Container>
      )}
      <div className='d-flex justify-content-end'>
        <Pagination>
          <Pagination.Prev
            disabled={data?.previous ? false : true}
            onClick={() => getData(data?.previous)}
          >
            Prev
          </Pagination.Prev>
          <Pagination.Next
            disabled={data?.next ? false : true}
            onClick={() => getData(data?.next)}
          >
            Next
          </Pagination.Next>
        </Pagination>
      </div>
    </Container>
  )
}

export default App
