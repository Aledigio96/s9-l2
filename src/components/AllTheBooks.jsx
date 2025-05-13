import { Component } from "react";
import books from "../data/fantasy.json";
import { Container, Button, Row, Card } from "react-bootstrap";

class AllTheBooks extends Component {
  render() {
    console.log(books);
    return (
      <Container className="my-5">
        <Row xs={1} md={3} lg={4} className="g-3 ">
          {books.map((book) => (
            <Card key={`card-${book.id}`} className="mb-3 bg-dark text-light border-light">
              <Card.Img variant="top" src={book.img} style={{ maxHeight: "300px", objectFit: "cover" }} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.category}</Card.Text>
                <Button variant="primary">{book.price}€ 🛒</Button>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    );
  }
}
export default AllTheBooks;
