export class ReferenceSystemProperties {
    name: string;
    constructor(srid: number);
}

export class ReferenceSystem {
    type: string;
    properties: ReferenceSystemProperties;
    constructor(srid: number);
}
