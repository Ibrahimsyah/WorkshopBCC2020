
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
);

create table `like`(
    id_post integer references post(id),
    id_user integer referencese user(id)
);
create table `comment`(
    id integer primary key auto_increment,
    id_user integer references user(id),
    id_post integer references post(id),
    content text
)

insert into likes values
    (1, 2),
    (1, 5),
    (1, 4),
    (1, 19),
    (1, 10)