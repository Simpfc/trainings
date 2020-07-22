### Balanced brackets

Task.

There is a line which has only brackets from the set {} () []. 
It is necessary to determine whether it is balanced or not.

By balanced is meant a string in which three conditions are satisfied:
- for each opening bracket there is a corresponding closing;
- the corresponding closing bracket must be after the opening;
- between the two corresponding brackets there are no other brackets without correspondences between these brackets.

Foe ex: that is, ```[([] {[]})]``` is balanced, but ```{[}], [{)]``` and ```] {} [``` - not