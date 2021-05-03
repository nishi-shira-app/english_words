export default class EnglishData {
  static getFirstPart() {
    return this.WORDS.reduce((val:string[], cur) => {
      if (!val.includes(cur.part)) {
        val.push(cur.part);
      }
      return val;
    }, [])[0];
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
    }
  ];
}