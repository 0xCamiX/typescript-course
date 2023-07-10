// Null and undefined:

(() => {
  let myNumber: number;
  let myString: string;

  // por inferencia de TS (TypeScript) se infiere que es de tipo any

  let myNull = null;
  let myUndefined = undefined;

  // se puede definir explícitamente el tipo de dato como null o undefined

  let myNull2: null = null;
  let myUndefined2: undefined = undefined;

  let myNumberNull: number | null = null;
  myNumberNull = 2;

  let myStringUndefined: string | undefined = undefined;
  myStringUndefined = "Hola";

  function hi(name: string | undefined) {
    let hello = "Hello";

    if (name) {
      hello += " " + name;
    } else {
      hello += " nobody";
    }

    return hello;
  }

  console.log(hi("Juan"));
  console.log(hi(undefined));


  function hiV2(name: string | null) {
    let hello = "Hello";

    // optional chaining
    hello += " " + name?.toLowerCase() || "nobody";

    return hello;
  }

  console.log(hiV2("Juan"));
  console.log(hiV2(null));

})();
