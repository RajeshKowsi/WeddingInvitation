var countDownDate = new Date("May 15, 2022 10:30:00").getTime();

var myfunc = setInterval(function(){
  var now = new Date().getTime();
  var timeleft = countDownDate - now;

  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  days = days < 10 ? "0"+days : days;
  hours = hours < 10 ? "0"+hours : hours;
  minutes = minutes < 10 ? "0"+minutes : minutes;
  seconds = seconds < 10 ? "0"+seconds : seconds;

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("mins").innerHTML = minutes;
  document.getElementById("secs").innerHTML = seconds;

},1000);

var audio_Element = document.querySelector("#audio_btn");
audio_Element.addEventListener("click",function(){
  var audio = new Audio('timer_audio.mp3');
  audio_Element.classList.add('border-green-400');
  audio_Element.classList.remove('border-red-400');
  audio_Element.classList.add('text-green-400');
  audio_Element.classList.remove('text-red-400');
  audio.play();
});
