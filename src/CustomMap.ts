
import {createdElement} from "./helpers/CreateElem"
import { User } from "./User"
import { Company } from "./Company"
import { initMarker} from './helpers/marker'

// instructions on how every other claas
// can be an argument to addMarker
//export for helper function
export interface Mappable {
  location: {
    lat: number,
    lng: number
  }
  markerContent(): string;

}


export class CustomMap {
  private googleMap: google.maps.Map //cannot reference outside of class protected means child classes can access

  constructor(){
    this.googleMap = new google.maps.Map(createdElement, {
      mapId: 'SOME_ID',
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    })
  }


addMarker(mappable: Mappable): void{ //ts implicitly casts users and company and whatever else as mappable
                                    //interface as long as they have location object

  initMarker(this.googleMap, mappable)

  

}
}