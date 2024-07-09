## // Prolog Structure 

#### Use for logic or functional programming. By defining rules and setting facts, we can look for position matching through queries.

### // Facts
```prolog
female("Jury").
isA("Jury", female).
isA(A.human).
isA("David", human).
isA("Stephen", male).

```

### // Rules
```prolog
Ex: isA(Who, What):- isA(W, human); isA(W, female).

isA(W, woman):- isA(W, human); isA(W, female).
W = "Jury"
```

### // Query
```prolog
isA(W, female).
W = "Jury"
```

### Code Example (Run at: https://swish.swi-prolog.org/, Docs at: https://www.swi-prolog.org/pldoc/man?section=cmdline)
```prolog
% Student exercise profile
:- set_prolog_flag(occurs_check, error).        % disallow cyclic terms
:- set_prolog_stack(global, limit(8 000 000)).  % limit term space (8Mb)
:- set_prolog_stack(local,  limit(2 000 000)).  % limit environment space

% Your program goes here
testing(abu, 1).
isA(hungsoon, male).
isA(hungsoon, human).
isA(cindy, fenale).
isA(cindy, female).
hasfriend(hungsoon, jiakin).

isA(Person, man):- isA(Person, male),isA(Person, human).
isA(Person, woman):- isA(Person, femmale),isA(Person, human).
likes(Person, outgoing):- hasfriend(Person, jiakin); isA(Person, male).

/** <examples> Your example queries go here, e.g.
?- member(X, [cat, mouse]).
*/
```

(The Error Message is a warning to enforce best practices)

![image](https://github.com/TheDaniel3131/advanced-programming-language-concepts-materials-and-exercises/assets/71692327/d86a5edd-e196-4c75-83fd-7368bfe9000e)






