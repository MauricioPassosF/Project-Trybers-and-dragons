import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  static instances = 0;
  private energyTypeWarrior: EnergyType = 'stamina';
  constructor(name:string) {
    super(name);
    Warrior.instances += 1;
  }

  get energyType(): EnergyType { return this.energyTypeWarrior; }

  static override createdArchetypeInstances(): number {
    return Warrior.instances;
  }
}