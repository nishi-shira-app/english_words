/// <reference types="react-scripts" />

function strEnum<T extends string>(o: Array<T>): {[K in T]: K} {
  return o.reduce((res, key) => {
    res[key] = key;
    return res;
  }, Object.create(null));
}

const pageNames = strEnum([
  'WordPage',
  'WordGrammerPage',
  'GrammerPage',
])

type pageNames = keyof typeof pageNames;