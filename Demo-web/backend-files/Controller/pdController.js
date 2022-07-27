
const ProductData = (req, res) => {
    try {
        console.log(req.body);
        res.json({
            Message: 'You Have Reached the Api End Point',
            Body:req.body,
        })
    } catch (error) {
        res.json({
            Message: 'Error',
            Body: null
        })
    }
}


const GetProductData = (req, res) => {

}


// exports
// is ko hm function sy phly nahi likh skty kiu k fun likhny sy phly hi wo export nahi ho skta because js line by line code run krta ha
module.exports ={
    ProductData,
    GetProductData
}
