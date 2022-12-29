def solution(a, b):
    answer = ""
    days = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"]
    n_day = 0

    last_31 = [1, 3, 5, 7, 8, 10, 12]

    for i in range(1, a + 1):
        if i == 1:
            continue
        elif i == 3:
            n_day += 29
        elif i - 1 in last_31:
            n_day += 31
        else:
            n_day += 30

    n_day += b - 1

    return days[n_day % 7]
