# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: object oriented programming is when the foundation of the language is is written and accessed through the use of methods designed for objects. For example, In ruby if p 1.class and p 2.0.class were to be run on the terminal they would return the results p 1.class => integer and  p 2.0.class => float. The data has been compartmentalized through objects. 

Researched answer: Object-oriented programming is a programming model that organizes software design around objects and data rather than functions and logic. The structure of object oriented programming is bassed around classes, objects, methods and attributes. Classes are blueprints for creating objects which contain the data. Methods are functions that allow us to manipulate the data of the objects. attributes represent the data in the state of the object. 

1. What is the difference between a Float and an Integer in Ruby?

Your answer: Besides the obvious distinction on how they are written. When dividing two integers on ruby that are not even the results will spit out an integer as the output. IE. 5 / 2 => 2 the remainder is left out and not taken into consideration when running a program. If the remainder was required for the functionality of the program it would be better to use floats to write out the number being that the exact same equation written out 5.0 / 2.0 => 2.5 giving you the correct answer including values following the decimal.  

Researched answer: integers do not return decimal numbers and floats only return decimal numbers.floats are best utilized when the sum, difference and product need to be more precise. 

1. Ruby has an implicit return. What does that mean?

Your answer: Containing an implicit return simply means that when a method is created it does not require the keyword "return" in order to run and produce an output it is implied. 

Researched answer: having an implicit return in ruby will automatically return the last line of code without having to hardcode the word "return" in the method. For example: 
        def remove_vowels(string)
            string.delete "aeiouAEIOU" 
        end   
will return the values in a string without the vowels even though a return isn't stated within the method. 

1. What is a block in Ruby?

Your answer: a block is identified by the words do and end. Anything written between these two words is the method being created. every do needs an end in order for the block to work appropriately. 

Researched answer: block and method are the same thing in ruby but blocks do not belong to an object. blocks can be used in two different ways one being written out with the do and end block  and the second one would be with inline curly braces as such [3,4,5,6].each{ |i| puts i * 3} => [9,12,15,18]

1. How do you extract a value in a Ruby hash?

Your answer: Ruby hashes are made up like objects in javascript meaning that in order to pull the values from the key value pairs you would have to access it by person = {first_name: 'Oscar', last_name: 'Gomez'} 
p person[:first_name] 

Researched answer: Ruby hashes are made up of key value pairs since its based on OOP. You extract the value of a ruby hash by using the put and referencing the key you are trying to extract the value from. For example lets say I created a hash with some information for myself, the hash is named person and inside that hash I have key value pairs for my first and last name so it looks like person = {first_name: 'Oscar', last_name: 'Gomez'}, I would be able extract the information by p person[:first_name] and that would return  "Oscar". If you are trying to access a key that hasn't been created it will return a default value.


## Looking Ahead: Terms for Next Week

1. Class Inheritance: A mechanism that allows a class to inherit all the methods from another class usually referred to as a subclass. 

2. RSpec: RSPEC is a testing tool similar to jest for behavior-driven development but for the Ruby language. It works with a three step process where 
    1. we indicate when some event occurs.
    2. we expect a specific outcome. 
    3. by a given method of code 
3. CRUD: different methods for manipulating data in API's we use the acronym CRUD which stands for 
C: Create - consists of a function we would call if we were adding a new item to a catalogue. 
R: Read - function that allows for the data to be read in the specific catalogue 
U: Update - function that would make it possible to change the data in the catalogue whether it be by replacing the data already in there. 
D: Delete - removes data from the catalogue.

4. Test-driven development:
-   is a process relying on a sequence of testing cases to validate functions of the software before fully developed. Making it simple and bug free. 

5. HTTP: HyperText Transfer Protocol is an application layer protocol in the TCP/IP internet model. It allows us to transfer hypermedia. It follows a client-server model meaning that a client requests specific information and the server responses with the resources or services from a server computer. HTTP is a stateless protocol meaning it doesn't store data between requests
