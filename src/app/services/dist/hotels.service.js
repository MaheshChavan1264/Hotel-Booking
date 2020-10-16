"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HotelsService = void 0;
var core_1 = require("@angular/core");
var HotelsService = /** @class */ (function () {
    function HotelsService() {
        this.hotels = [
            {
                id: 1,
                name: 'Radisson Blu Hotel New Delhi Dwarka',
                rating: '5 Star',
                photoUrl: '../../assets/hotels/radisson.jpg',
                speciality: 'Luxury hotel with 3 restaurants & a spa',
                address: 'Plot 4, Dwarka City Centre, Sector 13, Dwarka',
                phone: '01130908000',
                link: 'https://www.radissonblu.com/en/hotel-newdelhidwarka'
            },
            {
                id: 2,
                name: 'La Wisteria',
                rating: '3 Star',
                photoUrl: '../../assets/hotels/la.jpg',
                speciality: 'Modern hotel with free breakfast',
                address: 'Plot No.52, Sector 12 B, Dwarka, Opposite Bal Bhawan International School',
                phone: '011 4933 8800',
                link: 'http://www.lawisteria.com/'
            },
            {
                id: 3,
                name: 'Dwarka Palace',
                rating: '3 Star',
                photoUrl: '../../assets/hotels/dwarka.jpg',
                speciality: 'Modern hotel with free breakfast',
                address: 'C991, Behind Maxfort School, Sector 7, Dwarka',
                phone: '099710 54499',
                link: 'http://www.hoteldwarkapalace.com/'
            },
            {
                id: 4,
                name: 'MSK Residency',
                rating: '3 Star',
                photoUrl: '../../assets/hotels/msk.jpg',
                speciality: 'Modern hotel with free breakfast',
                address: 'Plot No 4, Sector 12A, Dwarka, New Delhi, Delhi 110075',
                phone: '078386 24600',
                link: 'http://www.mskresidencydwarka.com/'
            },
            {
                id: 5,
                name: 'Hotel Sai International Dwarka',
                rating: '2 Star',
                photoUrl: '../../assets/hotels/sai.jpg',
                speciality: 'Modern hotel with free breakfast',
                address: 'Plot No 37, Sector 12, Dwarka, New Delhi, Delhi 110078',
                phone: '081304 33002',
                link: 'http://saiinternationaldwarka.in'
            },
            {
                id: 6,
                name: 'WelcomHotel Dwarka',
                rating: '5 Star',
                photoUrl: '../../assets/hotels/welcome.jpg',
                speciality: 'Modern hotel with free breakfast',
                address: 'Plot No.3, District Center, Sector 10, Dwarka, New Delhi, Delhi 110075',
                phone: '011 4222 9222',
                link: 'http://www.itchotels.in/Hotels/welcomhoteldwarka.aspx'
            },
            {
                id: 7,
                name: 'Hotel Royal Star',
                rating: '3 Star',
                photoUrl: '../../assets/hotels/royal.jpg',
                speciality: 'Modern hotel with free breakfast',
                address: 'Plot No.9, Sector 10,In Front of Dwarka Metro Station Sector 10,Dwarka, New Delhi, Delhi 110075',
                phone: '011 4048 0000',
                linkr: 'http://www.hotelroyalstar.com/'
            },
            {
                id: 8,
                name: 'Vivanta by Taj - Dwarka, New Delhi',
                rating: '4 Star',
                photoUrl: '../../assets/hotels/vivanta.jpeg',
                speciality: 'Modern hotel with free breakfast',
                address: 'Near Metro Station Complex, Sector 21, Dwarka, New Delhi, Delhi 110075',
                phone: '011 6600 3000',
                link: 'http://www.vivantabytaj.com/dwarka-new-delhi/overview.html'
            },
            {
                id: 9,
                name: 'Krishna Residency',
                rating: '4 Star',
                photoUrl: '../../assets/hotels/krishna.jpg',
                speciality: 'Modern hotel with free breakfast',
                address: 'Plot - 2, Sector - 12 B Opp. Metro Station Sector-12, Dwarka, New Delhi, Delhi 110078',
                phone: '096438 24396',
                link: 'http://krishnaresidency.co.in/'
            }, {
                id: 10,
                name: 'Centaur Hotel',
                rating: '3 Star',
                photoUrl: '../../assets/hotels/centuar.jpg',
                speciality: 'Modern hotel with free breakfast',
                address: 'IGI Airport T3 Road, Indira Gandhi International Airport, New Delhi,Delhi 110037',
                phone: '011 6600 3000',
                link: 'http://centaurhotels.com/'
            }, {
                id: 11,
                name: 'Airport Hotel',
                rating: '4 Star',
                photoUrl: '../../assets/hotels/airport.jpg',
                speciality: 'Modern hotel with free breakfast',
                address: 'Opp. IGI Airport (T-1) Domestic, Mehram Nagar, New Delhi, Delhi 110037',
                phone: '011 2567 5262',
                link: 'http://www.airporthoteldelhi.com/'
            },
            {
                id: 12,
                name: 'Lemon Tree Premier, Delhi Airport',
                rating: '4 Star',
                photoUrl: '../../assets/hotels/lemon.jpg',
                speciality: 'Modern hotel with free breakfast',
                address: 'Asset No. 6, Aerocity Hospitality District, Indira Gandhi International Airport, New Delhi, Delhi 110037',
                phone: '011 4423 2323',
                link: 'http://www.lemontreehotels.com/lemon-tree-premier/delhi/delhi-internationalairport.aspx'
            }
        ];
    }
    HotelsService.prototype.getHotels = function () {
        return this.hotels;
    };
    HotelsService.prototype.addNewHotel = function (hotel) {
        this.hotels.push(hotel);
        return this.hotels;
    };
    HotelsService.prototype.removeHotel = function (attr, value) {
        var i = this.hotels.length;
        while (i--) {
            if (this.hotels[i] && this.hotels[i].hasOwnProperty(attr) && this.hotels[i][attr] === value) {
                this.hotels.splice(i, 1);
            }
        }
        return this.hotels;
    };
    HotelsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], HotelsService);
    return HotelsService;
}());
exports.HotelsService = HotelsService;
