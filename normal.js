const adder = (n,k=1,p=1) => {
    let sum = 0;
    for (let s = p; s <= n; s = s + k) {
        sum=sum+s;
    } return sum;
}
