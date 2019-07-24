majors = []
f = open('new_major.txt' , 'r')
for i in f.readlines():
    temp = i.replace('\n','')
    majors.append(temp)
print(majors[56])