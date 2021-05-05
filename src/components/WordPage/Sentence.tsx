import * as React from 'react';
import { Container, Button, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import EnglishVoice from '../../lib/EnglishVoice';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import TranslateIcon from '@material-ui/icons/Translate';
import 'fontsource-roboto';


interface SentenceProps {
    sentence: string;
    trans: string;
    visibleSentence: string;
    speechSpeedRate: number;
    onClick: () => void;
}

class Sentence extends React.Component<SentenceProps, {}>{
  render () {
    const style: React.CSSProperties = {
      display: 'inline-block',
      width: '100%',
      height: '20%',
    }

    return (
      <div className="word-wrap">
        <Container maxWidth="sm">
          <div onClick={() => this.props.onClick()}>
            <p className="word">{this.props.trans}</p>
          </div>
          <Typography component="div">
            <Box
              className={this.props.visibleSentence}
              m={1}
            >
              {this.props.sentence}
            </Box>
          </Typography>
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
                variant="outlined"
                color="primary"
                onClick={() => this.props.onClick()}
              >
                <TranslateIcon
                  fontSize='small'
                />
              </Button>
            </Grid>
            <Grid item xs={5}>
              <Button
                style={style}
                variant="outlined"
                onClick={() => {
                  EnglishVoice.speech(this.props.sentence, 'en-US', this.props.speechSpeedRate);
                }}
              >
                <VolumeUpIcon
                  fontSize='small'
                />
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Sentence;