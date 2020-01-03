def split_decimal(flt):
    """
    split decimal

    params:
        flt : <float> float to convert
    
    returns: <tuple> ( whole number, decimal part)
    """
    whole, dec = str(flt).split('.')
    # dec = int(dec)

    # if dec >= 5:
    #     return int(whole) + 1, dec
    return [int(whole), int(dec)]


def solution(lst):
    problem = """
    This problem was asked by Airbnb.

    You are given an array X of floating-point numbers x1, x2, ... xn. 
    These can be rounded up or down to create a corresponding array Y of integers y1, y2, ... yn.

    Write an algorithm that finds an appropriate Y array with the following properties:

    The rounded sums of both arrays should be equal.
    The absolute pairwise difference between elements is minimized. 
    In other words, |x1- y1| + |x2- y2| + ... + |xn- yn| should be as small as possible.

    For example, suppose your input is [1.3, 2.3, 4.4]. 
    In this case you cannot do better than [1, 2, 5], 
    which has an absolute difference of |1.3 - 1| + |2.3 - 2| + |4.4 - 5| = 1
    """
    print(problem)

    # get a list of tuple (rounded integer, decimal value)
    integer_decimal_list = [
        split_decimal(flt) for flt in lst
    ]

    # compare the sum of float and integer
    float_sum = sum(lst)
    integer_sum = 0

    for val in integer_decimal_list:
        integer_sum += int(val[0])
    
    # if float_sum and integer_sum are not equal; we round up the highest values 
    dif = int(float_sum - integer_sum)

    integer_decimal_list = sorted(integer_decimal_list, key=lambda tup: tup[1])
    len_flt = len(lst)
    for i in range(dif):
        if i != dif:
            index = len_flt - i - 1
            integer_decimal_list[index][0] += 1

    return [ v[0] for v in integer_decimal_list]


sample = [1.3, 2.3, 4.4]

print('sample', sample, '\t', 'solution', solution([1.3, 2.3, 4.4]))