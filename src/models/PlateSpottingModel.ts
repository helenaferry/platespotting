import LocationModel from './LocationModel';

export default class PlateSpottingModel {
	id: String;
	plate: String;
	date: String;
	location: LocationModel;
	note: String;


	constructor() {
		this.id = '';
		this.plate = '';
		this.date = '';
		this.location = { Lat: 0, Long: 0 };
		this.note = '';
	}
}