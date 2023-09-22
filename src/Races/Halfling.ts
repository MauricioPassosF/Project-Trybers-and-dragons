import Race from './Race';

export default class Halfling extends Race {
  static instances = 0;
  private maxLifePointsHalfling = 60;
  constructor(name:string, dexterity: number) {
    super(name, dexterity);
    Halfling.instances += 1;
  }

  get maxLifePoints(): number {
    return this.maxLifePointsHalfling;
  }

  static override createdRacesInstances():number {
    return Halfling.instances;
  }
}