//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hours = 0, minutes = 0) {
      this.epoch = new Date(0);
      this.epoch.setHours( this.epoch.getHours() + hours );
      this.epoch.setMinutes( this.epoch.getMinutes() + minutes );
  }

  toString() {
    return this.epoch.toISOString(12).slice(11,16);
  }

  plus() {
    throw new Error('Remove this statement and implement this function');
  }

  minus() {
    throw new Error('Remove this statement and implement this function');
  }

  equals() {
    throw new Error('Remove this statement and implement this function');
  }
}
