import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  static instancesCounter = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.instancesCounter += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this.instancesCounter;
  }
}

export default Ranger;