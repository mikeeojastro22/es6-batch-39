// resolve = run without errors or it means it is successful
// reject = run with errors or it means it is unsuccessful
const buyFlightTicket = () => {
    return new Promise( (resolve, reject) => {
        // setTimeout(function, timeInMilliseconds)
        // we're trying to mimic the action for getting info from the database
        setTimeout(() => {
            // this is usually the process that we are waiting for
            // query and/or request for the database
            const error = false;
            if(error){
                // unsuccessful
                reject("Error occured. You cannot book a flight!");
            } else {
                // successful
                resolve("You successfully booked a flight!");
            }
        }, 3000);
    });
}

// success - whatever we placed inside the resolve
// fail - whatever we placed inside the reject
buyFlightTicket()
.then((success) => console.log(success))
.catch((fail) => console.log(fail));