//---------- HW 1.1 ----------

function draw1_1(n) {
  let text = "";
  for (i = 0; i < n; i++) {
    text += "*";
  }
  console.log(text);
}

console.log(`------
HW 1.1
------`);
draw1_1(2);
draw1_1(3);

//---------- HW 1.2 ----------

function draw1_2(n) {
    let text = ""
    for (i=0; i<n; i++){
        for (j=0; j<n; j++) {
            text += '*'
        }
        text += '\n'
    }
    console.log(text);
}

console.log(`------
HW 1.2
------`);
draw1_2(2);
draw1_2(3);
draw1_2(4);

//---------- HW 1.3 ----------

function draw1_3(n) {
  let text = "";
  for (i = 0; i < n; i++) {
    for (j = 1; j <= n; j++) {
      text += j;
    }
    text += "\n";
  }
  console.log(text);
}

console.log(`------
HW 1.3
------`);
draw1_3(2);
draw1_3(3);
draw1_3(4);

//---------- HW 1.4 ----------

function draw1_4(n) {
    let text = "";
  for (i = 0; i < n; i++) {
    for (j = 1; j <= n; j++) {
      text += i+1;
    }
    text += "\n";
  }
  console.log(text);
}

console.log(`------
HW 1.4
------`);
draw1_4(2);
draw1_4(3);
draw1_4(4);

//---------- HW 1.5 ----------

function draw1_5(n) {
    let text = "";
  for (i = n; i >0; i--) {
    for (j = 0; j < n; j++) {
      text += i;
    }
    text += "\n";
  }
  console.log(text);
}

console.log(`------
HW 1.5
------`);
draw1_5(2);
draw1_5(3);
draw1_5(4);

//---------- HW 1.6 ----------

function draw1_6(n) {
    let text = "";
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
      text += (i*n)+(j-n)
    }
    text += "\n";
  }
  console.log(text);
}

console.log(`------
HW 1.6
------`);
draw1_6(2);
draw1_6(3);
draw1_6(4);

//---------- HW 1.7 ----------

function draw1_7(n) {
  let text = "";
for (i = n; i > 0; i--) {
  for (j = n; j > 0; j--) {
    text += (i*n)+(j-n)
  }
  text += "\n";
}
console.log(text);
}

console.log(`------
HW 1.7
------`);
draw1_7(2);
draw1_7(3);
draw1_7(4);

//---------- HW 1.8 ----------

function draw1_8(n) {
  let text = "";
for (i = 0; i < n; i++) {
  text += 2*i + "\n";
}
console.log(text);
}

console.log(`------
HW 1.8
------`);
draw1_8(2);
draw1_8(3);
draw1_8(4);

//---------- HW 1.9 ----------

function draw1_9(n) {
  let text = "";
for (i = 1; i <= n; i++) {
  text += 2*i + "\n";
}
console.log(text);
}

console.log(`------
HW 1.9
------`);
draw1_9(2);
draw1_9(3);
draw1_9(4);

//---------- HW 1.10 ----------

function draw1_10(n) {
  let text = "";
for (i = 1; i <= n; i++) {
  for (j = 1; j <= n; j++) {
    text += i*j
  }
  text += "\n";
}
console.log(text);
}

console.log(`------
HW 1.10
------`);
draw1_10(2);
draw1_10(3);
draw1_10(4);

//---------- HW 1.11 ----------

function draw1_11(n) {
  let text = "";
for (i = 1; i <= n; i++) {
  for (j = 1; j <= n; j++) {
    if (i==j) {
      text += "-"
    } else {
      text += "*"
    }
  }
  text += "\n";
}
console.log(text);
}

console.log(`------
HW 1.11
------`);
draw1_11(2);
draw1_11(3);
draw1_11(4);

//---------- HW 1.12 ----------

function draw1_12(n) {
  let text = "";
for (i = n; i > 0; i--) {
  for (j = 1; j <= n; j++) {
    if (i==j) {
      text += "-"
    } else {
      text += "*"
    }
  }
  text += "\n";
}
console.log(text);
}

console.log(`------
HW 1.12
------`);
draw1_12(2);
draw1_12(3);
draw1_12(4);