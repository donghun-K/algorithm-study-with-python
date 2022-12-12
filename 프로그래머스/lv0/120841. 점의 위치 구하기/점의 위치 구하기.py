def solution(dot):
    return {True: {True: 1, False: 4 }, False: {True: 2, False: 3}}[dot[0] > 0][dot[1] > 0]