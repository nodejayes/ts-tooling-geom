export class ReferenceSystemProperties {
    name: string;
    constructor(srid: number);
}

export class ReferenceSystem {
    type: string;
    srId: number;
    properties: ReferenceSystemProperties;
    constructor(srid: number);
}
