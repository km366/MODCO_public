f = open('companies.txt' , 'r')
l = []
new_l = []
for i in f.readlines():
    l.append(i)
for i in l:
    temp = chr(ord(i[0]) - 32) + i[1:]
    new_l.append(temp)
f.close()
f = open('new_companies.txt', 'w')
for i in new_l:
    f.write(i)
f.close()