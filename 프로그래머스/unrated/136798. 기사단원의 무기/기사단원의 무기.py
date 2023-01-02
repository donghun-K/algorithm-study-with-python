def solution(number, limit, power):
    def get_n_div(n):
        count = 0
        for i in range(1, int(n ** 0.5) + 1):            
            if n % i == 0:
                if i ** 2 == n:
                    count += 1
                else:
                    count += 2
                
                if count > limit:
                    return power
        return count
    return sum([get_n_div(i) for i in range(1, number+1)])