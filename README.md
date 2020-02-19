# API CONTRACT
Hal Pertama yang disiapkan sebelum kolaborasi Frontend-Backend

# MODEL
## User
- id: Int
- name: String,
- email: String
- password: String

## Post
- id: Int
- id_user: Int
- content: String
- isDeleted: Boolean
- createdAt: Timestamp
- updatedAt: Timestamp

## Like
- id_post: Int
- id_user: Int

## Comment
- id: Int
- id_user: Int
- id_post: Int
- content: String

# ENDPOINT
## User (/user)

### Register User (POST /user/register)
***Request (body): JSON***

    {
        “name”      : “Muhammad NuFadhil Eka”,
        “email”     “hellow123@skiewskiw.com”,
        “password”  : “Papafadli99”
    }

***Response: JSON***

    200:
        {
            “success”   : true,
            “message”   : “registesuccess”
        }

    409:    
        {
            “success”   : false,
            “message”   : “your emaialready registered”
        } 

    500:    
        {
            “success”   : false,
            “message”   : “internaserver error”
        }

### Login User (POST /user/login)
***Request (Body): JSON***
            
    {
        “email”     : “hellow123@skiewskiw.com”
        "password”  : “qweasd123”
    }

***Response: JSON***
    
    200 :
    {
        “success” : true,
        “token” : “7ASD&987zxchj!&*4dasd”
    }
    
    403:
    {
        “success” : false,
        “message” : “Wrong username or password”
    }
    
    409:     
    {
        “success”: false,
        “message”: “It seems u have not registered yet”
    }
    
    500:    
    {
            “success” : false,
            “message” : “internal server error”
    }
### Get All Users (GET /user)
***Response: JSON***

    200:         
    {
        “success”: true,
        “message”: “users loaded piwww”
        “data”: [
                {
                “id”: 1,
                    “name”: “Muhammad Nur Fadhil Eka”,
                    “email”: “hellow123@skiewskiw.com”
                },
                {
                    “id”: 2,
                    “name”: “Muhammad Eka Bims”,
                    “email”: “hellow123@skiewpieww.com”
                }
            ] 
    }

    400:    
    {
        “success”: false,
        “message”: “failed to load users”
    }

    500:
    {
        “success” : false,             
        “message” : “internal server error”
    }

### Get User by id (GET /user/:id)
***Request (params): id***

***Response : JSON***

    200:     
    {
        “success”: true,
        “message”: “get user by id success”
        “data”: {
            “id”: 2,
            “name”: “Muhammad Eka Bims”,
            “email”: “hellow123@skiewpieww.com”
        }
    }

    404:   
    {
        “success”: false,
        “message: “user is not found”
    }

    500:
    {
        “success” : false,u
        “message” : “internal server error”
    }

## POST (/post)
### Create Post (POST /)
***Request (headers): (Required) Authorization: Bearer <JWT_TOKEN>***

***Request (Body): JSON***
    
    {
        “content”: “GG got my first 100 score”
    }

***Response: JSON***

    200:
    {
        “success”: true,
        “message: “post created”
    }

    400: 
    {
        “success”: false,
        “message”: “Failed to create a post”
    }

    403:     {
        “success”: false,
        “message”: “no authorized”
    }
    
    500:    
    {
        “success” : false,
        “message” : “internal server error”
    }

### Get All Post (GET /post)
***Response: JSON***
    
    200 :   
      {
        “success”: true,
        “message”: “post loaded”
        “data”: [
                    {
                        “id”: 1,
                        “id_user”: 1,
                        “content”: “ez money from binomo”,
                        “isDeleted”: false,
                        “createdAt”: 129301293,
                        “updatedAt”: 129301293

                    },
                    {
                            “id”: 2,
                            “id_user”: 1,
                            “content”: “bcc the best”,
                            “isDeleted”: false,
                            “createdAt”: 129301293,
                            “updatedAt”: 129301293
                    }
        ]
    }
    
    500:    
    {
        “success” : false,
        “message” : “internal server error”
    }

### Get Specific post (GET /post/:id)
***Request (params): (Required) id => id_post ***

***Response: JSON***

    200 :    
    {
        “success” : true,
        “message”: “get post success”,
        “data”: {
                    “id” : 2,
                    “Id_user: 69,
                    “content” : “GG got my first 100 score”
                    “isDeleted”: false,
                    “createdAt”: 129301293,
                    “updatedAt”: 129301293
                }
    }

    404:    
    {
        “success” : false,
        "message” : “post not found”
    }

    403:    
    {
        “success”: false,
        “message”: “not authorized”
    }

    500:    
    {
        “success” : false,
        “message” : “internal server error”
    }



### Update Post (PUT        /post/:id)
***Request (params): (Required) id => id_post***

***Request (header): (required) Authorization: Bearer <JWT_TOKEN>***

***Request (body): JSON
{
    “content”: “Mas ibrahim kece” 
}***

***Response: JSON***

    200:     
    {
        “success” : true,
        “message” : “post updated”
    }
    401:    
    {
        “success” : false,
        “message” : “You only can update ur own post”
    }
    403:
    {
        “success” : false,
        “message” : “not authorized”
    }
    500:
    {
        “success” : false,
        “message” : “internal server error”
    }

### Delete post (DELETE     /post/:id)

***Request (params): (Required) id => id_post***

***Request (header): (required) Authorization: Bearer <JWT_TOKEN>***

***Response: JSON***
    
    200:     
    {
        “success” : true,
        “message” : “post deleted”
    }
    401:
    {
        “success” : false,
        “message” : “You only can delete ur own post”
    }
    403:
    {
        “success” : false,
         “message” : “not authorized”
    }
    500:
    {
        “success” : false,
        “message” : “internal server error”
    }


## LIKE

### Get all like (GET        /like)
***Response: JSON***

    200:
    {
        “success” : true,
        “message” : “get post’s like”,
        “data”: [
                    {
                        “id_post”: 1,
                        “total”: 10
                    },
                    {
                        “id_post”: 2,
                        “total”: 5
                    }
                ]
    }
    500:
    {
        “success” : false,
        “message” : “internal server error”
    }

### Like a post (POST        /like/:id)
***Request (params) : (required) id => id_post***

***Request (header): (required) Authorization: Bearer <JWT_TOKEN>***

***Response: JSON***

    200:
    {
        “success” : true,
        “message” : “liked”
    }
    403:
    {
        “success” : false,
        “message” : “Not authorized”
    }
    404:
    {
        “success”: false,
        “message”: “post not found”
    }
    409:
    {
        “success”: false,
        “Message”: “post already liked”
    }
    500:
    {
        “success” : false,
        “message” : “internal server error”
    }

### Dislike a post (DELETE    /like/:id)
***Request (params) : (required) id => id_post***

***Request (header): (required) Authorization: Bearer <JWT_TOKEN>***

***Response: JSON***

    204:     
        No Content
    403:
    {
        “success” : false,
        “message” : “Not authorized”
    }
    404:
    {
        “success”: false,
        “message”: “post not found”
    }
    409:
    {
        “success”: false,
        “message”: “post has not liked”
    }
    500:
    {
        “success” : false,
        “message” : “internal server error”
    }

## COMMENT
### Give a comment (POST        /comment/:id)
***Request (params) : (required) id => id_post***

***Request (header): (required) Authorization: Bearer <JWT_TOKEN>***

***Request (Body) : (required) JSON
    {
“content” : “Yeyey Comment”
    }***

***Response: JSON***

    201:
    {
        “success” : true,
        “message” : “comment submitted”
    }
    403:
    {
        “success” : false,
        “message” : “not authorized”
    }
    404:
    {
        “success”: false,
        “message”: “not found”,
        “error”: [
                    {
                        “post”: “post not found”
                        “user”: “user not found”
                    }
                ]
    }
    500:
    {
        “success” : false,
        “message” : “internal server error”
    }

### Get all comment on specific post (GET        /comment/:id)
***Request (Params) : (required) id => id_post***

***Response: JSON***

    200:
    {
        “success” : true,
        “data” : [
                    {
                        id: 1,
                        id_user: 1,
                        id_post: 1,
                        content: “Indentnya jauh bat lur”
                    }.
                    {
                        id: 2,
                        id_user: 2,
                        id_post: 1,
                        content: “Waw”
                    }.
                 ]

    }
    500:
    {
        “success” : false,
        “message” : “internal server error”
    }

### Delete comment (DELETE         /comment)
***Request (query) : (required) id_comment, id_post***

***Request (header): (required) Authorization: Bearer <JWT_TOKEN>***

***Response: JSON***

    204:
        No Content
    403:
    {
        “success” : false,
        “message” : “not authorized”
    }
    404:
    {
        “success” : false,
        “message” : “comment not found”
    }
    500:
    {
        “success” : false,
        “message” : “internal server error”
    }

### Update comment (PUT        /comment)
***Request (query) : (required) id_comment, id_post***

***Request (header): (required) Authorization: Bearer <JWT_TOKEN>***

***Request (Body) : JSON
    {
“content” : “Yeyey Comment”
    }***

***Response: JSON***

    200:
    {
        “success” : true,
        “message” : “comment updated”
    }
    403:
    {
        “success” : false,
        “message” : “not authorized”
    }
    404:
    {
        “success” : false,
        “message” : “comment not found”
    }
    500:
    {
        “success” : false,
        “message” : “internal server error”
    }


*Credit : Devian Wahyu S.*
