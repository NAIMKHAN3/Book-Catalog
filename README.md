# Auth
* api/v1/auth/signup (POST)
* api/v1/auth/signin (POST)

# User
* api/v1/users (GET) (only admin)
* api/v1/users/:id (Single GET) (only admin)
* api/v1/users/:id (PATCH) (only admin)
* api/v1/users/:id (DELETE) (only admin)

# Profile
* api/v1/profile (GET)

# Category
* api/v1/categories/create-category (POST) (only admin)
* api/v1/categories (GET)
* api/v1/categories/:id (Single GET)
* api/v1/categories/:id (PATCH) (only admin)
* api/v1/categories/:id (DELETE) (only admin)

# Books
* api/v1/books/create-book (POST) (only admin)
* api/v1/books (GET)
* api/v1/books/:categoryId/category (GET)
* api/v1/books/:id (GET)
* api/v1/books/:id (PATCH) (only admin)
* api/v1/books/:id (DELETE) (only admin)

# Orders
* api/v1/orders/create-order (POST)
* api/v1/orders (GET) (only admin specific customer)
* api/v1/orders/:orderId (GET)  (only admin specific customer)
