from = 0

class Gigasecond
  def self.from(time_in)
    output = 0
    one_billion = 1000000000
    output = time_in.to_i
    output += one_billion
    Time.at(output).utc
  end
end
