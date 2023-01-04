def solution(id_list, report, k):
    report = list(set(report))
    reported = {}
    report_list = {}
    for idv in id_list:
        reported[idv] = 0
        report_list[idv] = []
    for r in report:
        a, b = r.split()
        reported[b] += 1
        report_list[a].append(b)
    answer = []
    for idv in id_list:
        count = 0
        for ridv in report_list[idv]:
            if reported[ridv] >= k:
                count += 1
        answer.append(count)  
    return answer