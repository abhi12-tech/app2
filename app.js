// var index;
// function initialize(){
//      index = 0;
// };


//const products=['instant_noodles', 'coconut_water', 'drink_and_tea', 'canned_food', 'isotonic_drink', 'soy_milk'];

// const products = ['soy_milk'];
// const product_details = {
//     'soy_milk' : {
//         'images' : ['soy-milk.webp'],
//         'description' : "Yeo’s signature beverage range of well-being, wholesomeness and wisdom. Brewed from time tested recipe, with all its natural goodness of premium soy."
//     }
// };


displayImage = () => {
    index = index + 1; //Math.floor(Math.random() * 5);
    console.log('index:'+index);
    if(index > 5) {
        index = index % 5;
    }
    let product_id = products[index];
    console.log(index);
    console.log(product_id);
    let product_detail = product_details[product_id];


    console.log(product_detail);

    images_tag = ""
    console.log(product_detail['images']);
    product_detail['images'].map(image => {
        images_tag += "<img src='images/"+image+"' width='80' height='200'/> &nbsp;";
    });
    console.log("images: "+images_tag);

    document.getElementById("prod_images").innerHTML = images_tag;

    prod_desc = product_detail['description'];
    document.getElementById("prod_description").innerHTML = '<b>' + prod_desc + '</b>';

}

// const elem = document.getElementById("root");
// elem.addEventListener("click", displayImage)
// elem.addEventListener("touchstart", displayImage)

const quiz = {
    "1" : {
        "question" : "my question one",
        "options"  : [
            "one", "two"
        ]
    },
    "2" : {
        "question" : "my question two",
        "options"  : [
            "one", "two"
        ]
    },
     "3" : {
        "question" : "my question three",
        "options"  : [
            "one", "two", "four", "five"
        ]
    }

}

// var customerName = ""
// const getCustomerName = () => {
//     customerName = prompt("Please enter your name: ")
//     console.log(customerName)
// }

const showQuiz = () => {
    // const customerName = prompt("Please enter your name")
    // result = confirm('Welcome '+customerName +'! Want to start quiz?')
    // if(!result) return;
    document.getElementById("soy_product").classList.add('hide');
    document.getElementById("quiz_start").classList.add('hide');
    document.getElementById("qa_div").classList.add('show');
}

const elem = document.getElementById("quiz_start");
elem.addEventListener("click", showQuiz)
elem.addEventListener("touchstart", showQuiz)