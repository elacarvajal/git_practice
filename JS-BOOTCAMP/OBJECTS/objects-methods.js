let restaurant = {
    name: 'ACL',
    guestCapacity: 75,
    guestCount: 73,
    checkAvailability: function (partySize){
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft

    }, 
    seatParty: function (partySize){
        this.guestCount = this.guestCount + partySize 

    },
    removeParty: function (partySize){
        this.guestCount = this,this.guestCount - partySize

    }
}




restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4)) //false 
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4)) //true