IO.puts "Hello World from elixir!"

add = fn a,b -> a+b end

IO.puts add.(1,2)

double = fn a -> add.(a,a) end

IO.puts double.(2)

concatList = [1,2,3] ++ [4,5,6]

IO.puts concatList