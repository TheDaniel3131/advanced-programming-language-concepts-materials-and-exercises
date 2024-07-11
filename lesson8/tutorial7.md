functional   -> SQL 
             -> Declarative (Prolog --> matching (clause relation -> fact: (A1, A2): a1 is argument1, a2 is argument2 , nify)
imperative   -> object oriented
             -> loop


backtracking -> Backtracking is a technique that Prolog uses to find answers to queries by trying different combinations of facts and rules. Prolog starts with the first clause that matches the query and tries to satisfy its goals. If it succeeds, it returns an answer.


```prolog


ᨀWelcome to SWI-Prolog (threaded, 64 bits, version 9.2.4)
SWI-Prolog comes with ABSOLUTELY NO WARRANTY. This is free software.
Please run ?- license. for legal details.

For online help and background, visit https://www.swi-prolog.org
For built-in help, use ?- help(Topic). or ?- apropos(Word).

?- pwd.
% c:/users/danie/documents/prolog/
true.

?- consult.
ERROR: Unknown procedure: consult/0
ERROR:     However, there are definitions for:
ERROR:         consult/1
false.

?- working_directory(_,"D:/swi-prolog/swipl/tutorial").
true.

?- pwd.
% d:/swi-prolog/swipl/tutorial/
true.

?- consult("D:/swi-prolog/swipl/tutorial/instructor.pl").
true.

?- enrolled(X.ee171).
ERROR: Unknown procedure: enrolled/1
ERROR:     However, there are definitions for:
ERROR:         enrolled/2
false.

?- enrolled(X,ee171).
X = matthew .

?- 
|    
|    
|    
|    
Action (h for help) ? Options:
a:           abort         b:           break
c:           continue      e:           exit
g:           goals         s:           C-backtrace
t:           trace         p:             Show PID
h (?):       help
Action (h for help) ? abort

% Execution Aborted
?- enrolled(X,ee171).
X = matthew ;
X = alan-cheng ;
X = edison-tsai ;
X = chris-clark.

?- teaches(X,ee171).
false.

?- teaches(X,ee171).
false.

?- teaches(X,chris-clark).
X = perkowski ;
X = perkowski ;
false.

?- teaches(X,alan-cheng).
X = perkowski 
Unknown action: , (h for help)
Action? 
  Possible actions:
  ; (n,r,space,TAB): redo              | t:         trace&redo
  *:                 show choicepoint  | c (a,RET): stop
  w:                 write             | p:         print
  b:                 break             | h (?):     help

Action? ;
X = perkowski ;
false.

?- teaches(X, alan-cheng).
X = perkowski ;
X = perkowski ;
false.

?- Who = X.
Who = X.

?- teaches(X, alan-cheng).
X = perkowski ;
X = perkowski ;
false.

?- enrolled(X,ee271).
X = alan-cheng ;
X = chris-clark.

?- teaches(X,alan-cheng).
X = perkowski ;
X = perkowski ;
false.

?- teaches(X,chris-clerk).
false.

?- teaches(X,chris-clark).
X = perkowski ;
X = perkowski ;
false.

?- 

```
