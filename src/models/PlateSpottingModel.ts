import LocationModel from './LocationModel';

export default class PlateSpottingModel {
	id: String;
	plate: number;
	date: String;
	location: LocationModel;
	note: String;
	seenBy: Array<String>;


	constructor() {
		this.id = '';
		this.plate = 0;
		this.date = '';
		this.location = { Lat: 0, Long: 0, Text: '' };
		this.note = '';
		this.seenBy = [];
	}
}