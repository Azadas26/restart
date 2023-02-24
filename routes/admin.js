var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var products=
  [
    {
      name:"Iphone 12 pro",
      diecription:"An apple product",
      price:"200000",
      image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-pro-gold-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202844000"
    },

      {
        name: "Iphone 12 pro",
        diecription: "An apple product",
        price: "200000",
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-pro-gold-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202844000"
      },

      {
        name: "Iphone 12 pro",
        diecription: "An apple product",
        price: "200000",
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-pro-gold-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202844000"
      },

      {
        name: "Iphone 12 pro",
        diecription: "An apple product",
        price: "200000",
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-pro-gold-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202844000"
      },

      {
        name: "Iphone 12 pro",
        diecription: "An apple product",
        price: "200000",
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-pro-gold-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202844000"
      },

      {
        name: "Iphone 12 pro",
        diecription: "An apple product",
        price: "200000",
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-pro-gold-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202844000"
      },

      {
        name: "Iphone 12 pro",
        diecription: "An apple product",
        price: "200000",
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-pro-gold-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202844000"
      },

      {
        name: "Iphone 12 pro",
        diecription: "An apple product",
        price: "200000",
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-pro-gold-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202844000"
      }
  ]
  

  res.render('./admin/list-products', { admin:true,products });
});

router.get('/add',(req,res)=>
{
     res.render('./admin/add-products',{admin:true})
})

router.post('/add', (req, res) => {
  console.log(req.body)
  console.log(req.files.image)
  res.render('./admin/add-products', { admin: true })
})

module.exports = router;
