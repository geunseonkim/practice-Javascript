// 1. 1부터 100까지 더하는 for문을 만들고 결과를 출력하시오.
let count = 0;
for (let i = 1; i <= 100; i++) {
  count += i;
}
console.log(count);

// 2. 1부터 100까지 홀수만 출력하자.
for (let i = 1; i <= 100; i += 2) {
  console.log(i);
}

// 3.1부터 50까지 369결과를 프린트하자.

// let array = [];
// for (let i = 1; i <= 50; i++) {
//   array.push(String(i).split(""));
// }
// console.log(array);

// let clap = "";
// for (let i = 0; i < array.length; i++) {
//   for (let j = 3; j <= 9; j += 3) {
//     if (array[i].includes(String(j))) {
//       clap += "짝";
//     }
//   }

//   let answer = clap != "" ? clap : i + 1;
//   console.log(answer);
//   clap = "";
// }

for (let i = 1; i <= 50; i++) {
  let stringI = i.toString();
  let clap = "";
  for (let j = 0; j < stringI.length; j++) {
    if (stringI[j] == "3" || stringI[j] == "6" || stringI[j] == "9") {
      clap += "짝";
    }
  }
  console.log(clap.length > 0 ? clap : i);
}

// 문자열도 배열처럼 각 자리에 접근할 수 있음! "12"[0] -> "1"
console.log((12).toString());
console.log("12"[0]);

// 4. 주어진 숫자가 소수이면 true 아니면 false를 출력하는 프로그램을 짜시오.
// 2, 3, 5, 7, 11, 13, 17, 19, 23,...

// let num = 5;
// let index = [];
// for (let i = 1; i <= num; i++) {
//   if (num % i == 0) {
//     index.push(i);
//   }
// }
// if (index.length == 2) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// 소수가 되는 건 오직 1이나 자기 숫자로 나눠짐. 그러니까 1도 제외하고, 본인 수로 제외했는데도 나눠지면 소수가 아니게 되는 거임!

let n = 5;
let isPrime = true;

if (n == 1) {
  isPrime = false;
}
for (let i = 2; i < n; i++) {
  if (n % i == 0) {
    isPrime = false;
  }
}

console.log(isPrime);
