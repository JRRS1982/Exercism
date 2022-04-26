export class DnDCharacter {
  hitpoints: number;
  constitution: number;
  strength: number;
  dexterity: number;
  charisma: number;
  wisdom: number;
  intelligence: number;

  constructor() {
    this.constitution = DnDCharacter.generateAbilityScore();
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.hitpoints = this.generateHitPoints(this.constitution);
  }
  
  generateHitPoints(constitution: number): number {
    const constitutionModifier = DnDCharacter.getModifierFor(constitution);
    return 10 + constitutionModifier;
  }

  public static generateAbilityScore(): number {
    return Math.floor(Math.random() * (18 - 3 + 1)) + 3; // random from 3 to 18 i.e. three dice
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
}