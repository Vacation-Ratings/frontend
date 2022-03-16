// import axios from 'axios';
// import { useState, useEffect } from "react";
// import Button from '@mui/material/Button';
// import { Carousel } from 'react-bootstrap';

// const SERVER_URL = process.env.REACT_APP_SERVER_URL;

// function Reviews() {

//   const [reviews, setReviews] = useState([]);
//   const [review, setReview] = useState('');

//   useEffect(() => {
//     getReviews();
//   }, []);

//   async function getReviews() {
//     let serverURL = `${SERVER_URL}/vacation`;
//     // if (this.props.user) {
//     //   console.log(this.props.user);
//     //   serverURL = `${process.env.REACT_APP_SERVER_URL}/vacation?user=${this.props.user}`
//     // }
//     let gottenReviews = await axios.get(serverURL);
//     // MIGHT need to check if this result is an array
//     this.setReviews(gottenReviews.data);
//   };

//   return (
//     <>
//       <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
//       <Button onClick={ () => this.showModal() }>Add a Book</Button>
//       {reviews.length > 0 ? (
//         <Carousel variant="dark">
//           {review.map((review) => (
//             <Carousel.Item key={review._id}>
//               <img className="d-block w-100" src="https://via.placeholder.com/550x350" alt="background" />
//               <Carousel.Caption>
//                 <h5>{review.title}</h5>
//                 <h5>{review.rating}</h5>
//                 <p>{review.description}</p>
//               </Carousel.Caption>
//             </Carousel.Item>
//           ))}
//         </Carousel>
//       ) : (
//         <h3>No Reviews Found :(</h3>
//       )}
//     </>
//   );
// };

// export default Reviews;

// _id, title, country, expences, duration, rating 