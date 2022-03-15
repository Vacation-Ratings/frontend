import React from "react";
import { Button } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';


class Reviews extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      review: null
    }
  }
  componentDidMount() {
    this.getReviews();
  }
};

getReviews = async () => {
  let serverURL = `${process.env.React_APPSERVER_URL}/reviews`;
  console.log(serverURL);
  if (this.props.user) {
    console.log(this.props.user);
    serverURL = `${process.env.REACT_APP_SERVER_URL}/ reviews?user=${this.props.user}`
  }
  let gottenReviews = await axios.get(serverURL);
  this.setState({reviews: gottenReviews.data})
};

render() {
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        <Button onClick={ () => this.showModal() }>Add a Book</Button>

        {this.state.reviews.length > 0 ? (
          <Carousel variant="dark">
            {this.state.review.map((review) => (
              <Carousel.Item key={review._id}>
                <img className="d-block w-100" src="https://via.placeholder.com/3x1/999999/999999" alt="background" />
                <Carousel.Caption>
                  <h5>{review.title}</h5>
                  <h5>{review.rating}</h5>
                  <p>{review.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <h3>No Reviews Found :(</h3>
        )}
      </>
    )
  }
};

export default Reviews;

// _id, title, country, expences, duration, rating 