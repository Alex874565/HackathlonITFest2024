import requests
import json

southwest_lat = 45.6838101
southwest_lng = 21.135378
northeast_lat = 45.798319
northeast_lng = 21.2978016

API_KEY = "AIzaSyCvwDVkVUtg3RMffu-AbpzgSKIELMXxHZI"

def get_bounds(street_name):
    url = f'https://maps.googleapis.com/maps/api/geocode/json?address={street_name}&bounds={southwest_lat},{southwest_lng}|{northeast_lat},{northeast_lng}&key={API_KEY}'
    response = requests.get(url)
    data = response.json()
    if data['status'] == 'OK':
        results = data['results'][0]
        bounds = results['geometry']['viewport']
        northeast = bounds['northeast']
        southwest = bounds['southwest']
        return northeast['lat'],northeast['lng'],southwest['lat'],southwest['lng']
    else:
        return None, None, None, None

# Read the list of street names from a file
with open('/home/alex874565/Desktop/Facultate/EasyParkTM/EasyParkTM/apiwork/o.txt', 'r') as file:
    with open('/home/alex874565/Desktop/Facultate/EasyParkTM/EasyParkTM/apiwork/data.txt', 'w') as outfile:
        lines = file.readlines()

        # Process each street name and get coordinates
        coordinates = []
        for line in lines:
            line = line.strip()
            street_name = line.split(",")[0]  # Remove trailing newline characters
            total = line.split(",")[1]
            occupied = line.split(",")[2]
            print(line)
            nelat, nelng, swlat, swlng = get_bounds(street_name)
            i = 0
            if(nelat != None and nelng != None and swlat != None and swlng != None):
                i += 1
                outfile.write(f"(\'{street_name}\',{total},{occupied},{nelat},{nelng},{swlat},{swlng}),\n")
                print(f"({i} \'{street_name}\',{total},{occupied},{nelat},{nelng},{swlat},{swlng}),\n")