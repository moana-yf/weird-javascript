import googlemaps
from datetime import datetime

gmaps = googlemaps.Client(key='AIzaSyDpfaFWrGicg_6rF6kVrNn2RdrbVjTZ-20')

geocode_result = gmaps.places(query="ATM", region=".id")
print(geocode_result)
