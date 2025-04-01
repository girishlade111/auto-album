
import { CarType } from '../types';

export const cars: CarType[] = [
  {
    id: 'ferrari-f40',
    name: 'F40',
    manufacturer: 'Ferrari',
    year: 1987,
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=400&auto=format&fit=crop',
    description: 'The Ferrari F40 is a mid-engine, rear-wheel drive sports car engineered to celebrate Ferrari\'s 40th anniversary. It was the last Ferrari automobile personally approved by Enzo Ferrari.',
    history: 'Designed with aerodynamics and performance in mind, the F40 was built from 1987 to 1992 and was the successor to the Ferrari 288 GTO. At the time of its introduction, it was Ferrari\'s fastest, most powerful, and most expensive car. Unlike later special Ferrari models, the F40 was designed before the release of electronic driving aids such as anti-lock braking and traction control. The car had no catalytic converters until 1990, when U.S. regulations made them a requirement.',
    specs: {
      engine: '2.9L Twin-Turbocharged V8',
      power: '478 hp',
      torque: '425 lb-ft',
      topSpeed: '201 mph (324 km/h)',
      acceleration: '0-60 mph in 3.8 seconds',
      weight: '2,425 lbs (1,100 kg)',
      transmission: '5-speed manual'
    }
  },
  {
    id: 'lamborghini-countach',
    name: 'Countach',
    manufacturer: 'Lamborghini',
    year: 1974,
    image: 'https://images.unsplash.com/photo-1577495508326-19a1b3cf65b9?q=80&w=2127&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1577495508326-19a1b3cf65b9?q=80&w=400&auto=format&fit=crop',
    description: 'The Lamborghini Countach is a mid-engine, rear-wheel-drive sports car produced by the Italian automobile manufacturer Lamborghini from 1974 to 1990.',
    history: 'The Countach was designed by Marcello Gandini of the Bertone design studio. Its design pioneered and popularized the wedge-shaped, sharply angled look popular in many high-performance sports cars. The Countach was powered by a V12 engine and used a tubular space frame chassis with aluminum and fiberglass body panels. The name "Countach" comes from a Piedmontese exclamation of astonishment.',
    specs: {
      engine: '5.2L V12',
      power: '455 hp',
      torque: '369 lb-ft',
      topSpeed: '183 mph (295 km/h)',
      acceleration: '0-60 mph in 4.7 seconds',
      weight: '3,285 lbs (1,490 kg)',
      transmission: '5-speed manual'
    }
  },
  {
    id: 'porsche-911',
    name: '911 Carrera',
    manufacturer: 'Porsche',
    year: 1984,
    image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?q=80&w=2064&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?q=80&w=400&auto=format&fit=crop',
    description: 'The Porsche 911 is a two-door high-performance rear-engined sports car. Introduced in September 1964 by Porsche AG of Stuttgart, Germany, it has a distinctive design with an air-cooled flat-six engine.',
    history: 'The 911 has been continuously enhanced throughout its lifetime but has retained the same basic concept. The 911 Carrera of the 1980s represented a significant evolution with improved aerodynamics, increased power, and refined handling. Despite numerous attempts to replace it, the 911 has remained Porsche\'s flagship model for over 50 years, making it one of the most successful and longest continuously produced sports cars in history.',
    specs: {
      engine: '3.2L Flat-6',
      power: '231 hp',
      torque: '209 lb-ft',
      topSpeed: '152 mph (245 km/h)',
      acceleration: '0-60 mph in 5.4 seconds',
      weight: '2,756 lbs (1,250 kg)',
      transmission: '5-speed manual'
    }
  },
  {
    id: 'bmw-m3-e30',
    name: 'M3 (E30)',
    manufacturer: 'BMW',
    year: 1986,
    image: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?q=80&w=1974&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?q=80&w=400&auto=format&fit=crop',
    description: 'The BMW M3 E30 is the first generation of BMW M3, a high-performance sports car based on the BMW 3 Series. It was produced from 1986 to 1992.',
    history: 'The first BMW M3 was developed specifically to compete in Group A touring car racing. To qualify as a race car, a street version was required, which resulted in the M3 road car. The E30 M3 used a high-revving four-cylinder engine and a modified body with aerodynamic enhancements including a rear wing and flared fenders. It went on to become one of the most successful touring cars of all time, winning multiple championships.',
    specs: {
      engine: '2.3L Inline-4',
      power: '195 hp',
      torque: '170 lb-ft',
      topSpeed: '146 mph (235 km/h)',
      acceleration: '0-60 mph in 6.7 seconds',
      weight: '2,645 lbs (1,200 kg)',
      transmission: '5-speed manual'
    }
  },
  {
    id: 'aston-martin-db5',
    name: 'DB5',
    manufacturer: 'Aston Martin',
    year: 1963,
    image: 'https://images.unsplash.com/photo-1535360392524-0a59cce19959?q=80&w=2070&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1535360392524-0a59cce19959?q=80&w=400&auto=format&fit=crop',
    description: 'The Aston Martin DB5 is a British luxury grand tourer that was made by Aston Martin. It gained worldwide recognition through its use in the James Bond films.',
    history: 'The DB5 was designed by Italian coachbuilder Carrozzeria Touring Superleggera and was an evolution of the final series of DB4. The DB5 is most famous for being the first and most recognized cinematic James Bond car, appearing in Goldfinger (1964), Thunderball (1965), and several later films. The car became so iconic that it has been dubbed "the most famous car in the world".',
    specs: {
      engine: '4.0L Inline-6',
      power: '282 hp',
      torque: '288 lb-ft',
      topSpeed: '145 mph (233 km/h)',
      acceleration: '0-60 mph in 8.0 seconds',
      weight: '3,310 lbs (1,500 kg)',
      transmission: '5-speed manual'
    }
  }
];

export function getCar(id: string): CarType | undefined {
  return cars.find(car => car.id === id);
}

export function getAllCars(): CarType[] {
  return cars;
}
