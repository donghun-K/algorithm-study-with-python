def solution(keyinput, board):
    answer = [0, 0]
    dic = {"left": [-1, 0], "right": [1, 0], "up": [0, 1], "down": [0, -1]}
    border_x = board[0] // 2
    border_y = board[1] // 2
    for key in keyinput:        
        if abs(answer[0] + dic[key][0]) <= border_x:
            answer[0] += dic[key][0]
        if abs(answer[1] + dic[key][1]) <= border_y:
            answer[1] += dic[key][1]
        print(answer)
    return answer
