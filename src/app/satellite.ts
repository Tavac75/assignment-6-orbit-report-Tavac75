export class Satellite {

	name: string;
	type: string;
	launchDate: string;
	orbitType: string;
	operational: boolean;

	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
		this.type = type;
		this.launchDate = launchDate;
		this.orbitType = orbitType;
		this.operational = operational;
   }
   

	isSpaceDebris(): boolean {
		let warning = false;
	if (this.type.toLowerCase() === 'space debris') {
		return warning = true;
	} else {
		return warning = false; }
	}
	
   

}

// TODO 3a: fix isSpaceDebris check
