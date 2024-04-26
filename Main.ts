import { Passenger } from "./Peoples/Passenger";
import { Gender } from "./Enums/Gender";
import { Flight } from "./Flight/Flight";
import { FlightType } from "./Enums/FlightType";
import { BookingReferenceNumber } from "./Ticket/BookingReference";
import { MealType } from "./Enums/MealType";
import { Booking } from "./Ticket/Booking";


const passenger1 = new Passenger("kadin","sit",23,89,Gender.Female,"din@gmail.com");
const passenger2 = new Passenger("Yong","Dek",76,81,Gender.Male,"46E.@gamil.com");
const passenger3 = new Passenger("NIk","Nas",31,99,Gender.Female,"nik@gmail.com");
// console.log(passenger1);

const flight1=new Flight("1TYK",FlightType.oneway)
const flight2=new Flight("2TYK",FlightType.roundtrip)
const flight3=new Flight("3TYK",FlightType.oneway)
const flight4=new Flight("4TYK",FlightType.roundtrip)
// console.log(flight1);


// const bookingRefernce1=new BookingReferenceNumber(passenger1,[flight1,flight2,flight3],[MealType.Vegetarian,MealType.Vegan]);

// console.log(bookingRefernce1);

const booking1=new Booking(345);
console.log(booking1);








