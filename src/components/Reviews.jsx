import axios from 'axios';
import { useState, useEffect } from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import Box from '@mui/material/Box';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Reviews() {

  const [reviews, setReviews] = useState([]);
  // const [review, setReview] = useState('');

  useEffect(() => {
    getReviews();
  }, []);

  async function getReviews() {
    let serverURL = `${SERVER_URL}/vacation`;
    // if (this.props.user) {
    //   console.log(this.props.user);
    //   serverURL = `${process.env.REACT_APP_SERVER_URL}/vacation?user=${this.props.user}`
    // }
    let gottenReviews = await axios.get(serverURL);
    // MIGHT need to check if this result is an array
    setReviews(gottenReviews.data);
  };

  return (
    <>
      <h2>Trip Reviews &amp; Trip Images</h2>
      <Button onClick={ () => this.showModal() }>Add a Review</Button>
      {reviews.length > 0 ? (
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
                items: 3,
                partialVisibilityGutter: 40
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0
                },
                items: 1,
                partialVisibilityGutter: 30
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464
                },
                items: 2,
                partialVisibilityGutter: 30
              }
            }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {
            reviews.slice(0, 5).map((review, idx) => (
              <div key={idx}>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://storyblok-image.ef.com/unsafe/750x375/filters:focal(329x215:330x216):quality(90)/f/86150/750x425/7544f7e619/living-in-tropics.jpg"
                      alt="green iguana"
                    />
                    <Typography gutterBottom variant="h5" component="div">
                      { review.location }, { review.country } 
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </div>
            ))
          }
        </Carousel>
      ) : (
        <p>Check later for places to visit</p>
      )}
    </>
  );
};

export default Reviews;

{/* <a
description="React Carousel with Server Side Rendering Support – Part 1"
headline="w3js.com - web front-end studio"
image="https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
/> */}
