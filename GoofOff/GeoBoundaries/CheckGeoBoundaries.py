# import fiona
# import shapely
# from shapely import geometry

# path = "../../../Desktop/Shapefiles/cb_2016_us_nation_20m.shp"


# with fiona.open("Shapefiles/cb_2016_us_nation_20m.shp") as fiona_collection:

#     # In this case, we'll assume the shapefile only has one record/layer (e.g., the shapefile
#     # is just for the borders of a single country, etc.).
#     shapefile_record = fiona_collection.next()

#     # Use Shapely to create the polygon
#     shape = shapely.geometry.asShape( shapefile_record['geometry'] )

#     #point = shapely.geometry.Point(43.670397, -79.381550) # longitude, latitude - Address in Toronto
#     point = shapely.geometry.Point(37.4905688,-77.4447187) # longitude, latitude - Address in Virginia

#     # Alternative: if point.within(shape)
#     if shape.contains(point):
#         print "In United States"
#     else:
#     	print "Not in United States"

import shapefile
from shapely.geometry import Point
from shapely.geometry import Polygon
#import shapely
#from shapely import geometry
#from shapely.geometry import Point # Point class
#from shapely import shape # shape() is a function to convert geo objects through the interface

point = (37.4905688,-77.4447187) # an x,y tuple
shp = shapefile.Reader('Shapefiles/Ungeneralized/tl_2017_us_state.shp') #open the shapefile
all_shapes = shp.shapes() # get all the polygons
all_records = shp.records()
for i in range(len(all_shapes)):
    boundary = all_shapes[i] # get a boundary polygon
    if Point(point).within(Polygon(boundary)): # make a point and see if it's in the polygon
       name = all_records[i][2] # get the second field of the corresponding record
       print "The point is in", name

#Change to practice git integration in vs code - just a test.