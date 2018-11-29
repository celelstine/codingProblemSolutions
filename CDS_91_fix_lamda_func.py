def wrong_implementation():
    functions = []

    for i in range(10):
        functions.append(lambda : i)

    for f in functions:
        print(f())

def correction():
    """right implementation"""
    functions = []

    for i in range(10):
        functions.append(lambda n=i: n)
    
    for f in functions:
        print(f())

problem_statement = '''
This problem was asked by Dropbox.

What does the below code snippet print out? How can we fix the anonymous functions to behave as we'd expect?

functions = []
for i in range(10):
    functions.append(lambda : i)

for f in functions:
    print(f())
'''

print(problem_statement)

wrong_implementation()

correction()
