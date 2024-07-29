class Contract {}

class Employee {
  constructor(private name: string) {}

  getSalary(): number {
    return 0;
  }
}

class Developer extends Employee {
  private skills: string[] = [];

  constructor(name: string, private employeeType: string) {
    super(name);
  }

  addSkill(skill: string): void {
    this.skills.push(skill);
  }

  getSalary(): number {
    let salary = this.skills.length * 500;

    if (this.skills.includes("OOP")) {
      salary += 2000;
    }

    return salary;
  }
}

class Manager extends Employee {
  private teamMembers: Employee[] = [];

  constructor(name: string, private employeeType: string) {
    super(name);
  }

  addTeamMember(employee: Employee): void {
    this.teamMembers.push(employee);
  }

  getSalary(): number {
    return this.teamMembers.length * 600;
  }
}

class Commercial extends Employee {
  private contracts: Contract[] = [];

  constructor(name: string, private employeeType: string) {
    super(name);
  }

  addContract(contract: Contract): void {
    this.contracts.push(contract);
  }

  getSalary(): number {
    return this.contracts.length * 400;
  }
}