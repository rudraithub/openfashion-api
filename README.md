# openfashion-api

Let's create a our first version of open fashion app with 7 below screen. Make sure all api create in dynamic model. 

1.Home Screen
2.Category Screen
3.Product Detail Screen
4.Checkout Screen
5.Place Order Screen
6.Add Shipping Address Screen
7.Payment Success Screen

Figma link : https://www.figma.com/file/CZhMNBM3Vkl70BJDvLtfkV/Open-Fashion---Free-eCommerce-UI-Kit-(Community)?type=design&node-id=417-615&mode=design&t=JqeiWx7iqnXuKLai-0

for first version please refer "User Module" only


1) For Home screen need for 3 api: 

    A) Banner image: - which content image,banner title.
    
    Formate
    -------
    object :{
    
    "image" : ""
    "Image_title" : ""
    
    }
    
    B) Product:
    
    
    C) Store information:
    
    Formate
    -------
    object :{
    
    "email" : "support@openui.design"
    "phone" : "+60 825 876"
    "time" : "08:00 - 22:00 - Everyday"
    "tagline" : "Making a luxurious lifestyle accessible for a generous group of women is our daily drive."
    
    "follow" : [ {
    "image" : ""
    "name" : "@mia"
    },
        {
    "image" : ""
    "name" : "@mia"
    },
        {
    "image" : ""
    "name" : "@mia"
    },
        {
    "image" : ""
    "name" : "@mia"
    }
    ]

    "product_detail" : [ {
    "image" : ""
    "title" : "Fast shipping. Free on orders over $25."
    },
        {
    "image" : ""
    "title" : ""
    },
        {
    "image" : ""
    "title" : ""
    },
        {
    "image" : ""
    "title" : ""
    }
    ]
    }
    
2) for category screen and product detail screen : make 1 product api

 Object : {
 
 "Cate_name" : "",
 "product_detail " : [
 {
    "product_image" : ""
    "product_name" : ""
    "product_detail" : ""
    "product_price" : ""
    "product_discount" : ""
    "product_image" : [multipal_image]
  }
 ]
}

## clone Repo and run project

## 1 - Install Git:
If you haven't installed Git on your machine, you can download and install it from https://git-scm.com/.

## 2 - Open a Terminal or Command Prompt:
Open a terminal or command prompt on your computer. The exact method varies based on your operating system.

## 3 - Navigate to the Directory Where You Want to Clone the Repository:
Use the cd command to navigate to the directory where you want to clone the Node.js project. For example:

cd path/to/your/directory

## 4 - Clone the Repository:
Run the following command to clone the repository. Replace <repository_url> with the actual URL of the Git repository.

git clone <repository_url>

## 5 - Navigate into the Cloned Directory:
After cloning, navigate into the cloned directory using the cd command:

cd path/to/your/directory

## 6 - Install mysql-client:

## 7 - Install Dependencies:
If the Node.js project has package.json file, run the following command to install the project dependencies:

```bash
npm install
```
## 8 - create cloudinary connection

## 9 - Run the Project:
If the project is a runnable Node.js application, check the project documentation for specific instructions on how to run it. Typically, you might use a command like:

```bash
npm run dev
```

    
