# 2d list diagonal practice===============================
# function for finding place of "K"
def kPlace(k,matrix):
    for i in range(len(matrix)):
        for j in range(len(matrix[0])):
            if matrix[i][j] == k:
                # return Row, and colum
                return[i,j]

# function for 'list to string and print'
def listPrint(l):
    s=""
    for i in range(len(l)):
        s+=str(l[i])+" "
    print(s)
    return

# matrix row = 4 and colum = 6
matrix =[
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10,11,12],
    [13,14,15,16,17,18],
    [19,20,21,22,23,24]
]

# input for special space
k =int(input("Enter Value of K => 1 to 24 __  "))

# Place of 'K'
kRow,kCol=kPlace(k,matrix)

# diagonal printin left to right
if kRow==kCol:
    stRow = stCol =0
elif kRow<kCol:
    stRow = 0
    stCol = kCol-kRow
elif kCol<kRow:
    stCol=0
    stRow = kRow-kCol
s=[]
while(stCol<len(matrix[0]) and stRow<len(matrix)):
    s.append(matrix[stRow][stCol])
    stCol+=1
    stRow+=1
listPrint(s)


# diagona printing right to left
if kRow+kCol<len(matrix[0]):
    row = 0
    col = kRow+kCol
else:
    col= len(matrix[0])-1
    row = (1+kRow+kCol)-(len(matrix[0]))
d2=[]
while(row<len(matrix))and (col>=0):
    # print(row,col)
    d2.append(matrix[row][col])
    row+=1
    col-=1
listPrint(d2)