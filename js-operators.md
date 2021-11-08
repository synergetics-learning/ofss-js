# JS Operators

## Conditional Operators

> Evaluate the statement / expression and return either TRUE or FALSE

Symboles | Description  | Usage
---------|--------------|-----------
\>   | Greater Than | x > 5;
\<   | Lesser Than  | x < 5
\>=  | Greater Than or Equal | x >= 5
\<=  | Lesser or Equal | x <= 5 
==  | Equal value | x == 5
=== | Equal value and type | x === 5

## Logical Operators

> Logical operators allows using more than ONE conditional expression in a block.

Operator | Description | Usage
---------|-------------|-----------
&&       | Logical AND (short-hand: do not evaluate next expression if FIRST one results in FALSE)  | x > 5 && x < 10, when value of x is "2" then it wont evaluate x < 10
&        | Logical AND | x > 5 & x < 10, even when x is "2", it would still evaluate x < 10 !
\|\|       | Logical OR (short-hand :  do not evaluate next expression if FIRST one results in TRUE)  ) |  x > 5 \|\| y > 0
\| | Logical OR | x \> 5 \| y \> 0