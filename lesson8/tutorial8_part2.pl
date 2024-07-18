% Facts
parent(sam, alex).
parent(mary, alex).
parent(john, susan).
parent(julie, susan).
parent(john, tim).
parent(julie, tim).
parent(alex, joanna).
parent(susan, joanna).
parent(joanna, sandra).
parent(nick, sandra).
 
% Rules
 
% i. Who are the parents of Alex?
parents(Child, Mother, Father) :- parent(Mother, Child), parent(Father, Child), Mother \= Father.
 
% ii. Display all the siblings in the knowledge base.
sibling(X, Y) :- parent(Z, X), parent(Z, Y), X \= Y.
 
% iii. Display all the couples in the knowledge base.
couple(X, Y) :- parent(X, Child), parent(Y, Child), X \= Y.
 
% iv. Display the ancestors of Sandra.
ancestor(X, Y) :- parent(X, Y).
ancestor(X, Y) :- parent(X, Z), ancestor(Z, Y).
 
% Queries
% ?- parents(alex, Mother, Father).
% ?- sibling(X, Y).
% ?- couple(X, Y).
% ?- ancestor(X, sandra)
