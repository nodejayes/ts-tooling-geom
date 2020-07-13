export function register(srid: number, def: string);
export function getEpsg(srid: number);
export function reproject(target: string, source: string, points: number[][]);
