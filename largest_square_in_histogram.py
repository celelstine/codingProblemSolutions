problemDescription = '''
*problemDescription* \n
This problem was asked by Square.

You are given a histogram consisting of rectangles of different heights.
These heights are represented in an input list, such that [1, 3, 2, 5] 
corresponds to the following diagram:

      x
      x  
  x   x
  x x x
x x x x
Determine the area of the largest rectangle that can be formed only from the bars of the histogram. For the diagram above, for example, this would be six, representing the 2 x 3 area at the bottom right.
'''
print(problemDescription)

def get_largest_box_in_histogram(histogram):
    """
    Params:
        histogram: list<int> a list of integer,
                    where each element represents the height of a bar
    
    returns: an tuple (width, height)
    """
    # create variable
    prevList = histogram
    height = 0
    prevMin = min(histogram)

    # loop contnue we get a current iteration with less than two elements
    should_continue = True
    while should_continue:
        curMin = 0
        currentcount = 0
        curList = []

        # substract the  prevMin from each element
        for bar in prevList:
            value = bar - prevMin
            # empty list if score is 0 and only two element has been processed
            if value < 1 and currentcount < 2:
                curList = []
                currentcount = 0
            else:
                # update current minimal
                if value < curMin or curMin == 0:
                    curMin = value
                currentcount += 1
                curList.append(value)
            

        height += prevMin
        if currentcount < 2 or curList == 0:
            should_continue = False
        else:   
            prevList = curList
    
    return (len(prevList), height)


# print(get_largest_box_in_histogram([1, 3, 2, 5]))


print(get_largest_box_in_histogram([1, 3, 7, 4, 8, 5, 9]))