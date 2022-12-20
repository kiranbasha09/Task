var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/fibonacci', (req, res) => {
   let n = req.body.value;

   if (!n)
   return res.status(400).send(`{"error":"Input required"}`);

  if(n < 0)
  return res.status(400).send({"message":"invalid input"})

  if (n <= 1)
  return res.status(200).send({"result":n})

  let a = 0, b = 1, c = 1;
  let result = 1;
  while (c < n)
  {
  c = a + b;
  result++;
  a = b;
  b = c;
  }
  return res.status(200).send({"position":result})
})


router.post('/fibonacci', (req, res) => {
  let n = req.body.value;

  if (!n)
  return res.status(400).send(`{"error":"Input required"}`);

 if(n < 0)
 return res.status(400).send({"message":"invalid input"})

 if (n <= 1)
 return res.status(200).send({"result":n})

 let a = 0, b = 1, c = 1;
 let result = 1;
 while (c < n)
 {
 c = a + b;
 result++;
 a = b;
 b = c;
 }
 return res.status(200).send({"position":result})
})

router.post('/flattern', (req, res) => {
  let input_array = req.body.fattern;
  let result = flattern(input_array)
  return res.status(200).send({"result":result})
})

function flattern(arr) {
  return arr.reduce((acc, current) => {
    return acc.concat(Array.isArray(current) ? flattern(current) : current)
}, [])
}

router.post('/imixedinputsort', (req, res) => {
  let list = req.body.mixedinput
  let order = req.body.order
  if (!list)
  return res.status(400).send(`{"error":"mixed input required"}`);

  if (!order)
  return res.status(400).send(`{"error":"order required"}`);

  var typesort = ["boolean", "number", "string" ];
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
        return res.status(400).send({"message":"invalid order"})
       }
       if(order == 'DESC') {
        result = result.reverse()
       }
       return res.status(200).send({"result": result })
})

module.exports = router;
