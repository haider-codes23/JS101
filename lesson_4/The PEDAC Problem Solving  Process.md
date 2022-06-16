// The PEDAC Process

P: Understanding the Problem
    --> Through out the entire process we should be constantly checking our understanding of the problem and refining it and adjusting it if necessary.
    --> Your initial interaction with the problem will often be in the form of brief description e.g. one or two lines or a short paragraph.
    --> In this kind of situation it'll be helpful restating the problem either in your own words or in a different format.
    --> One way of doing this by extracting elements of the problem description into rules and requirements.
    --> Requirements could be Explicit or Implicit.
    --> Explicit requirements are those that are clearly stated in the problem description.
    --> Implicit requirements are those that are not stated in the problem description but can be extrapolated from our understanding of the problem.
    --> This initial step is important because it allows you to establish a reference for understanding the problem and determining a solution.
    --> Conclusion
      --> Assessing avaibale information
      --> Establish the rules/ define the boundaries of the problem.
      --> Restate Explicit requirements
      --> Identify Implicit requirements
      --> Spend enough time. Dont rush this step.
// ********************************************************************
// **General Example**
// Given a string, produce a new string with every other word removed.
// ==> Assess avaibale information
// ==> Explicit Requirements
//   ==> Input: string
//   ==> Output: newString
//   ==> remove everyother word from input string

// ==> Questions:
// ==> what do we mean by every other word, all the even or odd words
// ==> How do we define a word in this context,Are the words delimited by spaces
// ********************************************************************


E: Examples and Test Cases

  --> We already established our inital understanding of the problem in the
    previous step. Example can help us in expanding and clarifying that
    understanding. We can use them to confirm or refute assumptions about
    the problem. And help answer questions about implicit requirements.
    Examples and test cases can both act as assertions(confident and forceful statement) 
    which allows us to codify the rules and boundaries of our problem.

// ***************************************************************************
// D: Data Structures
//
--> Structuring data helps us to reason with it more easily and at an implementation level working with structured data helps us to inteact with
that data in a logical way. There are alot of ways of structuring data depending 
on the specific requirements of the problem. How we structure data to solve the problem is closely realted to the algorithm to our solution. We can think of the algorithm as essentially a set of steps which determine how to get from one point to the other e.g. from the input to the output. And to get from the input to the output of the problem we often need to represent data in a particular structure 
--> Thinking in terms of data structures is part of the problem solving process
--> Data structutres are closely realted to algorithm
    --algorithm: set of steps to go from input to output

// ***************************************************************************
// A: Algorithm

--> A logical sequence of steps for accomplishing a task or objective
--> At this step of the process you genereally want to keep the algorithm 
abstract and high level. Which means you want to avoid implementation details 
such as reference to particular methods or built-in functions. And you should write out the solution steps for your algorithm in plain words
--> closely linked to data structures
--> series of steps to structure data to produce the required output
--> Avoid implementation details
--> Dont worry about efficiency for now. 
// C: Implementing the solution in code

// *****************************************************************
// Sum Even Numbers Rows

// Imagine a sequence of consecutive even integers beginning with 2. The
// integers are grouped in rows, with the first row containing one integer,
// the second row two integers, the third row three integers, and so on.
// Given an integer representing the number of a particular row, return an
// integer representing the sum of all the integers in that row.


// 1st Step in the PEDAC Process

// Assess avaibale information ==> brings some clarity to the understanding of
// the problem, helps in thinking about some of these rules in a more visual way
// Sequence of Even Intergers
// Seuqence begins with 2
// Integers are consecutive
// Sequence is grouped in to rows
// Each row is incrementally larger: 1, 2, 3, ....
// Row 'number' equals the number of elements in the row
// => Row 1 has 1 element, row 2 has 2 elements
// ==> Input: a single integer
//   - Identifies a 'row' which is a subset of a sequence of integers
// ==> Output: a single integer
//   - The sum of the integers in the row identified by the input integer
//
// Sequence : 2,4,6,8,10,12.......
// 2
// 4, 6
// 8, 10, 12
// Questions: How do we create the structure?

**Example**

row number: 1 --> sum of integers in row: 2
row number: 2 --> sum of integers in row: 10
row number: 3 --> sum of integers in row: 68

**Data Structures**

2 --> 2
4, 6 --> 10
8, 10, 12 --> 30
14, 16, 18 --> 68

-- Overall structure representing sequence as a whole
-- Individual rows within overall structure
-- Individual rows in a set order in context of sequence 
-- Individual rows contain integers
-- can assume that integers are in a set order in the context of the sequence.
[
  [2],
  [4, 6],
  [8, 10, 12],
  [14, 16, 18, 20],
  ....
]

**Algorithm**
--> so far we know a number of things 
   -- we need to get all the integers from a specific row in the Data Structure we defined, at a basic level we need to therefore create a structure up to and including the final row or the row thats indicated by the input. Once we have created that structure then we need to obtain the final row so for an input `4` we need to create a structure with four rows and and then we need to sum the elements of the row and return the resulting value.

1. Create an empty 'rows' array to contain all of the rows
2. Create a 'row' array and add it to overall 'rows' array
3. Repeat step 2 until all necessary rows have been created 
  - All rows have been created when the length of the 'rows' array is equal to the input integer
4. Sum the final row
  
5. return the sum of the final row elements 


*Problem- Create a row -Step2 mini problem*

Rules: 
- Row is an array
- Array contain Integers
- Integers are consecutive even Numbers
- Integers in each row form a part of an overall sequence 
- Rows are of different lengths 
- Input: the information needed to create the output
 - We need to know
  - The starting integer
  - Length of the row
- Output: Row itself [8, 10, 12]

Examples:
start: 2, Length: 1 ---> [2]
start: 4, length: 2 ---> [4, 6]
start: 8, length: 3 ---> [8, 10, 12]

Data Structure: 
- An array of integers

Algorithm:
1. Create an empty 'row' to contain the integers
2. Add the starting integer 
    - Start the loop 
     -Add start integer to the row array
     -increment the start integer by 2
     - break out of the loop if length of the row array equals rowLength
3. Increments the starting integer by 2 to get the next integer in the sequence
4. Repeat the step 2 and step 3 until the array has reached the correct length
5. Return the array 'row' 


// 1st Step in the PEDAC Process

// Assess avaibale information ==> brings some clarity to the understanding of
// the problem, helps in thinking about some of these rules in a more visual way


// 2nd Step in the PEDAC Process

// We already established our inital understanding of the problem in the
// previous step. Example can help us in expanding and clarifying that
// understanding. We can use them to confirm or refute assumptions about
// the problem. And help answer questions about implicit requirements
// Examples and test cases can both act as assertions which allows us to codify
// the rules and boundaries of our problem.
// Example and Test Cases

// 3rd Step in the PEDAC Process
--> Structuring data helps us to reason with it more easily and at an implementation level working with structured data helps us to inteact with
that data in a logical way. There are alot of ways of structuring data depending 
on the specific requirements of the problem. How we structure data to solve the problem is closely realted to the algorithm to our solution. We can think of the algorithm as essentially a set of steps which determine how to get from one point to the other e.g. from the input to the output. And to get from the input to the output of the problem we often need to represent data in a particular structure 

// 4th Step in the PEDAC Process
--> A logical sequence of steps for accomplishing a task or objective
--> At this step of the process you genereally want to keep the algorithm 
abstract and high level. Which means you want to avoid implementation details 
such as reference to particular methods or built-in functions. And you should write out the solution steps for your algorithm in plain words
--> closely linked to data structures
--> series of steps to structure data to produce the required output
--> Avoid implementation details
--> Dont worry about efficiency for now. 

// 5th step in the PEDAC Process - Implementing a solution in code
--> Translating solution algorithm to code
--> Think about algorithm in the context of the programming language 
   -- language feature/ constraints
   -- Characteristic of data structures
   -- syntax/ coding patterns
--> Create test cases
--> Code with intent    

// Final thoughts
--> Not a completely linear process
--> Move back and forward between steps
--> Switch from implementation mode to abstract problem solving mode when necessary
--> Dont try to problem solve at the code level.

