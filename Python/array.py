import time
array = []

startAt = time.time()
for i in range(0, 100_000_000):
    array.append(i)
endAt = time.time()

print(len(array))
print(endAt-startAt)