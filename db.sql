User
- id: Int
- name: String

Post
- id: Int
- id_user: Int -> references user(id)
- content: String
- createdAt: Timestamp
- updatedAt: Timestamp

create table `user`(
    id integer primary key auto_increment,
    name varchar(40)
);

create table `post`(
    id integer primary key auto_increment,
    id_user integer references user(id),
    content text,
    createdAt timestamp default CURRENT_TIMESTAMP,
    updatedAt timestamp default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP
)