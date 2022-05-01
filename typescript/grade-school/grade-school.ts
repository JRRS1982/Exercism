/**
 * Records are immutable, which is important for one test which checks mutability.
 */
export class GradeSchool {
  private students: Record<string, number> = {};

  roster(): Record<number, string[]> {
    const grades = [...new Set(Object.values(this.students))];
    return grades.reduce(
      // get students for each grade like so { '3': [ 'Chelsea' ], '7': [ 'Logan' ] }
      (acc, grade) => ({ ...acc, [grade]: this.grade(grade) }),
      {}
    );
  }

  add(name: string, grade: number): void {
    this.students[name] = grade;
  }

  grade(grade: number): string[] {
    const a = [
      ...Object.entries(this.students)
        // filter by grade
        .filter(([_, g]) => grade === g)
        // map away the index
        .map(([name, _]) => name)
        .sort(),
    ];

    return [
      ...Object.entries(this.students)
        .filter(([_, g]) => grade === g)
        .map(([n, _]) => n)
        .sort(),
    ];
  }
}
