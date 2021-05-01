import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import Paginate from '../components/Pagination';
import Grammer from '../components/GrammerPage/Grammer';
import SideMenu from '../components/SideMenu';
import GrammerData from '../context/GrammerData';
import EnglishVoice from '../lib/EnglishVoice';


const GrammerPage:React.FC = () => {
  const [slides, setSlides] = useState(GrammerData.getSentences().filter(w => w.part === GrammerData.getFirstPart()));
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [currentPart, setCurrentPart] = useState<string>('toeic001');
  const [answer, setAnswer] = useState<string[]>(slides[wordIndex].sentence.toLocaleLowerCase().replace('.', '').split('  '));
  const [stockWords, setStockWords] = useState<string[]>(
    answer
      .map(function (a) { return { weight: Math.random(), value: a } })
      .sort(function (a, b) { return a.weight - b.weight })
      .map(function (a) { return a.value })
  );
  const [ansWords, setAnsWords] = useState<string[]>([]);
  const [speechSpeedRate, setSpeechSpeedRate] = useState<number>(0.8);
  const slidePrev = () => {
    if (wordIndex > 0) {
      const i:number = wordIndex - 1;
      const s:string[] = separateSentence(slides[i].sentence);

      setWordIndex(i);
      setAnswer(s);
      setStockWords(shuffle(s));
      setAnsWords([]);
    }
  }

  const slideNext = () => {
    if (wordIndex < slides.length-1) {
      const i:number = wordIndex + 1;
      const s:string[] = separateSentence(slides[i].sentence);

      setWordIndex(i);
      setAnswer(s);
      setStockWords(shuffle(s));
      setAnsWords([]);
    }
  }

  const changeCurrentPart = (val: string) => {
    if (currentPart !== val) {
      const s = GrammerData.getSentences().filter(w => w.part === val);
      setSlides(s)
      setCurrentPart(val);
      setWordIndex(0);

      const a:string[] = separateSentence(s[0].sentence);
      setAnswer(a);
      setStockWords(shuffle(a));
      setAnsWords([]);
    }
  }

  const changeSpeechSpeedRate = (val: number) => {
    setSpeechSpeedRate(val);
  }

  const moveAnsWords = (word: string, index: number) => {
    const aw = ansWords;
    const sw = stockWords.filter((v, i) => {
      return i !== index;
    });
    aw.push(word);

    setAnsWords(aw);
    setStockWords(sw);

    EnglishVoice.speech(word, 'en-US', 1);
    if (answer.every((a, index) => a === aw[index])) {
      EnglishVoice.speech('OK.' + slides[wordIndex].sentence, 'en-US', speechSpeedRate);
    }
  }

  const moveStockWords = (word: string, index: number) => {
    const sw = stockWords;
    const aw = ansWords.filter((v, i) => {
      return i !== index;
    });
    sw.push(word);

    setStockWords(sw);
    setAnsWords(aw);
  }

  const separateSentence = (s:string) => {
    return s.toLocaleLowerCase().replace('.', '').split('  ');
  }

  const shuffle = (w:string[]) => {
    return w.map(function (a) { return { weight: Math.random(), value: a } })
    .sort(function (a, b) { return a.weight - b.weight })
    .map(function (a) { return a.value })
  }

  return (
    <>
      <SideMenu
        parts={GrammerData.getParts()}
        currentPart={currentPart}
        changeCurrentPart={(val) => changeCurrentPart(val)}
        speechSpeedRate={speechSpeedRate}
        changeSpeechSpeedRate={(val) => changeSpeechSpeedRate(val)}
      />
      <Container>
        <Paginate
          onClickPrev={slidePrev}
          onClickNext={slideNext}
        />
        <hr/>
        <Grammer
          answer={answer}
          stockWords={stockWords}
          ansWords={ansWords}
          sentence={slides[wordIndex].sentence}
          translate={slides[wordIndex].sentenceTrans}
          moveAnsWords={(w, i) => moveAnsWords(w, i)}
          moveStockWords={(w, i) => moveStockWords(w, i)}
        />
      </Container>
    </>
  );
}

export default GrammerPage;