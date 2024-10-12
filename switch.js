let food = "피자";
switch (food) {
  case "피자":
    console.log("피자를 주세요");
  // break;
  case "햄버거":
    console.log("햄버거를 주세요");
  // break;
  default:
    console.log("메뉴에 없는 음식입니다");
}

// 삼항 연산식
let foods = "햄버거";

if (foods == "피자") {
  console.log("피자좋아");
} else if (foods == "햄버거") {
  console.log("햄버거 좋아");
} else {
  console.log("다 싫어");
}

// 위의 if문을 삼항연산자로 표현하면
let answer =
  foods == "피자" ? "피자좋아" : foods == "햄버거" ? "햄버거 좋아" : "다 싫어";
console.log(answer);
