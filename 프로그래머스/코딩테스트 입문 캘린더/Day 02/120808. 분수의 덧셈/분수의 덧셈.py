def solution(denum1, num1, denum2, num2):
    def get_gcd(a, b):
        while b > 0:
            a, b = b, a % b
        return a
        

    gcd = get_gcd(num1, num2)
    
    num3 = num1 * num2 // gcd    
    denum3 = denum1 * (num3//num1) + denum2 * (num3//num2)
    
    gcd = get_gcd(denum3, num3)
    
    return [denum3/gcd, num3/gcd]