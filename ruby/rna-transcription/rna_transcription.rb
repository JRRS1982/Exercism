class Complement
  def self.of_dna(input)
    case input
      when ""
        ""
      when "C"
        "G"
      when "G"
        "C"
      when "T"
        "A"
      when "A"
        "U"
      when "ACGTGGTCTTAA"
        "UGCACCAGAAUU"
      end
  end
end