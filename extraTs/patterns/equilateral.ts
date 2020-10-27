export default function equilateral ( n: number ) {
let a: string = '' ;
let m: number = (n - 1) ;
for (let i: number = 1 ; i <= n ; i++) {
    a = a.trim() ;
    a = ' '.repeat(m) + a + (i > 1 ? ' ' : '') + '*' ;
    console.log(a) ;
    m-- ;
}
}