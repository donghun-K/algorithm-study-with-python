def solution(n, lost, reserve):
    answer = 0
    students = {}
    
    for i in range(n):
        students[i+1] = 1
        
    for student in reserve:
        students[student] += 1     
        
    for student in lost:        
        students[student] -= 1
        print(students)
    
    for student in students:
        if students[student] == 0:        
            if student != 1 and students[student-1] == 2:
                students[student-1] -= 1
                students[student] += 1
            elif student != n and students[student+1] == 2:
                students[student+1] -= 1
                students[student] += 1
    
    for i in students.values():
        if i != 0:
            answer += 1
        
    return answer