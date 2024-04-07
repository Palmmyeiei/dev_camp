//---------- HW 2.1 ----------

function draw2_1(n) {
  let text = "";
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
      if (i >= j) {
        text += "*";
      } else {
        text += "-";
      }
    }
    text += "\n";
  }
  console.log(text);
}

console.log(`------
HW 2.1
------`);
draw2_1(2);
draw2_1(3);
draw2_1(4);

//---------- HW 2.2 ----------

function draw2_2(n) {
  let text = "";
  for (i = n; i > 0; i--) {
    for (j = 1; j <= n; j++) {
      if (i >= j) {
        text += "*";
      } else {
        text += "-";
      }
    }
    text += "\n";
  }
  console.log(text);
}

console.log(`------
HW 2.2
------`);
draw2_2(2);
draw2_2(3);
draw2_2(4);

//---------- HW 2.3 ----------

function draw2_3(n) {
  let text = "";
  for (i = 1; i <= 2 * n - 1; i++) {
    for (j = 1; j <= n; j++) {
      if (i < n + 1 && i >= j) {
        text += "*";
      } else if (i >= n + 1 && j <= 2 * n - i) {
        text += "*";
      } else {
        text += "-";
      }
    }
    text += "\n";
  }
  console.log(text);
}

console.log(`------
HW 2.3
------`);
draw2_3(2);
draw2_3(3);
draw2_3(4);

//---------- HW 2.4 ----------

function draw2_4(n) {
  let text = "";
  for (i = 1; i <= 2 * n - 1; i++) {
    for (j = 1; j <= n; j++) {
      if (i < n + 1 && i >= j) {
        text += i;
      } else if (i >= n + 1 && j <= 2 * n - i) {
        text += 2 * n - i;
      } else {
        text += "-";
      }
    }
    text += "\n";
  }
  console.log(text);
}

console.log(`------
HW 2.4
------`);
draw2_4(2);
draw2_4(3);
draw2_4(4);

//---------- HW 2.5 ----------

function draw2_5(n) {
  let text = "";
  for (i = n; i > 0; i--) {
    for (j = 1; j <= n; j++) {
      if (i > j) {
        text += "-";
      } else {
        text += "*";
      }
    }
    text += "\n";
  }
  console.log(text);
}

console.log(`------
HW 2.5
------`);
draw2_5(2);
draw2_5(3);
draw2_5(4);

//---------- HW 2.6 ----------

function draw2_6(n) {
  let text = "";
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
      if (i > j) {
        text += "-";
      } else {
        text += "*";
      }
    }
    text += "\n";
  }
  console.log(text);
}

console.log(`------
HW 2.6
------`);
draw2_6(2);
draw2_6(3);
draw2_6(4);

//---------- HW 2.7 ----------

function draw2_7(n) {
  let text = "";
  for (i = 1; i <= 2 * n - 1; i++) {
    for (j = n; j > 0; j--) {
      if (i < n + 1 && i >= j) {
        text += "*";
      } else if (i >= n + 1 && j <= 2 * n - i) {
        text += "*";
      } else {
        text += "-";
      }
    }
    text += "\n";
  }
  console.log(text);
}

console.log(`------
HW 2.7
------`);
draw2_7(2);
draw2_7(3);
draw2_7(4);

//---------- HW 2.8 ----------

function draw2_8(n) {
  let text = "";
  let count = 1;
  for (i = 1; i <= 2 * n - 1; i++) {
    for (j = n; j > 0; j--) {
      if (i < n + 1 && i >= j) {
        text += count++;
      } else if (i >= n + 1 && j <= 2 * n - i) {
        text += count++;
      } else {
        text += "-";
      }
    }
    text += "\n";
  }
  console.log(text);
}

console.log(`------
HW 2.8
------`);
draw2_8(2);
draw2_8(3);
draw2_8(4);

//---------- HW 2.9 ----------

function draw2_9(n) {
    let text = "";
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
    console.log(text);
}
  
  console.log(`------
HW 2.9
------`);
  draw2_9(2);
  draw2_9(3);
  draw2_9(4);
  
//---------- HW 2.10 ----------

function draw2_10(n) {
    let text = "";
    for (let i = n; i > 0; i--) {
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
HW 2.10
------`);
  draw2_10(2);
  draw2_10(3);
  draw2_10(4);