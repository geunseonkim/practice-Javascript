// 1. 유저가 입력하는 숫자가 0인지 음수인지 양수인지 판단하는 프로그램을 만드시오
let num = 89;

if (num == 0) {
  console.log("이 숫자는 0입니다.");
} else if (num > 0) {
  console.log("이 숫자는 양수입니다.");
} else {
  console.log("이 숫자는 음수입니다.");
}

// 2. 나는 대학교 교수다. 레포트 점수에 따라 등급을 매기는 프로그램을 만드시오
// 90~100 : A
// 80~89 : B
// 70~79 : C
// 60~69 : D
// less than 59 : F

let score = 99;
let grade = "";

if (0 < score && score <= 100) {
  if (score <= 59) {
    // console.log("등급은 F입니다.");
    grade = "F";
  } else if (score <= 69) {
    grade = "D";
  } else if (score <= 79) {
    grade = "C";
  } else if (score <= 89) {
    grade = "B";
  } else {
    grade = "A";
  }
} else {
  console.log("정확한 점수를 입력해주세요.");
}
console.log(grade);

// 3. 한 지원자가 우리 회사에 지원을 했다. 지원자가 사용 가능한 스킬은 배열에 제공이 된다
// let skills = ["HTML","CSS","Javascript","React"]
// Javascript와 React 둘 다 할 줄 안다면 “합격!” Javascript와 React 둘 중 하나만 할 줄 안다면 “예비”, 두 스킬이 없다면 “탈락” 을 보여주는 프로그램을 짜시오

let skills = ["HTML", "CSS", "Javascript", "React"];
// output: 합격
// let skills = ["HTML", "CSS", "Javascript"];
// output: 예비
// let skills = ["HTML", "CSS"];
// output: 탈락

let J = skills.includes("Javascript");
let R = skills.includes("React");

if (J && R) {
  console.log("합격!");
} else if (J || R) {
  console.log("예비");
} else {
  console.log("탈락");
}

//*//
console.log(typeof ("가나디" + grade)); // 가나디A
console.log(typeof ("가나디", grade)); // 가나디 A
