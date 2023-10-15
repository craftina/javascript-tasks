class Hotel {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = Number(capacity);
        this.bookings = [];
        this.currentBookingNumber = 1;
        this.capacityByRooms = {
            single: Number(capacity) / 2,
            double: Number(capacity) * 30 / 100,
            maisonette: Number(capacity) * 20 / 100
        };
    }

    get roomPricing() {
        return {
            single: 50,
            double: 90,
            maisonette: 132
        };
    }

    rentARoom(clientName, roomType, nights) {
        if (this.capacityByRooms[roomType] > 0) {
            let client = {
                clientName,
                roomType,
                nights,
                rentNumber: this.currentBookingNumber
            }
            this.bookings.push(client);
            this.currentBookingNumber += 1;
            this.capacityByRooms[roomType] -= 1;
            return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this.currentBookingNumber - 1}.`;
        } else {
            let result = `No ${roomType} rooms available!`;

            for (const type in this.capacityByRooms) {
                if (type !== roomType && this.capacityByRooms[type] > 0) {
                    result += ` Available ${type} rooms: ${this.capacityByRooms[type]}.`
                }
            }
            return result;
        }
    }

    checkOut(currentBookingNumber) {
        const booking = this.bookings.find(b => b.rentNumber == currentBookingNumber);
        if (booking) {
            const price = booking.nights * this.roomPricing[booking.roomType];
            this.capacityByRooms[booking.roomType] += 1;
            const index = this.bookings.indexOf(booking);
            this.bookings.splice(index, 1);
            return `We hope you enjoyed your time here, Mr./Mrs. ${booking.clientName}.The total amount of money you have to pay is ${price} BGN.`
        }
        return `The booking ${currentBookingNumber} is invalid.`
    }

    report() {
        let resultArray = [];
        if (this.bookings.length > 0) {
            for (let i = 0; i < this.bookings.length; i++) {
                const booking = this.bookings[i];
                let result = `bookingNumber - ${booking.rentNumber}\nclientName - ${booking.clientName}\nroomType - ${booking.roomType}\nnights - ${booking.nights}\n`;
                if (i < this.bookings.length - 1) {
                    result += "----------\n";
                }
                resultArray.push(result);
            }
        } else {
            resultArray.push(`There are currently no bookings.`);
        }
        return `${this.name.toUpperCase()} DATABASE:\n--------------------\n` + resultArray.join('');
    }
}

let hotel = new Hotel('HotUni', 10);

console.log(hotel.rentARoom('Peter', 'single', 4));
console.log(hotel.rentARoom('Robert', 'double', 4));
console.log(hotel.rentARoom('Geroge', 'maisonette', 6));
console.log(hotel.checkOut(4));
console.log(hotel.report());
