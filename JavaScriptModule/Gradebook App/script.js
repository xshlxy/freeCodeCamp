function getAverage(scores) {
    let sum = 0;
  
    for (const score of scores) {
      sum += score;
    }
  
    return sum / scores.length;
  }
  
  function getGrade(score) {
    if (score === 100) {
      return "A++";
    } else if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
  
  function hasPassingGrade(score) {
    return getGrade(score) !== "F";
  }
  
  function studentMsg(totalScores, studentScore) {
  
  let avg = getAverage(totalScores);
  let grade = getGrade(studentScore);
  let message1 = "Class average: ";
  let message2 = ". Your grade: ";
  let message3;
  if (hasPassingGrade(studentScore)){
    message3 = ". You passed the course.";
  }
  else{
    message3 = ". You failed the course.";
  }
  let full = message1 + avg + message2 + grade + message3;
  return full;
  }
  console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
  