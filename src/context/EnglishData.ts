export default class EnglishData {
  static getFirstPart() {
    return this.WORDS.reduce((val:string[], cur) => {
      if (!val.includes(cur.part)) {
        val.push(cur.part);
      }
      return val;
    }, [])[0];
  }

  static getParts() {
    return this.WORDS.reduce((val:string[], cur) => {
      if (!val.includes(cur.part)) {
        val.push(cur.part);
      }
      return val;
    }, []);
  }

  static readonly WORDS = [
    {
      "id": "1",
      "part": "part001",
      "word": "pen",
      "partOfSpeech": "名詞",
      "trans": "ペン、ボールペン",
      "sentence": "This is a pen.",
      "sentenceTrans": "これはペンです。"
    },
    {
      "id": "2",
      "part": "part002",
      "word": "name",
      "partOfSpeech": "名詞",
      "trans": "名前",
      "sentence": "My name is Ken.",
      "sentenceTrans": "私の名前はケンです。"
    },
    {
      "id": "3",
      "part": "part001",
      "word": "is",
      "partOfSpeech": "動詞",
      "trans": "です",
      "sentence": "This is a pen.",
      "sentenceTrans": "これはペンです。"
    },
    {
      "id": "4",
      "part": "part002",
      "word": "My",
      "partOfSpeech": "代名詞",
      "trans": "私の",
      "sentence": "My name is Ken.",
      "sentenceTrans": "私の名前はケンです。"
    }
  ];
}