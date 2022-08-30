// 1. Írj egy függvény kifejezést `removeDuplicatesFromArray` néven, ami a paraméterként megadott tömbből eltávolítja a duplikált elemeket! A tömb csak primítív értékeket tartalmaz! 
// A függvény visszatérési értéke a duplikált elemektől mentes új tömb!
let removeDuplicatesFromArray = (asd) => {
    return [...new Set(asd)];
}

export default removeDuplicatesFromArray;
