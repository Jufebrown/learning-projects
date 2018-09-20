def fib(n):
  a, c = 0, 1
  while a < n:
    print(a, end=' ')
    a, c = c, a+c
  print()

def fib2(n):
  result = []
  a, c = 0, 1
  while a < n:
    result.append(a)
    a,c = c, a+c
  return result