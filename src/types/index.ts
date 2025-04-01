
export interface CarType {
  id: string;
  name: string;
  manufacturer: string;
  year: number;
  image: string;
  thumbnail: string;
  description: string;
  history: string;
  specs: {
    engine: string;
    power: string;
    torque: string;
    topSpeed: string;
    acceleration: string;
    weight: string;
    transmission: string;
  };
}
