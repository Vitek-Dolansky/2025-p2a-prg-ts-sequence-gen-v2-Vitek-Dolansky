import { askNumber } from "./libs/inputs";
import { generateArithmeticSequenceByCount } from "./libs/sequences";

console.log("to je sileny")
let st = askNumber ("zadej zacatek", 0, 10);
let stp = askNumber ("zadej krok", 0, 10);
let cnt = askNumber ("zadej pocet", 0, 10);
let prvky = generateArithmeticSequenceByCount(st, stp, cnt)
console.log("prvky: " + prvky.length)
console.log(prvky)