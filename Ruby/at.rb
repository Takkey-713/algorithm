require "pry"
# C 441
# 10 3
# 24
# 35
# 3
# n, size = gets.split(' ').map{ |nunber| nunber.to_i }
# array = []
# size.times do
#   array << gets.to_f
# end

# array.each do |item|
#   result =(item.to_f / n).round * n
#   if result == 0
#     puts n
#   else
#     puts result
#   end
# end

# C 442
# 3
# 10 100 50
# 300 5
# 1 5
# 2 3
# 3 1
# 2 1
# 1 3
n = gets.to_i
item_prices = gets.split(' ').map{ |nunber| nunber.to_i }
hand_money, order_number = gets.split(' ').map{ |nunber| nunber.to_i }
orders = []
order_number.times do
  orders << gets.split(' ').map{ |nunber| nunber.to_i }
end
binding.pry

orders.each do |order|
  next if(hand_money - item_prices[order[0] - 1] * order[1] < 0)
  hand_money -= item_prices[order[0] - 1] * order[1]
end

puts hand_money