<!-- The significance of union and intersection types in Typescript. -->
1.union: It is like kind of OR in js.By using union types ,we can declare a variable with  with the value in multiple types. we use | as union sign.

Example: 
        let student:string |number
        student='shahed'
        student=22


2.intersection: It is like kind of AND in js. By using it we can combine multiple types in a single type by using & sign. In intersection types, the variable needs to meet the requirements of every type it combines. 
Example:
        let student:string & number
        student='shahed'& 22
   
