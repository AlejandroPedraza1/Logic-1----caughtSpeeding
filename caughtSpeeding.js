//This is the answer for JavaScript!
function caughtSpeeding(speed, isBirthday){
  if (isBirthday) {
    speed -= 5;
  }
  
  if (speed <= 60) {
    return 0;
  }
  else if (speed >= 61 && speed <= 80) {
    return 1;
  }
  else if (speed >= 81) {
    return 2;
  }
}
