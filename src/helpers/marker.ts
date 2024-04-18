import { Mappable } from "../CustomMap";

export async function initMarker(map: google.maps.Map, mappable: Mappable){
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

  const marker = new AdvancedMarkerElement({
      map: map,
      position:{
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
  })

  console.log(marker)

  marker.addListener('click', function(){
    const info = new google.maps.InfoWindow({
      content: mappable.markerContent()
    })
    
    info.open(map, marker)
      })
 

}


