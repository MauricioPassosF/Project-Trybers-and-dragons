import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  static instances = 0;
  private energyTypeMage: EnergyType = 'mana';
  constructor(name:string) {
    super(name);
    Mage.instances += 1;
  }

  get energyType(): EnergyType { return this.energyTypeMage; }

  static override createdArchetypeInstances(): number {
    return Mage.instances;
  }
}