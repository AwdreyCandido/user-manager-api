CREATE DATABASE IF NOT EXISTS users;

USE users;

CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    gender ENUM('masc', 'fem', 'outros') NOT NULL,
    birthDate DATE NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL
);

INSERT INTO Users (id, name, email, gender, birthDate, createdAt, updatedAt) VALUES
(1, 'João Silva', 'joao.silva@example.com', 'masc', '1990-05-15', '2024-07-24 10:00:00', '2024-07-24 10:00:00'),
(2, 'Maria Oliveira', 'maria.oliveira@example.com', 'fem', '1985-09-30', '2024-07-24 10:00:00', '2024-07-24 10:00:00'),
(3, 'Alex Santos', 'alex.santos@example.com', 'outros', '2000-01-20', '2024-07-24 10:00:00', '2024-07-24 10:00:00'),
(4, 'Pedro Almeida', 'pedro.almeida@example.com', 'masc', '1992-11-02', '2024-07-24 10:00:00', '2024-07-24 10:00:00'),
(5, 'Fernanda Souza', 'fernanda.souza@example.com', 'fem', '1988-04-17', '2024-07-24 10:00:00', '2024-07-24 10:00:00'),
(6, 'Patrícia Lima', 'patricia.lima@example.com', 'fem', '1995-07-23', '2024-07-24 10:00:00', '2024-07-24 10:00:00');

COMMIT;