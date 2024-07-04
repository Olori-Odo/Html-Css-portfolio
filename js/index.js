const now = new Date();

window.addEventListener("load", (e) => {
  document.getElementById("currentTimeUTC").innerHTML = now.toTimeString();
  let Day = (document.getElementById("currentDay").innerHTML =
    now.toDateString() + " - ");
  console.log(Day);
});
