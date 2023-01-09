export interface DirectorInterface  {
  workFromHome(): string;
  getCoffeeBreak(): string
  workDirectorTasks(): string;

}

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
}

export class Director implements DirectorInterface {
  
}

export class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}


export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  
  workTeacherTasks(): string {
    return 'Getting to work';
  }
 
}


export function createEmployee(salary: string | number): Teacher | Director  {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}
