class Passenger {
    passengerId: string;
    name: string;
    bookingReference: Booking | null;
    boardingPasses: BoardingPass[];
  
    constructor(passengerId: string, name: string) {
      this.passengerId = passengerId;
      this.name = name;
      this.bookingReference = null;
      this.boardingPasses = [];
    }
  
    addBookingReference(bookingReference: Booking): void {
      this.bookingReference = bookingReference;
    }
  
    addBoardingPass(boardingPass: BoardingPass): void {
      this.boardingPasses.push(boardingPass);
    }
  }
  
  class Flight {
    flightNumber: string;
    departureAirport: Airport;
    arrivalAirport: Airport;
    departureTime: Date;
    arrivalTime: Date;
    passengers: Passenger[];
  
    constructor(
      flightNumber: string,
      departureAirport: Airport,
      arrivalAirport: Airport,
      departureTime: Date,
      arrivalTime: Date
    ) {
      this.flightNumber = flightNumber;
      this.departureAirport = departureAirport;
      this.arrivalAirport = arrivalAirport;
      this.departureTime = departureTime;
      this.arrivalTime = arrivalTime;
      this.passengers = [];
    }
  
    addPassenger(passenger: Passenger): void {
      this.passengers.push(passenger);
    }
  }
  
  class Airport {
    code: string;
    name: string;
    city: string;
  
    constructor(code: string, name: string, city: string) {
      this.code = code;
      this.name = name;
      this.city = city;
    }
  }
  
  class Booking {
    bookingReferenceNumber: string;
    flights: Flight[];
    passenger: Passenger;
  
    constructor(
      bookingReferenceNumber: string,
      flights: Flight[],
      passenger: Passenger
    ) {
      this.bookingReferenceNumber = bookingReferenceNumber;
      this.flights = flights;
      this.passenger = passenger;
    }
  }
  
  class Baggage {
    baggageNumber: string;
    weight: number;
    destination: string;
  
    constructor(baggageNumber: string, weight: number, destination: string) {
      this.baggageNumber = baggageNumber;
      this.weight = weight;
      this.destination = destination;
    }
  }
  
  class BoardingPass {
    passenger: Passenger;
    flight: Flight;
    seatNumber: string;
    gate: Gate;
  
    constructor(
      passenger: Passenger,
      flight: Flight,
      seatNumber: string,
      gate: Gate
    ) {
      this.passenger = passenger;
      this.flight = flight;
      this.seatNumber = seatNumber;
      this.gate = gate;
    }
  }
  
  class Meal {
    mealType: string;
    passenger: Passenger | null;
  
    constructor(mealType: string) {
      this.mealType = mealType;
      this.passenger = null;
    }
  
    assignPassenger(passenger: Passenger): void {
      this.passenger = passenger;
    }
  }
  
  class FrequentFlyerMembership {
    membershipNumber: string;
    passenger: Passenger;
  
    constructor(membershipNumber: string, passenger: Passenger) {
      this.membershipNumber = membershipNumber;
      this.passenger = passenger;
    }
  }
  
  class Gate {
    gateNumber: string;
    flight: Flight | null;
  
    constructor(gateNumber: string) {
      this.gateNumber = gateNumber;
      this.flight = null;
    }
  
    assignFlight(flight: Flight): void {
      this.flight = flight;
    }
  }
  
  class Crew {
    pilot: string;
    coPilot: string;
    attendants: string[];
  
    constructor(pilot: string, coPilot: string, attendants: string[]) {
      this.pilot = pilot;
      this.coPilot = coPilot;
      this.attendants = attendants;
    }
  }
  
  class Airline {
    name: string;
    flights: Flight[];
    employees: string[];
  
    constructor(name: string) {
      this.name = name;
      this.flights = [];
      this.employees = [];
    }
  
    addFlight(flight: Flight): void {
      this.flights.push(flight);
    }
  
    addEmployee(employee: string): void {
      this.employees.push(employee);
    }
  }
  
  class AirportController {
    getPassengerDetails(bookingReference: string): void {
      // Retrieve passenger details based on booking reference
    }
  }
class AirlineManager {
    getReturnTicketPassengers(flightNumber: string): void {
      // Retrieve passengers with return tickets for a given flight
    }
  
    getSalary(): void {
      // Calculate the total salary for all employees
    }
  }
  
  class AirlineChef {
    getMealCount(flightNumber: string): void {
      // Count the number of each meal type needed for a given flight
    }
  }



  // Create airports
const airportA = new Airport("A01", "Airport A", "City A");
const airportB = new Airport("B01", "Airport B", "City B");

// Create flights
const flight1 = new Flight(
  "F001",
  airportA,
  airportB,
  new Date("2024-04-25 10:00"),
  new Date("2024-04-25 12:00")
);

const flight2 = new Flight(
  "F002",
  airportB,
  airportA,
  new Date("2024-04-26 14:00"),
  new Date("2024-04-26 16:00")
);

// Create passengers
const passenger1 = new Passenger("P001", "John Doe");
const passenger2 = new Passenger("P002", "Jane Smith");

// Create bookings
const booking1 = new Booking("B001", [flight1], passenger1);
const booking2 = new Booking("B002", [flight1, flight2], passenger2);

// Add booking references to passengers
passenger1.addBookingReference(booking1);
passenger2.addBookingReference(booking2);

// Create boarding passes
const boardingPass1 = new BoardingPass(passenger1, flight1, "12A", new Gate("G01"));
const boardingPass2 = new BoardingPass(passenger2, flight1, "15B", new Gate("G02"));
const boardingPass3 = new BoardingPass(passenger2, flight2, "10C", new Gate("G03"));

// Add boarding passes to passengers
passenger1.addBoardingPass(boardingPass1);
passenger2.addBoardingPass(boardingPass2);
passenger2.addBoardingPass(boardingPass3);

// Create meals
const meal1 = new Meal("Vegetarian");
const meal2 = new Meal("Non-Vegetarian");

// Assign meals to passengers
meal1.assignPassenger(passenger1);
meal2.assignPassenger(passenger2);

// Create an airline
const airline = new Airline("Airline XYZ");

// Add flights to the airline
airline.addFlight(flight1);
airline.addFlight(flight2);

// Add employees to the airline
airline.addEmployee("John");
airline.addEmployee("Jane");

// Create an airport controller
const airportController = new AirportController();

// Get passenger details based on booking reference
console.log("Passenger Details:");
airportController.getPassengerDetails("B001");

// Create an airline manager
const airlineManager = new AirlineManager();

// Get passengers with return tickets for a given flight
console.log("Passengers with Return Tickets:");
airlineManager.getReturnTicketPassengers("F001");

// Get the total salary for all employees
console.log("Total Salary:");
airlineManager.getSalary();

// Create an airline chef
const airlineChef = new AirlineChef();

// Count the number of each meal type needed for a given flight
console.log("Meal Count:");
airlineChef.getMealCount("F001");