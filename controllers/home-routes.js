const router = require('express').Routers();
const {Product, Category, Cart, Order};

router.get('/',async (req,res)=> {
    try{
        req.session.save(()=>{
            if (req.session.countVisit){
                req.session.countVisit++;
            } else {
                req.session.countVisit = 1;
            }
        })
    }
});