import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import '../css/Header.css';
import TextField from '@mui/material/TextField';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Search() {
  useEffect(() => {
    handleSubmit();
  }, []);

  let [query, setQuery] = useState();
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  async function handleSubmit() {
    let url;
    if (query !== undefined) {
      url = query ? `/vacation/${query}` : '/vacation';
    } else if ((window.location.href).split('=')[1] !== undefined) {
      let temp = (window.location.href).split('=')[1];
      url = `/vacation/${temp}`;
    } else {
      url = '/vacation';
    }
    let result = await axios({
      method: 'get',
      baseURL: SERVER_URL,
      url: url
    });
    setData(result.data);
  }

  return (
    <div>
      <div>
        <TextField id="outlined-basic" onChange={handleChange} label="Search Location" variant="outlined" />
      </div>
      <div>
        <Button onClick={handleSubmit} variant="outlined" >Submit</Button>
      </div>
      {data.length !== 0 ?
        data.map((review, idx) => (
          <div key={idx}>
            <Card sx={{ minWidth: 275, maxWidth: 700, }}>
              <CardContent>
                <CardMedia
                  component="img"
                  height="300"
                  image={review.imageUrl}
                  alt="green iguana"
                />
                <Typography gutterBottom variant="h5" component="div">
                  {review.location}, {review.country}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {review.description}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {/* Convert back to stars for display (stretch goal) */}
                  {[...Array(review.rating)].map((_, index) => {
                    return (
                      <span className="star">&#9733;</span>
                    );
                  })}
                </Typography>
                {review.duration ? (
                  <Typography gutterBottom variant="h5" component="div">
                    Days stayed: {review.duration}
                  </Typography>
                ) : null}
                {review.expences ? (
                  <Typography gutterBottom variant="h5" component="div">
                    Expenses: {review.expences}
                  </Typography>
                ) : null}
                <Typography gutterBottom variant="h5" component="div">
                  Reviewer: {review.username}
                </Typography>
              </CardContent>
              {/* <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions> */}
            </Card>
          </div>
        )) : (
          <h3>No results found...</h3>
        )}
    </div>
  )
}

export default Search;
