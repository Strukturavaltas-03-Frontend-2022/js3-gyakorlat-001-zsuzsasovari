// 2. Készíts egy `HU` nevű objektumot, aminek az alábbi propertijei vannak:
// - `date()`: Visszaadja a paraméterként megadott dátumot a magyar dátumírás szabályainak megfelelően
// - `currency()`: Visszaadja a paraméterként megadott számot a magyar pénzformátumnak megfelelően a Ft végződéssel együtt
// - `list()`: A paraméterként kapott string tömböt visszaadja az alábbi formában: első, második és harmadik" (Tehát vesszőkkel elválasztva az utolsó elem előtt az és szóval)
const HU = {
    date(now){
        return (new Intl.DateTimeFormat("hu-HU").format(now));
    },
    currency(money) {
        return (new Intl.NumberFormat('hu-HU', {
            style: 'currency',
            currency: 'HUF'
        })).format(money);
    },
    list(a) {
        const string = a.pop();
    return a.join(", ").concat(` és ${string}`);
    }
}

export default HU;
