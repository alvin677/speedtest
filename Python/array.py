import time

array = []
startAt = time.time()
for i in range(0, 999_999_99):
    array.append(i)
endAt = time.time()

print(len(array))
print(endAt-startAt)