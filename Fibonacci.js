var Fibonacci = {
    this.of = function (num) {
        if (num == 0) return 1;
        if (num == 1) return 1;
        return of(num - 1) + of (num - 2);
    }

}
for (let i = 1; i < 201; i++) {
    console.log(Fibonacci.of(i));
}