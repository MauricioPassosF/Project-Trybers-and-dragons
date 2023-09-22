import Race from './Race';

export default class Elf extends Race {
  static instances = 0;
  private maxLifePointsElf = 99;
  constructor(name:string, dexterity: number) {
    super(name, dexterity);
    Elf.instances += 1;
  }

  get maxLifePoints(): number {
    return this.maxLifePointsElf;
  }

  static override createdRacesInstances():number {
    return Elf.instances;
  }
}