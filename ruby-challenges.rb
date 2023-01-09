# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.
#  create a method to determine if number is even or odd. 
#  input: integer 
# output: string interpolation stating that input value is even or odd. 
# method: 
#  use if elsif statements in method to seperate conditions. utilize the modulo function to determine if a remainder is output when numbers are divided by two to identify even or odd numbers. create statements with string interpolation to output the result of the method. 

def even_odd(n1) 
    if n1 % 2 == 0 
        p "#{n1} is even"
    elsif 
        p "#{n1} is odd"
    end
end 
num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'
# even_odd(num1)
# even_odd(num2)
# even_odd(num3)


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete
def remove_vowels(string)
    string.delete "aeiouAEIOU" 
end     

# "hello".delete "aeiou", "^e"   #=> "hell"

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

p remove_vowels(beatles_album1)
p remove_vowels(beatles_album2)
p remove_vowels(beatles_album3)
# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.
# input 
# output 
# method
def is_palindrome(value)
    value2 = value.downcase
    if value2 == value2.reverse 
        p "#{value} is a palindrome"
    else 
        p "#{value} is not a palindrome"
  end
end              

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'
is_palindrome(palindrome_tester1)
is_palindrome(palindrome_tester2)
is_palindrome(palindrome_tester3)

p 1.class
p 1.0.class