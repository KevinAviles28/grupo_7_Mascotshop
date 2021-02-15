const fs = require('fs');
const data = require('../data/dataproducts');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports={
    index:(req,res)=>{
        let products = [];
        
        data.forEach(element=>{
            if(element.discount != 0){
                return products.push(element);
            }
        })

        res.render('index',{products,toThousand});
        
    },
    search:(req,res)=>{
        const search = data.filter(element=>{
            return element.name.toLowerCase().includes(req.query.busqueda.toLowerCase().trim());
        })

        res.render('search',{search,toThousand});
    }
}