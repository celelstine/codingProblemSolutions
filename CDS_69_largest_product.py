def solution(list):
    two_largest_negative_numbers = []
    three_largest_positive_numbers = []
    is_inserted = False

    for num in list:
        index_number_to_be_remove = None
        number_to_be_remove = num;

        if num < 0:
            if len(two_largest_negative_numbers) == 0:
                two_largest_negative_numbers.append(num)
            elif len(two_largest_negative_numbers) == 1:
                if two_largest_negative_numbers[0] < num:
                    two_largest_negative_numbers.insert(0, num)
                else:
                    two_largest_negative_numbers.append(num)
            else:
                for index, neg_num in enumerate(two_largest_negative_numbers, start=0):
                    if neg_num > number_to_be_remove:
                        index_number_to_be_remove = index
                        number_to_be_remove = neg_num
                
                if index_number_to_be_remove is not None:
                    two_largest_negative_numbers[index_number_to_be_remove] = num
        else:
            if len(three_largest_positive_numbers) == 0:
                three_largest_positive_numbers.append(num)
            elif len(three_largest_positive_numbers) < 3:
                for index, post_num in enumerate(three_largest_positive_numbers, start=0):
                    if num > post_num:
                        three_largest_positive_numbers.insert(index, num)
                        is_inserted = True
                
                if is_inserted is False:
                    three_largest_positive_numbers.append(num)
            else:
                if num > three_largest_positive_numbers[-1]:
                    for index, post_num in enumerate(three_largest_positive_numbers, start=0):
                        
                        if post_num < number_to_be_remove:
                            index_number_to_be_remove = index
                            number_to_be_remove = post_num
                    
                    if index_number_to_be_remove is not None:
                        three_largest_positive_numbers[index_number_to_be_remove] = num

        is_inserted = False
    
    return (two_largest_negative_numbers, three_largest_positive_numbers)

test = [-10, -10, 5, 2, 4, 7]
print(solution(test))
# for index, num in enumerate(test, start=0):
#     print('{}------{}'.format(index, num))       
