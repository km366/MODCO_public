f = open('majors.txt', 'r')
l = []
for i in f.readlines():
    l.append(i)
for i in l:
    if i == '\n':
        l.remove(i)
l = [s.replace('\n', '') for s in l]
for i in l:
    if i[0] == '[':
        l.remove(i)
    if i[len(i)-1] == ')':
        c = len(i)-1
        while True:
            if i[c] == ' ':
                break
            else:
                i.replace(i[c], '')
            c -= 1
f.close()
f = open('new_major.txt', 'w')
for i in l:
    f.write(i)
    f.write('\n')
f.close()


