export default function taskBlock(trueOrFalse) {
  var task = true;
  var task2 = false;

  if (trueOrFalse) {
    task = false;
    task2 = true;
  }

  return [task, task2];
}
