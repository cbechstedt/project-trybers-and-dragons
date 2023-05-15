export type EnergyType = 'stamina' | 'mana';

interface IEnergy {
  type_: EnergyType;
  amount: number;
}

export default IEnergy;