import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import EnglishData from '../context/EnglishData';
import Word from '../components/WordPage/Word';
import Sentence from '../components/WordPage/Sentence';
import SideMenu from '../components/SideMenu';

const WordPage: React.FC<{}> = () => {
  const [slides, setSlides] = useState(EnglishData.WORDS.filter(w => w.part === EnglishData.getFirstPart()));
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [visibleWord, setVisibleWord] = useState<string>('word-hidden');
  const [currentPart, setCurrentPart] = useState<string>(EnglishData.getFirstPart());
  const [visibleSentence, setVisibleSentence] = useState<string>('word-hidden');
  const [isInputWordCompleted, setIsInputWordCompleted] = useState<boolean>(false);
  const [inputWordString, setInputWordString] = useState<string>('');
  const [speechSpeedRate, setSpeechSpeedRate] = useState<number>(0.8);

  const changeInputWordCompleted = (val: boolean) => {
    setIsInputWordCompleted(val);
  }

  const changeInputWord = (val: string) => {
    setInputWordString(val);
  }

  const changeCurrentPart = (val: string) => {
    if (currentPart !== val) {
      const s = EnglishData.WORDS.filter(w => w.part === val);
        setSlides(s)
        setCurrentPart(val);
        setWordIndex(0);
        setVisibleWord('word-hidden');
        setIsInputWordCompleted(false);
        setInputWordString('');
      }
  }

  const changeSpeechSpeedRate = (val: number) => {
    setSpeechSpeedRate(val);
  }

  return (
    <>
      <Container maxWidth="sm">
      <SideMenu
          parts={EnglishData.getParts()}
          currentPart={currentPart}
          changeCurrentPart={(val) => changeCurrentPart(val)}
          speechSpeedRate={speechSpeedRate}
          changeSpeechSpeedRate={(val) => changeSpeechSpeedRate(val)}
        />
        <Word
          word={slides[wordIndex].word}
          partOfSpeech={slides[wordIndex].partOfSpeech}
          trans={slides[wordIndex].trans}
          visibleWord={visibleWord}
          isInputWordCompleted={isInputWordCompleted}
          inputWordString={inputWordString}
          viewWord={() => setVisibleWord('word-visible')}
          changeInputWordCompleted={(val) => changeInputWordCompleted(val)}
          changeInputWord={(val) => changeInputWord(val)}
        />
        <hr />
          <Sentence
            sentence={slides[wordIndex].sentence}
            trans={slides[wordIndex].sentenceTrans}
            visibleSentence={visibleSentence}
            speechSpeedRate={speechSpeedRate}
            onClick = {() => setVisibleSentence('word-visible')}
          />
      </Container>
    </>
  )
}

export default WordPage;