interface Pupil {
  name: string;
  grade: number;
}

interface Year {
  grade: [Pupil];
}

export class GradeSchool {
  _pupils: { [grade: number]: [names: string] } = {};
  
  roster(): { [grade: number]: [names: string] } {
    for (const grade in this._pupils) {
      this._pupils[grade].sort((a, b) => a.localeCompare(b));
    }
    
    return { ...this._pupils };
  }

  private isCurrentStudent(name: string): boolean {
    for (const grade in this._pupils) {
      if (this._pupils[grade].includes(name)) {
        return true;
      }
    }
    return false;
  }

  private deleteCurrentStudent(name: string): void {
    for (const grade in this._pupils) {
      if (this._pupils[grade].includes(name)) {
        const key = this._pupils[grade].indexOf(name);
        this._pupils[grade].splice(key, 1);
      }
    }
  }

  add(name: string, grade: number): void {
    const isCurrentStudent = this.isCurrentStudent(name);
    if (isCurrentStudent) {
      // delete the current student
      this.deleteCurrentStudent(name);
      return;
    }
    if (grade in this._pupils) {
      this._pupils[grade].push(name);
      return;
    }

    this._pupils[grade] = [name];
    return;
  }

  grade(grade: number): string[] {
    if (!this._pupils[grade]) {
      return [];
    }
    const copy = [...this._pupils[grade]];
    return copy.sort((a, b) => a.localeCompare(b)); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
  }
}
