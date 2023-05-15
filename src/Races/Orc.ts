import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  static instancesCounter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.instancesCounter += 1;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this.instancesCounter;
  }
}

export default Orc;