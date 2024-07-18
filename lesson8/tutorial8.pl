% Student exercise profile
:- set_prolog_flag(occurs_check, error).        % disallow cyclic terms
:- set_prolog_stack(global, limit(8 000 000)).  % limit term space (8Mb)
:- set_prolog_stack(local,  limit(2 000 000)).  % limit environment space

% Your program goes here

% Facts
% Facts for gender
man(john).
man(fred).
man(harry).

woman(mary).
woman(julie).
woman(susan).
woman(anne).

% Facts for hair color
blonde(john).
dark(fred).
dark(harry).

blonde(julie).
blonde(susan).
brunette(mary).
brunette(anne).

% Facts for wealth
rich(fred).
rich(julie).

% Facts for ownership of gold
owns_gold(fred).
owns_gold(julie).

% Rules 
% Rule for rich people
rich(Person) :- owns_gold(Person).

% Rules for liking
likes(Person1, Person2) :- man(Person1), woman(Person2), rich(Person2).
likes(Person1, Person2) :- woman(Person1), man(Person2), rich(Person2).

likes(john, Person) :- woman(Person), blonde(Person).
likes(john, Person) :- woman(Person), rich(Person).
likes(fred, Person) :- woman(Person), brunette(Person).
likes(harry, Person) :- woman(Person), rich(Person).

likes(mary, Person) :- man(Person), dark(Person).
likes(julie, Person) :- man(Person), dark(Person).
likes(julie, Person) :- rich(Person).




/** <examples> Your example queries go here, e.g.
?- member(X, [cat, mouse]).
*/
