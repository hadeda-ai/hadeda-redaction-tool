import React from "react";
import { Container, Jumbotron, Button, Image } from 'react-bootstrap';
import image from '../assets/movies.jpg'
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <>
<Jumbotron fluid className="text-light bg-dark">
  <Container>
      <h1>TEAM CHAKRA</h1>
  </Container>
</Jumbotron>

<Container className="bg-light py-5 px-5">
  <h2 className="text-center lander">Clean your legal documnets</h2>
  <h2 className="text-center lander">using a simple input-output NLP engine</h2>
  <Image className="" width="100%" src={image} />
  <Link to={"/submit"} className="nav-link">
      <Button className="my-2 float-lg-right float-md-right float-sm-right btn-success">
          Submit page
            </Button>
            </Link>
</Container>
</>
    )
}
export default Home;