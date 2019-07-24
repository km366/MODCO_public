f = open('new_major.txt', 'r')
l = []
new_l = []
for i in f.readlines():
    l.append(i)
for i in l:
    s = '<ion-select-option value="@">!</ion-select-option>'
    i = i.replace('\n', '')
    s = s.replace('!', i)
    s = s.replace('@', i.replace(' ', ''))
    new_l.append(s)
f.close()
f = open('new_final.txt', 'w')
for i in new_l:
    f.write(i)
    f.write('\n')
f.close()