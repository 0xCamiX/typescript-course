// Any: Es un tipo de dato esclusivo de TypeScript.

(() => {
  let myDynamicVar: any = 100;

  myDynamicVar = "hola";
  myDynamicVar = true;
  myDynamicVar = {};
  myDynamicVar = [];
  myDynamicVar = 1000;

  myDynamicVar = "Hola";

  // como hacer un cast

  const response = (myDynamicVar as string).toLocaleLowerCase();
  console.log(response);

  // otra forma de hacer un cast

  myDynamicVar = 1000;
  const response2 = (<number>myDynamicVar).toFixed(3);
  console.log(response2);
})();
