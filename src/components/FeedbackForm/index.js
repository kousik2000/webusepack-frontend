import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid, TextareaAutosize } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import './index.css'

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message, rating });
  };

  return (
    <Container maxWidth="sm" className='feedback-container'>
      <Typography variant="h4" align="center" gutterBottom>
        Tell us what you think
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextareaAutosize
              rowsMin={3}
              placeholder="Your message"
              style={{ width: '100%', resize: 'vertical' }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className='feedback-textarea'
            />
          </Grid>
          <Grid item xs={12}>
            <Typography component="legend">Rate your experience:</Typography>
            <Rating
              name="half-rating"
              value={rating}
              size="large"
              precision={0.5}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default FeedbackForm;
