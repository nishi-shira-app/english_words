import React from 'react';
import { Container, Button, Grid, Typography } from '@material-ui/core';

interface GrammerProps {
  answer: string[];
  stockWords: string[];
  ansWords: string[];
  sentence: string;
  translate: string;
  moveAnsWords: (w:string, i:number) => void;
  moveStockWords: (w:string, i:number) => void;
}

const Grammer: React.FC<GrammerProps> = props => {
  const stockWords = props.stockWords;
  const ansWords = props.ansWords;

  const buttonStyle: React.CSSProperties = {
    display: 'inline-block',
    minWidth: '20px',
    height: '40px',
    textTransform: 'lowercase',
    margin: '5px',
  }

  const wordsStyle: React.CSSProperties = {
    height: '30vh',
  }

  return (
    <>
      <Container maxWidth="sm">
        <Grid container>
          <Typography variant='subtitle1'>
            {props.translate}
          </Typography>
        </Grid>
      </Container>
      <Container maxWidth="sm" style={wordsStyle}>
        <Grid container>
          {
            ansWords.map((w, index) => {
              return (
                <Button
                  style={buttonStyle}
                  color="secondary"
                  variant="contained"
                  size="small"
                  onClick={() => props.moveStockWords(w, index)}
                  key={index}
                >
                  {w}
                </Button>
              )
            })
          }
        </Grid>
      </Container>
      <Container maxWidth="sm" style={wordsStyle}>
        <Grid container>
          {
            stockWords.map((w, index) => {
              return (
                <Button
                  style={buttonStyle}
                  color="primary"
                  variant="outlined"
                  size="small"
                  onClick={() => props.moveAnsWords(w, index)}
                  key={index}
                >
                  {w}
                </Button>
              )
            })
          }
        </Grid>
      </Container>
    </>
  );
}

export default Grammer;