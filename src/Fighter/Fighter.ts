import Energy from '../Energy';
import SimpleFighter from './SimpleFigther';

export default interface Fighter extends SimpleFighter{
  defense: number;
  energy?: Energy;
  attack(enemy:Fighter): void;
  special?(enemy:Fighter): void;
  levelUp(): void;
}