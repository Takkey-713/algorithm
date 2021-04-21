def binary_search(arg, number)
  return "#{number}は存在しない数値です。" unless arg.include?(number)
  head = 0
  tail = arg.length
  while head < tail do
    middle = ((head + tail) / 2).floor
    if arg[middle] == number
      break "#{number}は#{middle + 1}番目にあります。"
    elsif arg[middle] > number
      tail = middle - 1
    else
      head = middle + 1
    end 
  end
end

def q_sort(arg)
  return arg if arg.length < 2
  left_array = []
  right_array = []
  pivot = arg.shift
  arg.each do |num|
    if num < pivot
      left_array << num
    else
      right_array << num
    end
  end
  return q_sort(left_array).concat([pivot], q_sort(right_array))
end

array = [50, 314, 33, 12, 3, 97, 44, 25, 8]
sort_result = q_sort(array)
puts "#{sort_result}\n探索したい数値を入力してください。"
number = gets.to_i
puts binary_search(sort_result, number)
