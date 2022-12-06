let print = (v) => process.stdout.write(String(v));

month = [];
week = ['  日', ' 月', ' 火', ' 水', ' 木', ' 金', ' 土', '\n'];
day = [];

let date = new Date();
let y = date.getFullYear(); // 年
let m = date.getMonth() + 1; // 月
let d = date.getDate(); // 日
let h = date.getHours(); // 時
let dayOfWeek = date.getDay(); // 曜日(数値)
console.log(dayOfWeek);

for (let i = 1; i <= 12; i++) {
  month.push(i);
}

for (let i = 1; i <= 31; i++) {
  if (i % 7 == 0 && i != 0) {
    i = String(i);
    if (i.length == 1) {
      day.push('  ' + i + '\n');
    } else {
      day.push(' ' + i + '\n');
    }
  } else {
    i = String(i);
    if (i.length == 1) {
      day.push('  ' + i);
    } else {
      day.push(' ' + i);
    }
  }
}

month.forEach((m) => {
  print('\n');
  print('\n ======== ' + m + '月 ' + '======== \n');
  week.forEach((v) => {
    print(v);
  });
  day.forEach((v) => {
    print(v);
  });
});
