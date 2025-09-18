export function generateArithmeticSequenceByCount(
    start: number, step: number, count: number
    )
{   // ošetření vstupů
    if (!Number.isFinite(start)) throw new Error("Počáteční hodnota musí být konečná");
    if (!Number.isFinite(step)) throw new Error("Krok musí být konečná hodnota");
    if ((!Number.isFinite(count)) || count <= 0) throw new Error("Počet prvků musí být konečná hodnota větší než nula");
    // výpočet
    const out: number[] = new Array();
    for(let i = 0; i < count; i++) {
        out.push(start + i * step);
        // out[i] = start + i * step;
    }
    /*
    for(let i = start; i <= start + i * step; i += step) {
        out.push(i);
    }
    */
    return out;
}

export function generateArithmeticSequenceByLastValue(
    start: number,
    step: number,
    last: number
    )
{
    // ošetření vstupů

    // výpočet
    const out: number[] = new Array();
    return out;
}