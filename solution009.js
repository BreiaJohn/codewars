// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
function getGrade (s1, s2, s3) {
    var score = (s1 + s2 + s3) / 3;
    if (score >= 90 && score <= 100) {
        return 'A';
    } else if (score >= 80 && score < 90) {
      return 'B';
    } else if (score >= 70&& score < 80) {
      return 'C';
    } else if (score >= 60  && score < 70) {
      return 'D';
    } else {
      return 'F';
    }
  }