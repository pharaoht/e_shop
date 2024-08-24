INSERT INTO e_shop.Genders (GenderName) VALUES ('w'), ('m'), ('n'), ('k');

INSERT INTO e_shop.Sizes (SizeName) VALUES ('x_small'), ('small'), ('medium'), ('large'), ('x_large');

INSERT INTO e_shop.Categories (CategoryName, GenderID) VALUES ('Dresses', 1), ('Tops & T-Shirts', 3), ('Blouses', 1), ('Jeans', 3), ('Pants', 3), ('Cardigans & Sweaters', 3), ('Blazers & Vests', 3), ('Jacket & Coats', 3), ('Shorts', 3), ('Skirts', 1), ('Jumpsuits & Overalls', 3), ('Swimwear & Beachwear', 3), ('Sleepwear', 3), ('Socks', 3), ('Hoodies & Sweatshirts', 3);

INSERT INTO e_shop.Materials (MaterialName) VALUES ('cotton'), ('boucle'), ('cord'), ('denim'), ('french_terry'), ('terry_cloth'), ('jersey'), ('linen'), ('lyocell'), ('merino'), ('mesh'), ('oxford'), ('pique'), ('poplin'), ('ripstop'), ('scuba'), ('seersucker'), ('silk'), ('twill'), ('viscose'), ('wool');

INSERT INTO e_shop.Subcategories (CategoryID, SubcategoryName, GenderID) VALUES (1, 'Backless Dresses', 1), (1, 'One Shoulder Dresses', 1), (1, 'Cut-Out Dresses', 1), (1, 'Sleeveless Dresses', 1), (1, 'Puff-Sleeve Dresses', 1), (1, 'Halter Dresses', 1), (1, 'Wedding Guest Dresses', 1), (1, 'A-line Dresses', 1), (1, 'Cami Dresses', 1), (1, 'Knit Dresses', 1), (1, 'Long Sleeve Dresses', 1), (1, 'Linen Dresses', 1), (1, 'T-Shirt Dresses', 1), (1, 'Denim Dresses', 1), (1, 'Short Dresses', 1), (1, 'Midi Dresses', 1), (1, 'Maxi Dresses', 1), (1, 'Beach Dresses', 1), (1, 'Bodycon Dresses', 1), (1, 'Cocktail Dresses', 1), (1, 'Lace Dresses', 1), (1, 'Shirt Dresses', 1), (1, 'Sequin Dresses', 1), (1, 'Wrap Dresses', 1), (1, 'Kaftans', 1), (1, 'Party & Going Out Dresses', 1);

INSERT INTO e_shop.Subcategories (CategoryID, SubcategoryName, GenderID) VALUES (2, 'Low Cut Tops',1), (2, 'Corsets & Bustiers',1), (2, 'Collared Tops',1), (2, 'Turtleneck Tops',1), (2, 'Halter Tops',1), (2, 'Cut Out Tops', 1), (2, 'Bandeau Tops', 1), (2, 'Puff Sleeve Tops', 1), (2, 'Sleeveless Tops', 1), (2, 'Short Sleeve Tops', 1), (2, 'Long Sleeve Tops', 1), (2, 'Crop Tops', 1), (2, 'Bodysuits', 1), (2, 'T-Shirts', 1), (2, 'Graphic & Printed T-Shirts', 1);

INSERT INTO e_shop.Subcategories (CategoryID, SubcategoryName, GenderID) VALUES (3, 'Linen Shirts & Blouses',1), (3, 'Shirts',1), (3, 'Blouses',1), (3, 'Tunics',1), (3, 'Denim Shirts',1), (3, 'Off Shoulder Shirts & Blouses',1);

INSERT INTO e_shop.Subcategories (CategoryId, SubcategoryName, GenderID) VALUES (4, 'Mom Jeans', 1), (4, 'Skinny Jeans', 1), (4, 'Wide Leg Jeans', 1), (4, 'Loose & Baggy', 1), (4, 'Curvy', 1), (4, 'Denim Shorts', 1), (4, 'Slim & Straight', 1), (4, 'Baggy & Loose', 2), (4, 'Skinny', 2), (4, 'Slim Fit', 2), (4, 'Relaxed', 2), (4, 'Joggers', 2), (4, 'Regular Fit & Straight', 2);

INSERT INTO e_shop.Colors (ColorName, ColorCode) VALUES ('red', '#FF0000'), ('green', '#00FF00'), ('blue', '#0000FF'), ('yellow', '#FFFF00'), ('orange', '#FFA500'), ('purple', '#800080'), ('pink', '#FFC0CB'), ('brown', '#A52A2A'), ('black', '#000000'), ('white', '#FFFFFF'), ('gray', '#808080'), ('cyan', '#00FFFF'), ('magenta', '#FF00FF'), ('lime', '#00FF00'), ('maroon', '#800000'), ('navy', '#000080'), ('olive', '#808000'), ('teal', '#008080'), ('silver', '#C0C0C0'), ('gold', '#FFD700');

INSERT INTO e_shop.Subcategories (CategoryId, SubcategoryName, GenderID) VALUES (6, 'Sweater Vests', 1),(6, 'Cardigans', 1),(6, 'Sweaters', 1),(6, 'Turtlenecks', 1), (6, 'Cardigans', 2),(6, 'Sweaters', 2),(6, 'Turtlenecks', 2)

