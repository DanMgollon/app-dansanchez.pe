USE [ferreteria_jr]
GO
/****** Object:  Table [dbo].[areas]    Script Date: 4/06/2023 15:34:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[areas](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](100) NOT NULL,
	[status_id] [int] NOT NULL,
 CONSTRAINT [PK_areas] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[pdfs_url]    Script Date: 4/06/2023 15:34:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[pdfs_url](
	[url] [varchar](255) NOT NULL,
	[sales_id] [int] NOT NULL,
 CONSTRAINT [PK_pdfs_url] PRIMARY KEY CLUSTERED 
(
	[sales_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[products]    Script Date: 4/06/2023 15:34:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[products](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [text] NOT NULL,
	[price] [decimal](18, 2) NOT NULL,
	[stock] [int] NOT NULL,
	[area_id] [int] NOT NULL,
	[status_id] [int] NOT NULL,
	[products_type_id] [int] NOT NULL,
 CONSTRAINT [PK_productos] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[products_types]    Script Date: 4/06/2023 15:34:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[products_types](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[type] [varchar](100) NOT NULL,
 CONSTRAINT [PK_productos_tipo] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[sales]    Script Date: 4/06/2023 15:34:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[sales](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[date] [datetime] NULL,
	[users_id] [int] NOT NULL,
	[customer] [varchar](200) NULL,
	[dni] [char](8) NULL,
 CONSTRAINT [PK_ventas] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[sales_details]    Script Date: 4/06/2023 15:34:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[sales_details](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[producto_id] [int] NOT NULL,
	[sales_id] [int] NOT NULL,
	[quantity] [int] NOT NULL,
 CONSTRAINT [PK_venta_detalles] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[security]    Script Date: 4/06/2023 15:34:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[security](
	[token] [varbinary](255) NULL,
	[user_id] [int] NOT NULL,
 CONSTRAINT [PK_security_1] PRIMARY KEY CLUSTERED 
(
	[user_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[status]    Script Date: 4/06/2023 15:34:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[status](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[active] [bit] NOT NULL,
 CONSTRAINT [PK_status] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[users]    Script Date: 4/06/2023 15:34:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[users](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[username] [varchar](50) NOT NULL,
	[email] [varchar](255) NOT NULL,
	[password] [varchar](255) NOT NULL,
 CONSTRAINT [PK_usuarios] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[areas] ON 

INSERT [dbo].[areas] ([id], [name], [status_id]) VALUES (1, N'MATERIALES DE CONSTRUCCION', 2)
INSERT [dbo].[areas] ([id], [name], [status_id]) VALUES (2, N'CARPINTERIA METALICA', 2)
INSERT [dbo].[areas] ([id], [name], [status_id]) VALUES (3, N'PINTURA', 2)
INSERT [dbo].[areas] ([id], [name], [status_id]) VALUES (4, N'ACCESORIOS PLASTICOS DE AGUA Y DESAGÜE', 2)
INSERT [dbo].[areas] ([id], [name], [status_id]) VALUES (5, N'HERRAMIENTAS', 2)
INSERT [dbo].[areas] ([id], [name], [status_id]) VALUES (6, N'CERRADURAS', 2)
INSERT [dbo].[areas] ([id], [name], [status_id]) VALUES (7, N'PERNERIA', 2)
INSERT [dbo].[areas] ([id], [name], [status_id]) VALUES (8, N'CARPINTERIA', 2)
INSERT [dbo].[areas] ([id], [name], [status_id]) VALUES (9, N'PRODUCTOS DE LIMPIEZA', 2)
INSERT [dbo].[areas] ([id], [name], [status_id]) VALUES (10, N'CLAVOS', 2)
INSERT [dbo].[areas] ([id], [name], [status_id]) VALUES (12, N'ACCESORIOS ELECTRICOS', 2)
INSERT [dbo].[areas] ([id], [name], [status_id]) VALUES (13, N'AREA DE PRUEBA ACTUALIZADA', 2)
INSERT [dbo].[areas] ([id], [name], [status_id]) VALUES (27, N'PIERO GIL', 1)
SET IDENTITY_INSERT [dbo].[areas] OFF
GO
INSERT [dbo].[pdfs_url] ([url], [sales_id]) VALUES (N'https://res.cloudinary.com/dcyv3nzsg/raw/upload/v1685765335/ferreteria_jr/pdfs/lifh5kk9.pdf', 103)
INSERT [dbo].[pdfs_url] ([url], [sales_id]) VALUES (N'https://res.cloudinary.com/dcyv3nzsg/raw/upload/v1685910450/ferreteria_jr/pdfs/lihvjwop.pdf', 104)
GO
SET IDENTITY_INSERT [dbo].[products] ON 

INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (1, N'Armella de 3/8', CAST(0.30 AS Decimal(18, 2)), 14, 7, 1, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (2, N'"Armella de 1/2"""', CAST(0.30 AS Decimal(18, 2)), 11, 7, 1, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (3, N'Armella de 5/8', CAST(0.40 AS Decimal(18, 2)), 34, 7, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (4, N'"Armella de 1"""', CAST(0.40 AS Decimal(18, 2)), 96, 7, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (5, N'"Armella de 1 1/4"""', CAST(0.50 AS Decimal(18, 2)), 78, 7, 1, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (6, N'"Armella de 1 1/2"""', CAST(0.51 AS Decimal(18, 2)), 1, 7, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (7, N'"Armella de 2"""', CAST(1.00 AS Decimal(18, 2)), 113, 7, 1, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (8, N'Pegamento para PVC NICOLL Azul', CAST(12.00 AS Decimal(18, 2)), 183, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (9, N'Pegamento para PVC NICOLL Transparente', CAST(10.00 AS Decimal(18, 2)), 44, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (10, N'Tinte de madera GLUCOM', CAST(15.00 AS Decimal(18, 2)), 19, 8, 1, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (11, N'Tinte de madera PARACAS', CAST(22.00 AS Decimal(18, 2)), 34, 8, 1, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (12, N'Hoja de sierra SANDFLEX', CAST(6.00 AS Decimal(18, 2)), 95, 8, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (13, N'Cinta teflón', CAST(1.00 AS Decimal(18, 2)), 24, 4, 1, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (14, N'Martillo Tramontina mango madera', CAST(30.00 AS Decimal(18, 2)), 98, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (15, N'"Clavo de acero de 4"""', CAST(0.50 AS Decimal(18, 2)), 141, 10, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (16, N'"Clavo de acero de 3"" (3u)"', CAST(1.00 AS Decimal(18, 2)), 42, 10, 2, 2)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (17, N'"Clavo de acero de 2 1/2"""', CAST(0.25 AS Decimal(18, 2)), 187, 10, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (18, N'"Clavo de acero de 2"""', CAST(0.20 AS Decimal(18, 2)), 178, 10, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (19, N'"Clavo de acero de 1 1/2"" (6u)"', CAST(1.00 AS Decimal(18, 2)), 10, 10, 2, 2)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (20, N'"Clavo de acero de 1"""', CAST(0.10 AS Decimal(18, 2)), 178, 10, 1, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (21, N'"Lija para plato de 7"""', CAST(7.00 AS Decimal(18, 2)), 85, 5, 1, 2)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (22, N'"Lija para plato de 4"""', CAST(5.00 AS Decimal(18, 2)), 184, 5, 1, 2)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (23, N'Guantes de corte', CAST(8.00 AS Decimal(18, 2)), 8, 5, 2, 12)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (24, N'Guantes badana gruesa', CAST(10.00 AS Decimal(18, 2)), 35, 5, 2, 12)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (25, N'Guante de jebe', CAST(10.00 AS Decimal(18, 2)), 134, 5, 2, 12)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (26, N'Guantes de badana', CAST(10.00 AS Decimal(18, 2)), 54, 5, 2, 12)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (27, N'Balanza reloj', CAST(48.00 AS Decimal(18, 2)), 124, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (28, N'Balanza Electronica de 40 kg', CAST(150.00 AS Decimal(18, 2)), 64, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (29, N'"Autoperforantes de 1 1/2"""', CAST(0.20 AS Decimal(18, 2)), 168, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (30, N'"Autoperforantes de 1"""', CAST(0.15 AS Decimal(18, 2)), 10, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (31, N'Perno Hexagonal de 1/4 x 4', CAST(0.60 AS Decimal(18, 2)), 78, 7, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (32, N'Perno Hexagonal de 1/4 x 3 1/2', CAST(0.60 AS Decimal(18, 2)), 82, 7, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (33, N'Perno Hexagonal de 1/4 x 2 1/2', CAST(0.50 AS Decimal(18, 2)), 90, 7, 1, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (34, N'Perno Hexagonal de 1/4 x 2', CAST(0.50 AS Decimal(18, 2)), 2, 7, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (35, N'Perno Hexagonal de 1/4 x 1 1/2', CAST(0.50 AS Decimal(18, 2)), 26, 7, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (36, N'Perno Hexagonal de 1/4 x 1', CAST(0.50 AS Decimal(18, 2)), 155, 7, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (37, N'Perno Hexagonal de 1/4 x 3/4', CAST(0.50 AS Decimal(18, 2)), 117, 7, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (38, N'Extension de alambre vulc. x 20m', CAST(40.00 AS Decimal(18, 2)), 89, 12, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (39, N'Extension de alambre vulc. x 10m', CAST(30.00 AS Decimal(18, 2)), 79, 12, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (40, N'Extension de alambre vulc. x 5m', CAST(20.00 AS Decimal(18, 2)), 115, 12, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (41, N'Tapón PVC de 1/2 embone', CAST(1.00 AS Decimal(18, 2)), 165, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (42, N'Tapón PVC de 1/2 Hembra', CAST(1.00 AS Decimal(18, 2)), 115, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (43, N'Tapón PVC de 1/2 macho', CAST(1.00 AS Decimal(18, 2)), 33, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (44, N'Llave de paso PVC 3/4', CAST(9.00 AS Decimal(18, 2)), 40, 4, 1, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (45, N'Union PVC 3/4 mixto', CAST(2.00 AS Decimal(18, 2)), 32, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (46, N'Plastico azul grueso', CAST(10.00 AS Decimal(18, 2)), 162, 4, 2, 5)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (47, N'Malla rache tupida', CAST(15.00 AS Decimal(18, 2)), 41, 1, 2, 5)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (48, N'Gln Thiner Acrilico 905', CAST(35.00 AS Decimal(18, 2)), 59, 9, 2, 8)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (49, N'Perno cabeza de coche 1/4 x 1 1/2', CAST(0.50 AS Decimal(18, 2)), 16, 7, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (50, N'Perno cabeza de coche 1/4 x 1', CAST(0.50 AS Decimal(18, 2)), 33, 7, 1, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (51, N'Pegamento oatey PVC transparente 1/4', CAST(40.00 AS Decimal(18, 2)), 53, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (52, N'Pegamento PVC amarillo mediano', CAST(3.50 AS Decimal(18, 2)), 25, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (53, N'Pegamento PVC amarillo pequeño', CAST(1.00 AS Decimal(18, 2)), 61, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (54, N'Pegamento oatey pequeño', CAST(5.00 AS Decimal(18, 2)), 20, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (55, N'Pegamento oatey de 1/32 azul', CAST(12.00 AS Decimal(18, 2)), 75, 4, 1, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (56, N'Pegamento oatey de 1/32 transparente', CAST(10.00 AS Decimal(18, 2)), 163, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (57, N'Llaves Allen', CAST(15.00 AS Decimal(18, 2)), 58, 6, 2, 11)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (58, N'Bornes de bateria', CAST(6.00 AS Decimal(18, 2)), 68, 5, 2, 11)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (59, N'Plato lija de 7 para mola', CAST(14.00 AS Decimal(18, 2)), 4, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (60, N'Plato lija de 4 para mola ', CAST(10.00 AS Decimal(18, 2)), 21, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (61, N'Africano 1/16', CAST(5.00 AS Decimal(18, 2)), 176, 8, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (62, N'Africano de 1/4', CAST(19.00 AS Decimal(18, 2)), 170, 8, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (63, N'Llanta de carretilla con aro TRUPER', CAST(70.00 AS Decimal(18, 2)), 109, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (64, N'Llanta de carretilla sin aro', CAST(30.00 AS Decimal(18, 2)), 98, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (65, N'Tanque Eternit x 1,100 Litros', CAST(600.00 AS Decimal(18, 2)), 75, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (66, N'Tanque NICOLL x 600 Litros', CAST(550.00 AS Decimal(18, 2)), 22, 4, 1, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (67, N'Tanque NICOLL x 1,100 Litros ', CAST(650.00 AS Decimal(18, 2)), 136, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (68, N'Gloss Acrilico 1/16', CAST(6.00 AS Decimal(18, 2)), 46, 3, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (69, N'Gloss Acrilico 1/8', CAST(11.00 AS Decimal(18, 2)), 170, 3, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (70, N'Temple PATO x 5kg', CAST(12.00 AS Decimal(18, 2)), 80, 3, 2, 2)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (71, N'Temple PATO x 25kg', CAST(35.00 AS Decimal(18, 2)), 143, 3, 2, 2)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (72, N'Kola tekno Clasica', CAST(46.00 AS Decimal(18, 2)), 68, 3, 2, 9)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (73, N'Barniz transparente paracas ', CAST(80.00 AS Decimal(18, 2)), 125, 3, 2, 8)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (74, N'"Tubo Pvc de 4"" PAVCO"', CAST(35.00 AS Decimal(18, 2)), 114, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (75, N'"Tubo pvc de 2"" desague econom"', CAST(10.00 AS Decimal(18, 2)), 160, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (76, N'"Abrazadera para agua de 2"" a 1/2 consisa"', CAST(20.00 AS Decimal(18, 2)), 161, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (77, N'Boya para tanque', CAST(40.00 AS Decimal(18, 2)), 186, 4, 1, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (78, N'Foco LED estrella de 30 w', CAST(15.00 AS Decimal(18, 2)), 184, 12, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (79, N'Tubo cuadrado 3/4 x 0.9 mm', CAST(20.00 AS Decimal(18, 2)), 106, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (80, N'candado N 75 mm', CAST(18.00 AS Decimal(18, 2)), 66, 6, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (81, N'Bisagras de pin 4 x 3/8', CAST(2.50 AS Decimal(18, 2)), 131, 6, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (82, N'Bisagras de pin 4 x 1/2', CAST(3.00 AS Decimal(18, 2)), 103, 6, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (83, N'Garruchas x4 u', CAST(20.00 AS Decimal(18, 2)), 19, 5, 2, 11)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (84, N'Punta con mango ', CAST(12.00 AS Decimal(18, 2)), 56, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (85, N'Martillo Truper', CAST(30.00 AS Decimal(18, 2)), 45, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (86, N'Comba de 4 Lb Truper', CAST(35.00 AS Decimal(18, 2)), 129, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (87, N'Zapapico sin mango', CAST(35.00 AS Decimal(18, 2)), 64, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (88, N'Tortol de fierro', CAST(6.00 AS Decimal(18, 2)), 59, 5, 1, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (89, N'Trampa para doblar fierro', CAST(15.00 AS Decimal(18, 2)), 190, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (90, N'Cincel de fierro', CAST(6.00 AS Decimal(18, 2)), 159, 5, 1, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (91, N'Cizaya de 18 pulg', CAST(40.00 AS Decimal(18, 2)), 166, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (92, N'Cizaya de 14 pulg', CAST(35.00 AS Decimal(18, 2)), 1, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (93, N'Garruchas grande x 4 u', CAST(30.00 AS Decimal(18, 2)), 69, 5, 2, 2)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (94, N'Garruchas con freno x4u', CAST(25.00 AS Decimal(18, 2)), 2, 5, 2, 2)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (95, N'Pistola para pintar Truper', CAST(70.00 AS Decimal(18, 2)), 189, 3, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (96, N'Esmeriladora Angular 4 1/2 BD', CAST(120.00 AS Decimal(18, 2)), 100, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (97, N'Kit de puerta', CAST(20.00 AS Decimal(18, 2)), 29, 6, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (98, N'Kit de regla o postigo', CAST(20.00 AS Decimal(18, 2)), 150, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (99, N'Bisagra tijera', CAST(1.50 AS Decimal(18, 2)), 141, 6, 1, 7)
GO
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (100, N'Bisagra de pin 2x3/8', CAST(1.50 AS Decimal(18, 2)), 195, 6, 1, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (101, N'Candado N 65 mm', CAST(13.00 AS Decimal(18, 2)), 170, 6, 1, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (102, N'Candado N 50 mm', CAST(10.00 AS Decimal(18, 2)), 192, 6, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (103, N'Candado N 38 mm', CAST(6.00 AS Decimal(18, 2)), 28, 6, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (104, N'Lija para agua', CAST(2.00 AS Decimal(18, 2)), 100, 1, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (105, N'Lija para fierro', CAST(3.00 AS Decimal(18, 2)), 99, 1, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (106, N'Barniz transparente de 1/4 Galón (US 3,785)', CAST(35.00 AS Decimal(18, 2)), 52, 3, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (107, N'Impermeabilizante SIKA 1 Lt Galón (US 3,785)', CAST(35.00 AS Decimal(18, 2)), 98, 3, 2, 8)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (108, N'Cera Blanca LT', CAST(18.00 AS Decimal(18, 2)), 150, 3, 2, 8)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (109, N'Cera Siliconada Lit', CAST(7.00 AS Decimal(18, 2)), 129, 3, 2, 4)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (110, N'Cizaya de 24 pulg', CAST(60.00 AS Decimal(18, 2)), 140, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (111, N'Puntas de Fierro', CAST(6.00 AS Decimal(18, 2)), 73, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (112, N'Arco de sierra Econm.', CAST(10.00 AS Decimal(18, 2)), 127, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (113, N'Arco de sierra Pretul', CAST(18.00 AS Decimal(18, 2)), 87, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (114, N'Serrucho Profield de 18 pulg', CAST(18.00 AS Decimal(18, 2)), 161, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (115, N'Serrucho Pretul de 20 pulg', CAST(18.00 AS Decimal(18, 2)), 13, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (116, N'Escobilla de fierro Truper', CAST(8.00 AS Decimal(18, 2)), 119, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (117, N'Escobilla de fierro econom', CAST(5.00 AS Decimal(18, 2)), 151, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (118, N'Nivel de Mano Truper', CAST(25.00 AS Decimal(18, 2)), 175, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (119, N'Plancha de batir mango goma', CAST(18.00 AS Decimal(18, 2)), 156, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (120, N'Bruña de canto y centro econom', CAST(6.00 AS Decimal(18, 2)), 40, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (121, N'Chapa Forte Barra 226', CAST(63.00 AS Decimal(18, 2)), 86, 6, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (122, N'Chapa Forte Pin 240', CAST(63.00 AS Decimal(18, 2)), 98, 6, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (123, N'Lentes Oscuros', CAST(8.00 AS Decimal(18, 2)), 34, 5, 1, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (124, N'Lentes transparentes', CAST(6.00 AS Decimal(18, 2)), 104, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (125, N'Varillas de Bronce', CAST(4.00 AS Decimal(18, 2)), 117, 1, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (126, N'Soldadura Punto Azul 1/8', CAST(17.00 AS Decimal(18, 2)), 30, 1, 2, 1)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (127, N'Disco Flat de 4 1/2', CAST(6.00 AS Decimal(18, 2)), 40, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (128, N'Disco de desbaste 7 1/2', CAST(9.00 AS Decimal(18, 2)), 33, 5, 1, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (129, N'Disco de desbaste 4 1/2', CAST(6.00 AS Decimal(18, 2)), 107, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (130, N'Disco Corte madera 10', CAST(25.00 AS Decimal(18, 2)), 71, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (131, N'Tiralinea TRUPER', CAST(20.00 AS Decimal(18, 2)), 157, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (132, N'Tiralineas Econom', CAST(10.00 AS Decimal(18, 2)), 2, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (133, N'Spray Cromado', CAST(10.00 AS Decimal(18, 2)), 28, 3, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (134, N'Spray de color', CAST(8.00 AS Decimal(18, 2)), 14, 3, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (135, N'Rodillo Econom N 9', CAST(10.00 AS Decimal(18, 2)), 79, 3, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (136, N'Rodillo Toro N9', CAST(18.00 AS Decimal(18, 2)), 50, 3, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (137, N'Brocha de 6 pulg', CAST(10.00 AS Decimal(18, 2)), 31, 3, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (138, N'Brocha de 4 pulg', CAST(7.00 AS Decimal(18, 2)), 51, 3, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (139, N'Brocha de 3 pulg', CAST(6.00 AS Decimal(18, 2)), 125, 3, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (140, N'Brocha de 2 pulg', CAST(3.00 AS Decimal(18, 2)), 137, 3, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (141, N'Cintillos de 30 cm x 100 u', CAST(12.00 AS Decimal(18, 2)), 196, 5, 2, 2)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (142, N'Cintillos de 20 cm x 100 u', CAST(10.00 AS Decimal(18, 2)), 161, 5, 2, 2)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (143, N'Wincha pasa - cable de 15m', CAST(20.00 AS Decimal(18, 2)), 130, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (144, N'Wincha pasa-cable de 10 m', CAST(15.00 AS Decimal(18, 2)), 125, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (145, N'Alambre Mellizo N° 16 INDECO', CAST(2.50 AS Decimal(18, 2)), 131, 1, 2, 5)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (146, N'Alambre Mellizo N° 18 INDECO', CAST(2.00 AS Decimal(18, 2)), 158, 1, 2, 5)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (147, N'Alambre Mellizo econom', CAST(1.50 AS Decimal(18, 2)), 151, 1, 1, 5)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (148, N'Alambre solido de hebras N 14 INDECO m', CAST(2.00 AS Decimal(18, 2)), 74, 12, 2, 5)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (149, N'Alambre solido de hebras N 14 INDECO r', CAST(190.00 AS Decimal(18, 2)), 199, 12, 2, 5)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (150, N'Adaptador de enchufe 3 a 2', CAST(2.00 AS Decimal(18, 2)), 67, 12, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (151, N'Bruña de centro y canto Truper', CAST(12.00 AS Decimal(18, 2)), 16, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (152, N'Nivel de mano econom', CAST(12.00 AS Decimal(18, 2)), 1, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (153, N'Barilejo grande', CAST(8.00 AS Decimal(18, 2)), 106, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (154, N'Plancha Raspin', CAST(14.00 AS Decimal(18, 2)), 50, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (155, N'Plancha de pulir', CAST(14.00 AS Decimal(18, 2)), 170, 5, 1, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (156, N'Plancha de Batir', CAST(12.00 AS Decimal(18, 2)), 17, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (157, N'Espatula de 5 pulg', CAST(6.00 AS Decimal(18, 2)), 168, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (158, N'Espatula de 4 pulg', CAST(5.00 AS Decimal(18, 2)), 167, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (159, N'Espátula de 3 pulg', CAST(4.00 AS Decimal(18, 2)), 174, 5, 1, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (160, N'Espatula de 2 pulg', CAST(3.00 AS Decimal(18, 2)), 71, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (161, N'Disco Corte madera 7 1/2', CAST(18.00 AS Decimal(18, 2)), 127, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (162, N'Disco Corte madera 4 1/2', CAST(10.00 AS Decimal(18, 2)), 134, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (163, N'Disco Corte concreto 9', CAST(30.00 AS Decimal(18, 2)), 43, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (164, N'Disco Corte concreto 7 1/2', CAST(18.00 AS Decimal(18, 2)), 33, 5, 1, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (165, N'Disco Corte concreto 4 1/2', CAST(10.00 AS Decimal(18, 2)), 19, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (166, N'Disco Tronzadora metal 14', CAST(25.00 AS Decimal(18, 2)), 25, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (167, N'Disco corte metal 7 1/2-3M', CAST(9.00 AS Decimal(18, 2)), 106, 5, 1, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (168, N'Disco corte metal 4 1/2-3 M', CAST(5.00 AS Decimal(18, 2)), 156, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (169, N'Foco LED de 50 w', CAST(22.00 AS Decimal(18, 2)), 185, 12, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (170, N'Cintillos de 40 cm x 100 u', CAST(18.00 AS Decimal(18, 2)), 31, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (171, N'Brocha de 1 pulg', CAST(2.00 AS Decimal(18, 2)), 20, 3, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (172, N'Lavaderos de fierro de 2 pozas', CAST(175.00 AS Decimal(18, 2)), 28, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (173, N'Lavaderos de fierro de 1 poza', CAST(75.00 AS Decimal(18, 2)), 138, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (174, N'Chapa cajón Econom', CAST(3.00 AS Decimal(18, 2)), 120, 6, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (175, N'Chapa Cajon KOVA', CAST(6.00 AS Decimal(18, 2)), 31, 6, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (176, N'Chapa Cajon Yale Original', CAST(25.00 AS Decimal(18, 2)), 129, 6, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (177, N'Chapa Bola interior', CAST(18.00 AS Decimal(18, 2)), 24, 6, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (178, N'Chapa Yale Barra', CAST(55.00 AS Decimal(18, 2)), 138, 6, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (179, N'Chapa Yale pin', CAST(55.00 AS Decimal(18, 2)), 178, 6, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (180, N'Chapa Travex pin 333', CAST(50.00 AS Decimal(18, 2)), 52, 6, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (181, N'Tomacorriente triple s/p c/ psta tierra', CAST(6.00 AS Decimal(18, 2)), 117, 12, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (182, N'Tomacorriente triple de s/p', CAST(5.00 AS Decimal(18, 2)), 97, 12, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (183, N'Interruptor simple s/p', CAST(2.00 AS Decimal(18, 2)), 145, 12, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (184, N'Tomacorriente simple de s/p', CAST(2.00 AS Decimal(18, 2)), 149, 12, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (185, N'Sócate colgante', CAST(1.00 AS Decimal(18, 2)), 158, 12, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (186, N'Sócate Ovalado p/ empotrado', CAST(4.00 AS Decimal(18, 2)), 128, 12, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (187, N'Sócate para pared econ', CAST(3.00 AS Decimal(18, 2)), 171, 12, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (188, N'Tomacorriente c/ psta tierra Empot. Econ', CAST(6.00 AS Decimal(18, 2)), 173, 12, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (189, N'Toma Inter mixto P/ Emp Econ', CAST(5.00 AS Decimal(18, 2)), 124, 12, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (190, N'Interruptor triple p/ empotrado Econ.', CAST(6.00 AS Decimal(18, 2)), 51, 12, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (191, N'Enchufe Industrial', CAST(5.00 AS Decimal(18, 2)), 112, 12, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (192, N'Enchufe Vision color', CAST(3.00 AS Decimal(18, 2)), 152, 12, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (193, N'Enchufe negro econ.', CAST(1.00 AS Decimal(18, 2)), 176, 12, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (194, N'Interruptor colgante', CAST(2.00 AS Decimal(18, 2)), 42, 12, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (195, N'Rondana rectangular grande (mad)', CAST(1.00 AS Decimal(18, 2)), 84, 7, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (196, N'Rondana redonda grande (mad)', CAST(1.00 AS Decimal(18, 2)), 12, 7, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (197, N'Rondana redonda chica (mad)', CAST(0.50 AS Decimal(18, 2)), 181, 7, 1, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (198, N'Tapas ciegas rectangulares', CAST(1.00 AS Decimal(18, 2)), 39, 12, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (199, N'Tapas ciegas Redondas', CAST(1.00 AS Decimal(18, 2)), 169, 12, 1, 7)
GO
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (200, N'Caja Para cuchillas 8 polos', CAST(18.00 AS Decimal(18, 2)), 152, 12, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (201, N'Caja Para cuchillas 6 polos', CAST(16.00 AS Decimal(18, 2)), 52, 12, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (202, N'Caja Para cuchillas 4 polos', CAST(14.00 AS Decimal(18, 2)), 195, 12, 1, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (203, N'Foco LED de 60 w Tipo Plato', CAST(30.00 AS Decimal(18, 2)), 186, 12, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (204, N'Foco LED de 50 w tipo plato', CAST(30.00 AS Decimal(18, 2)), 118, 12, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (205, N'Foco LED de 28 w', CAST(15.00 AS Decimal(18, 2)), 144, 12, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (206, N'Foco LED de 18w', CAST(12.00 AS Decimal(18, 2)), 51, 12, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (207, N'Foco LED de 15 w', CAST(10.00 AS Decimal(18, 2)), 25, 12, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (208, N'Foco LED de 9 w', CAST(7.00 AS Decimal(18, 2)), 115, 12, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (209, N'Foco LED de 48 wats', CAST(20.00 AS Decimal(18, 2)), 107, 12, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (210, N'Interruptor doble de S/P', CAST(5.00 AS Decimal(18, 2)), 115, 12, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (211, N'Interruptor doble p/ empotrado Econ.', CAST(5.00 AS Decimal(18, 2)), 171, 12, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (212, N'Interruptor simplle p/ empotrado Econ.', CAST(4.00 AS Decimal(18, 2)), 169, 12, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (213, N'Tomacorriente triple p/ empotrado Econ.', CAST(6.00 AS Decimal(18, 2)), 145, 12, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (214, N'Tomacorriente doble p/ empotrado Econ.', CAST(5.00 AS Decimal(18, 2)), 133, 12, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (215, N'Tomacorriente simple p/ empotrado Econ.', CAST(4.00 AS Decimal(18, 2)), 25, 12, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (216, N'Abrazaderas para tubo de Luz 3/4', CAST(0.35 AS Decimal(18, 2)), 57, 12, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (217, N'Caja Octagonal PVC Luz', CAST(1.00 AS Decimal(18, 2)), 180, 12, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (218, N'Caja Rectangular PVC Luz', CAST(1.00 AS Decimal(18, 2)), 52, 12, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (219, N'Curvas PVC de 3/4 Luz', CAST(0.60 AS Decimal(18, 2)), 44, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (220, N'Tubo PVC de 3/4 Luz', CAST(4.50 AS Decimal(18, 2)), 126, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (221, N'Tubo PVC de 6 desagüe', CAST(130.00 AS Decimal(18, 2)), 138, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (222, N'Codo PVC de 3 desagüe', CAST(5.00 AS Decimal(18, 2)), 117, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (223, N'Tapón PCV de 2 desagüe', CAST(2.50 AS Decimal(18, 2)), 174, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (224, N'Reducciones PVC de 4 a 2 desagüe', CAST(5.00 AS Decimal(18, 2)), 140, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (225, N'Tapón PCV de 4 desagüe', CAST(4.00 AS Decimal(18, 2)), 163, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (226, N'Yee PVC de 2 desagüe', CAST(4.00 AS Decimal(18, 2)), 91, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (227, N'Tee PVC de 2 desagüe', CAST(4.00 AS Decimal(18, 2)), 160, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (228, N'Codo PVC de 2 x 45 desagüe', CAST(2.50 AS Decimal(18, 2)), 196, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (229, N'Codo PVC de 2 x 90 desagüe', CAST(2.50 AS Decimal(18, 2)), 28, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (230, N'Yee PVC de 4 a 2 desagüe', CAST(8.00 AS Decimal(18, 2)), 86, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (231, N'Yee PVC de 4 x 4 desagüe', CAST(14.00 AS Decimal(18, 2)), 161, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (232, N'Tee PVC de 4 a 2 desagüe', CAST(8.00 AS Decimal(18, 2)), 172, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (233, N'Tee PVC de 4 x 4 desagüe', CAST(12.00 AS Decimal(18, 2)), 41, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (234, N'Codo PVC de 4 x 45 desagüe', CAST(8.00 AS Decimal(18, 2)), 43, 4, 1, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (235, N'Codo PVC de 4 x 90 desagüe', CAST(8.00 AS Decimal(18, 2)), 101, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (236, N'Tubo PVC de 2 Nicoll desagüe', CAST(17.00 AS Decimal(18, 2)), 144, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (237, N'Tubo PVC de 3 Eurotubo desagüe', CAST(20.00 AS Decimal(18, 2)), 91, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (238, N'Tubo PVC de 4 Eurotubo desagüe', CAST(33.00 AS Decimal(18, 2)), 138, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (239, N'Tubo PVC de 4 marca Tubos lima', CAST(28.00 AS Decimal(18, 2)), 89, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (240, N'Univarsal PVC 3/4 agua', CAST(6.00 AS Decimal(18, 2)), 75, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (241, N'Llave de ganso resorte', CAST(35.00 AS Decimal(18, 2)), 27, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (242, N'Llave de ganso pesada', CAST(25.00 AS Decimal(18, 2)), 64, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (243, N'Llave de ganso econom', CAST(15.00 AS Decimal(18, 2)), 138, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (244, N'Cuello de cera con Guia', CAST(7.00 AS Decimal(18, 2)), 89, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (245, N'Registro de 4 pulg', CAST(12.00 AS Decimal(18, 2)), 122, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (246, N'Resumidero de 4 pulg', CAST(12.00 AS Decimal(18, 2)), 80, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (247, N'Rejilla con tapa de jebe 2 pulg', CAST(4.00 AS Decimal(18, 2)), 124, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (248, N'Registro de 2 pulg', CAST(4.00 AS Decimal(18, 2)), 107, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (249, N'Resumidero de 2 pulg', CAST(4.00 AS Decimal(18, 2)), 165, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (250, N'Trampa flexible para una poza', CAST(15.00 AS Decimal(18, 2)), 100, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (251, N'Desaguadero de lavadero fierro', CAST(15.00 AS Decimal(18, 2)), 193, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (252, N'Trampa Gris de 2 pulg', CAST(8.00 AS Decimal(18, 2)), 19, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (253, N'Trampa blanca p/ Lav. fierro', CAST(8.00 AS Decimal(18, 2)), 170, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (254, N'Tampa Botella para lavadero', CAST(10.00 AS Decimal(18, 2)), 77, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (255, N'Accesorios de tanque agua', CAST(22.00 AS Decimal(18, 2)), 119, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (256, N'Valvula de salida SANI', CAST(7.00 AS Decimal(18, 2)), 60, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (257, N'Salida de ducha plástica agua', CAST(5.00 AS Decimal(18, 2)), 102, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (258, N'Salida de ducha metal agua', CAST(20.00 AS Decimal(18, 2)), 125, 4, 1, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (259, N'Llave de lavadero pesado', CAST(25.00 AS Decimal(18, 2)), 168, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (260, N'Llave de lavadero Liviano', CAST(15.00 AS Decimal(18, 2)), 132, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (261, N'Llave de ducha metal agua', CAST(25.00 AS Decimal(18, 2)), 116, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (262, N'Llave grifo de palanca PCP agua', CAST(18.00 AS Decimal(18, 2)), 52, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (263, N'Llave grifo Bronce agua', CAST(13.00 AS Decimal(18, 2)), 96, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (264, N'Llave Grifo de palanca roja pesada agua', CAST(12.00 AS Decimal(18, 2)), 118, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (265, N'Llave Grifo de palanca roja agua', CAST(10.00 AS Decimal(18, 2)), 68, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (266, N'Manguera de abastos 7/8 agua', CAST(8.00 AS Decimal(18, 2)), 132, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (267, N'Manguera de abastos 5/8 agua', CAST(8.00 AS Decimal(18, 2)), 49, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (268, N'Manguera de abastos 1/2 agua', CAST(8.00 AS Decimal(18, 2)), 62, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (269, N'Tee PVc de 3/4 agua', CAST(2.00 AS Decimal(18, 2)), 90, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (270, N'Codo PVC de 3/4 embone agua', CAST(2.00 AS Decimal(18, 2)), 72, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (271, N'Codo PVC de 3/4 con rosca agua', CAST(2.00 AS Decimal(18, 2)), 105, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (272, N'Reducciones PVC de 3/4 a 1/2 con rosca', CAST(2.00 AS Decimal(18, 2)), 62, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (273, N'Bushing PVC de 3/4 agua', CAST(3.00 AS Decimal(18, 2)), 41, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (274, N'Bushing PVC de 1/2 agua', CAST(2.50 AS Decimal(18, 2)), 129, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (275, N'Reduccions PVC de 3/4 x 1/2 agua', CAST(2.00 AS Decimal(18, 2)), 122, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (276, N'Codo PVC de 1/2 x 45 agua', CAST(1.50 AS Decimal(18, 2)), 21, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (277, N'Llave de paso 1/2 agua', CAST(8.00 AS Decimal(18, 2)), 36, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (278, N'Universales 1/2 PVC agua', CAST(4.00 AS Decimal(18, 2)), 25, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (279, N'Niples PVC de 1/2 grandes agua', CAST(2.00 AS Decimal(18, 2)), 167, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (280, N'Niples PVC de 1/2 chicos agua', CAST(1.50 AS Decimal(18, 2)), 27, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (281, N'Adaptadores PVC 1/2 agua', CAST(1.50 AS Decimal(18, 2)), 96, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (282, N'Unión PVC de 1/2 MIXTO agua', CAST(1.50 AS Decimal(18, 2)), 120, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (283, N'Unión PVC de 1/2 rosca agua', CAST(1.50 AS Decimal(18, 2)), 57, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (284, N'Unión PVC de 1/2 Embone agua', CAST(1.50 AS Decimal(18, 2)), 122, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (285, N'Tee PVC de 1/2 agua', CAST(1.50 AS Decimal(18, 2)), 181, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (286, N'Codo Cobre de 1/2 agua', CAST(4.00 AS Decimal(18, 2)), 10, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (287, N'Codo GALV de 1/2 agua', CAST(2.50 AS Decimal(18, 2)), 111, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (288, N'Codo PVC de 1/2 mixto agua', CAST(1.50 AS Decimal(18, 2)), 46, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (289, N'Codo PVC de 1/2 agua', CAST(1.50 AS Decimal(18, 2)), 2, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (290, N'Tubo PVC de 1 agua', CAST(18.00 AS Decimal(18, 2)), 80, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (291, N'Tubo PVC de 3/4 agua', CAST(15.00 AS Decimal(18, 2)), 103, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (292, N'Tubo PVC de 1/2 agua', CAST(12.00 AS Decimal(18, 2)), 37, 4, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (293, N'Pintura de agua color y blanco', CAST(4.00 AS Decimal(18, 2)), 157, 3, 2, 2)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (294, N'Calaminon (030) 6m x 1.05m', CAST(137.00 AS Decimal(18, 2)), 99, 1, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (295, N'Calamina transparente de 1.80 m', CAST(35.00 AS Decimal(18, 2)), 41, 1, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (296, N'Calamina 014 x 3.60', CAST(24.00 AS Decimal(18, 2)), 117, 1, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (297, N'Calamina 022 x 3.60', CAST(34.00 AS Decimal(18, 2)), 24, 1, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (298, N'Celocia verda x 0.90m', CAST(4.00 AS Decimal(18, 2)), 109, 1, 2, 5)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (299, N'Celocia verde x 1.20m', CAST(5.00 AS Decimal(18, 2)), 3, 1, 1, 5)
GO
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (300, N'Malla Forrada verde de 1/2', CAST(6.00 AS Decimal(18, 2)), 76, 1, 2, 5)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (301, N'Malla Galv 1/2 gruesa', CAST(9.00 AS Decimal(18, 2)), 80, 1, 2, 5)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (302, N'Malla Galv de 1/2 econ', CAST(5.00 AS Decimal(18, 2)), 13, 1, 2, 5)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (303, N'Ballestas 0.75 x 10', CAST(34.00 AS Decimal(18, 2)), 13, 5, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (304, N'Cuerda p/ puerta enrollable', CAST(8.00 AS Decimal(18, 2)), 197, 2, 2, 5)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (305, N'Cartera p/ puerta enrollable', CAST(15.00 AS Decimal(18, 2)), 75, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (306, N'Tambor p/ puerta enrollable', CAST(15.00 AS Decimal(18, 2)), 107, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (307, N'Regia T o Engranpe', CAST(100.00 AS Decimal(18, 2)), 28, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (308, N'Regla U', CAST(85.00 AS Decimal(18, 2)), 166, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (309, N'Plancha Negra 1/16 comercial', CAST(160.00 AS Decimal(18, 2)), 184, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (310, N'Plancha Estrellada 2mm', CAST(250.00 AS Decimal(18, 2)), 75, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (311, N'Plancha Galv 1/32 Comercial', CAST(100.00 AS Decimal(18, 2)), 98, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (312, N'Plancha Galv 1/27 Comercial', CAST(110.00 AS Decimal(18, 2)), 103, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (313, N'Plancha Negra 1/32 Comercial', CAST(90.00 AS Decimal(18, 2)), 63, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (314, N'Plancha Negra 1/27 Comercial', CAST(100.00 AS Decimal(18, 2)), 92, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (315, N'Plancha Negra 1/20 Comercial', CAST(125.00 AS Decimal(18, 2)), 49, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (316, N'Platina de 2 x 1/8', CAST(40.00 AS Decimal(18, 2)), 169, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (317, N'Platina de 1/2 x 3/16', CAST(22.00 AS Decimal(18, 2)), 168, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (318, N'Platina de 1 x 1/8', CAST(22.00 AS Decimal(18, 2)), 107, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (319, N'Platina de 3/4 x 1/8', CAST(17.00 AS Decimal(18, 2)), 136, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (320, N'Platina de 1/2 x 1/8', CAST(11.00 AS Decimal(18, 2)), 160, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (321, N'Fierro Redondo de 12mm (1/2)', CAST(34.00 AS Decimal(18, 2)), 199, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (322, N'Fierro Redondo de 3/8 (9mm)', CAST(22.00 AS Decimal(18, 2)), 90, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (323, N'Fierro Cuadrado de 12mm (1/2)', CAST(34.00 AS Decimal(18, 2)), 95, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (324, N'Fierro Cuadrado de 3/8', CAST(22.00 AS Decimal(18, 2)), 86, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (325, N'Tee de 3/4', CAST(30.00 AS Decimal(18, 2)), 62, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (326, N'Tee de 1 x 1/8', CAST(37.00 AS Decimal(18, 2)), 43, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (327, N'Angulo de 3/4 x 2mm', CAST(20.00 AS Decimal(18, 2)), 198, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (328, N'Angulo de 1 x 1/8', CAST(35.00 AS Decimal(18, 2)), 97, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (329, N'Angulo de 1 x 2.5mm', CAST(29.00 AS Decimal(18, 2)), 138, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (330, N'Angulo de 1 x 2mm', CAST(25.00 AS Decimal(18, 2)), 119, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (331, N'Angulo de 1 1/4 x 1/8', CAST(42.00 AS Decimal(18, 2)), 175, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (332, N'Angulo de 1 1/2 x 1/8', CAST(55.00 AS Decimal(18, 2)), 151, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (333, N'Tubo Rectangular 2 x 1 x 0.9', CAST(33.00 AS Decimal(18, 2)), 150, 2, 1, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (334, N'Tubo Rectangular 2 x 1 x 1.5mm', CAST(55.00 AS Decimal(18, 2)), 98, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (335, N'Tubo Rectangular 40 x 60 x 1.5mm', CAST(73.00 AS Decimal(18, 2)), 35, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (336, N'Tubo Rectangular 40 x 60 x 2mm', CAST(100.00 AS Decimal(18, 2)), 132, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (337, N'Tubo Rectangular 40 x 80  x 1.5mm', CAST(90.00 AS Decimal(18, 2)), 19, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (338, N'Tubo Rectangular 40 x 80 x 2mm', CAST(125.00 AS Decimal(18, 2)), 168, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (339, N'Tubo Rectangular de 4 x 2 x 2mm', CAST(190.00 AS Decimal(18, 2)), 59, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (340, N'Tubo Cuadrado de 3/4 x 1.2mm', CAST(25.00 AS Decimal(18, 2)), 12, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (341, N'Tubo Cuadrado de 3/4 x 1.5mm', CAST(32.00 AS Decimal(18, 2)), 136, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (342, N'Tubo Cuadrado de 1 x 0.9', CAST(27.00 AS Decimal(18, 2)), 92, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (343, N'Tubo Cuadrado de 1 x 1.2mm', CAST(33.00 AS Decimal(18, 2)), 79, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (344, N'Tubo Cuadrado de 1 x 1.5mm', CAST(40.00 AS Decimal(18, 2)), 33, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (345, N'Tubo Cuadrado de 1 1/4 x 1.5mm', CAST(50.00 AS Decimal(18, 2)), 185, 2, 1, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (346, N'Tubo Cuadrado de 1 1/2 x 1.5mm', CAST(55.00 AS Decimal(18, 2)), 82, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (347, N'Tubo Cuadrado de 2 x 2mm', CAST(100.00 AS Decimal(18, 2)), 25, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (348, N'Tubo Redondo de 1/2 x 2mm', CAST(35.00 AS Decimal(18, 2)), 143, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (349, N'Tubo Redondo de 3/4 x 2mm', CAST(45.00 AS Decimal(18, 2)), 23, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (350, N'Tubo Redondo de 1 x 2mm', CAST(55.00 AS Decimal(18, 2)), 69, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (351, N'Tubo Redondo de 1 1/4 x 2mm', CAST(65.00 AS Decimal(18, 2)), 73, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (352, N'Tubo Redondo de de 1 1/2 x 2mm', CAST(75.00 AS Decimal(18, 2)), 120, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (353, N'Tubo Redondo de 2 x 2mm', CAST(95.00 AS Decimal(18, 2)), 117, 2, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (354, N'Escobilla de baño', CAST(6.00 AS Decimal(18, 2)), 65, 9, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (355, N'Tirabuzón para baño', CAST(6.00 AS Decimal(18, 2)), 113, 9, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (356, N'Fragua color', CAST(6.00 AS Decimal(18, 2)), 115, 1, 2, 2)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (357, N'Talco Americano', CAST(3.50 AS Decimal(18, 2)), 162, 3, 2, 2)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (358, N'Tiza o merluza', CAST(2.00 AS Decimal(18, 2)), 67, 1, 2, 2)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (359, N'Kola Tekno verde x kilo', CAST(14.00 AS Decimal(18, 2)), 55, 3, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (360, N'Kola Tekno verde', CAST(50.00 AS Decimal(18, 2)), 9, 3, 2, 2)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (361, N'Quitasarro', CAST(5.00 AS Decimal(18, 2)), 128, 9, 2, 4)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (362, N'Kresso', CAST(7.00 AS Decimal(18, 2)), 38, 9, 2, 4)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (363, N'Soda caustica liquida', CAST(8.00 AS Decimal(18, 2)), 98, 9, 2, 4)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (364, N'Acido Muriatico', CAST(7.00 AS Decimal(18, 2)), 152, 9, 2, 4)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (365, N'Manguera para agua', CAST(1.50 AS Decimal(18, 2)), 16, 4, 2, 5)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (366, N'Manguera de Nivel', CAST(1.00 AS Decimal(18, 2)), 17, 1, 1, 5)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (367, N'Preservante de madera', CAST(20.00 AS Decimal(18, 2)), 69, 3, 2, 4)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (368, N'Aguarras', CAST(9.00 AS Decimal(18, 2)), 200, 3, 2, 6)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (369, N'Thiner Acrilico', CAST(9.00 AS Decimal(18, 2)), 192, 3, 1, 6)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (370, N'Gln Thiner Acrilico 305', CAST(24.00 AS Decimal(18, 2)), 163, 3, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (371, N'Base Gris 1/4', CAST(20.00 AS Decimal(18, 2)), 198, 3, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (372, N'Base Gris al aceite', CAST(70.00 AS Decimal(18, 2)), 52, 3, 2, 8)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (373, N'Base Zincromato 1/4', CAST(16.00 AS Decimal(18, 2)), 40, 3, 2, 8)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (374, N'Base Zincromato Maestro', CAST(58.00 AS Decimal(18, 2)), 56, 3, 2, 8)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (375, N'Anticorrosivo Maestro', CAST(55.00 AS Decimal(18, 2)), 14, 3, 2, 8)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (376, N'Anticorrosivo Koral', CAST(42.00 AS Decimal(18, 2)), 77, 3, 2, 8)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (377, N'Esmalte sintético CPP', CAST(55.00 AS Decimal(18, 2)), 100, 3, 2, 8)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (378, N'Laca Selladora 1/4', CAST(20.00 AS Decimal(18, 2)), 187, 3, 2, 8)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (379, N'Laca Selladora Paracas', CAST(68.00 AS Decimal(18, 2)), 123, 3, 2, 8)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (380, N'Laca a la piroxilina 1/4', CAST(20.00 AS Decimal(18, 2)), 89, 3, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (381, N'Laca a la Piroxilina', CAST(70.00 AS Decimal(18, 2)), 95, 3, 2, 8)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (382, N'Gloss Acrilico 1/4', CAST(21.00 AS Decimal(18, 2)), 61, 3, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (383, N'Gloss Acrilico', CAST(80.00 AS Decimal(18, 2)), 117, 3, 2, 8)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (384, N'Esmalte Sintético 1/4', CAST(16.00 AS Decimal(18, 2)), 127, 3, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (385, N'Esmalte Sintético Económico', CAST(42.00 AS Decimal(18, 2)), 191, 3, 2, 8)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (386, N'LATEX CPP', CAST(40.00 AS Decimal(18, 2)), 158, 3, 2, 9)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (387, N'LATEX FAST', CAST(28.00 AS Decimal(18, 2)), 92, 3, 2, 9)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (388, N'Sellador CPP Blanco', CAST(35.00 AS Decimal(18, 2)), 118, 3, 2, 9)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (389, N'Temple fino sinolif CPP x 5kg', CAST(18.00 AS Decimal(18, 2)), 154, 1, 2, 2)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (390, N'Temple fino sinolif CPP x 25kg', CAST(62.00 AS Decimal(18, 2)), 17, 1, 2, 2)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (391, N'Temple pato x 25kg', CAST(35.00 AS Decimal(18, 2)), 99, 1, 2, 2)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (392, N'Alambre de cerco 200mt', CAST(70.00 AS Decimal(18, 2)), 198, 1, 2, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (393, N'Grapas de cerco', CAST(10.00 AS Decimal(18, 2)), 95, 10, 2, 1)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (394, N'Clavos de calamina', CAST(10.00 AS Decimal(18, 2)), 160, 10, 2, 1)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (395, N'Clavos de 6 pulg', CAST(0.33 AS Decimal(18, 2)), 54, 10, 2, 1)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (396, N'Clavos de 3 s/c', CAST(12.00 AS Decimal(18, 2)), 149, 10, 2, 1)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (397, N'Clavos de 2 s/c', CAST(12.00 AS Decimal(18, 2)), 89, 10, 2, 1)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (398, N'Clavos de 1 1/2 s/c', CAST(12.00 AS Decimal(18, 2)), 158, 10, 2, 1)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (399, N'Clavos de 1 1/2 c/c', CAST(12.00 AS Decimal(18, 2)), 112, 10, 2, 1)
GO
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (400, N'Clavos de1 s/c', CAST(12.00 AS Decimal(18, 2)), 34, 10, 1, 1)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (401, N'Clavos de 1 c/c', CAST(12.00 AS Decimal(18, 2)), 76, 10, 1, 1)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (402, N'Clavos de 3/4 s/c', CAST(12.00 AS Decimal(18, 2)), 44, 10, 2, 1)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (403, N'Clavos de 3/4 c/c', CAST(12.00 AS Decimal(18, 2)), 45, 10, 2, 1)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (404, N'Clavo de 4 c/c', CAST(7.00 AS Decimal(18, 2)), 33, 10, 2, 1)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (405, N'Clavos de 2 c/c', CAST(7.00 AS Decimal(18, 2)), 59, 10, 2, 1)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (406, N'Clavos de 2 1/2 c/c', CAST(7.00 AS Decimal(18, 2)), 73, 10, 2, 1)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (407, N'Clavos de 3 c/c', CAST(7.00 AS Decimal(18, 2)), 73, 10, 2, 1)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (408, N'Alambre de construccion N 08', CAST(6.00 AS Decimal(18, 2)), 48, 1, 2, 1)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (409, N'Alambre de construccion N 16', CAST(6.00 AS Decimal(18, 2)), 173, 1, 2, 1)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (410, N'Yeso chica', CAST(3.50 AS Decimal(18, 2)), 124, 1, 2, 2)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (411, N'Yeso x 40kg', CAST(17.00 AS Decimal(18, 2)), 33, 1, 2, 2)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (412, N'Cal', CAST(17.00 AS Decimal(18, 2)), 79, 1, 2, 2)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (413, N'Pegamento para porcelanato SIKAN', CAST(25.00 AS Decimal(18, 2)), 130, 1, 2, 2)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (414, N'Pegamento para ceramica Celima', CAST(15.00 AS Decimal(18, 2)), 179, 1, 2, 2)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (415, N'Fierro Corrugado de 5/8', CAST(65.00 AS Decimal(18, 2)), 81, 1, 2, 3)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (416, N'Fierro Currado de N 08', CAST(18.00 AS Decimal(18, 2)), 3, 1, 2, 3)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (417, N'Fierro Currado de 1/4', CAST(10.00 AS Decimal(18, 2)), 135, 1, 2, 3)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (418, N'Fierro Currado de 3/8', CAST(23.00 AS Decimal(18, 2)), 64, 1, 2, 3)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (419, N'Fierro Corrugado de 12mm', CAST(36.00 AS Decimal(18, 2)), 173, 1, 2, 3)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (420, N'Fierro Corrugado de 1/2', CAST(39.00 AS Decimal(18, 2)), 114, 1, 2, 3)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (421, N'Cemento Antisalitre Mochica', CAST(32.50 AS Decimal(18, 2)), 174, 1, 2, 2)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (422, N'Cemento Extraforte Mochica', CAST(30.00 AS Decimal(18, 2)), 123, 1, 2, 2)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (436, N'PRODUCTO DE PRUEBA AC', CAST(10.50 AS Decimal(18, 2)), 35, 1, 1, 7)
INSERT [dbo].[products] ([id], [name], [price], [stock], [area_id], [status_id], [products_type_id]) VALUES (438, N'PRODUCTO', CAST(20.00 AS Decimal(18, 2)), 55, 2, 2, 1)
SET IDENTITY_INSERT [dbo].[products] OFF
GO
SET IDENTITY_INSERT [dbo].[products_types] ON 

INSERT [dbo].[products_types] ([id], [type]) VALUES (1, N'KILOGRAMO')
INSERT [dbo].[products_types] ([id], [type]) VALUES (2, N'BOLSA ')
INSERT [dbo].[products_types] ([id], [type]) VALUES (3, N'VARILLA')
INSERT [dbo].[products_types] ([id], [type]) VALUES (4, N'BOTELLA')
INSERT [dbo].[products_types] ([id], [type]) VALUES (5, N'METRO')
INSERT [dbo].[products_types] ([id], [type]) VALUES (6, N'LITRO')
INSERT [dbo].[products_types] ([id], [type]) VALUES (7, N'UNIDAD')
INSERT [dbo].[products_types] ([id], [type]) VALUES (8, N'Galón')
INSERT [dbo].[products_types] ([id], [type]) VALUES (9, N'Balde')
INSERT [dbo].[products_types] ([id], [type]) VALUES (10, N'Rollo')
INSERT [dbo].[products_types] ([id], [type]) VALUES (11, N'Juego')
INSERT [dbo].[products_types] ([id], [type]) VALUES (12, N'Par')
SET IDENTITY_INSERT [dbo].[products_types] OFF
GO
SET IDENTITY_INSERT [dbo].[sales] ON 

INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (1, CAST(N'2023-05-28T17:39:52.297' AS DateTime), 12, N'areas', N'75958291')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (4, CAST(N'2023-05-28T19:11:33.493' AS DateTime), 12, N'KEVIN CESPEDES', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (13, CAST(N'2023-05-29T00:31:48.747' AS DateTime), 12, N'KEVIN DALTO', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (14, CAST(N'2023-05-29T00:31:59.897' AS DateTime), 12, N'KEVIN DALTO', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (15, CAST(N'2023-05-29T00:43:08.143' AS DateTime), 12, N'KEVIN DALTO', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (16, CAST(N'2023-05-29T00:43:56.017' AS DateTime), 12, N'KEVIN DALTO', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (17, CAST(N'2023-05-29T00:45:10.827' AS DateTime), 12, N'KEVIN DALTO', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (18, CAST(N'2023-05-29T00:48:17.377' AS DateTime), 12, N'KEVIN DALTO', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (19, CAST(N'2023-05-29T00:48:27.987' AS DateTime), 12, N'KEVIN DALTO', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (20, CAST(N'2023-05-29T00:48:53.547' AS DateTime), 12, N'KEVIN DALTO', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (21, CAST(N'2023-05-29T00:49:41.227' AS DateTime), 12, N'KEVIN DALTO', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (22, CAST(N'2023-05-29T00:51:11.800' AS DateTime), 12, N'KEVIN DALTO', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (23, CAST(N'2023-05-29T00:51:55.527' AS DateTime), 12, N'KEVIN DALTO', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (24, CAST(N'2023-05-29T01:52:24.563' AS DateTime), 12, N'KEVIN DALTO', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (25, CAST(N'2023-05-29T02:13:49.133' AS DateTime), 12, N'KEVIN DALTO', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (26, CAST(N'2023-05-29T02:48:08.453' AS DateTime), 12, N'OREALY', N'75958291')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (27, CAST(N'2023-05-29T21:54:03.697' AS DateTime), 12, N'RICARDO RUIZ', N'75958291')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (28, CAST(N'2023-05-29T21:55:14.763' AS DateTime), 12, N'PIERO RUIZ RUIZ', N'12345679')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (29, CAST(N'2023-05-29T22:47:18.080' AS DateTime), 12, N'USUARIO DE PRUEBA', N'12345677')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (30, CAST(N'2023-05-29T23:21:32.900' AS DateTime), 12, N'LUCAS', N'75958291')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (31, CAST(N'2023-05-29T23:36:24.860' AS DateTime), 12, N'LUCAS', N'75958291')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (32, CAST(N'2023-05-30T02:08:19.553' AS DateTime), 12, N'USUARIO', N'14785236')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (33, CAST(N'2023-05-30T02:10:14.720' AS DateTime), 12, N'USUARIO', N'14785236')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (34, CAST(N'2023-05-30T02:13:26.720' AS DateTime), 12, N'RUIZ CALLE', N'12345679')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (35, CAST(N'2023-05-30T02:14:07.207' AS DateTime), 12, N'AAAA', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (36, CAST(N'2023-05-30T04:36:01.490' AS DateTime), 12, N'KEVIN OREALY', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (37, CAST(N'2023-05-30T04:38:01.897' AS DateTime), 12, N'OREALY', N'12345718')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (38, CAST(N'2023-05-30T04:39:02.090' AS DateTime), 12, N'OREALY', N'12345791')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (39, CAST(N'2023-05-30T04:41:21.240' AS DateTime), 12, N'OREALY ALVAREZ', N'75958291')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (40, CAST(N'2023-05-30T18:51:55.427' AS DateTime), 12, N'KE', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (41, CAST(N'2023-06-01T04:43:49.293' AS DateTime), 12, N'KEVIN', N'75958291')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (42, CAST(N'2023-06-01T05:04:38.460' AS DateTime), 12, N'kevin', N'75958291')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (43, CAST(N'2023-06-01T05:06:03.210' AS DateTime), 12, N'kevin', N'75958291')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (44, CAST(N'2023-06-01T05:09:16.120' AS DateTime), 12, N'kevin', N'75958291')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (45, CAST(N'2023-06-01T05:18:09.160' AS DateTime), 12, N'kevin', N'75958291')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (46, CAST(N'2023-06-01T22:57:11.713' AS DateTime), 12, N'KEVIN', N'75958291')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (47, CAST(N'2023-06-01T22:58:12.797' AS DateTime), 12, N'kevin', N'75958291')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (48, CAST(N'2023-06-01T22:59:44.807' AS DateTime), 12, N'kevin', N'75958291')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (49, CAST(N'2023-06-01T23:11:21.057' AS DateTime), 12, N'KEVIN', N'75958291')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (50, CAST(N'2023-06-01T23:11:55.370' AS DateTime), 12, N'KEVIN', N'75958291')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (51, CAST(N'2023-06-01T23:12:44.040' AS DateTime), 12, N'KEVIN', N'75958291')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (52, CAST(N'2023-06-01T23:13:45.780' AS DateTime), 12, N'kevin', N'75958291')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (53, CAST(N'2023-06-01T23:15:18.127' AS DateTime), 12, N'kevin', N'75958291')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (54, CAST(N'2023-06-01T23:16:45.717' AS DateTime), 12, N'kevin', N'75958291')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (55, CAST(N'2023-06-01T23:38:15.573' AS DateTime), 12, N'KEVIN', N'75958291')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (56, CAST(N'2023-06-01T23:38:50.370' AS DateTime), 12, N'KEVIN', N'75958291')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (57, CAST(N'2023-06-02T00:33:11.590' AS DateTime), 12, N'KEVIN', N'75958291')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (58, CAST(N'2023-06-02T00:52:03.560' AS DateTime), 12, N'KEVIN', N'75958291')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (59, CAST(N'2023-06-02T00:59:25.923' AS DateTime), 12, N'KEVIN', N'75958291')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (60, CAST(N'2023-06-02T18:12:42.037' AS DateTime), 12, N'PIERO CALLE', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (61, CAST(N'2023-06-02T18:38:06.607' AS DateTime), 12, N'PIERO CALLE', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (62, CAST(N'2023-06-02T22:27:59.880' AS DateTime), 12, N'LOPEZ', N'75958291')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (63, CAST(N'2023-06-02T22:45:08.803' AS DateTime), 12, N'JUAN', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (64, CAST(N'2023-06-02T22:51:32.823' AS DateTime), 12, N'HOLA', N'75958291')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (65, CAST(N'2023-06-02T23:45:35.933' AS DateTime), 12, N'a', N'75958291')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (66, CAST(N'2023-06-03T00:12:15.243' AS DateTime), 12, N'hola', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (67, CAST(N'2023-06-03T00:23:28.283' AS DateTime), 12, N'ADIOS', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (68, CAST(N'2023-06-03T00:24:29.303' AS DateTime), 12, N'ADIOS', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (69, CAST(N'2023-06-03T00:24:57.317' AS DateTime), 12, N'ADIOS', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (70, CAST(N'2023-06-03T00:26:43.087' AS DateTime), 12, N'HOLA', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (71, CAST(N'2023-06-03T00:29:03.357' AS DateTime), 12, N'ADIIS', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (72, CAST(N'2023-06-03T00:32:13.970' AS DateTime), 12, N'a', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (73, CAST(N'2023-06-03T02:10:16.987' AS DateTime), 12, N'KEVIN CESPEDES', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (74, CAST(N'2023-06-03T02:13:02.330' AS DateTime), 12, N'KEVIN', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (75, CAST(N'2023-06-03T02:17:10.693' AS DateTime), 12, N'KEVIN', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (76, CAST(N'2023-06-03T02:18:54.673' AS DateTime), 12, N'OREALY', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (77, CAST(N'2023-06-03T02:19:44.813' AS DateTime), 12, N'SUPER CLIENTE', N'75958291')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (78, CAST(N'2023-06-03T02:19:55.867' AS DateTime), 12, N'SUPER CLIENTE', N'75958291')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (79, CAST(N'2023-06-03T02:28:53.983' AS DateTime), 12, N'KEVIN CESPEDES', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (80, CAST(N'2023-06-03T02:31:13.187' AS DateTime), 12, N'KEVIN OREALY', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (81, CAST(N'2023-06-03T02:32:22.190' AS DateTime), 12, N'KALED RUIZ', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (82, CAST(N'2023-06-03T03:14:17.453' AS DateTime), 12, N'KALED RUIZ', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (83, CAST(N'2023-06-03T03:25:50.260' AS DateTime), 12, N'KEINGY', N'41772230')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (84, CAST(N'2023-06-03T03:26:04.300' AS DateTime), 12, N'KEINGY', N'41772230')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (85, CAST(N'2023-06-03T03:28:41.327' AS DateTime), 12, N'LUCAS', N'41227730')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (86, CAST(N'2023-06-03T03:28:57.817' AS DateTime), 12, N'PEDRO', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (87, CAST(N'2023-06-03T03:29:38.243' AS DateTime), 12, N'PEDRO', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (88, CAST(N'2023-06-03T03:29:45.490' AS DateTime), 12, N'PEDRO', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (89, CAST(N'2023-06-03T03:31:50.907' AS DateTime), 12, N'lucas ', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (90, CAST(N'2023-06-03T03:32:27.823' AS DateTime), 12, N'PEDRO ', N'12345786')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (91, CAST(N'2023-06-03T03:33:04.720' AS DateTime), 12, N'PEPE', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (92, CAST(N'2023-06-03T03:33:48.680' AS DateTime), 12, N'RODRIGO', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (93, CAST(N'2023-06-03T03:34:03.060' AS DateTime), 12, N'RODRIGO', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (94, CAST(N'2023-06-03T03:35:29.923' AS DateTime), 12, N'PEDRO', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (95, CAST(N'2023-06-03T03:35:53.343' AS DateTime), 12, N'CLIENTEEEE', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (96, CAST(N'2023-06-03T03:42:54.800' AS DateTime), 12, N'FRAN CUY', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (97, CAST(N'2023-06-03T03:56:26.570' AS DateTime), 12, N'FRAN CUY', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (98, CAST(N'2023-06-03T03:57:02.260' AS DateTime), 12, N'FRAN CUY', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (99, CAST(N'2023-06-03T03:59:39.310' AS DateTime), 12, N'LUCAS', N'75958291')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (100, CAST(N'2023-06-03T04:00:30.697' AS DateTime), 12, N'LUCAS', N'75958291')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (101, CAST(N'2023-06-03T04:02:10.557' AS DateTime), 12, N'LUCAS', N'75958291')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (102, CAST(N'2023-06-03T04:03:57.040' AS DateTime), 12, N'LUCAS PEDRO', N'12345678')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (103, CAST(N'2023-06-03T04:08:53.957' AS DateTime), 12, N'KEINGY', N'75958291')
INSERT [dbo].[sales] ([id], [date], [users_id], [customer], [dni]) VALUES (104, CAST(N'2023-06-04T20:27:29.433' AS DateTime), 12, N'KALED RUIZ', N'12345678')
SET IDENTITY_INSERT [dbo].[sales] OFF
GO
SET IDENTITY_INSERT [dbo].[sales_details] ON 

INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (9, 1, 1, 10)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (12, 1, 17, 20)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (13, 1, 18, 10)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (14, 2, 18, 10)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (15, 1, 19, 10)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (16, 2, 19, 10)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (17, 1, 20, 5)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (18, 2, 20, 5)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (19, 2, 22, 5)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (20, 2, 22, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (21, 2, 23, 10)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (22, 2, 23, 10)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (23, 1, 1, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (24, 2, 1, 7)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (25, 1, 1, 3)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (26, 2, 1, 10)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (27, 1, 24, 10)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (28, 2, 24, 20)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (29, 1, 1, 10)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (30, 2, 1, 10)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (31, 1, 25, 10)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (32, 2, 25, 10)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (33, 1, 26, 10)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (34, 2, 26, 10)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (35, 29, 27, 10)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (36, 421, 27, 10)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (37, 22, 27, 10)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (38, 85, 28, 5)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (39, 15, 28, 20)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (40, 294, 28, 10)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (41, 436, 29, 10)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (42, 436, 30, 10)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (43, 25, 30, 10)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (44, 436, 31, 20)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (45, 295, 32, 20)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (46, 15, 32, 10)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (47, 394, 32, 6)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (48, 294, 33, 2)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (49, 297, 34, 20)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (50, 394, 34, 12)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (51, 394, 35, 20)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (52, 436, 36, 20)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (53, 438, 37, 20)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (54, 436, 38, 5)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (55, 13, 39, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (56, 294, 40, 20)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (57, 5, 41, 10)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (58, 7, 42, 20)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (59, 18, 43, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (60, 20, 44, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (61, 5, 45, 10)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (62, 3, 46, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (63, 3, 47, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (64, 2, 48, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (65, 5, 49, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (66, 3, 50, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (67, 4, 51, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (68, 1, 52, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (69, 2, 53, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (70, 2, 54, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (71, 4, 55, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (72, 4, 56, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (73, 4, 57, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (74, 29, 58, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (75, 1, 59, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (77, 1, 1, 14)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (78, 2, 60, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (79, 296, 61, 10)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (80, 52, 62, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (81, 5, 63, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (82, 6, 64, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (83, 31, 65, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (84, 2, 66, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (85, 3, 67, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (86, 3, 68, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (87, 3, 69, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (88, 23, 70, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (89, 3, 71, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (90, 6, 72, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (91, 41, 73, 5)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (92, 130, 74, 10)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (93, 170, 75, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (94, 60, 76, 10)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (95, 46, 77, 11)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (96, 46, 78, 11)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (97, 49, 79, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (98, 382, 80, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (99, 438, 81, 10)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (100, 14, 82, 10)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (101, 438, 83, 2)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (102, 438, 84, 2)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (103, 267, 85, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (104, 36, 86, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (105, 36, 87, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (106, 23, 87, 10)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (107, 36, 88, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (108, 23, 88, 13)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (109, 252, 89, 12)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (110, 98, 90, 1)
GO
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (111, 8, 91, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (112, 25, 92, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (113, 25, 93, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (114, 14, 94, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (115, 157, 95, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (116, 8, 96, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (117, 438, 97, 11)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (118, 160, 98, 2)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (119, 79, 99, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (120, 79, 100, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (121, 79, 101, 1)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (122, 121, 102, 12)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (123, 361, 103, 10)
INSERT [dbo].[sales_details] ([id], [producto_id], [sales_id], [quantity]) VALUES (124, 59, 104, 1)
SET IDENTITY_INSERT [dbo].[sales_details] OFF
GO
INSERT [dbo].[security] ([token], [user_id]) VALUES (NULL, 12)
GO
SET IDENTITY_INSERT [dbo].[status] ON 

INSERT [dbo].[status] ([id], [active]) VALUES (1, 0)
INSERT [dbo].[status] ([id], [active]) VALUES (2, 1)
SET IDENTITY_INSERT [dbo].[status] OFF
GO
SET IDENTITY_INSERT [dbo].[users] ON 

INSERT [dbo].[users] ([id], [username], [email], [password]) VALUES (12, N'ferreteria', N'ferreteria@gmail.com', N'$2b$10$RVgWCFt/ehbLun5xlxuMYOICaDcS9vkDiMC0Ni3Xs/GVfZoUa5ZXm')
SET IDENTITY_INSERT [dbo].[users] OFF
GO
ALTER TABLE [dbo].[sales] ADD  CONSTRAINT [DF_sales_date]  DEFAULT (getdate()) FOR [date]
GO
ALTER TABLE [dbo].[sales] ADD  CONSTRAINT [DF_ventas_cliente]  DEFAULT ('CLIENTE') FOR [customer]
GO
ALTER TABLE [dbo].[sales] ADD  CONSTRAINT [DF_ventas_dni]  DEFAULT ((0)) FOR [dni]
GO
ALTER TABLE [dbo].[status] ADD  CONSTRAINT [DF_areas_estado_activo]  DEFAULT ((1)) FOR [active]
GO
ALTER TABLE [dbo].[areas]  WITH CHECK ADD  CONSTRAINT [FK_areas_status1] FOREIGN KEY([status_id])
REFERENCES [dbo].[status] ([id])
GO
ALTER TABLE [dbo].[areas] CHECK CONSTRAINT [FK_areas_status1]
GO
ALTER TABLE [dbo].[pdfs_url]  WITH CHECK ADD  CONSTRAINT [FK_pdfs_url_sales] FOREIGN KEY([sales_id])
REFERENCES [dbo].[sales] ([id])
GO
ALTER TABLE [dbo].[pdfs_url] CHECK CONSTRAINT [FK_pdfs_url_sales]
GO
ALTER TABLE [dbo].[products]  WITH CHECK ADD  CONSTRAINT [FK_productos_areas] FOREIGN KEY([area_id])
REFERENCES [dbo].[areas] ([id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[products] CHECK CONSTRAINT [FK_productos_areas]
GO
ALTER TABLE [dbo].[products]  WITH CHECK ADD  CONSTRAINT [FK_products_products_type] FOREIGN KEY([products_type_id])
REFERENCES [dbo].[products_types] ([id])
GO
ALTER TABLE [dbo].[products] CHECK CONSTRAINT [FK_products_products_type]
GO
ALTER TABLE [dbo].[products]  WITH CHECK ADD  CONSTRAINT [FK_products_status] FOREIGN KEY([status_id])
REFERENCES [dbo].[status] ([id])
GO
ALTER TABLE [dbo].[products] CHECK CONSTRAINT [FK_products_status]
GO
ALTER TABLE [dbo].[sales]  WITH CHECK ADD  CONSTRAINT [FK_ventas_usuarios] FOREIGN KEY([users_id])
REFERENCES [dbo].[users] ([id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[sales] CHECK CONSTRAINT [FK_ventas_usuarios]
GO
ALTER TABLE [dbo].[sales_details]  WITH CHECK ADD  CONSTRAINT [FK_venta_detalles_productos] FOREIGN KEY([producto_id])
REFERENCES [dbo].[products] ([id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[sales_details] CHECK CONSTRAINT [FK_venta_detalles_productos]
GO
ALTER TABLE [dbo].[sales_details]  WITH CHECK ADD  CONSTRAINT [FK_venta_detalles_ventas] FOREIGN KEY([sales_id])
REFERENCES [dbo].[sales] ([id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[sales_details] CHECK CONSTRAINT [FK_venta_detalles_ventas]
GO
ALTER TABLE [dbo].[security]  WITH CHECK ADD  CONSTRAINT [FK_security_users] FOREIGN KEY([user_id])
REFERENCES [dbo].[users] ([id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[security] CHECK CONSTRAINT [FK_security_users]
GO
