import { Passenger } from "./Peoples/Passenger";
import { Gender } from "./Enums/Gender";
import { Flight } from "./Flight/Flight";
import { FlightType } from "./Enums/FlightType";
import { BookingReferenceNumber } from "./Ticket/BookingReference";
import { MealType } from "./Enums/MealType";
import { Booking } from "./Ticket/Booking";
import { Gate } from "./Airport/gate";
import { SeatType } from "./Enums/SeatType";
import { FrequenFlyer } from "./Ticket/FrequentFlyer";
import { Ticket } from "./Ticket/Ticket";

//==================Create Passenger=============
const passenger1 = new Passenger("kadin","sit",23,89,Gender.Female,"din@gmail.com");
const passenger2 = new Passenger("Yong","Dek",76,81,Gender.Male,"46E.@gamil.com");
const passenger3 = new Passenger("NIk","Nas",31,99,Gender.Female,"nik@gmail.com");
// console.log(passenger1);

//Flight==========================================
const flight1 = new Flight("ABC123");
const flight2=new Flight("2TYK")
const flight3=new Flight("3TYK")
const flight4=new Flight("4TYK")
// console.log(flight1);



//Booking==============
const booking1=new Booking(345);
booking1.addSeat(SeatType.EconomyClassic);
booking1.addMeal(MealType.Vegetarian);
booking1.addMeal(MealType.Vegan);
booking1.addFlight(flight1);
booking1.addFlight(flight2);
booking1.addPassenger(passenger1)
booking1.addSeat(SeatType.BusinessClass)
// console.log(booking1.getDetails());


//FrequenFlyer========
const FrequenFlyer1=new FrequenFlyer("Ronana member 1");
// console.log(FrequenFlyer1);

//=====Gate===========
const gate1=new Gate("A001");
const gate2=new Gate("A002");
const gate3=new Gate("A003");

//=======Add gate to flight
flight1.addGate(gate1);
flight2.addGate(gate2);
// console.log(flight1);

//========BoardingPass=======


//BookingRefernece==================
const bookingReference1=new BookingReferenceNumber(booking1);
// console.log(bookingReference1.getBookingDetails());

//Ticket==========
const ticket1=new Ticket(300,"456kl")
console.log(ticket1);










