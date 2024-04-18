import { faker } from "@faker-js/faker"; //normally need type definition files but this library has native ts support

//no default export means importing with curly braces
//ts we generally Do NOT use default
export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  }

  constructor(){
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
   
  }
  markerContent(): string{
    return `User Name: ${this.name}`
  }
}