# w Pattern printing========================
n = int(input("enter a number_  "))

for i in range(n):
    # space conting --- 
    d={'sp1': i, 'sp2':(n-1-i)*2, 'sp3': (i*2)}

    # printing row-wish sp1 \ sp2 / sp3 \ sp2 /
    print( (" "*d['sp1']), "\\", (" "*d['sp2']), "/", (" "*d['sp3']), "\\", (" "*d['sp2']), "/", sep='')
