import * as React from 'react';
import { Container, Button, Grid, Typography, TextField, Avatar } from '@material-ui/core';
import EnglishVoice from '../../lib/EnglishVoice';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import TranslateIcon from '@material-ui/icons/Translate';

interface WordProps {
  word: string;
  partOfSpeech: string;
  trans: string;
  visibleWord: string;
  isInputWordCompleted: boolean;
  inputWordString: string;
  viewWord: () => void;
  changeInputWordCompleted: (val: boolean) => void;
  changeInputWord: (val: string) => void;
}

class Word extends React.Component<WordProps, {}>{
  render() {
    const style: React.CSSProperties = {
      display: 'inline-block',
      width: '100%',
      height: '20%',
    }

    const partOfSpeech = this.props.partOfSpeech.length ? this.props.partOfSpeech : '';

    return (
      <div className="word-wrap">
        <Container maxWidth="sm">
          <Grid container>
            <Grid item xs={10}>
              <Typography variant='subtitle1'>
                {this.props.trans}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Avatar
                variant='circular'
                component='span'
              >
                {partOfSpeech.substr(0, 1)}
              </Avatar>
            </Grid>
          </Grid>
          <Typography variant='h4' className={this.props.visibleWord}>
            {this.props.word}
          </Typography>
          <br />
          <Grid container direction="row">
            <TextField
              error={!this.props.isInputWordCompleted}
              label={this.props.isInputWordCompleted ? "OK" : "input word"}
              fullWidth={true}
              value={this.props.inputWordString}
              variant="outlined"
              onChange={(o) =>
                {
                  this.props.changeInputWord(o.target.value.toLowerCase());
                  if (this.props.word.toLowerCase() === o.target.value.toLowerCase()) {
                    this.props.changeInputWordCompleted(true);
                    this.props.viewWord();
                    EnglishVoice.speech('OK.'+this.props.word, 'en-US', 1);
                  } else {
                    this.props.changeInputWordCompleted(false);
                  }
                }
              }
            />
          </Grid>
          <br />
          <Grid
            container
            direction="row"
            spacing={5}
            justify="center"
            alignItems="center"
          >
            <Grid item xs={5}>
              <Button
                style={style}
                color="primary"
                variant="outlined"
                onClick={() => this.props.viewWord()}
                >
                  <TranslateIcon/>
              </Button>
            </Grid>
            <Grid item xs={5}>
              <Button
                style={style}
                variant="outlined"
                onClick={() => {
                  EnglishVoice.speech(this.props.word, 'en-US', 1);
                }}
              >
                <VolumeUpIcon/>
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Word;