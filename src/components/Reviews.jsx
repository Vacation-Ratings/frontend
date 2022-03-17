import axios from 'axios';
import { useState, useEffect } from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Reviews() {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews();
  }, []);

  async function getReviews() {
    let serverURL = `${SERVER_URL}/vacation`;
    let gottenReviews = await axios.get(serverURL);
    setReviews(gottenReviews.data);
  };

  return (
    <>
      <div>
        <h2>Trip Reviews &amp; Trip Images</h2>
      </div>
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
            reviews.slice(0, 4).map((review, idx) => (
              <div key={idx}>
                <Card sx={{
                  minWidth: 275,
                  marginTop: 20,
                  height: '25em'
                }}>
                  <CardContent>
                    <CardMedia
                      component="img"
                      height="250"
                      image={review.imageUrl}
                      alt="green iguana"
                    />
                    <Typography gutterBottom variant="h5" component="div">
                      {review.location}, {review.country}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href={`/search?city=${review.location}`}>Learn More</Button>
                  </CardActions>
                </Card>
              </div>
            ))
          }
        </Carousel>
      ) : (
        <p>Servers are down!!! 😱</p>
      )}
    </>
  );
};

export default Reviews;
