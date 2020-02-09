var journey = [
    {
        stop: "Manchester Piccadilly",
        min: 0
    },
    {
        stop: "Stockport",
        min: 11
    },
    {
        stop: "Wilmslow",
        min: 23
    },
    {
        stop: "Crewe",
        min: 29
    },
    {
        stop: "Stafford",
        min: 37
    },
    {
        stop: "Lichfield Trent Valley",
        min: 50
    },
    {
        stop: "Tamworth",
        min: 65
    },
    {
        stop: "Rugby",
        min: 88
    },
    {
        stop: "Northampton",
        min: 103
    },
    {
        stop: "Milton Keynes Central",
        min: 125
    },
    {
        stop: "London Euston",
        min: 140
    }
];

var checkStations = function (min) {
    for (var i = 0; i < journey.length; i++) {

        if (min === journey[i].min) {
            var calling = "Stopping at";
            if (journey[i].stop === "Manchester Piccadilly") {
                calling = "Departing from"
            } else if (journey[i].stop === "London Euston") {
                calling = "Arriving to"
            }
            console.log(`${calling} ${journey[i].stop}`)
        }
    }
}

var count = 0;

var time = setInterval(function () {
    console.log(convertTime(count));
    checkStations(count);
    count++;
    if (count == 141) {
        clearInterval(time);
    }
}, 100);

var convertTime = function (min) {
    if (min < 60) {
        return (`14:${addZero(min)}`)
    } else if (min < 120) {
        min -= 60;
        return (`15:${addZero(min)}`)
    } else {
        min -= 120;
        return (`16:${addZero(min)}`)
    }
};

var addZero = function (min) {
    if (min < 10) {
        return (`0${min}`)
    } else {
        return min;
    }
}