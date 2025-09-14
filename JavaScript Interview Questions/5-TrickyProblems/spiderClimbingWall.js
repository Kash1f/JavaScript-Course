function spiderClimb(height, climb, slip) {
  let days = 0;
  let position = 0;

  while (position < height) {
    days++;
    position += climb;  //spider climbs during the day

    if (position >= height) break; //reached the top, no slipping

    position -= slip;   //spider slips at night
  }

  return days;
}


console.log(spiderClimb(10, 3, 2));
