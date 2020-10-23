function formDiamond(rows) {
    let k = 0;
    for (let i = 1; i <= rows; i++) {
        let s = "";
        let n = parseInt((rows + 1) / 2);
        if (rows % 2 == 0) {
            if (i <= n) k++;
            if (i > n + 1) k--;
        }
        else {
            i <= n ? k++ : k--;
        }
        for (var j = 1; j <= rows; j++) {
            if (j <= (n - 1 + k) && j >= (n + 1 - k))
                s += "*";
            else
                s += " ";
        }
        console.log(s);
    }
}
formDiamond(10);


