import LocationModel from './LocationModel';

export default class SightingModel {
	Id: String;
	Plate: String;
	Date: String;
	Location: LocationModel;
	Note: String;


	constructor() {
		this.Id = '';
		this.Plate = '';
		this.Date = '';
		this.Location = { Lat: '', Long: ''};
		this.Note = '';
	}
}