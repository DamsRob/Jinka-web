export class RealEstateAdds {
    realEstateAdds!: RealEstateAdd[]
}

export class RealEstateAdd {
    id!: number | undefined;
    offer!: 'buy' | 'loan' | undefined;
    type!: 'house' | 'appartment' | 'parking' | undefined;
    pictures!: Picture[] | [];
    price!: number | undefined;
    localisation!: string  | undefined;
    surface!: number | undefined;
    rooms!: number | undefined;
    bedrooms!: number | undefined;
    transports!: Transport[] | [];
    description!: string  | undefined;
    furniture!: boolean  | undefined;
    infos!: Infos[] | []
}

export class Picture {
    picture!: string;
}

export class Transport {
    stationName!: string;
    stationPicture!: string[];
}

export class Infos {
    info!: string;
    icon!: string;
}