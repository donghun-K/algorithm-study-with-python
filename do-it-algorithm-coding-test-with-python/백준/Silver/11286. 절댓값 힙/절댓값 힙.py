import sys

I = sys.stdin.readline
O = sys.stdout.write

from queue import PriorityQueue

N = int(I())
q = PriorityQueue()

for i in range(N):
    req = int(I())
    if req == 0:
        if q.empty():
            O("0\n")
        else:
            O(str((q.get()[1])) + "\n")
    else:
        q.put((abs(req), req))