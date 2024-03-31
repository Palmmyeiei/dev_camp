function findChange() {
  // let total = parseInt(prompt('Enter Price :'))
  // let receive = parseInt(prompt('Enter Cash :'))
  let total = 215,
    receive = 3000;
  let change = receive - total;
  let totalChange = receive - total;
  let bank = []

  bank1000 = 0;
  bank500 = 0;
  bank100 = 0;
  bank50 = 0;
  bank20 = 0;
  coin10 = 0;
  coin5 = 0;
  coin1 = 0;

  while (change > 0) {
    if (change >= 1000) {
      bank1000 = Math.floor(change / 1000);
      change = change % 1000;
      if (bank1000>0) {
        bank.push(`1000: ${bank1000} ใบ`)
      }
    } else if (change >= 500) {
      bank500 = Math.floor(change / 500);
      change = change % 500;
      if (bank500>0) {
        bank.push(`500 : ${bank500} ใบ`)
      }
    } else if (change >= 100) {
      bank100 = Math.floor(change / 100);
      change = change % 100;
      if (bank100>0) {
        bank.push(`100 : ${bank100} ใบ`)
      }
    } else if (change >= 50) {
      bank50 = Math.floor(change / 50);
      change = change % 50;
      if (bank50>0) {
        bank.push(`50 : ${bank50} ใบ`)
      }
    } else if (change >= 20) {
      bank20 = Math.floor(change / 20);
      change = change % 20;
      if (bank20>0) {
        bank.push(`20 : ${bank20} ใบ`)
      }
    } else if (change >= 10) {
      coin10 = Math.floor(change / 10);
      change = change % 10;
      if (coin10>0) {
        bank.push(`10 : ${coin10} เหรียญ`)
      }
    } else if (change >= 5) {
      coin5 = Math.floor(change / 5);
      change = change % 5;
      if (coin5>0) {
        bank.push(`5 : ${coin5} เหรียญ`)
      }
    } else {
      coin1 = change / 1;
      if (coin1>0) {
        bank.push(`1 : ${coin1} เหรียญ`)
      }
    }
  }

  console.log(`เงินทอนทั้งหมด : ${totalChange} บาท`)
  console.log(bank);
}

findChange();