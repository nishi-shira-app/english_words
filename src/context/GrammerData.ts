type sentenceType = {
  part: string,
  sentence: string,
  sentenceTrans: string,
}

export default class GrammerData {
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

  static getSentences() {
    return this.WORDS.reduce((val:sentenceType[], cur) => {
      const w:sentenceType = {
        part: cur.part,
        sentence: cur.sentence, 
        sentenceTrans: cur.sentenceTrans
      };

      if (!val.some(v => 
        v.part === w.part && v.sentence === w.sentence)) {
        val.push(w);
      }
      return val;
    }, []);  
  }

  static readonly WORDS = 
  [{"id":"1","part":"blue chart001","sentence":"Bill  is  a  high school  student .","sentenceTrans":"ビルは高校生です"},{"id":"2","part":"blue chart001","sentence":"Bill  is  not  a  high school  student.","sentenceTrans":"ビルは高校生ではありません。"},{"id":"3","part":"blue chart001","sentence":"My  mother  can  drive  a  car.","sentenceTrans":"母は車の運転ができます。"},{"id":"4","part":"blue chart001","sentence":"My  mother  cannot  drive  a  car.","sentenceTrans":"母は車の運転ができない"},{"id":"5","part":"blue chart001","sentence":"My  mother  can't  drive  a  car.","sentenceTrans":"母は車の運転ができない。"},{"id":"6","part":"blue chart001","sentence":"I  know  her  address.","sentenceTrans":"私は彼女の住所を知っています。"},{"id":"7","part":"blue chart001","sentence":"I  do  not  know  her  address.","sentenceTrans":"私は彼女の住所を知りません。"},{"id":"8","part":"blue chart001","sentence":"I  don't  know  her  address.","sentenceTrans":"私は彼女の住所を知りません。"}];
} 