# 1. Name binding and passing arguments to a function

# Pass a string to a function and change it in the function
# won't modify it.
def change_str(a):
    print('Passed value: ', a)
    a = 0
    print('The function changes a to: ', a)


origin = 'foo'
change_str(origin)
print(f'After execution, origin is changed to {origin}')


# Container however, could be modified.
def change_list(a):
    print(a)
    a.pop()
    a.append('new')
    print('param is changed to: ', a)


origin = [1, 2, 3]
change_list(origin)
print(origin)
