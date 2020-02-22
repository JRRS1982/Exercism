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

  plus(minutes = 0) {
    this.epoch.setMinutes( this.epoch.getMinutes() + minutes );
    return this.epoch.toISOString(12).slice(11,16);
  }

  minus(minutes = 0) {
    this.epoch.setMinutes( this.epoch.getMinutes() - minutes );
    return this.epoch.toISOString(12).slice(11,16);
  }

  equals(inputDate) {
    this.eqDate = inputDate.epoch;
    let result = false;

    if (this.epoch.toISOString(12).slice(11,16) === this.eqDate.toISOString(12).slice(11,16)) {
        result = true;
    }
    
    return result;
  }
}
