import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  static instances = 0;
  private energyTypeRanger: EnergyType = 'stamina';
  constructor(name:string) {
    super(name);
    Ranger.instances += 1;
  }

  get energyType(): EnergyType { return this.energyTypeRanger; }

  static override createdArchetypeInstances(): number {
    return Ranger.instances;
  }
}