const MAX = 100000;

//const Datos = [1, 3, 6, 4, 1, 2];
//const Datos = [-1, -3];

//const Datos = [1, 2, 3];
//const Datos = [];

//const ArrayProblem2 = [4, 4, 100, 5000, 4, 4, 4, 4, 100, 100];
const ArrayProblem1 = Array.from({ length: MAX }, () =>
  Math.floor(Math.random() * MAX)
);

const arrayPrueba = Array.from;

const ArrayProblem2 = [12, 23, 34, 12, 12, 23, 12, 45];
const ArrayProblem3 = [1, 2, 5, 1, 7, 2, 4, 2];
const ArrayProblem4 = [5, 5, 10, 100, 10, 5];

const randomDataSet = (dataSetSize, minValue, maxValue) =>
  new Array(dataSetSize)
    .fill(0)
    .map(n => Math.random() * (maxValue - minValue) + minValue);

//Find the smallest positive number missing from an unsorted array
function solution1(A) {
  let ObjDades = {};

  for (let i = 0, j = A.length; i < j; i++) {
    if (A[i] > 0) {
      ObjDades[A[i]] = A[i];
    }
  }

  for (let i = 1; i <= MAX; i++) {
    if (!ObjDades[i]) {
      return i;
    }
  }

  return MAX + 1;
}

//Display 2 odds ocurrencies in an array
function solution2(A) {
  let ObjDades = {};
  let result = [];

  for (let i = 0, j = A.length; i < j; i++) {
    if (ObjDades[A[i]]) {
      let valor = parseInt(ObjDades[A[i]]) + 1;
      ObjDades[A[i]] = valor;
    } else {
      ObjDades[A[i]] = 1;
    }
  }
  for (var prop in ObjDades) {
    if (ObjDades[prop] % 2 === 1) {
      result.push(parseInt(prop));
    }
    if (result.length > 1) {
      return result;
    }
  }
}

//Remove duplicates from unsorted array
const solution3 = array => {
  let seen = {};
  return array.filter(item =>
    seen.hasOwnProperty(item) ? false : (seen[item] = true)
  );
};

//Maximum sum such that no two elements are adjacent
const solution4 = array => {
  let incl = array[0];
  let excl = 0;
  let newExcl;
  for (let i = 1, j = array.length; i < j; i++) {
    /* current max excluding i */
    newExcl = incl > excl ? incl : excl;

    /* current max including i */
    incl = excl + array[i];
    excl = newExcl;
  }

  return incl > excl ? incl : excl;
};

//Check if two unsorted arrays (with duplicates allowed) have same elements

const solution5 = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }

  let objectData = {};

  array1.forEach(value => {
    let valor = parseInt(objectData[value]);
    objectData[value] = isNaN(valor) ? 1 : valor + 1;
  });

  for (i = 0, j = array2.length; i < j; i++) {
    objectData[array2[i]]--;
  }

  const ObjectValues = Object.values(objectData);

  for (i = 0, j = ObjectValues.length; i < j; i++) {
    if (ObjectValues[i] !== 0) {
      return false;
    }
  }

  return true;
};

//Recursively remove all adjacent duplicates

const solution6 = (cadena, lastRemoved) => {
  if (cadena.length < 2) return cadena;

  if (cadena.charAt(0) === cadena.charAt(1)) {
    lastRemoved = cadena.charAt(0);

    while (cadena.length > 1 && cadena.charAt(0) === cadena.charAt(1)) {
      cadena = cadena.substring(1, cadena.length);
      cadena = cadena.substring(1, cadena.length);
      return solution6(cadena, lastRemoved);
    }
  }

  // At this point, the first character is definiotely different
  // from its adjacent. Ignore first character and recursively
  // remove characters from remaining string

  console.log("cadena: ", cadena);
  console.log("lastRemoved: ", lastRemoved);

  let remStr = solution6(cadena.substring(1, cadena.length), lastRemoved);

  console.log("cadena: ", cadena);
  console.log("lastRemoved: ", lastRemoved);
  console.log("remStr1: ", remStr);

  // Check if the first character of the remStr matches with
  // the first character of the original string

  console.log("cadena: ", cadena);
  console.log("remStr2: ", remStr);

  if (remStr.length !== 0 && remStr.charAt(0) === cadena.charAt(0)) {
    console.log("Cond1");
    lastRemoved = cadena.charAt(0);
    return remStr.substring(1, remStr.length); // Remove first character
  }

  console.log("cadena: ", cadena);
  console.log("lastRemoved: ", lastRemoved);
  console.log("remStr3: ", remStr);

  // If remaining string becomes empty and last removed character
  // is same as first character of original string. This is needed
  // for a string like "acbbcddc"
  if (remStr.length === 0 && lastRemoved == cadena.charAt(0)) return remStr;

  // If the two first characters of str and remStr don't match,
  // append first character of str before the first character of
  // remStr

  console.log("cadenaF: ", cadena);
  console.log("remStr: ", remStr);
  return cadena.charAt(0) + remStr;
};

let start = new Date().getMilliseconds();
let result = solution1(ArrayProblem1);
let elapsed = new Date().getMilliseconds() - start;

console.log("Tiempo Problema 1: ", elapsed);
console.log("Result: ", result);

start = new Date().getMilliseconds();
result = solution2(ArrayProblem2);
elapsed = new Date().getMilliseconds() - start;

console.log("Tiempo  Problema 2: ", elapsed);
console.log("Result: ", result);

start = new Date().getMilliseconds();
result = solution3(ArrayProblem3);
elapsed = new Date().getMilliseconds() - start;

console.log("Tiempo  Problema 3: ", elapsed);
console.log("Result: ", result);

start = new Date().getMilliseconds();
result = solution4(ArrayProblem4);
elapsed = new Date().getMilliseconds() - start;

console.log("Tiempo  Problema 4: ", elapsed);
console.log("Result: ", result);

const ArrayA = [2, 5, 6, 8, 10, 2, 2];
const ArrayB = [2, 5, 5, 6, 8, 5, 6];

start = new Date().getMilliseconds();
result = solution5(ArrayA, ArrayB);
elapsed = new Date().getMilliseconds() - start;

console.log("Tiempo Problema 5.1: ", elapsed);
console.log("Result: ", result);

const ArrayC = [2, 5, 6, 8, 2, 10, 2];
const ArrayD = [2, 5, 6, 8, 2, 10, 2];

start = new Date().getMilliseconds();
result = solution5(ArrayC, ArrayD);
elapsed = new Date().getMilliseconds() - start;

console.log("Tiempo Problema 5.2: ", elapsed);
console.log("Result: ", result);

const ArrayE = [2, 5, 8, 6, 10, 2, 2];
const ArrayF = [2, 5, 6, 8, 2, 10, 2];

start = new Date().getMilliseconds();
result = solution5(ArrayE, ArrayF);
elapsed = new Date().getMilliseconds() - start;

console.log("Tiempo Problema 5.3: ", elapsed);
console.log("Result: ", result);

//Check if two unsorted arrays (with duplicates allowed) have same elements/////////////////

start = new Date().getMilliseconds();
result = solution6("geeksforgeeg", "\0");
elapsed = new Date().getMilliseconds() - start;

console.log("Tiempo  Problema 6: ", elapsed);
console.log("Result geeksforgeeg: ", result);

// String str1 = "geeksforgeeg";
// System.out.println(remove(str1));

// String str2 = "azxxxzy";
// System.out.println(remove(str2));

// String str3 = "caaabbbaac";
// System.out.println(remove(str3));

// String str4 = "gghhg";
// System.out.println(remove(str4));

// String str5 = "aaaacddddcappp";
// System.out.println(remove(str5));

// String str6 = "aaaaaaaaaa";
// System.out.println(remove(str6));

// String str7 = "qpaaaaadaaaaadprq";
// System.out.println(remove(str7));

// String str8 = "acaaabbbacdddd";
// System.out.println(remove(str8));

// BinaryGap
// START
// Find longest sequence of zeros in binary representation of an integer.

const binaryGap = number => {
  const decimal = (number >>> 0).toString(2);
  let char = "";
  let numZeros = 0;
  let numMaxZeros = 0;

  for (let i = 0, j = decimal.length; i < j; i++) {
    char = decimal.charAt(i);
    if (char === "1") {
      if (numZeros > 0) {
        if (numZeros > numMaxZeros) {
          numMaxZeros = numZeros;
        }
        numZeros = 0;
      }
    } else {
      numZeros++;
    }
  }
  return numMaxZeros;
};

result = binaryGap(74901729);
console.log("Result binaryGap: ", result);

// OddOccurrencesInArray
// START
// Find value that occurs in odd number of elements.

const oddOccurrencesInArray = array => {
  let hashObject = {};

  for (let i = 0, j = array.length; i < j; i++) {
    hashObject[array[i]] = hashObject[array[i]]
      ? parseInt(hashObject[array[i]]) + 1
      : 1;
  }

  console.log("hashObject", hashObject);

  for (const prop in hashObject) {
    if (hashObject[prop] % 2) return parseInt(prop);
  }
};

result = oddOccurrencesInArray([9, 3, 9, 3, 9, 7, 9]);
console.log("Result oddOccurrencesInArray: ", result);

result = oddOccurrencesInArray([2, 2, 3, 3, 4]);
console.log("Result oddOccurrencesInArray: ", result);

const rotation = (A, K) => {
  if (A.length === K || A.length === 0 || A.length === 1 || K === 0) return A;

  let aux = [];
  let kAux = K > A.length ? K % A.length : K;

  for (let i = 0, j = A.length - kAux; i < j; i++) {
    aux[i + kAux] = A[i];
  }

  for (let i = A.length - kAux, j = A.length - 1, k = 0; i <= j; i++, k++) {
    aux[k] = A[i];
  }

  return aux;
};

result = rotation([3, 8, 9, 7, 6], 3);

console.log("Result rotation: ", "[3, 8, 9, 7, 6] -> [9, 7, 6, 3, 8]");
console.log("Result rotation: ", result);

result = rotation([1000], 5);

console.log("Result rotation: ", "[1000] -> [1000]");
console.log("Result rotation: ", result);

result = rotation([1, 2, 3, 4], 4);

console.log("Result rotation: ", "[1,2,3,4] -> [1,2,3,4]");
console.log("Result rotation: ", result);

result = rotation([1, 2, 3], 4);
console.log("Result rotation: ", "[1,2,3], 4 -> [3,1,2]");
console.log("Result rotation: ", result);

result = rotation([1, 2, 3], 8);
console.log("Result rotation: ", "[1,2,3], 8 -> [2,3,1]");
console.log("Result rotation: ", result);

result = rotation([1, 1, 2, 3, 5], 42);
console.log("Result rotation: ", "[1, 1, 2, 3, 5], 42 -> [3, 5, 1, 1, 2]");
console.log("Result rotation: ", result);

// FrogJmp
// START
// Count minimal number of jumps from position X to Y.

const frogJump1 = (x, y, d) => {
  let saltos = 0;

  if (x === y) return saltos;
  while (y - x > d * saltos) {
    saltos++;
  }
  return saltos;
};

const frogJump = (x, y, d) => {
  let saltos = 0;

  if (x === y) return saltos;

  resto = (y - x) % d;
  saltos = resto === 0 ? (y - x) / d : Math.trunc((y - x) / d) + 1;

  return saltos;
};

result = frogJump(10, 85, 30);
console.log("Result frogJump: ", result);

result = frogJump(10, 10, 1);
console.log("Result frogJump: ", result);

result = frogJump(1, 10, 1);
console.log("Result frogJump: ", result);

result = frogJump(1, 5, 2);

start = new Date().getMilliseconds();
result = frogJump(3, 999111321, 7);
elapsed = new Date().getMilliseconds() - start;

console.log("Tiempo  Problema frogJump: ", elapsed);
console.log("Result frogJump: ", result);

// PermMissingElem
// Find the missing element in a given permutation.

const permMissingElem = array => {
  if (array.length === 0) return 1;
  let objHash = {};

  array.forEach((value, index) => {
    objHash[value] = true;
  });

  for (let i = 1, j = array.length + 1; i <= j; i++) {
    if (!objHash[i]) return i;
  }

  return 1;
};

start = new Date().getMilliseconds();
result = permMissingElem([2, 3, 1, 5]);
elapsed = new Date().getMilliseconds() - start;

console.log("Tiempo  Problema permMissingElem: ", elapsed);
console.log("Result permMissingElem: ", result);

result = permMissingElem([1]);
console.log("Result permMissingElem: ", result);

result = permMissingElem([2, 1]);
console.log("Result permMissingElem: ", result);

// TapeEquilibrium
// Minimize the value |(A[0] + ... + A[P-1]) - (A[P] + ... + A[N-1])|.

const tapeEquilibrium = array => {
  let objSumLtoR = {};
  for (let i = 0, j = array.length - 1; i < j; i++) {
    objSumLtoR[i] = i > 0 ? parseInt(objSumLtoR[i - 1]) + array[i] : array[i];
  }

  let objSumRtoL = {};
  for (let i = array.length, j = 1, k = 0; i > j; i--, k++) {
    objSumRtoL[k] =
      i < array.length
        ? parseInt(objSumRtoL[k - 1]) + array[i - 1]
        : array[i - 1];
  }

  let minF = 0;

  for (let i = 0, j = array.length - 2, k = j; i <= j; i++, k--) {
    resta = Math.abs(objSumLtoR[i] - objSumRtoL[k]);

    if (i === 0) minF = resta;
    if (resta < minF) {
      minF = resta;
    }
  }

  return minF;
};

result = tapeEquilibrium([3, 1, 2, 4, 3]);
console.log("Result tapeEquilibrium: ", result);

result = tapeEquilibrium([0, 0]);
console.log("Result tapeEquilibrium: ", result);

result = tapeEquilibrium([-1, 0]);
console.log("Result tapeEquilibrium: ", result);
