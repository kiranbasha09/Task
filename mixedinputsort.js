var list = [
    "test",
     345,
     false,
     0,
     12.00,
     "",
     "ABC",
     -45.16,
     "Kiran",
     true,
     "Basha",
     1,
     -1,
     0.60625,
     "888.87",
     "%($(F"    
   ];
   
   var typesort = ["boolean", "number", "string" ];
   let sortDoodles = (order, list) => {
       let result = list.sort(function (a, b) {
         //first lets sort by type
         var r = typesort.indexOf(typeof a) - typesort.indexOf(typeof b);
         if (r === 0) {
           if (typeof a === "string") return a.localeCompare(b)
           else return a - b;
         }
         return r;
       });
       if(!['ASC', 'DESC'].includes(order)) {
            return "invalid order"
       }
       if(order == 'DESC') {
        result = result.reverse()
       }
       return result
   }
   
   console.log(sortDoodles('ASC', list));