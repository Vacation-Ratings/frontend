import { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useAuth0 } from "@auth0/auth0-react";
import StarRating from './Ratings/index.jsx';
import Upload from './uploadImage.js';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function AddReview() {

    const { user } = useAuth0();

    const [expenses, setExpenses] = useState();
    const [duration, setDuration] = useState();
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);
    const [imageUrl, setImageUrl] = useState(null);

    const handleChange = (e) => {
        switch (e.target.id) {
            case 'city':
                setCity(e.target.value);
                break;
            case 'country':
                setCountry(e.target.value);
                break;
            case 'review':
                setReview(e.target.value);
                break;
            case 'expenses':
                setExpenses(e.target.value);
                break;
            case 'duration':
                setDuration(e.target.value);
                break;
            default:
                console.log('Something went wrong');
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(SERVER_URL);
        try {
            await axios({
                method: 'post',
                baseURL: SERVER_URL,
                url: '/vacation',
                data: {
                    location: city,
                    country: country,
                    description: review,
                    duration: duration,
                    rating: rating,
                    expences: expenses,
                    username: user.name,
                    imageUrl: imageUrl
                }
            });
            window.location = "/";
        } catch (e) {
            console.error(e.message);
        }
    }

    return (
        <div>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <h5>All input fields with * are required</h5>
                    <div>
                        <TextField
                            required
                            onChange={handleChange}
                            data-testid="city"
                            id="city"
                            label="City"
                            variant="standard"
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            onChange={handleChange}
                            data-testid="country"
                            id="country"
                            label="Country"
                            variant="standard"
                        />
                    </div>
                    <div>
                        <TextareaAutosize
                            onChange={handleChange}
                            data-testid="review"
                            id="review"
                            aria-label="empty textarea"
                            placeholder="Add review"
                            style={{ width: 400, height: 200 }}
                        />
                    </div>
                    <div>
                        <TextField
                            onChange={handleChange}
                            data-testid="expenses"
                            id="expenses"
                            label="Expenses"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard"
                        />
                    </div>
                    <div>
                        <TextField
                            onChange={handleChange}
                            data-testid="duration"
                            id="duration"
                            label="Duration of stay (days)"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard"
                        />
                    </div>
                    <StarRating setRating={setRating} rating={rating} />
                </div>
            </Box>
            <Upload imageUrl={imageUrl} setImageUrl={setImageUrl} />
            <Button onClick={handleSubmit} variant="outlined" >Submit</Button>
        </div>
    );
}

export default AddReview;
