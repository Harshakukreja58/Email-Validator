console.log("this is my script");

let result = {
  tag: "",
  free: true,
  user: "harshakukreja0899",
  email: "harshakukreja0899@gmail.com",
  state: "deliverable",
  domain: "gmail.com",
  reason: "valid_mailbox",
  score: 0.64,
  role: false,
  mx_found: true,
  catch_all: null,
  disposable: false,
  smtp_check: true,
  did_you_mean: "",
  format_valid: true,
};

submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  console.log("Clicked!");
  resultCont.innerHTML = `<img width="75" src="img/loading.svg" alt="">`;
  let key = "ema_live_TtYfQ53QeWOvDtoFo3VDUZ1Ov4Z5DancUcBLVTFb";
  let email = document.getElementById("username").value;
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
  let res = await fetch(url);
  let result = await res.json();
  let str = ``;
  for (key of Object.keys(result)) {
    if (result[key] !== "" && result[key] !== " ") {
      str = str + `<div>${key}: ${result[key]} </div>`;
    }
  }

  if (result) {
    result = { state: "deliverable" };
    str = str + `<h2>This email address is valid</h2>`;
  } else {
    result = { state: "undeliverable" || " " };
    console.log("This is not valid");
    str = str + `<h2>This email address is invalid </h2>`;
  }
  console.log(str);
  resultCont.innerHTML = str;
});
