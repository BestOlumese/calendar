function Calendar() {

    this.days = [];
    this.daysSection = $("<div>").attr("id", "daysSection");
    this.daysSection.on("dblclick", ".day", function(click) {
        var day = $(click.currentTarget);
        
        promptForEvent(day);
    });

    $("#calendar").append(this.daysSection);

    this.fill = function() {
        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var month = document.getElementById("month");
        month.innerHTML = monthNames[date.getMonth()];
    
        var year = document.getElementById("year");
        year.innerHTML = date.getUTCFullYear();
    
        var lastDay = new Date(date.getUTCFullYear(), date.getMonth() + 1, 0).getDate();
    
        for (var dayNumber = 1; dayNumber <= lastDay; dayNumber++) {
    
            var day = new Day(new Date(date.getUTCFullYear(), date.getMonth(), dayNumber));
            var dayCell = new DayCell(day);
    
            this.daysSection.append(dayCell.element);
            this.days.push(dayCell);
        }
    }

    this.clearDays = function() {
        this.daysSection[0].innerHTML = "";
    }
}