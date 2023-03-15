import random

#print(CollegeIndex)
 # UofM: (42.280827, -83.743034)
 # Kildare (Sample Place) (53.15,-6.9)
 # MSU: 42.701472, -84.483582
 # WSU: 42.358532, -83.066050

#y1_from  =	y_center -0.05
#y1_to    =  y_center +0.05
#y2_from  =	y_center +.03
#y2_to    =  y_center +.046
#x1_from	=  x_center -0.05
#x1_to	   =  x_center +0.05
#x2_from  =	x_center -0.05
#x2_to    =  x_center -0.05


x_center = 42.358532
y_center = -83.066050
geoJson_FileName = "/Users/ajits1/leafmap/points__wsu.geojson"
heatPoints_FileName = "/Users/ajits1/leafmap/heat_points_wsu.js"
heatPoints_VariableName = 'var heat_points_wsu = ['

y1_from  =	y_center -0.02
y1_to    =  y_center +0.02
y2_from  =	y_center +.01
y2_to    =  y_center +.02
x1_from	=  x_center -0.02
x1_to	   =  x_center +0.02
x2_from  =	x_center -0.05
x2_to    =  x_center -0.05

# create a list of 500 points
coordinates = []

for coord in range(250):
 x1 = round(random.uniform(x1_from,x1_to),4)
 y1 = round(random.uniform(y1_from,y1_to),4)
 x2 = round(random.uniform(x2_from,x2_to),4) 
 y2 = round(random.uniform(y2_from,y2_to),4)

 point1 = [x1,y1]
 point2 = [x2,y2]
 
 coordinates.append(point1)
 coordinates.append(point2)

# open a geojson file to add the points to
# change the path to suit your setup

f = open(geoJson_FileName, "w")

# opening bracket
f.write('[')

count = 1

# add data to the geojson file (formatted)
for coord in coordinates:
 if count == 1:
  f.write('{\n \
  \t"type": "Feature",\n \
  \t"geometry": {\n \
  \t\t"type": "Point",\n \
  \t\t"coordinates": [' + str(coord[0]) + ',' + str(coord[1]) + ']\n \
  \t}\n \
  }')
 
  count = count + 1
 
 else:
  f.write(',{\n \
  \t"type": "Feature",\n \
  \t"geometry": {\n \
  \t\t"type": "Point",\n \
  \t\t"coordinates": [' + str(coord[0]) + ',' + str(coord[1]) + ']\n \
  \t}\n \
  }')
 
  count = count + 1

# closing bracket
f.write(']')
# close the file
f.close()

# open a JavaScript file to store coordinates in lat,long
# change the path to suit your setup
f2 = open(heatPoints_FileName, "w")
# create a variable
f2.write(heatPoints_VariableName)

count = 1

# write data to js file
for coord in coordinates:
 if count == 1:
#  f2.write('[' + str(coord[1]) + ',' + str(coord[0]) + ']') Switching index order of X-y coordinates.
   f2.write('[' + str(coord[0]) + ',' + str(coord[1]) + ',' + str(random.random()) +  ']')

   count = count + 1
 
 else:
#  f2.write(',[' + str(coord[1]) + ',' + str(coord[0]) + ']')
   f2.write(',[' + str(coord[0]) + ',' + str(coord[1]) + ',' + str(random.random()) + ']')

   count = count + 1
# closing bracket
f2.write(']')
# close file
f2.close()