
const newTask = (title, description) => {
  const task = {
    title,
    description,
    complete: false,

    logState() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    markCompleteTask() {
      this.complete = true;
    }
  };
  return task;
};

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");

task1.logState();
task1.markCompleteTask();
task1.logState();

