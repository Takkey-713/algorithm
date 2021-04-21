require "pry"
def quick_sort(arg)
  return arg if arg.length < 2
  left = []
  right = []
  piv = arg.shift
  arg.each do |number|
    if number < piv
      left << number
    else
      right << number
    end
  end
  return quick_sort(left).concat([piv],quick_sort(right))
end

array = [50, 314, 33, 12, 3, 97, 44, 25, 8]
p quick_sort(array)
