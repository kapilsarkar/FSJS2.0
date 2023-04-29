const maths = {
   a: function add(a,b){
        return a + b
    },

   sqr : function(c){
      return c*c
   },

   subtract(m,n){
     return m -n 
   },
   cube(num){
    return num ** 3
   }
}

console.log(maths.a)
console.log(maths.a(5,10))
console.log(maths.sqr(10))
console.log(maths.subtract(100,70))
console.log(maths.cube(50))
