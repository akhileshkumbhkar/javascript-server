export default function equilateral(n){
let a = '';
let m = (n-1); 
for(let i=1; i <= n; i++)
{
    a = a.trim();
    a = ' '.repeat(m) + a + (i > 1 ? ' ' : '') + '*';
    console.log(a);
    m--;
}
}