s = '<ion-select-option value="OtherCities">location</ion-select-option>'
l = ['Center City Philadelphia', 'University City Philadelphia', 'Cherry Hill', 'Baltimore', 'Haddonfield', 'New York', 'Pittsburgh', 'Springfield', 'Moorestown', 'Trenton', 'Wilmington']
new_l = []
for i in l:
    print(s.replace('location', i))
