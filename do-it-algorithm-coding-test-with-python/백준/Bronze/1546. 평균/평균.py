n = int(input())
scores = list(map(int, input().split()))
max_score = max(scores)
sum = sum(scores)

print(sum * 100 / max_score / n)
