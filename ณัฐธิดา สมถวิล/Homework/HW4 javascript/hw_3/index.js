//---------- HW 3.1 ----------

function draw3_1(n) {
    let text = "";
    // first half
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) {
            text += "-";
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            text += "*";
        }
        for (let j = 1; j <= n - i; j++) {
            text += "-";
        }
        text += "\n";
    }
    // second half
    for (let i = n - 1; i >= 1; i--) {
        for (let j = 1; j <= n - i; j++) {
            text += "-";
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            text += "*";
        }
        for (let j = 1; j <= n - i; j++) {
            text += "-";
        }
        text += "\n";
    }
    console.log(text);
}

console.log(`------
HW 3.1
------`);
draw3_1(2);
draw3_1(3);
draw3_1(4);

//---------- HW 3.2 ----------

function draw3_2(n) {
    let text = "";
    let count = 1;
    // first half
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) {
            text += "-";
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            text += count++;
        }
        for (let j = 1; j <= n - i; j++) {
            text += "-";
        }
        text += "\n";
    }
    // second half
    for (let i = n - 1; i >= 1; i--) {
        for (let j = 1; j <= n - i; j++) {
            text += "-";
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            text += count++;
        }
        for (let j = 1; j <= n - i; j++) {
            text += "-";
        }
        text += "\n";
    }
    console.log(text);
}

console.log(`------
HW 3.2
------`);
draw3_2(2);
draw3_2(3);
draw3_2(4);

//---------- HW 3.3 ----------

function draw3_3(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = [];
        for (let j = 0; j < n; j++) {
            if (j <= i) {
                arr[i][j] = "*";
            } else {
                arr[i][j] = "-";
            }
        }
    }
    for (let i = 0; i < n; i++) {
        let line = "";
        for (let j = 0; j < n; j++) {
            line += arr[i][j];
        }
        console.log(line);
    }
    console.log("\n");
}

console.log(`------
HW 3.3
------`);
draw3_3(2);
draw3_3(3);
draw3_3(4);

//---------- HW 3.4 ----------

function draw3_4(n) {
    let arr = [];
    // first half
    for (let i = 0; i < n; i++) {
        arr[i] = [];
        for (let j = 0; j < n * 2 - 1; j++) {
            if (j >= n - 1 - i && j <= n - 1 + i) {
                arr[i][j] = "*";
            } else {
                arr[i][j] = "-";
            }
        }
    }
    // second half
    for (let i = n; i < n * 2 - 1; i++) {
        arr[i] = [];
        for (let j = 0; j < n * 2 - 1; j++) {
            if (j >= i - n + 1 && j <= 3 * n - 3 - i) {
                arr[i][j] = "*";
            } else {
                arr[i][j] = "-";
            }
        }
    }
    for (let i = 0; i < n * 2 - 1; i++) {
        let line = "";
        for (let j = 0; j < n * 2 - 1; j++) {
            line += arr[i][j];
        }
        console.log(line);
    }
    console.log("\n");
}

console.log(`------
HW 3.4
------`);
draw3_4(2);
draw3_4(3);
draw3_4(4);