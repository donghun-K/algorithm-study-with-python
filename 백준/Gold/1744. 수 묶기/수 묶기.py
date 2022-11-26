import sys

input = sys.stdin.readline
from queue import PriorityQueue

N = int(input())

plus_q = PriorityQueue()
minus_q = PriorityQueue()
n_one = 0
n_zero = 0

for i in range(N):
    data = int(input())
    if data > 1:
        plus_q.put(data * -1)
    elif data == 1:
        n_one += 1
    elif data == 0:
        n_zero += 1
    else:
        minus_q.put(data)

sum = 0

while plus_q.qsize() > 1:
    sum += plus_q.get() * plus_q.get()

if plus_q.qsize() > 0:
    sum += plus_q.get() * -1

while minus_q.qsize() > 1:
    sum += minus_q.get() * minus_q.get()

if minus_q.qsize() > 0:
    if n_zero == 0:
        sum += minus_q.get()

sum += n_one

print(sum)