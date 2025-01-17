const express = require('express')
const router = express.Router()
const { getHomepage,
        getHoidanit,
        postCreateUser,
        getCreatePage,
        getUpdatePage,
        postUpdateUser,
        postDeleteUser,
        postHandleRemoveUser
 } = require('../ controllers/homeController')

router.get('/', getHomepage)
router.get('/hoidanit', getHoidanit)

router.get('/create', getCreatePage)
router.get('/update/:id', getUpdatePage)
router.post('/create-user', postCreateUser)
router.post('/update/update-user', postUpdateUser)
router.post('/delete-user/:id', postDeleteUser)
router.post('/delete-user', postHandleRemoveUser)

module.exports = router
