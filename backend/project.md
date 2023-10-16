tours

market place for view travel places

company
----
register
log
create tours
delete tours
edit tours
view tours

users
---
register
login
search
bookings
see bookings


models
---
users
company
tours
bookings


user--
name
email
password
phone nu


company--
name
email
password
phone
address


tours ---
name
price
description
company
image

bookings--
user
quantity
total
date


authentication--
company
  ---create/update/delete


user
  ---create bookings


API
---
backend->API->frontend

user

Post
/api/v1/users
-name
-email
-password

-user/error

Get
/api/v1/users/:id

Put
/api/v1/users/:id

Delete
/api/v1/users/:id



tour

Post
/api/v1/tours
-name
-description
-price
-company
-image

-product/error