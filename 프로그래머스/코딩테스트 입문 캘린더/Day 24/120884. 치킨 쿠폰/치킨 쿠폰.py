def solution(chicken):
    coupon = 0
    answer = 0
    while chicken:        
        coupon += chicken
        answer += coupon // 10
        chicken = coupon // 10
        coupon %= 10
    return answer