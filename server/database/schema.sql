CREATE TABLE connexion (
    id INT NOT NULL AUTO_INCREMENT,
    mail VARCHAR(100) NOT NULL,
    mot_de_passe VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE inscription (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    firstname VARCHAR(100) NOT NULL,
    mail VARCHAR(100) NOT NULL,
    mot_de_passe VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE actuality (
    id INT NOT NULL AUTO_INCREMENT,
    name_actuality VARCHAR(100) NOT NULL,
    add_photo TEXT NOT NULL,
    actuality TEXT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE add_actuality (
    id INT NOT NULL AUTO_INCREMENT,
    name_actuality VARCHAR(100) NOT NULL,
    add_photo TEXT NOT NULL,
    actuality TEXT NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO add_actuality (name_actuality, add_photo, actuality) 
VALUES 
('mars', 'images/mars2025.jpg', 'mars 2025');

INSERT INTO inscription (name, firstname, mail, mot_de_passe) 
VALUES 
('John', 'Doe', 'johndoe@example.com', 'password123');

INSERT INTO inscription (name, firstname, mail, mot_de_passe) 
VALUES 
('Jane', 'Smith', 'janesmith@example.com', 'securepass');

INSERT INTO actuality (name_actuality, add_photo, actuality) 
VALUES 
('Lancement de la mission Mars 2025', 
 'images/mars2025.jpg', 
 'La mission Mars 2025 est une étape clé dans l\'ambition de l\'humanité de s\'établir sur Mars. En réussissant à envoyer des astronautes sur Mars et à réaliser des recherches scientifiques, cette mission pourrait ouvrir la voie à des initiatives futures visant à établir des colonies humaines sur la planète rouge. Des projets à long terme, tels que la construction de stations martiennes autonomes et la production d\'énergie à partir de ressources locales, sont déjà en développement. Si la mission Mars 2025 réussit, elle constituera un tremplin pour la colonisation de Mars et le développement de technologies de survie sur d\'autres planètes, marquant ainsi un nouveau chapitre dans l\'histoire de l\'humanité.');
