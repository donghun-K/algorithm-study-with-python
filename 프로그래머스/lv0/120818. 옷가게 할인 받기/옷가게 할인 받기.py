def solution(price):
    discount_rate = 0
    if price >= 500000:
        discount_rate = 20
    elif price >= 300000:
        discount_rate = 10
    elif price >= 100000:
        discount_rate = 5        
    
    return price * (100 - discount_rate) // 100