// 3. Készíts egy `objectConverter` nevű objektumot, ami az alábbi metódusokkal rendelkezik:
//    - `arrayToMap(array)`
//    - `arrayToSet(array)`
//    - `setToMap(set)`
//    - `setToArray(set)`
//    - `mapToArray(map)`
//    - `mapToSet(map)`

// A fenti metódusok értelemszerűen nem másra szolgálnak, mint az egyik összetett adattípusból konvertálják át az adatokat egy másikba. 
// Mindegyik metódus visszatérési értéke egy új Array, Map, vagy Set object.

const objectConverter = {
    arrayToMap(array) {
        let simpleMap = new Map();
        array.forEach((value, i) => simpleMap.set(i, value));
        return simpleMap;
    },
    arrayToSet (array) {
        return new Set(array);
    },
    setToMap(set) {
        let simpleMap = new Map();
        Array.from(set).forEach((value, i) =>  simpleMap.set(i, value));
        return simpleMap;
    },
    setToArray(set) {
        return Array.from(set);
    },
    mapToArray(map) {
        return Array.from(map.values());
    },
    mapToSet(map) {
        let simpleSet = new Set();
        map.forEach((value) => simpleSet.add(value));
        return simpleSet;
    },
}

export default objectConverter;