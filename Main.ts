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
import { BoardingPass } from "./Flight/BoardingPass";
import { Chef } from "./Peoples/chef";
import { Manager } from "./Peoples/Manager";
import { Pilot } from "./Peoples/Pilot";
import { CoPilot } from "./Peoples/CoPilot";
import { Controllers } from "./Peoples/Controllers";
import { FlightAttendent } from "./Peoples/FlightAttendent";
import { Baggage } from "./Flight/Baggage";
import { checkIn } from "./Flight/checkIn";
import { baggaeHandler } from "./Peoples/baggageHandler";



//==================Create Passenger=============
const KadinSit = new Passenger("kadin","sit",23,89,Gender.Female,"din@gmail.com");
const YonDok = new Passenger("Yong","Dek",76,81,Gender.Male,"46E.@gamil.com");
const NIkNas= new Passenger("NIk","Nas",31,99,Gender.Female,"nik@gmail.com");


//======================Create Flight===============
const flightABC123 = new Flight("ABC123");
const flight2TYK=new Flight("2TYK")
const flight3TYK=new Flight("3TYK")
const flight4TYK=new Flight("4TYK")
// console.log(flightABC123);

//========Create Address===============
const Camobodia=new Address("001A","PP","Cambodia");
const USA=new Address("B002","New York","USA");
const UK=new Address("C03","TOYO","UK");

//============Create Date=================
const April2024=new Date('10', 'April', 2024, '10:00 AM');
const Feburary2022=new Date('31', 'Feburary', 2022, '13:00 PM');
const May2024=new Date('27', 'May', 2024, '10:00 AM');
const March2025=new Date('03', 'March', 2025, '23:00 PM');
// console.log(bookingFLight1.getDetails());

//=====Create FrequenFlyer========
const dinFrequenflyer=new FrequenFlyer("Ronana member 1");
// console.log(ronNanFrequenflyer);

//=====Create Gate===========
const gate1=new Gate("A001");
const gate2=new Gate("A002");
const gate3=new Gate("A003");

//=======Add gate to flight============
flightABC123.addGate(gate1);
flightABC123.addFlightType(FlightType.oneway);
flight2TYK.addFlightType(FlightType.roundtrip);
flight2TYK.addGate(gate2);
// console.log(flightABC123);



//=========Create Seat=================
const seat1=new Seat(SeatType.EconomyFlex,"A001");
const seat2=new Seat(SeatType.EconomyClassic,"A002");
const seat3=new Seat(SeatType.BusinessClass,"A003");
seat1.addPassenger(KadinSit);
seat2.addPassenger(YonDok);


//=======Create Aeroplane==========
const aeroplanAT01=new Aeroplane("AT01");
const aeroplaneAT02=new Aeroplane("AT02");
const AeroplaneAT03=new Aeroplane("AT03");
aeroplanAT01.addSeat(seat1);
aeroplanAT01.addSeat(seat2);
aeroplaneAT02.addSeat(seat3);
AeroplaneAT03.addSeat(seat2);
// console.log(aeroplanAT01);

//=============Create Airline=============
const camAirline=new Airline("CAM");
const thaAirline=new Airline("THA");
const usaAirplaine=new Airline("USA");
camAirline.addAeroplane(aeroplanAT01);
camAirline.addAeroplane(AeroplaneAT03);
// console.log(aeroplanAT01);

//=============Airport============
const phnomPenhAirport=new Airport("001","អាកសយានដ្ធានភ្នំពេញ");
const seimReabAirport=new Airport("001","អាកសយានដ្ធានសៀមរាប");
const rtkAirport=new Airport("001","អាកសយានដ្ធានរតនគិរី");
phnomPenhAirport.addAirline(camAirline)
phnomPenhAirport.addAirline(thaAirline)
phnomPenhAirport.addAddress(USA);
// console.log(phnomPenhAirport);

//========Create FlightRoute==================
const firstFLightRoute=new FlightRoute("001");
firstFLightRoute.addArrivalAirport(phnomPenhAirport);
firstFLightRoute.addDepartureAirport(seimReabAirport);
firstFLightRoute.addDepartureDate(April2024);
firstFLightRoute.addArrivalDate(Feburary2022);

const secondFlightRoute=new FlightRoute("002");
secondFlightRoute.addDepartureDate(April2024)
flight2TYK.addFlightRoute(secondFlightRoute)
// console.log(firstFLightRoute);

//============add flightRoute to flight=================
flightABC123.addFlightRoute(firstFLightRoute);
// console.log(flightABC123);

//========Create Ticket==========
const ticket1 = new Ticket( 1,'TKT123456',true, SeatType.BusinessClass,[MealType.Vegetarian, MealType.Vegan],flightABC123,KadinSit,April2024,April2024);
const ticket2 = new Ticket( 2,'TKT123489',true, SeatType.BusinessClass,[MealType.Vegetarian, MealType.Vegan],flightABC123,KadinSit,April2024,April2024);
const ticket3 = new Ticket( 3,'TKT123478',false, SeatType.BusinessClass,[MealType.Vegetarian, MealType.Vegan],flightABC123,KadinSit,April2024,April2024);
// console.log(ticket1);


//========Create Booking==============
const bookingFLight1=new Booking(345,200);
const bookingFlight2=new Booking(245,300);
const bookingFlight3=new Booking(987,100);
bookingFLight1.addSeat(SeatType.EconomyClassic);
bookingFLight1.addMeal(MealType.Vegetarian);
bookingFLight1.addMeal(MealType.Vegan);
bookingFLight1.addFlight(flightABC123);
bookingFLight1.addPassenger(KadinSit)
bookingFLight1.addSeat(SeatType.BusinessClass)
bookingFLight1.addDepartureDate(Feburary2022);
bookingFLight1.addReturnDate(May2024);
bookingFLight1.addTicket(ticket3);
bookingFLight1.addTicket(ticket2);

bookingFlight2.addSeat(SeatType.EconomyClassic);
bookingFlight2.addMeal(MealType.Vegetarian);
bookingFlight2.addMeal(MealType.Vegan);
bookingFlight2.addFlight(flightABC123);
bookingFlight2.addPassenger(NIkNas);
bookingFlight2.addSeat(SeatType.BusinessClass)
bookingFlight2.addDepartureDate(Feburary2022);
bookingFlight2.addReturnDate(May2024);
bookingFlight2.addTicket(ticket1);


bookingFlight3.addSeat(SeatType.EconomyClassic);
bookingFlight3.addMeal(MealType.Vegan);
bookingFlight3.addMeal(MealType.Vegan);
bookingFlight3.addFlight(flightABC123);
bookingFlight3.addPassenger(YonDok)
bookingFlight3.addSeat(SeatType.BusinessClass)
bookingFlight3.addDepartureDate(Feburary2022);
bookingFlight3.addReturnDate(May2024);
bookingFlight3.addTicket(ticket1);
bookingFlight3.addTicket(ticket2);
// console.log(bookingFLight1);



// =======Creat BookingRefernece==================
const bookingReference1=new BookingReferenceNumber();
bookingReference1.addBooking(bookingFLight1);
bookingReference1.addBooking(bookingFlight2);
bookingReference1.addBooking(bookingFlight3);


//=======CheckIn===================
const DincheckIn=new checkIn(1,"din02",true,KadinSit);

//=======Add Ticket======
DincheckIn.addTickect(ticket1);

//========BoardingPass=======
const boardingPass = new BoardingPass(ticket1, Feburary2022, DincheckIn);
// console.log(boardingPass);

//========Add boardingPass to flight==========
flight2TYK.addBoardingPass(boardingPass);

//==========Create Baggage=======
const kaDinBaggage=new Baggage("GK001",20);
const kaDinBaggage1=new Baggage("GK002",20);
const NakBaggage=new Baggage("GK003",20);

//======Passenger Baggage==========
KadinSit.addBaggage(kaDinBaggage);
KadinSit.addBaggage(kaDinBaggage1);

//=======Add frequanflyer to Passenger=======
KadinSit.addFrequanflyer(dinFrequenflyer)

//==========Create Employees==============
const chefHak=new Chef('Hak', 'Sava', 170, 34, Gender.Male, 70000, 100);
const naNaAttendent=new FlightAttendent('Nana', 'Smos', 178, 98, Gender.Female, 7000, 30);
const naTaAttendent=new FlightAttendent('Nata', 'haha', 130, 67, Gender.Female, 7000, 1);
const CopilotHa=new CoPilot('Haha', 'Save', 130, 34, Gender.Male, 2000,1000);
const contollerHuu=new Controllers('Huu', 'Savara', 150, 34, Gender.Female,1000, 10000);
const managerHals= new Manager('Hals', 'Sa', 176, 34, Gender.Male, 2500, 100);
const pilotHakZin=new Pilot('Hak', 'Chunn', 170, 34, Gender.Male, 700000, 100);
const Nok=new baggaeHandler('Nok', 'Sa', 150, 54, Gender.Male, 700, 1);
const kaka=new baggaeHandler('Kaka', 'SreyKa', 190, 57, Gender.Female, 500, 2);

//============Add BaggagerHanders to airline==============
camAirline.addBaggageHnadler(Nok);
camAirline.addBaggageHnadler(kaka);
YonDok.addBaggage(NakBaggage);

//=========== Add employee to manager list=============
managerHals.addEmployee(chefHak);
managerHals.addEmployee(CopilotHa);
managerHals.addEmployee(contollerHuu);
managerHals.addEmployee(pilotHakZin);
managerHals.addEmployee(naNaAttendent);
managerHals.addEmployee(naTaAttendent);

//===========Add (flightAttendent , pilot, chef, CO-pilot to flight)============
flight2TYK.addChef(chefHak);
flight2TYK.addFlightAttendent(naNaAttendent);
flight2TYK.addFlightAttendent(naTaAttendent);
flight2TYK.addCoPilot(CopilotHa);
flight2TYK.addPilot(pilotHakZin);

//========Add passenger to flight=====
flight2TYK.addPassenger(KadinSit);
flight2TYK.addPassenger(YonDok);

//========Add baggage to flight======
flight2TYK.CountBaggage(kaDinBaggage);
flight2TYK.CountBaggage(NakBaggage);

//=======Assign flight to baggage Handler========
Nok.addFlight(flight2TYK);
Nok.addFlight(flight3TYK);

//===========Count number of each mealType that chef should prepare in a flight (by given flight)=============
const chefLeak=new Chef('Leak', 'Smos', 160, 75, Gender.Female, 50000, 10);
chefLeak.addBookingReference(bookingReference1)
console.log(`1/ ${chefLeak.CountsMealTypeForFlight(flightABC123)}`);

//=======Get gate that passenger wait for aeroplane of his flight(by given flight)===========
KadinSit.addBooking(bookingFLight1);
KadinSit.addBooking(bookingFlight2);
console.log(`2/ Your plane that waiting  at Gate ${KadinSit.getGate(flightABC123)}`);

//=========Manager want to know how much money that he must paid for all employees=============
console.log(`3/ I will paid ${managerHals.getTotalSalaryPaid()}$ for all my employees.`);

//======Pliot want to know how many flight he has (by given date)========
pilotHakZin.addFlight(flightABC123);
pilotHakZin.addFlight(flight2TYK);
pilotHakZin.addFlight(flight3TYK);
console.log(`4/ ${pilotHakZin.GetFlight(April2024)}`);

//=======Manager want to know how many tickects that return ==============
managerHals.addBookingReference(bookingReference1);
console.log(`5/ The ticket that return has ${managerHals.getNumberReturnTicket()}`);

//======Get Information details of passenger (by given BookingNumber of each passenger that has been booking already)==========
contollerHuu.addBookingReference(bookingReference1);
console.log( `6/ ${contollerHuu.getDetailInformation(345)}`);

//===============As a baggage handler I want to know how many baggages in each flight that I will response (by given flightNumber)=========
const numberOfBags = Nok.getNumberOfBagsForFlight('2TYK');
const bagsMessage = numberOfBags !== null ? (numberOfBags < 2 ? 'baggage' : 'baggages') : '';
console.log(`7/ In flight2TYK has ${numberOfBags} ${bagsMessage}.`);






















