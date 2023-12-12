let nam = document.getElementById("name");
let age = document.getElementById("age");
let login = document.getElementById("login");
let box1 = document.getElementById("box1");
let box12 = document.getElementById("box12");
let q1 = document.getElementById("q1");
let result = document.getElementById('result');

box12.style.display = 'none' ;

login.addEventListener("click", function () {
  if (nam.value === "" || age.value === "") {
    alert("Fill all fields appropriately");
  } else {
    alert("Login Sucessful!!!");

    setTimeout(() => {
      box1.style.display = "none";
      box2.style.display = "block";
    }, 2000);
  }
});

function click1() {
  ans.value = c1.innerHTML;
};

function click2() {
  ans.value = c2.innerHTML;
};

function click3() {
  ans.value = c3.innerHTML;
};

function click4() {
  ans.value = c4.innerHTML;
};

next1.addEventListener("click", function () {
  setTimeout(() => {
    box2.style.display = "none";
    box3.style.display = "block";
  }, 1000);
});
9;
function click5() {
  ans1.value = c5.innerHTML;
};

function click6() {
  ans1.value = c6.innerHTML;
};

function click7() {
  ans1.value = c7.innerHTML;
};

function click8() {
  ans1.value = c8.innerHTML;
};

prev1.addEventListener("click", function () {
  setTimeout(() => {
    box2.style.display = "block";
    box3.style.display = "none";
  }, 1000);
});

next2.addEventListener("click", function () {
  setTimeout(() => {
    box3.style.display = "none";
    box4.style.display = "block";
  }, 1000);
});

function click9() {
  ans2.value = c9.innerHTML;
};

function click10() {
  ans2.value = c10.innerHTML;
};

function click11() {
  ans2.value = c11.innerHTML;
};

function click12() {
  ans2.value = c12.innerHTML;
};

prev2.addEventListener("click", function () {
  setTimeout(() => {
    box4.style.display = "none";
    box3.style.display = "block";
  }, 1000);
});

next3.addEventListener("click", function () {
  setTimeout(() => {
    box4.style.display = "none";
    box5.style.display = "block";
  }, 1000);
});

function click13() {
  ans3.value = c13.innerHTML;
};

function click14() {
  ans3.value = c14.innerHTML;
};

function click15() {
  ans3.value = c15.innerHTML;
};

function click16() {
  ans3.value = c16.innerHTML;
};

prev3.addEventListener("click", function () {
  setTimeout(() => {
    box5.style.display = "none";
    box4.style.display = "block";
  }, 1000);
});

next4.addEventListener("click", function () {
  setTimeout(() => {
    box5.style.display = "none";
    box6.style.display = "block";
  }, 1000);
});

function click17() {
  ans4.value = c17.innerHTML;
};

function click18() {
  ans4.value = c18.innerHTML;
};

function click19() {
  ans4.value = c19.innerHTML;
};

function click20() {
  ans4.value = c20.innerHTML;
};

prev4.addEventListener("click", function () {
  setTimeout(() => {
    box6.style.display = "none";
    box5.style.display = "block";
  }, 1000);
});

next5.addEventListener("click", function () {
  setTimeout(() => {
    box6.style.display = "none";
    box7.style.display = "block";
  }, 1000);
});

function click21() {
  ans5.value = c21.innerHTML;
};

function click22() {
  ans5.value = c22.innerHTML;
};

function click23() {
  ans5.value = c23.innerHTML;
};

function click24() {
  ans5.value = c24.innerHTML;
};

prev5.addEventListener("click", function () {
  setTimeout(() => {
    box7.style.display = "none";
    box6.style.display = "block";
  }, 1000);
});

next6.addEventListener("click", function () {
  setTimeout(() => {
    box7.style.display = "none";
    box8.style.display = "block";
  }, 1000);
});

function click25() {
  ans6.value = c25.innerHTML;
};

function click26() {
  ans6.value = c26.innerHTML;
};

function click27() {
  ans6.value = c27.innerHTML;
};

function click28() {
  ans6.value = c28.innerHTML;
};

prev6.addEventListener("click", function () {
  setTimeout(() => {
    box8.style.display = "none";
    box7.style.display = "block";
  }, 1000);
});

next7.addEventListener("click", function () {
  setTimeout(() => {
    box8.style.display = "none";
    box9.style.display = "block";
  }, 1000);
});

function click29() {
  ans7.value = c29.innerHTML;
};

function click30() {
  ans7.value = c30.innerHTML;
};

function click31() {
  ans7.value = c31.innerHTML;
};

function click32() {
  ans7.value = c32.innerHTML;
};

prev7.addEventListener("click", function () {
  setTimeout(() => {
    box9.style.display = "none";
    box8.style.display = "block";
  }, 1000);
});

next8.addEventListener("click", function () {
  setTimeout(() => {
    box9.style.display = "none";
    box10.style.display = "block";
  }, 1000);
});

function click33() {
  ans8.value = c33.innerHTML;
};

function click34() {
  ans8.value = c34.innerHTML;
};

function click35() {
  ans8.value = c35.innerHTML;
};

function click36() {
  ans8.value = c36.innerHTML;
};

prev8.addEventListener("click", function () {
  setTimeout(() => {
    box10.style.display = "none";
    box9.style.display = "block";
  }, 1000);
});

next9.addEventListener("click", function () {
  setTimeout(() => {
    box10.style.display = "none";
    box11.style.display = "block";
  }, 1000);
});

function click37() {
  ans9.value = c37.innerHTML;
};

function click38() {
  ans9.value = c38.innerHTML;
};

function click39() {
  ans9.value = c39.innerHTML;
};

function click40() {
  ans9.value = c40.innerHTML;
};

prev9.addEventListener("click", function () {
  setTimeout(() => {
    box11.style.display = "none";
    box10.style.display = "block";
  }, 1000);
});

let counter = 0;

next10.addEventListener("click", function () {

  if (ans.value === 'Skin') {
    counter++
  };
  
  if (ans1.value === '1945') {
    counter++
  };

  if (ans2.value === 'Sahara Desert') {
    counter++
  };

  if (ans3.value === '') {
    counter++
  };

  if (ans4.value === 'Jane Austen') {
    counter++
  };

  if (ans5.value === 'Cello') {
    counter++
  };

  if (ans6.value === 'Hypertext Markup Language') {
    counter++
  };

  if (ans7.value === 'Christopher Nolan') {
    counter++
  };

  if (ans8.value === 'Chickpeas') {
    counter++
  };

  if (ans9.value === 'A = πr^2') {
    counter++
  };

  setTimeout(() => {
    box11.style.display = "none";
    box12.style.display = 'block';
    result.innerHTML = `Dear ${nam.value}, you scored ${counter} out of 10`;
  }, 1000);
});
