import { Card } from 'react-bootstrap'

const PokeCards = ({ name, text, url }) => {
  const arr = url.split('/').join('').split('n')
  const IMAGE_URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
    arr[arr.length - 1]
  }.png`
  return (
    <div className='d-flex justify-content-center'>
      <Card style={{ width: '12rem', margin: '10px' }}>
        <Card.Img src={IMAGE_URL} />
        <Card.Body>
          <Card.Title className='text-center fw-bolder'>
            {name.toUpperCase()}
          </Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default PokeCards
