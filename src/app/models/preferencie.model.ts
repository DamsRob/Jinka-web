export class Preferencie{
    offer!: 'buy' | 'loan';
    localisation!: string;
    type!: 'house' | 'appartment' | 'parking';
    surfaceMin!: number;
    surfaceMax!: number;
    priceMin!: number;
    priceMax!: number;
    rooms!: number;
    bedroom!: number;
    furniture!: boolean
};