function solve(examPoints, completedHomework, totalHomework) {
    const maxExamPoints = 400;
    const courseMaxPoints = 100;
    let grade;

    if (examPoints === 400) {
        grade = 6;
    } else {
        let pointsFromExam = (100 / maxExamPoints * examPoints) * 0.9;
        let homeworkPercentage = (100 / totalHomework * completedHomework);
        let pointsFromHomework = (homeworkPercentage / 100) * (10 / 100) * courseMaxPoints;
        let totalPoints = pointsFromExam + pointsFromHomework;

        grade = 3 + 2 * (totalPoints - courseMaxPoints / 5) / (courseMaxPoints / 2);
    }

    if (grade > 6){
        grade = 6;
    } else if ( grade < 3) {
        grade = 2;
    }
    console.log(grade.toFixed(2));
}
