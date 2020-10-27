export default function diamond( rows: number ) {
let k: number = 0;
for (let i: number = 1; i <= rows; i++) {
let s: string = '' ;
 const  n = ( ( rows + 1 ) / 2 ) ;
if ( rows % 2 === 0 ) {
 if ( i <= n ) k++ ;
 if ( i > n + 1 ) k-- ;
 }
else {
    i <= n ? k++ : k--;
    }
    for (let  j: number = 1; j <= rows; j++) {
    if (j <= (n - 1 + k) && j >= (n + 1 - k ) )
     s += '*';
    else
  s += ' ';
        }
console.log(s) ;
 }}