import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  static instances = 0;
  private energyTypeNecromancer: EnergyType = 'mana';
  constructor(name:string) {
    super(name);
    Necromancer.instances += 1;
  }

  get energyType(): EnergyType { return this.energyTypeNecromancer; }

  static override createdArchetypeInstances(): number {
    return Necromancer.instances;
  }
}