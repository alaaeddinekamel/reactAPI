import Card from 'react-bootstrap/Card';

const CardUser =({user})=>{
    return(

   <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{user.name} {user.username}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{user.email}</Card.Subtitle>
        <Card.Text>
        {user.address.city}
        <br/>
        {user.address.street}
        <br/>
        {user.address.geo.lng}
        <br/>
        {user.phone}
        <br/>
        {user.company.name}
        </Card.Text>
      </Card.Body>
    </Card>
    )
}

export default CardUser