$(document).ready(function() {
    $('#calendar').evoCalendar({

        theme: "Orange Coral",
        // THIS PART IS FOR TAKING DATA AND SHOWING ON THE FRONTEND PART
        calendarEvents: [
            {
                id: 'NewYear', // Event's ID (required)
                name: "New Year", // Event name (required)
                date: "January/1/2020", // Event date (required)
                description: "Happy new year!!!",
                type: "holiday", // Event type (required)
                everyYear: true // Same event every year (optional)
            },
            {
                name: "Vacation Leave",
                badge: "02/13 - 02/15", // Event badge (optional)
                date: ["February/13/2024", "February/15/2024"], // Date range
                description: "Vacation leave for 3 days.", // Event description (optional)
                type: "event",
                color: "#63d867" // Event custom color (optional)
            },
            {
                name: "Birthday",
                
                date: "January/7/2002", // Date range
                description: "Today it's my birthday", // Event description (optional)
                type: "event",
                color: "#63d867",
                everyYear: true

            },
            {
                name: "Vacation Leave",
                
                date: "January/8/2024", // Date range
                description: "Vacation leave for 3 days.", // Event description (optional)
                type: "event",
                color: "#63d867" 
            },
            {
                name: "End of The Finals",
                badge: "",
                date: "January/21/2024",
                description:"The end of the finals",
                type: "event",
                
            },
            {
                name:"burak",
                date: "January/10/2024",
                description: "burakcım",
                type: "event"




            }

        ]
    })
})