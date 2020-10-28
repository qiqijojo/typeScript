console.log('00022222220000')
interface LengthInterface{
    length:number
}
let getArray = <T extends LengthInterface>(value:T, items:number = 5):T[]=>{
    return new Array(items).fill(value);
};
let arr = getArray<string>('abc');
// let arr = getArray<number>(6);
let res = arr.map(item=>item.length);