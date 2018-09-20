# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Photo.destroy_all

User.create({email: 'demo@email.com', password: 'hunter2', fname: 'Demo', lname: 'User', display_name: 'DemoUser', gender: 'Other'});
User.create({email: 'jean@email.com', password: 'password123', fname: 'Jean', lname: 'Ha', display_name: 'jeanha124', gender: 'Male'});
User.create({email: 'michael@email.com', password: 'password123', fname: 'Michael', lname: 'Hong', display_name: 'mikehong', gender: 'Male'});
User.create({email: 'jeffmisa@email.com', password: 'password123', fname: 'Jeff', lname: 'Misa', display_name: 'thisisjeff', gender: 'Male'});
User.create({email: 'hanalee@email.com', password: 'password123', fname: 'Hanna', lname: 'Lee', display_name: 'chloejio', gender: 'Female'});
User.create({email: 'joymo@email.com', password: 'password123', fname: 'Joy', lname: 'Mo', display_name: 'joyfuljoy', gender: 'Female'});

user = User.all
user1 = user[0].id
user2 = user[1].id
user3 = user[2].id
user4 = user[3].id
user5 = user[4].id
user6 = user[5].id



Photo.create({title: 'Couple', description: 'The couple getting married this weekend', owner_id: user1}).picture.attach({io: File.open('/Users/Jeanwoo/Desktop/App_Academy/shareTheFlare/app/assets/images/friend1.jpg'), filename: "friend1.jpg"});
Photo.create({title: 'Girl in Amaze', description: 'Appearing out of nowhere', owner_id: user1}).picture.attach({io: File.open('/Users/Jeanwoo/Desktop/App_Academy/shareTheFlare/app/assets/images/photo2.jpg'), filename: "photo1.jpg"});
Photo.create({title: 'In the wilderness', description: '', owner_id: user1}).picture.attach({io: File.open('/Users/Jeanwoo/Desktop/App_Academy/shareTheFlare/app/assets/images/photo1.jpg'), filename: "photo1.jpg"});
Photo.create({title: 'Mom and Child', description: 'Walking down the street', owner_id: user1}).picture.attach({io: File.open('/Users/Jeanwoo/Desktop/App_Academy/shareTheFlare/app/assets/images/photo4.jpg'), filename: "photo4.jpg"});
Photo.create({title: 'Amanda', description: '', owner_id: user1}).picture.attach({io: File.open('/Users/Jeanwoo/Desktop/App_Academy/shareTheFlare/app/assets/images/amanda.jpg'), filename: "amanda.jpg"});
Photo.create({title: 'Amber', description: 'Dog', owner_id: user1}).picture.attach({io: File.open('/Users/Jeanwoo/Desktop/App_Academy/shareTheFlare/app/assets/images/amber.jpg'), filename: "amber.jpg"});
Photo.create({title: 'Girl in Bubble', description: '', owner_id: user1}).picture.attach({io: File.open('/Users/Jeanwoo/Desktop/App_Academy/shareTheFlare/app/assets/images/bubblegirl.jpg'), filename: "bubblegirl.jpg"});
Photo.create({title: 'Carol', description: '', owner_id: user1}).picture.attach({io: File.open('/Users/Jeanwoo/Desktop/App_Academy/shareTheFlare/app/assets/images/carol2.jpg'), filename: "carol2.jpg"});
Photo.create({title: 'Daniel', description: 'Youtuber', owner_id: user1}).picture.attach({io: File.open('/Users/Jeanwoo/Desktop/App_Academy/shareTheFlare/app/assets/images/dan1.jpg'), filename: "dan1.jpg"});
Photo.create({title: 'Cosplay', description: '', owner_id: user1}).picture.attach({io: File.open('/Users/Jeanwoo/Desktop/App_Academy/shareTheFlare/app/assets/images/cosplay.jpg'), filename: "cosplay.jpg"});
Photo.create({title: 'Flowers', description: 'South Korea', owner_id: user1}).picture.attach({io: File.open('/Users/Jeanwoo/Desktop/App_Academy/shareTheFlare/app/assets/images/flowers.jpg'), filename: "flowers.jpg"});
Photo.create({title: 'Girl Having Fun', description: 'Taken while spinning', owner_id: user1}).picture.attach({io: File.open('/Users/Jeanwoo/Desktop/App_Academy/shareTheFlare/app/assets/images/girlchair.jpg'), filename: "girlchair.jpg"});
Photo.create({title: 'Grandma', description: '', owner_id: user1}).picture.attach({io: File.open('/Users/Jeanwoo/Desktop/App_Academy/shareTheFlare/app/assets/images/grandma.jpg'), filename: "grandma.jpg"});
Photo.create({title: 'Isabel', description: '', owner_id: user1}).picture.attach({io: File.open('/Users/Jeanwoo/Desktop/App_Academy/shareTheFlare/app/assets/images/isabel1.jpg'), filename: "isabel1.jpg"});
Photo.create({title: 'Isabel', description: '', owner_id: user1}).picture.attach({io: File.open('/Users/Jeanwoo/Desktop/App_Academy/shareTheFlare/app/assets/images/isabel2.jpg'), filename: "isabel2.jpg"});
Photo.create({title: 'Isabel', description: '', owner_id: user1}).picture.attach({io: File.open('/Users/Jeanwoo/Desktop/App_Academy/shareTheFlare/app/assets/images/isabel3.jpg'), filename: "isabel3.jpg"});
Photo.create({title: 'Jay', description: '', owner_id: user1}).picture.attach({io: File.open('/Users/Jeanwoo/Desktop/App_Academy/shareTheFlare/app/assets/images/jay.jpg'), filename: "jay.jpg"});
Photo.create({title: 'Jean', description: '', owner_id: user1}).picture.attach({io: File.open('/Users/Jeanwoo/Desktop/App_Academy/shareTheFlare/app/assets/images/jean1.jpg'), filename: "jean1.jpg"});
Photo.create({title: 'Jenn', description: '', owner_id: user1}).picture.attach({io: File.open('/Users/Jeanwoo/Desktop/App_Academy/shareTheFlare/app/assets/images/jenn.jpg'), filename: "jenn.jpg"});
Photo.create({title: 'DjSiGuy', description: '', owner_id: user1}).picture.attach({io: File.open('/Users/Jeanwoo/Desktop/App_Academy/shareTheFlare/app/assets/images/simon.jpg'), filename: "simon.jpg"});
Photo.create({title: 'Teresa', description: '', owner_id: user1}).picture.attach({io: File.open('/Users/Jeanwoo/Desktop/App_Academy/shareTheFlare/app/assets/images/teresa1.jpg'), filename: "teresa1.jpg"});

