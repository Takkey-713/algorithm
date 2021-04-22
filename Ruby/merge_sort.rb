require "pry"
def sort(arg)
  return arg if arg.size < 2
  middle = (arg.length / 2).floor
  right = arg[0...middle]
  left = arg[middle..(arg.size - 1)]
  return merge(sort(left),sort(right))
end

def merge(left, right)
  sorted = []

  while !left.empty? && !right.empty? do
    if left[0] < right[0]
      sorted << left.shift
    else
      sorted << right.shift
    end
  end
  return sorted.concat(left, right)
end

array = [50, 314, 33, 12, 3, 97, 44, 25, 8]
p sort(array)