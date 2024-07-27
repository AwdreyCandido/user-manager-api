CREATE DATABASE IF NOT EXISTS users;

USE users;

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(11) NOT NULL,
    gender ENUM('M', 'F', 'N', 'O') NOT NULL,
    birthDate DATE NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL
);

INSERT INTO users (name, email, phone, gender, birthDate, createdAt, updatedAt) VALUES
-- Janeiro
/*
('Ana Costa', 'ana.costa@example.com', 'F', '1991-03-29', '2024-01-05 09:15:00', '2024-01-05 09:15:00'),
('Rafael Martins', 'rafael.martins@example.com', 'O', '1987-12-05', '2024-01-10 09:30:00', '2024-01-10 09:30:00'),
('Felipe Andrade', 'felipe.andrade@example.com', 'M', '1996-10-14', '2024-01-15 10:30:00', '2024-01-15 10:30:00'),
('Mariana Costa', 'mariana.costa@example.com', 'F', '1994-07-23', '2024-01-20 09:45:00', '2024-01-20 09:45:00'),
('João Silva', 'joao.silva@example.com', 'M', '1988-05-14', '2024-01-25 10:00:00', '2024-01-25 10:00:00'),
('Alex Ferreira', 'alex.ferreira@example.com', 'N', '1990-09-12', '2024-01-30 10:15:00', '2024-01-30 10:15:00'),

-- Fevereiro
('Juliana Campos', 'juliana.campos@example.com', 'F', '1993-11-18', '2024-02-10 09:45:00', '2024-02-10 09:45:00'),
('Camila Almeida', 'camila.almeida@example.com', 'O', '1990-02-03', '2024-02-20 10:15:00', '2024-02-20 10:15:00'),
('Roberto Silva', 'roberto.silva@example.com', 'M', '1984-08-22', '2024-02-25 10:00:00', '2024-02-25 10:00:00'),
('Laura Santos', 'laura.santos@example.com', 'F', '1992-11-05', '2024-02-15 09:30:00', '2024-02-15 09:30:00'),
('Carlos Souza', 'carlos.souza@example.com', 'O', '1989-06-30', '2024-02-18 10:45:00', '2024-02-18 10:45:00'),
('Paula Lima', 'paula.lima@example.com', 'N', '1993-04-21', '2024-02-28 11:00:00', '2024-02-28 11:00:00'),

-- Março
('Carla Borges', 'carla.borges@example.com', 'F', '1982-07-28', '2024-03-05 10:45:00', '2024-03-05 10:45:00'),
('Vinícius Rocha', 'vinicius.rocha@example.com', 'O', '1994-09-16', '2024-03-15 11:00:00', '2024-03-15 11:00:00'),
('Lucas Pereira', 'lucas.pereira@example.com', 'M', '1989-06-12', '2024-03-20 09:00:00', '2024-03-20 09:00:00'),
('Marcos Almeida', 'marcos.almeida@example.com', 'M', '1990-03-23', '2024-03-10 09:15:00', '2024-03-10 09:15:00'),
('Fernanda Costa', 'fernanda.costa@example.com', 'N', '1992-08-17', '2024-03-22 10:30:00', '2024-03-22 10:30:00'),
('Gabriel Martins', 'gabriel.martins@example.com', 'N', '1985-12-12', '2024-03-28 11:00:00', '2024-03-28 11:00:00'),

-- Abril
('Sofia Santos', 'sofia.santos@example.com', 'F', '1998-01-11', '2024-04-05 11:15:00', '2024-04-05 11:15:00'),
('Marcelo Lima', 'marcelo.lima@example.com', 'M', '1985-12-05', '2024-04-12 08:30:00', '2024-04-12 08:30:00'),
('Gabriela Oliveira', 'gabriela.oliveira@example.com', 'O', '1995-02-14', '2024-04-18 09:45:00', '2024-04-18 09:45:00'),
('Ricardo Rocha', 'ricardo.rocha@example.com', 'M', '1991-07-16', '2024-04-15 10:00:00', '2024-04-15 10:00:00'),
('Ana Beatriz', 'ana.beatriz@example.com', 'O', '1989-03-29', '2024-04-22 10:15:00', '2024-04-22 10:15:00'),
('Julio Silva', 'julio.silva@example.com', 'M', '1993-11-30', '2024-04-28 10:45:00', '2024-04-28 10:45:00'),

-- Maio
('Robson Silva', 'robson.silva@example.com', 'M', '1989-10-28', '2024-05-05 10:00:00', '2024-05-05 10:00:00'),
('Beatriz Lima', 'beatriz.lima@example.com', 'F', '1990-04-25', '2024-05-15 11:15:00', '2024-05-15 11:15:00'),
('Eduardo Rocha', 'eduardo.rocha@example.com', 'M', '1995-09-30', '2024-05-20 11:30:00', '2024-05-20 11:30:00'),
('Tatiane Silva', 'tatiane.silva@example.com', 'F', '1991-02-08', '2024-05-08 09:45:00', '2024-05-08 09:45:00'),
('Felipe Costa', 'felipe.costa@example.com', 'M', '1994-08-17', '2024-05-12 10:00:00', '2024-05-12 10:00:00'),
('Marcela Almeida', 'marcela.almeida@example.com', 'F', '1990-11-22', '2024-05-25 10:15:00', '2024-05-25 10:15:00'),

-- Junho
('Claudia Silva', 'claudia.silva@example.com', 'F', '1990-06-30', '2024-06-05 09:15:00', '2024-06-05 09:15:00'),
('João Pedro', 'joao.pedro@example.com', 'M', '1988-11-25', '2024-06-12 09:00:00', '2024-06-12 09:00:00'),
('Letícia Rocha', 'leticia.rocha@example.com', 'F', '1992-04-10', '2024-06-20 08:45:00', '2024-06-20 08:45:00'),
('Lucas Almeida', 'lucas.almeida@example.com', 'M', '1986-12-05', '2024-06-15 09:30:00', '2024-06-15 09:30:00'),
('Patrícia Lima', 'patricia.lima@example.com', 'F', '1993-01-30', '2024-06-22 10:00:00', '2024-06-22 10:00:00'),
('Bruno Souza', 'bruno.souza@example.com', 'M', '1989-04-20', '2024-06-28 10:30:00', '2024-06-28 10:30:00'),

*/
-- Julho
('Júlia Campos', 'julia.campos@example.com', '83912345678', 'F', '1992-11-09', '2024-07-05 10:45:00', '2024-07-05 10:45:00'),
('André Souza', 'andre.souza@example.com', '83923456789', 'M', '1986-08-23', '2024-07-12 11:00:00', '2024-07-12 11:00:00'),
('Tiago Almeida', 'tiago.almeida@example.com', '83934567890', 'M', '1991-05-17', '2024-07-20 10:30:00', '2024-07-20 10:30:00'),
('Luana Martins', 'luana.martins@example.com', '83945678901', 'O', '1988-01-19', '2024-07-25 11:45:00', '2024-07-25 11:45:00'),
('Roberto Lima', 'roberto.lima@example.com', '83956789012', 'M', '1994-03-30', '2024-07-05 09:15:00', '2024-07-05 09:15:00'),
('Gabriela Costa', 'gabriela.costa@example.com', '83967890123', 'N', '1987-09-15', '2024-07-12 10:30:00', '2024-07-12 10:30:00');

COMMIT;


