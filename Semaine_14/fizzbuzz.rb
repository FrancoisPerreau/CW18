## Exo fizzbuzz
##-------------
##-------------

puts""
puts"======================================"
i=1

## Boucle -------------------
100.times do

  if i % 3 == 0 && i % 5 == 0
    a = "FizzBuzz"
  ##-------------------------

  elsif i % 3 == 0
    a = "Fizz"
  ##-------------------------

  elsif i % 5 == 0
    a = "Buzz"
  ##-------------------------

  else
    a = i
  ##-------------------------
end## Fin if

  print "(#{a}) "
  i = i+1

end## Fin .times

puts ""
puts"======================================"
puts ""
