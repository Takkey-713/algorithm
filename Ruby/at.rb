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
# n = gets.to_i
# item_prices = gets.split(' ').map{ |nunber| nunber.to_i }
# hand_money, order_number = gets.split(' ').map{ |nunber| nunber.to_i }
# orders = []
# order_number.times do
#   orders << gets.split(' ').map{ |nunber| nunber.to_i }
# end
# binding.pry

# orders.each do |order|
#   next if(hand_money - item_prices[order[0] - 1] * order[1] < 0)
#   hand_money -= item_prices[order[0] - 1] * order[1]
# end

# puts hand_money

# n = gets.to_i
# item_prices = gets.split(' ').map{|ele| ele.to_i}
# money, order_amount = gets.split(' ').map{|number| number.to_i}
# orders = []
# order_amount.times do
#   orders << gets.split(' ').map{|number| number.to_i}
# end

# orders.each do |order|
#   next if money - item_prices[order[0] - 1] * order[1] < 0
#   money -= item_prices[order[0] - 1] * order[1]
# end

# puts money
#  ストラックアウト
# n, m = gets.split.map{|number| number.to_i}
# a = []
# b = []
# n.times do
#   a << gets.split.map{|str| str.to_s}
# end

# n.times do
#   b << gets.split.map{|number| number.to_i}
# end

# def sum_array(arg)
#   tmp = 0
#   result = arg.collect{|number| tmp += number }
# end

# puts sum_array([1,2,3,4]) === [1,3,6,10]
# puts sum_array([2,4,6,8]) === [2,6,12,20]

# atcorder rotate
# a = gets.chomp
# b = a.slice!(0,1)
# puts a + b

# atcorder visiblly

# vertical,side, x,y = gets.split(" ").map{|number| number.to_i}
# array = []
# c = vertical.times.map { gets.chomp.chars }
# result = 0
# vertical.times do
#   side.times do
     
#   end
# end

