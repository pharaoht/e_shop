INSERT INTO e_shop.Genders (GenderName) VALUES ('w'), ('m'), ('n'), ('k');

INSERT INTO e_shop.Sizes (SizeName) VALUES ('x_small'), ('small'), ('medium'), ('large'), ('x_large');

INSERT INTO e_shop.Categories (CategoryName, GenderID) VALUES ('Dresses', 1), ('Tops & T-Shirts', 3), ('Blouses', 1), ('Jeans', 3), ('Pants', 3), ('Cardigans & Sweaters', 3), ('Blazers & Vests', 3), ('Jacket & Coats', 3), ('Shorts', 3), ('Skirts', 1), ('Jumpsuits & Overalls', 3), ('Swimwear & Beachwear', 3), ('Sleepwear', 3), ('Socks', 3), ('Hoodies & Sweatshirts', 3);

INSERT INTO e_shop.Materials (MaterialName) VALUES ('cotton'), ('boucle'), ('cord'), ('denim'), ('french_terry'), ('terry_cloth'), ('jersey'), ('linen'), ('lyocell'), ('merino'), ('mesh'), ('oxford'), ('pique'), ('poplin'), ('ripstop'), ('scuba'), ('seersucker'), ('silk'), ('twill'), ('viscose'), ('wool'), ('polyester');
                                                                                                                                                                                                                                                 --9   
INSERT INTO e_shop.Colors (ColorName, ColorCode) VALUES ('red', '#FF0000'), ('green', '#00FF00'), ('blue', '#0000FF'), ('yellow', '#FFFF00'), ('orange', '#FFA500'), ('purple', '#800080'), ('pink', '#FFC0CB'), ('brown', '#A52A2A'), ('black', '#000000'), ('white', '#FFFFFF'), ('gray', '#808080'), ('cyan', '#00FFFF'), ('magenta', '#FF00FF'), ('lime', '#00FF00'), ('maroon', '#800000'), ('navy', '#000080'), ('olive', '#808000'), ('teal', '#008080'), ('silver', '#C0C0C0'), ('gold', '#FFD700');

INSERT INTO e_shop.Subcategories (CategoryID, SubcategoryName, GenderID) VALUES (1, 'Backless Dresses', 1), (1, 'One Shoulder Dresses', 1), (1, 'Cut-Out Dresses', 1), (1, 'Sleeveless Dresses', 1), (1, 'Puff-Sleeve Dresses', 1), (1, 'Halter Dresses', 1), (1, 'Wedding Guest Dresses', 1), (1, 'A-line Dresses', 1), (1, 'Cami Dresses', 1), (1, 'Knit Dresses', 1), (1, 'Long Sleeve Dresses', 1), (1, 'Linen Dresses', 1), (1, 'T-Shirt Dresses', 1), (1, 'Denim Dresses', 1), (1, 'Short Dresses', 1), (1, 'Midi Dresses', 1), (1, 'Maxi Dresses', 1), (1, 'Beach Dresses', 1), (1, 'Bodycon Dresses', 1), (1, 'Cocktail Dresses', 1), (1, 'Lace Dresses', 1), (1, 'Shirt Dresses', 1), (1, 'Sequin Dresses', 1), (1, 'Wrap Dresses', 1), (1, 'Kaftans', 1), (1, 'Party & Going Out Dresses', 1);

INSERT INTO e_shop.Subcategories (CategoryID, SubcategoryName, GenderID) VALUES (2, 'Low Cut Tops',1), (2, 'Corsets & Bustiers',1), (2, 'Collared Tops',1), (2, 'Turtleneck Tops',1), (2, 'Halter Tops',1), (2, 'Cut Out Tops', 1), (2, 'Bandeau Tops', 1), (2, 'Puff Sleeve Tops', 1), (2, 'Sleeveless Tops', 1), (2, 'Short Sleeve Tops', 1), (2, 'Long Sleeve Tops', 1), (2, 'Crop Tops', 1), (2, 'Bodysuits', 1), (2, 'T-Shirts', 1), (2, 'Graphic & Printed T-Shirts', 1);

INSERT INTO e_shop.Subcategories (CategoryID, SubcategoryName, GenderID) VALUES (3, 'Linen Shirts & Blouses',1), (3, 'Shirts',1), (3, 'Blouses',1), (3, 'Tunics',1), (3, 'Denim Shirts',1), (3, 'Off Shoulder Shirts & Blouses',1);

INSERT INTO e_shop.Subcategories (CategoryID, SubcategoryName, GenderID) VALUES (4, 'Mom Jeans', 1), (4, 'Skinny Jeans', 1), (4, 'Wide Leg Jeans', 1), (4, 'Loose & Baggy', 1), (4, 'Curvy', 1), (4, 'Denim Shorts', 1), (4, 'Slim & Straight', 1), (4, 'Baggy & Loose', 2), (4, 'Skinny', 2), (4, 'Slim Fit', 2), (4, 'Relaxed', 2), (4, 'Joggers', 2), (4, 'Regular Fit & Straight', 2);

INSERT INTO e_shop.Subcategories (CategoryID, SubcategoryName, GenderID) VALUES (5, 'Linen Pants', 1), (5, 'Wide Leg Pants', 1), (5, 'Cargo Pants', 1), (5, 'Leggings', 1), (5, 'Joggers', 1), (5, 'Flared Pants', 1), (5, 'Chinos & Slacks', 1), (5, 'Dress Pants', 1), (5, 'High Waisted Pants', 1);

INSERT INTO e_shop.Subcategories (CategoryID, SubcategoryName, GenderID) VALUES (6, 'Sweater Vests', 1),(6, 'Cardigans', 1),(6, 'Sweaters', 1),(6, 'Turtlenecks', 1), (6, 'Cardigans', 2),(6, 'Sweaters', 2),(6, 'Turtlenecks', 2);

INSERT INTO e_shop.Subcategories (CategoryID, SubcategoryName, GenderID) VALUES (7, 'Oversized Blazers & Vests', 1), (7, 'Linen Blazers & Vests', 1), (7, 'Cropped Blazers & Vests', 1), (7, 'Fitted', 1), (7, 'Double-Breasted', 1);

INSERT INTO e_shop.Subcategories (CategoryID, SubcategoryName, GenderID) VALUES (8, 'Teddy & Pile',1), (8, 'Raincoats',1), (8, 'Anoraks',1), (8, 'Puffer Vests',1), (8, 'Shackets',1), (8, 'Trench Coats',1), (8, 'Jackets',1), (8, 'Coats',1), (8, 'Bomber Jackets',1), (8, 'Winter Coats',1), (8, 'Biker Jackets',1), (8, 'Denim Jackets',1), (8, 'Puffer Jackets', 1);

INSERT INTO e_shop.Subcategories (CategoryID, SubcategoryName, GenderID) VALUES (9, 'Biker Shorts', 1), (9, 'Bermudas', 1), (9, 'Denim Shorts', 1), (9, 'High-Waisted Shorts', 1);

INSERT INTO e_shop.Subcategories (CategoryID, SubcategoryName, GenderID) VALUES (10, 'Mini Skirts', 1), (10, 'Pleated Skirts', 1), (10, 'Short Skirts', 1), (10, 'Midi Skirts', 1), (10, 'Maxi Skirts', 1), (10, 'Pencil Skirts', 1), (10, 'Denim Skirts', 1), (10, 'Skater Skirts', 1), (10, 'Wrap Skirts', 1), (10, 'High-Waisted Skirts', 1);

INSERT INTO e_shop.Subcategories (CategoryID, SubcategoryName, GenderID) VALUES (11, 'Overalls', 1), (11, 'Long Jumpsuits', 1), (11, 'Rompers & Playsuits', 1);

INSERT INTO e_shop.Subcategories (CategoryID, SubcategoryName, GenderID) VALUES (12, 'Bikini Sets', 1), (12, 'Bikini Tops', 1), (12, 'Bikini bottoms', 1), (12, 'Swimsuits', 1), (12, 'Beachwear', 1);

INSERT INTO e_shop.Subcategories (CategoryID, SubcategoryName, GenderID) VALUES (13, 'Nighties', 1), (13, 'Pajamas', 1), (13, 'Bath Robes', 1);

INSERT INTO e_shop.Subcategories (CategoryID, SubcategoryName, GenderID) VALUES (14, 'Socks', 1), (14, 'Sports', 1), (14, 'Knee High Socks', 1), (14, 'Ankle Socks', 1), (14, 'Shaping', 1), (14, 'Tights & Leggings', 1);

INSERT INTO e_shop.Subcategories (CategoryID, SubcategoryName, GenderID) VALUES (15, 'Hoodies', 1), (15, 'Sweatshirts', 1);

INSERT INTO e_shop.Products (ProductName, SubcategoryID, MaterialID, GenderID, Price, Description, CategoryID) VALUES ('Open Back Denim Dress', 1, 4, 1, 39.99, 'Denim dress', 1);

INSERT INTO e_shop.ProductColors (ProductColors.ProductID, ProductColors.ColorID) VALUES (1, 10);

INSERT INTO e_shop.ProductColors (ProductColors.ProductID, ProductColors.ColorID) VALUES (1, 9);



