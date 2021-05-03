class EnglishVoice {
    static speech(text:string, lang: string, rate: number) {
      const synth = window.speechSynthesis;
      const voices = synth.getVoices().filter(voice => voice.lang === lang);
      const voice = voices[0];
      const utter = new SpeechSynthesisUtterance();
      utter.text = text;
      utter.lang = lang;
      utter.voice = voice;
      utter.rate = rate;
      window.speechSynthesis.speak(utter);
    }
  }

  export default EnglishVoice;