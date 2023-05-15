import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  static instancesCounter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.instancesCounter += 1;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this.instancesCounter;
  }
}

export default Halfling;