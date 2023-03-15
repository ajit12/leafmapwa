function genDataPoints(theColIndex) {
    //document.write(theColIndex + - + 4)

    var Center_Lat, Center_Long;

    switch(theColIndex) {
        case 0:
          // MSU Data
          Center_Lat = 42.729721;
          Center_Long = -84.481491;
          break;
        case 1:
          // OU Data
          Center_Lat = 42.67531;
          Center_Long = -83.21806;
          break;
        case 2:
          // UofM Data
          Center_Lat = 42.275051;
          Center_Long = -83.741478;
          break;
        case 3:
        // WSU Data
          Center_Lat = 42.356991;
          Center_Long = -83.065201;
          break;
    }
    // calculate X1, Y1 coordinates
    x1_from = Center_Long - 0.265;
    x1_to   = Center_Long + 0.43;
    x2_from = Center_Long - 0.151;
    x2_to   = Center_Long - 0.168;

    y1_from = Center_Lat - 0.318;
    y1_to = Center_Lat + 0.317;
    y2_from = Center_Lat + 0.03;
    y2_to = Center_Lat + 0.046;

    // create a list of 500 points
    console.log("Generating points\n");
    function coordinate(x, y) {
        this.x = x;
        this.y = y;
    }

    var coordinates = new Array();
     
    for (let i = 0; i < 250; i++) {  
        x1 = round(random.uniform(x1_from,x1_to),4)
        y1 = round(random.uniform(y1_from,y1_to),4)
        x2 = round(random.uniform(x2_from,x2_to),4)
        y2 = round(random.uniform(y2_from,y2_to),4)

        coordinates.push(new coordinate(x1, y1));
        coordinates.push(new coordinate(x2, y2));
    }
    console.log("Points Generated\n");
    // open a geojson file to add the points to
    // change the path to suit your setup

    var fs = require("fs");
    console.log(" Writing into an file ");
  
    // Sample.txt is an empty file
    fs.writeFile(
        "sample.txt",
        "Let's write a few sentences in the file",
        function (err) {
            if (err) {
            return console.error(err);
            }
  
            // If no error the remaining code executes
            console.log(" Finished writing ");
            console.log("Reading the data that's written");
  
            // Reading the file
            fs.readFile("sample.txt", function (err, data) {
            if (err) {
                return console.error(err);
            }
            console.log("Data read : " + data.toString());
        
            });
        }
    );
}
	