import Race from './Race';

export default class Orc extends Race {
  static instances = 0;
  private maxLifePointsOrc = 74;
  constructor(name:string, dexterity: number) {
    super(name, dexterity);
    Orc.instances += 1;
  }

  get maxLifePoints(): number {
    return this.maxLifePointsOrc;
  }

  static override createdRacesInstances():number {
    return Orc.instances;
  }
}