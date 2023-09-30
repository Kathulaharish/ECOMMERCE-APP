import productModel from "../models/productModel.js";
import fs from "fs";
import slugify from "slugify";

export const createProductController = async (req, res) => {
    try {
      const { name, description, price, category, quantity, shipping } =
        req.fields;
      const { photo } = req.files;
      //validation
      switch (true) {
        case !name:
          return res.status(500).send({ error: "Name is Required" });
        case !description:
          return res.status(500).send({ error: "Description is Required" });
        case !price:
          return res.status(500).send({ error: "Price is Required" });
        case !category:
          return res.status(500).send({ error: "Category is Required" });
        case !quantity:
          return res.status(500).send({ error: "Quantity is Required" });
        case photo && photo.size > 1000000:
          return res
            .status(500)
            .send({ error: "photo is Required and should be less then 1mb" });
      }
  
      const products = new productModel({ ...req.fields, slug: slugify(name) });
      if (photo) {
        products.photo.data = fs.readFileSync(photo.path);
        products.photo.contentType = photo.type;
      }
      await products.save();
      res.status(201).send({
        success: true,
        message: "Product Created Successfully",
        products,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error in creating product",
      });
    }
  };

  //get All products
  export const getProductController = async (req, res) => {
    try{
        const products = await productModel.find({}).populate('category').select("-photo").limit(12).sort({createdAt: -1})
        res.status(200).send({
            success: true,
            countTotal: products.length,
            message: "All Products",
            products,
        })
    }catch (error){
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in getting products",
            error: error.message
        })
    }
  }

  //get single product
  export const getSingleProductController = async (req, res) => {
    try{
        const product = await productModel.find({slug:req.params.slug}).select('-photo').populate('category')
        res.status(200).send({
            success: true,
            message: "Single product fetched",
            product
        })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error while getting single product",
            error
        })
    }
  }

  //get photo
  export const productPhotoController = async (req, res) => {
    try{
        const product = await productModel.findById(req.params.pid).select('photo')
        if(product.photo.data){
            res.set('Content-type', product.photo.contentType)
            return res.status(200).send(product.photo.contentType)
        }
    }catch (eror){
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error while getting product photo",
            error
        })
    }
  }

  //delete controller
  export const deleteProductController = async (req, res)=>{
    try{
        await productModel.findByIdAndDelete(req.params.pid).select("-photo")
        res.status(200).send({
            success: true,
            message: "Product Deleted Successfully"
        })
    }catch (error){
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error wile deleting product",
            error
        })
    }
  }

  //update controller
  export const updateProductController = async (req, res)=>{
    try {
        const { name, description, price, category, quantity, shipping } =
          req.fields;
        const { photo } = req.files;
        //validation
        switch (true) {
          case !name:
            return res.status(500).send({ error: "Name is Required" });
          case !description:
            return res.status(500).send({ error: "Description is Required" });
          case !price:
            return res.status(500).send({ error: "Price is Required" });
          case !category:
            return res.status(500).send({ error: "Category is Required" });
          case !quantity:
            return res.status(500).send({ error: "Quantity is Required" });
          case photo && photo.size > 1000000:
            return res
              .status(500)
              .send({ error: "photo is Required and should be less then 1mb" });
        }
    
        const products = await productModel.findByIdAndUpdate(
            req.params.pid,
            {...req.fields, slug: slugify(name)},
            {new: true}
            )
        if (photo) {
          products.photo.data = fs.readFileSync(photo.path);
          products.photo.contentType = photo.type;
        }
        await products.save();
        res.status(201).send({
          success: true,
          message: "Product updated Successfully",
          products,
        });
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          error,
          message: "Error in updating product",
        });
      }
  }