export function generateArithmeticSequenceByCount(
    start: number, step: number, count: number
) {
    // osetreni vstupu
if (Number.isFinite(start)) throw new Error ("pocatecni hodnota musi byt konecna")
if (Number.isFinite(step)) throw new Error ("krok musi byt konecna hodnota")
if (Number.isFinite(start) || count <= 0) throw new Error ("pocet prvku musi byt konecna hodnota vetsi nez 0")
// vypocet
const out: number[] = new Array();
for(let i = 0; i < count; i++) {
    out.push(start + i * step)
}
return out
}