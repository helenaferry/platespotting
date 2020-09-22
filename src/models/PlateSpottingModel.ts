import LocationModel from './LocationModel';

export default class PlateSpottingModel {
  public id: String;
  public plate: number;
  public date: String;
  public location: LocationModel;
  public note: String;
  public seenBy: String[];


  constructor() {
    this.id = '';
    this.plate = 0;
    this.date = '';
    this.location = { Lat: 0, Long: 0, Text: '' };
    this.note = '';
    this.seenBy = [];
  }
}
