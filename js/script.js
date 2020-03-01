var app = new Vue({
    //element
    el: '#app',
    data: {
        product : 'Apple',
        image: './images/blueapple.jpg',
        altText:'Apple alt',
        link:'https://www.imagegrafia.com',
        inStock : true,
        inventory:0,
        onSale:true,
        details:['Food','Fibre present 80%'],
        varients:[
            {
                varientId: 2234,
                varientColor: "green",
                varientImage: './images/apple.jpeg'
            },

            {
                varientId: 1578,
                varientColor: "blue",
                varientImage:'./images/blueapple.jpg'
            }
        ],
        sizes:['S','M','L','XL'],
        cart:0
    },
//out of data property
        methods:{
            addToCart(){
                this.cart += 1
            },
        updateProduct(varientImage){
            this.image = varientImage

        }
        }
    
})