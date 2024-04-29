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
import { Date } from "./Address/Date";
import { Ticket } from "./Ticket/Ticket";
import { Seat } from "./Airport/Seat";
import { Aeroplane } from "./Airport/Areoplan";
import { Airline } from "./Airport/Airline";
import { Airport } from "./Airport/Airport";
import { Address } from "./Address/Address";
import { FlightRoute } from "./Flight/FlightRoute";
import { BoardingPass } from "./Ticket/BoardingPass";
import { Chef } from "./Peoples/chef";


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

//Address===============
const Address1=new Address("001A","PP","Cambodia");
const address2=new Address("B002","New York","USA");
const address3=new Address("C03","TOYO","UK");

//Date=================
const date1=new Date('10', 'April', 2024, '10:00 AM');
const date2=new Date('31', 'Feburary', 2022, '13:00 PM');
const date3=new Date('27', 'May', 2024, '10:00 AM');
const date4=new Date('03', 'March', 2025, '23:00 PM');


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




//Seat=================
const seat1=new Seat(SeatType.EconomyFlex,"A001");
const seat2=new Seat(SeatType.EconomyClassic,"A002");
const seat3=new Seat(SeatType.BusinessClass,"A003");
seat1.addPassenger(passenger1);
seat2.addPassenger(passenger2);
seat3.addPassenger(passenger3);
// console.log(seat1);

//Aeroplane==========
const aeroplane1=new Aeroplane("AT01");
const aeroplane2=new Aeroplane("AT02");
const aeroplane3=new Aeroplane("AT03");
aeroplane1.addSeat(seat1);
aeroplane1.addSeat(seat2);
aeroplane2.addSeat(seat3);
aeroplane3.addSeat(seat2);
// console.log(aeroplane1);

//Airline===============
const airline1=new Airline("CAM");
const airline2=new Airline("THA");
const airline3=new Airline("USA");
airline1.addAeroplane(aeroplane1);
airline1.addAeroplane(aeroplane3);
// console.log(aeroplane1);

//Airport============
const airport1=new Airport("001","អាកសយានដ្ធានភ្នំពេញ");
const airport2=new Airport("001","អាកសយានដ្ធានសៀមរាប");
const airport3=new Airport("001","អាកសយានដ្ធានរតនគិរី");
airport1.addAirline(airline1)
airport1.addAirline(airline2)
airport1.addAddress(address2);
// console.log(airport1);

//FlightRoute==================
const flightRoute1=new FlightRoute("001");
flightRoute1.addArrivalAirport(airport1);
flightRoute1.addDepartureAirport(airport2);
flightRoute1.addDepartureDate(date1);
flightRoute1.addArrivalDate(date2);
// console.log(flightRoute1);

//add flightRoute to flight
flight1.addFlightRoute(flightRoute1);
// console.log(flight1);

//Tickect==========
const ticket1 = new Ticket( 1,'TKT123456',true, SeatType.BusinessClass,[MealType.Vegetarian, MealType.Vegan],flight1,passenger1,date1,date4);
const ticket2 = new Ticket( 2,'TKT123489',true, SeatType.BusinessClass,[MealType.Vegetarian, MealType.Vegan],flight1,passenger1,date1,date4);
const ticket3 = new Ticket( 3,'TKT123478',false, SeatType.BusinessClass,[MealType.Vegetarian, MealType.Vegan],flight1,passenger1,date1,date4);
// console.log(ticket1);


//Booking==============
const booking1=new Booking(345);
const booking2=new Booking(245);
const booking3=new Booking(987);
booking1.addSeat(SeatType.EconomyClassic);
booking1.addMeal(MealType.Vegetarian);
booking1.addMeal(MealType.Vegan);
booking1.addFlight(flight2);

booking1.addPassenger(passenger1)
booking1.addSeat(SeatType.BusinessClass)
booking1.addDepartureDate(date2);
booking1.addReturnDate(date3);
booking1.addTicket(ticket3);
booking1.addTicket(ticket2);

booking2.addSeat(SeatType.EconomyClassic);
booking2.addMeal(MealType.Dairy_Free);
booking2.addMeal(MealType.Vegan);
booking2.addFlight(flight3);
booking2.addPassenger(passenger3)
booking2.addSeat(SeatType.BusinessClass)
booking2.addDepartureDate(date2);
booking2.addReturnDate(date3);
booking2.addTicket(ticket1);
booking2.addTicket(ticket2);

booking3.addSeat(SeatType.EconomyClassic);
booking3.addMeal(MealType.Vegan);
booking3.addMeal(MealType.Vegan);
booking3.addFlight(flight1);
booking3.addPassenger(passenger3)
booking3.addSeat(SeatType.BusinessClass)
booking3.addDepartureDate(date2);
booking3.addReturnDate(date3);
booking3.addTicket(ticket1);
booking3.addTicket(ticket2);
// console.log(booking1);



//BookingRefernece==================
const bookingReference1=new BookingReferenceNumber();
bookingReference1.addBooking(booking1);
bookingReference1.addBooking(booking2);
bookingReference1.addBooking(booking3);
// console.log(bookingReference1.displayCountEachMeal());



//========BoardingPass=======
const boardingPass = new BoardingPass(ticket1,gate3, date2, seat3);
// console.log(boardingPass);

//Chef=============
const chefLeak=new Chef('John', 'Doe', 180, 75, Gender.Male, 50000, 10);
chefLeak.addBookingReference(bookingReference1)
console.log(chefLeak.displayMealTypeCountsForFlight(flight1));

















