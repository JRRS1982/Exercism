const ORBIT = {
  EARTH: 31557600,
  MERCURY: 31557600 * 0.2408467,
  VENUS: 31557600 * 0.61519726,
  MARS: 31557600 * 1.8808158,
  JUPITER: 31557600 * 11.862615,
  SATURN: 31557600 * 29.447498,
  URANUS: 31557600 * 84.016846,
  NEPTUNE: 31557600 * 164.79132,
};

const round = (unrounded: number): number => {
  return Math.round((unrounded + Number.EPSILON) * 100) / 100;
};

class SpaceAge {
  seconds: number;

  constructor(input: number) {
    this.seconds = input;
  }

  onEarth(): number {
    return round(this.seconds / ORBIT.EARTH);
  }
  onMercury(): number {
    return round(this.seconds / ORBIT.MERCURY);
  }
  onVenus(): number {
    return round(this.seconds / ORBIT.VENUS);
  }
  onMars(): number {
    return round(this.seconds / ORBIT.MARS);
  }
  onSaturn(): number {
    return round(this.seconds / ORBIT.SATURN);
  }
  onJupiter(): number {
    return round(this.seconds / ORBIT.JUPITER);
  }
  onNeptune(): number {
    return round(this.seconds / ORBIT.NEPTUNE);
  }
  onUranus(): number {
    return round(this.seconds / ORBIT.URANUS);
  }
}

export default SpaceAge;
