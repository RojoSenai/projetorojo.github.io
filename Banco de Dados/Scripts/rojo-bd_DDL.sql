CREATE DATABASE Rojo_App; 
GO

USE Rojo_App;
GO

--------------------------------- DDL ---------------------------------

CREATE TABLE tipoUsuario
(
	IDTipoUsuario INT PRIMARY KEY IDENTITY,
	PerfisDeUsuario VARCHAR(150) NOT NULL
);
GO

CREATE TABLE Cor
(
	IDCor INT PRIMARY KEY IDENTITY,
	NomeCor VARCHAR (7)
);
GO

CREATE TABLE Empresa
(
	IDEmpresa INT PRIMARY KEY IDENTITY,
	CNPJ CHAR(14) UNIQUE NOT NULL,
	Email VARCHAR (100) UNIQUE NOT NULL,
	Senha VARCHAR (50) NOT NULL,
	NomeFantasia VARCHAR (50) UNIQUE NOT NULL,
	RazaoSocial VARCHAR (50) UNIQUE NOT NULL,
	FundaçãoAniversario Date  NOT NULL,
	Endereço VARCHAR (50) UNIQUE NOT NULL,
	Telefone VARCHAR (11) UNIQUE NOT NULL,
	TotalFuncionarios INT NOT NULL
);
GO

ALTER TABLE Empresa ALTER COLUMN Endereço varchar(505) not null;




CREATE TABLE CorEmpresa
(
	IDEmpresa INT FOREIGN KEY REFERENCES Empresa(IDEmpresa),
	IDCor INT FOREIGN KEY REFERENCES Cor(IDCor),
);
GO

CREATE TABLE Usuario
(
		IDUsuario INT PRIMARY KEY IDENTITY,
		IDTipoUsuario INT FOREIGN KEY REFERENCES tipoUsuario(IDTipoUsuario),
		IDEmpresa INT FOREIGN KEY REFERENCES Empresa(IDEmpresa),
		Email VARCHAR (255) UNIQUE NOT NULL,
		Senha VARCHAR (60) NOT NULL,
		NomeUsu VARCHAR (50) NOT NULL,
		ImagemUsuario VARCHAR (300) NOT NULL,
);
GO	
ALTER TABLE Usuario ALTER COLUMN ImagemUsuario VARCHAR (300);

CREATE TABLE Evento
(
		IDEvento INT PRIMARY KEY IDENTITY,
		IDEmpresa INT FOREIGN KEY REFERENCES Empresa(IDEmpresa),
		IDUsuario INT FOREIGN KEY REFERENCES Usuario (IDUsuario),
		NomeEvento VARCHAR (50) NOT NULL,
		Palestrante VARCHAR (200) NOT NULL,
		DataEventoIncio DATETIME  NOT NULL,
		DataEventoFim DATETIME  NOT NULL,

);
GO

Alter table Evento Add Comentario varchar (500);

exec sp_rename 'Evento.[Comentario]', 'Descricao', 'column'



CREATE TABLE Comentario
(
		IDComentario INT PRIMARY KEY IDENTITY,
		IDEvento INT FOREIGN KEY REFERENCES Evento (IDEvento),
		CadastrarComentario VARCHAR (2300) NOT NULL
);
GO



DROP TABLE Evento; 

ALTER TABLE Usuario ALTER COLUMN Email varchar(255) not null;