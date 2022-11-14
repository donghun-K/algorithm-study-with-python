import sys

input = sys.stdin.readline
from queue import PriorityQueue

N = int(input())

pq = PriorityQueue()

for _ in range(N):
    pq.put(int(input()))

sum = 0

while pq.qsize() > 1:
    temp = pq.get() + pq.get()
    sum += temp
    pq.put(temp)

print(sum)