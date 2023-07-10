let anyVar: any;

anyVar = 1;
anyVar = "string";
anyVar = true;
anyVar = { name: "John" };

let isNew: boolean = anyVar;

let unknowVar: unknown;

unknowVar = true
unknowVar = undefined
unknowVar = null
unknowVar = 1
unknowVar = []
unknowVar = {}
unknowVar = "hola"

// unknowVar.do()

if (typeof unknowVar === "string") {
  unknowVar.toUpperCase();
}

// verificación de tipo

let isNewV2: boolean = unknowVar as boolean;

if (typeof isNewV2 === "boolean") {
  isNewV2 = true;
}

// function

const parse = (input: string): unknown => {
  return JSON.parse(input);
}

