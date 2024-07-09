## // Prolog Structure 

#### Look for position matching.

### // Fact
```prolog
female("Jury").
isA("Jury", female).
isA(A.human).
isA("David", human).
isA("Stephen", male).

```

### // Rules

isA(Who, What):- isA(W, human); isA(W, female).
```prolog
isA(W, woman):- isA(W, human); isA(w, female).
W = "Jury"
```

### // Query
```prolog
isA(W, female).
W = "Jury"
```
