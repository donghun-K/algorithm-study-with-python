def solution(board, moves):
    answer = 0
    basket = []
    width = len(board)
    height = len(board[0])
    
    for i in moves:
        for j in range(height):
            if board[j][i-1] != 0:
                basket.append(board[j][i-1])
                board[j][i-1] = 0
                if len(basket) >= 2 and basket[len(basket)-2] == basket[len(basket)-1]:
                    del basket[len(basket)-2]
                    del basket[len(basket)-1]
                    answer += 2
                break
    return answer