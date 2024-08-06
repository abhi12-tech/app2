var index;
function initialize(){
     index = 0;
};


const products=['instant_noodles', 'coconut_water', 'drink_and_tea', 'canned_food', 'isotonic_drink', 'soy_milk'];

const product_details = {
    'soy_milk' : {
        'images' : ['sm_1.jpg','sm_2.jpeg'],
        'description' : "Yeo’s signature beverage range of well-being, wholesomeness and wisdom. Brewed from time tested recipe, with all its natural goodness of premium soy."
    },
    'instant_noodles' : {
        'images' : ['in_1.png','in_2.png','in_3.png','in_4.png'],
        'description' : "Experience convenience without compromising on taste with Yeo's Instant Noodles. Satisfy your cravings for authentic Asian flavors in a matter of minutes. Our carefully crafted selection of instant noodles combines the convenience of quick preparation with the irresistible taste of traditional recipes. Made with premium ingredients and a perfect balance of spices and seasonings, Yeo's Instant Noodles deliver a delightful and comforting meal anytime, anywhere. From classic flavors like savory chicken and hearty beef to exciting variations like spicy seafood, our instant noodles offer a wide range of options to suit every palate. Enjoy a delicious and satisfying meal in an instant with Yeo's Instant Noodles."
    },
    'coconut_water' : {
        'images' : ['cw_1.png','cw_2.png','cw_3.png'],
        'description' : "Yeo's range of Water & Wellness drinks besides quenching thirst, they also provide that little extra in purity, taste and nutrients that add sparks to your daily needs. Keeping you active and your spirits high, while you indulge in life moments."
    },
    "drink_and_tea" : {
        "images" : ['tea_1.png','tea_2.png','tea_3.png'],
        "description" : "Yeo’s Asian Drinks & Tea are brewed with time-tested recipes, with an eye for the best ingredients and attention to details in every part of the brewery process. Making every product a fusion of rich Asian heritage with modern brewing process to create the all time favorite home-brewed taste we love. Yeo’s Asian Drinks & Tea, authentic, delectable Asian refreshments for any occasion anytime."
    },
    "canned_food" : {
        "images" : ['canned_1.png','canned_2.png','canned_3.png','canned_4.png'],
        "description" : "Making great food as approachable and easy to fix is what makes Yeo’s Canned Food a success with its recipe deeply seeped in traditions and made from the finest ingredients. Yeo’s Canned Food creates taste that will satisfy food lovers!"
    },
    "isotonic_drink" : {
        "images" : ['id_1.png','id_2.png'],
        "description" : "We understand when to push ourselves, and H-TWO-0 is our trusted companion in those times when we are reminded why we do what we do… DARE TO DREAM!"
    }
};


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

const elem = document.getElementById("root");
elem.addEventListener("click", displayImage)
elem.addEventListener("touchstart", displayImage)

