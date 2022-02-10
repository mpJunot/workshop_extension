let arraySemester = [true, true, false, false, false, true, false];
arraySemester[0] = false; // disable the semester 0
showSemester(arraySemester);

function showSemester() {
    $("#semester-0").click();
}