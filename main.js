#!  /usr/bin/env node
import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
let res = await inquirer.prompt({
    name: "userInput",
    type: "number",
    message: "Enter the value of second",
    validate: (input) => {
        if (isNaN(input)) {
            return "Enter valid number";
        }
        else if (input > 60) {
            return "seconds should be in 60";
        }
        else {
            return true;
        }
    }
});
let input = res.userInput;
function startTime(val) {
    let intTime = new Date().setSeconds(new Date().getSeconds() + val);
    let intervalTime = new Date(intTime);
    setInterval((() => {
        let currentTime = new Date();
        let timediff = differenceInSeconds(intervalTime, currentTime);
        if (timediff <= 0) {
            console.log("Timer has expired");
            process.exit();
        }
        let min = Math.floor((timediff % (3600 * 24)) / 3600);
        let sec = Math.floor(timediff % 60);
        console.log(`${min.toString().padStart(2, "0")}:${sec}`);
    }), 1000);
}
startTime(input);
