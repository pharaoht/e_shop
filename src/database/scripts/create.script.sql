CREATE TABLE Genders (
    GenderID INT PRIMARY KEY AUTO_INCREMENT,
    GenderName VARCHAR(255) NOT NULL
);

CREATE TABLE Categories (
    CategoryID INT PRIMARY KEY AUTO_INCREMENT,
    CategoryName VARCHAR(255) NOT NULL,
    GenderID INT NOT NULL,
    FOREIGN KEY (GenderID) REFERENCES Genders(GenderID) ON DELETE CASCADE
);

CREATE TABLE Subcategories (
    SubcategoryID INT PRIMARY KEY AUTO_INCREMENT,
    SubcategoryName VARCHAR(255) NOT NULL,
    CategoryID INT NOT NULL,
    GenderID INT NOT NULL,
    FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID) ON DELETE CASCADE,
    FOREIGN KEY (GenderID) REFERENCES Genders(GenderID) ON DELETE CASCADE
);

CREATE TABLE Materials (
    MaterialID INT PRIMARY KEY AUTO_INCREMENT,
    MaterialName VARCHAR(255) NOT NULL
);

CREATE TABLE Colors (
    ColorID INT PRIMARY KEY AUTO_INCREMENT,
    ColorName VARCHAR(255) NOT NULL,
    ColorCode VARCHAR(255) NOT NULL
);

CREATE TABLE Products (
    ProductID INT PRIMARY KEY AUTO_INCREMENT,
    ProductName VARCHAR(255) NOT NULL,
    CategoryID INT,
    SubcategoryID INT,
    MaterialID INT,
    GenderID INT,
    Price DECIMAL(10, 2) NOT NULL,
    Description TEXT,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;
    FOREIGN KEY (GenderID) REFERENCES Genders(GenderID) ON DELETE SET NULL,
    FOREIGN KEY (MaterialID) REFERENCES Materials(MaterialID) ON DELETE SET NULL,
    FOREIGN KEY (SubcategoryID) REFERENCES Subcategories(SubcategoryID) ON DELETE SET NULL,
    FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID) ON DELETE SET NULL,
);

CREATE TABLE ProductColors (
    ProductColorID INT PRIMARY KEY AUTO_INCREMENT,
    ProductID INT NOT NULL,
    ColorID INT NOT NULL,
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID) ON DELETE CASCADE,
    FOREIGN KEY (ColorID) REFERENCES Colors(ColorID) ON DELETE CASCADE
);

CREATE TABLE Sizes (
    SizeID INT PRIMARY KEY AUTO_INCREMENT,
    SizeName VARCHAR(50) NOT NULL  -- e.g., "S", "M", "L", "XL"
);

CREATE TABLE Images (
    ImageID INT PRIMARY KEY AUTO_INCREMENT,
    ProductID INT,
    ImageURL VARCHAR(255) NOT NULL,
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID) ON DELETE CASCADE
);


CREATE TABLE Users (
    UserID SERIAL PRIMARY KEY,
    GivenName VARCHAR(100) NOT NULL,
    FamilyName VARCHAR(255) NOT NULL,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Carts (
    ID SERIAL PRIMARY KEY,
    UserID INT REFERENCES Users(id) ON DELETE CASCADE,  -- For logged-in users
    SessionID VARCHAR(255),                             -- For guest users
    IsActive BOOLEAN DEFAULT TRUE,                      -- Indicates if the cart is active
    ExpiresAt TIMESTAMP DEFAULT (DATE_ADD(NOW(), INTERVAL 7 DAY)),
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE CartItems (
    ID SERIAL PRIMARY KEY,
    CartID INT REFERENCES Carts(ID) ON DELETE CASCADE,   -- Links to Carts table
    ProductID INT REFERENCES Products(ID),               -- Links to Products table
    Quantity INT NOT NULL CHECK (Quantity > 0),          -- Number of products in the cart
    PriceAtAddition DECIMAL(10, 2) NOT NULL,             -- Price when added to the cart
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

