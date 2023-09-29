import express from 'express'
import {isAdmin, requireSignIn} from './../middlewares/authMiddleware.js'
import { categoryController, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from '../controllers/categoryController.js'

const router = express.Router()

//routes
//create category
router.post(
    '/create-category', 
    requireSignIn,
    isAdmin, 
    createCategoryController
);

//update category
router.put(
    "/update-category/:id",
    requireSignIn,
    isAdmin,
    updateCategoryController
  );

  //getAll category
  router.get('/get-category', categoryController)

  //single category
  router.get('/single-category/:slug', singleCategoryController)

  //delete category
  //here when deleting the category "requireSignIn", "isAdmin"-->who is deleting the category he/she should be Admin
  router.delete('/delete-category/:id', requireSignIn, isAdmin, deleteCategoryController)

export default router