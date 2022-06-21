import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  menuTabs: any = ['Appetizers & Salads', 'Botanas Mexicanas', 'Cocktails', 'Combination Plate', 'Chimichangas', 'Almuerzos - Breakfast', 'Burritos', 'Enchiladas', 'Quesadillas', 'Tortas', 'Quesadillas De Masa', 'Mariscos - Seafood', 'Meat Plates', 'Fajitas', 'Chile Platters', 'Tamales', 'Fluatas', 'Tacos', '4 Tacos Mexicanos'];

  appMenu: any = [
    {
      title: 'CHILE VERDE, CHEESE FRIES',
      description: 'French fries smothers with green chile, pork and cheddar cheese',
      price: '7.49',
    },
    {

      title: 'SUPER NACHOS',
      description: 'Cheese, chicken, or beef (Steak add $1). Melted cheese, beans, tomatoes, onions, cilantro, sour cream, guacamole, & jalapenos',
      price: '8.49',
    },
    {
      title: 'POLLO ASADO SALAD',
      description: 'Grilled chicken',
      price: '8.49',
    },
    {

      title: 'TACO SALAD',
      description: 'Chicken, beef, or carnitas (shredded pork)',
      price: '8.99',
    },
    {

      title: 'CAMARON SALAD',
      description: 'Shrimp salad',
      price: '9.99',
    },
    {

      title: 'AGUACATE SALAD',
      description: 'Avacado salad',
      price: '8.99',
    },
    {
      title: 'CHICKEN TORTILLA SOUP',
      description: 'Chicken tortilla soup',
      price: '5.49',
    },
    {
      title: 'SMALL GUACAMOLE',
      description: 'Chicken tortilla soup',
      price: '4.49',
      addition: 'Large $7.99'
    },
  ];

  botMenu: any = [
    {

      title: ' 1/2doz OSTIONES / OYSTERS',
      description: '',
      price: '10.49',
      addition: '1doz $17.49'
    },
    {

      title: 'CAMARONES A LA DIABLA',
      description: 'Diablo Style Shrimp',
      price: '13.99',
      hot: 'ad'
    },
    {

      title: 'CAMARONES AGUACHILE',
      description: '',
      price: '13.99',
      hot: 'ad',
    },
    {

      title: 'PLATO DE CEVICHE (CAMARON)',
      description: '',
      price: '13.99',
    },
    {
      title: 'TOSTADA DE CEVICHE DE CAMARON',
      description: '',
      price: '6.99',
    },
  ];

  cocktailMenu: any = [
    {
      title: 'CAMARON / SHRIMP',
      description: '',
      price: '12.99',
    },
    {
      title: 'OCTOPUS & SHRIMP',
      description: '',
      price: '14.99',
    },
    {
      title: 'CAMPECHANA (SEAFOOD MIX)',
      description: '',
      price: '15.49',
    },
  ];

  comboMenu: any = [
    {
      title: 'HARD SHELL TACO',
      description: 'Chicken or ground beef',
      price: '11.99',
      addition: 'ADD CHEESE $1 - SHREDDED BEEF $1 - ADD SMOTHERED $1.50'
    },
    {
      title: 'TOSTADA DE CARNITAS',
      description: 'Shredded pork',
      price: '11.99',
      addition: 'ADD CHEESE $1 - SHREDDED BEEF $1 - ADD SMOTHERED $1.50'
    },
    {
      title: 'CHIMICHANGA',
      description: 'Chicken, ground beef, or chile verde',
      price: '11.99',
      addition: 'ADD CHEESE $1 - SHREDDED BEEF $1 - ADD SMOTHERED $1.50'
    },
    {
      title: 'QUESADILLA DE MASA ',
      description: 'Cheese, chicken, or ground beef',
      price: '11.99',
      addition: 'ADD CHEESE $1 - SHREDDED BEEF $1 - ADD SMOTHERED $1.50'
    },
    {
      title: 'SMOTHERED BURRITO',
      description: 'Green or red chile w/pork',
      price: '11.99',
      addition: 'ADD CHEESE $1 - SHREDDED BEEF $1 - ADD SMOTHERED $1.50'
    },
    {
      title: 'TOSTADA',
      description: 'Chicken, ground beef or beans',
      price: '11.99',
      addition: 'ADD CHEESE $1 - SHREDDED BEEF $1 - ADD SMOTHERED $1.50'
    },
    {
      title: 'ENCHILADA',
      description: 'Cheese, chicken, ground beef, or chile verde',
      price: '11.99',
      addition: 'ADD CHEESE $1 - SHREDDED BEEF $1 - ADD SMOTHERED $1.50'
    },
    {
      title: 'SOFT SHELL TACO',
      description: 'Chicken or ground beef',
      price: '11.99',
      addition: 'ADD CHEESE $1 - SHREDDED BEEF $1 - ADD SMOTHERED $1.50'
    },
    {
      title: 'CHILE RELLENO',
      description: 'Cheese',
      price: '11.99',
      addition: 'ADD CHEESE $1 - SHREDDED BEEF $1 - ADD SMOTHERED $1.50'
    },
    {
      title: 'TAMALES',
      description: 'Chicken or pork',
      price: '11.99',
      addition: 'ADD CHEESE $1 - SHREDDED BEEF $1 - ADD SMOTHERED $1.50'
    },
  ];

  chimichangasMenu: any = [
    {
      title: '2 CHILE VERDE',
      description: 'Green chile sauce with pork. A deep fried burrito filled with mean and cheese. Served with rice, beans guacamole & sour cream.',
      price: '10.99',
      addition: 'Smothered with red or green chile $1.50, Smothered with cheese $2.50, Enchilada style $1.75'
    },
    {
      title: '2 CHILE COLORADO',
      description: 'Red Chile sauce with pork. A deep fried burrito filled with mean and cheese. Served with rice, beans guacamole & sour cream.',
      price: '10.99',
      addition: 'Smothered with red or green chile $1.50, Smothered with cheese $2.50, Enchilada style $1.75'
    },
    {
      title: '2 GROUND BEEF',
      description: 'A deep fried burrito filled with mean and cheese. Served with rice, beans guacamole & sour cream.',
      price: '10.99',
      addition: 'Smothered with red or green chile $1.50, Smothered with cheese $2.50, Enchilada style $1.75'
    },
    {
      title: '2 CHICKEN',
      description: 'A deep fried burrito filled with mean and cheese. Served with rice, beans guacamole & sour cream.',
      price: '10.99',
      addition: 'Smothered with red or green chile $1.50, Smothered with cheese $2.50, Enchilada style $1.75'
    },
    {
      title: '2 SHREDDED BEEF',
      description: 'A deep fried burrito filled with mean and cheese. Served with rice, beans guacamole & sour cream.',
      price: '11.99',
      addition: 'Smothered with red or green chile $1.50, Smothered with cheese $2.50, Enchilada style $1.75'
    },
  ];

  almuerzoMenu: any = [
    {
      title: 'MENUDO',
      description: 'A mexican stew with beef tripe and hominy (no rice & beans)',
      price: '8.49',
    },
    {
      title: 'HUEVOS RANCHEROS',
      description: '2 eggs with your choice of spicy ranchero salsa or chile verde with pork',
      price: '7.99',
    },
    {
      title: 'HEUVOS CON JAMON',
      description: '2 eggs scrambled with diced ham',
      price: '7.99',
    },
    {
      title: 'HUEVOS CON CHORIZO',
      description: 'Mexican sausage scrambled with eggs',
      price: '7.99',
    },
    {
      title: 'CHILAQUILES',
      description: 'Tortilla chips and eggs scrambled with pico de gallo, salsa and topped with fresh mexican cheese',
      price: '8.49',
    },
  ];

  burritoMenu: any = [
    {
      title: 'BEAN & CHEESE BURRITO',
      description: 'Served with rice & beans',
      price: '7.99',
    },
    {
      title: '2 BEAN & CHEESE BURRITOS',
      description: 'Served with rice & beans',
      price: '9.49',
    },
    {
      title: 'SMOTHERED BURRITO',
      description: 'Filled with beans, green or red chile sauce with pork. Served with rice & beans',
      price: '7.99',
    },
    {
      title: 'SMOTHERED BURRITO W/CHEESE',
      description: 'Green or red chile sauce with pork. Served with rice & beans',
      price: '9.49',
    },
    {
      title: '2 SMOTHERED BURRITOS W/CHEESE',
      description: 'Green or red chile sauce with pork. Served with rice & beans',
      price: '11.99',
    },
    {
      title: 'ASADA BURRITO',
      description: 'Steak, refried beans, pico de gallo, guacamole and salsa. Served with rice & beans',
      price: '9.99',
    },
    {
      title: 'ADOBADA BURRITO',
      description: 'Marinated pork, refriend beans, pico de gallo,  guacamole and salsa. Served with rice & beans',
      price: '9.49',
    },
    {
      title: 'CARNITAS BURRITO',
      description: 'Shredded pork, refried beans, pico de gallo, guacamole and salsa. Served with rice & beans',
      price: '9.49',
    },
    {
      title: 'POLLO ASADO BURRITO',
      description: 'Grilled chicken, refried beans, pico de gallo, guacamole and salsa. Served with rice & beans',
      price: '9.49',
    },
    {
      title: 'BEEF BURRITO',
      description: 'Ground beef, refried beans and cheddar cheese. Served with rice & beans',
      price: '8.99',
      addition: 'Shredded beef add $1.00'
    },
    {
      title: 'CHICKEN BURRITO',
      description: 'Shredded chicken, refried beans and cheddar cheese. Served with rice & beans',
      price: '8.99',
    },
    {
      title: 'VEGGIE BURRITO',
      description: 'Rice, whole beans, cheese, pico de gallo, guacamole, sour cream, and salsa. Served with rice & beans',
      price: '8.49',
    },
    {
      title: 'SUPER BURRITO',
      description: 'Your choice of Asada, Carnitas, or Pollo Asado. Super sized tortilla filled with rice, beans, guacamole, sour cream, pico de gallo, and salsa. Served with rice & beans',
      price: '9.99',
    },
  ];

  enchiladaMenu: any = [
    {
      title: '3 RANCHERAS',
      description: 'Tortillas fried in salsa roja and filled with chicken and fresh Mexican cheese',
      price: '10.49',
      addition: 'Add sour cream for $0.75 - sub flour tortilla $0.50'
    },
    {
      title: '3 ENTOMATADAS',
      description: 'Made in seasoned tomato sauce, filled with chicken and fresh Mexican cheese',
      price: '10.49',
      addition: 'Add sour cream for $0.75 - sub flour tortilla $0.50'
    },
    {
      title: '2 CHILE VERDE ENCHILADAS',
      description: 'Served with rice & beans.',
      price: '10.49',
      addition: 'Add sour cream for $0.75 - sub flour tortilla $0.50'
    },
    {
      title: '2 CHICKEN OR BEEF ENCHILADAS',
      description: 'Served with rice & beans.',
      price: '9.99',
      addition: 'Add sour cream for $0.75 - sub flour tortilla $0.50'
    },
    {
      title: '2 CHEESE ENCHILADAS',
      description: 'Served with rice & beans.',
      price: '9.49',
      addition: 'Add sour cream for $0.75 - sub flour tortilla $0.50'
    },
    {
      title: '2 SHREDDED BEEF ENCHILADAS',
      description: 'Served with rice & beans.',
      price: '10.99',
      addition: 'Add sour cream for $0.75 - sub flour tortilla $0.50'
    },
  ];

  quesadillaMenu: any = [
    {
      title: 'CHEESE',
      description: 'Monteray Jack and Cheddar cheese',
      price: '7.49',
    },
    {
      title: 'CHICKEN',
      description: 'Chicken and Monterray Jack cheese',
      price: '8.49',
    },
    {
      title: 'ASADA',
      description: 'Grilled Steak',
      price: '9.49',
    },
    {
      title: 'SHRIMP FAJITA',
      description: 'Shrimp, bell peppers, mushroom, onions, tomatoes, cilantro, Monterrey Jack and Cheddar cheese',
      price: '9.49',
    },
  ];

  tortasMenu: any = [
    {
      title: 'ADOBADA',
      description: 'Marinated pork. Served with Lettuce, Tomato, Mayo, Mustard, Avacado, Onions, and French fries',
      price: '9.49',
    },
    {
      title: 'ASADA',
      description: 'Grilled Steak. Served with Lettuce, Tomato, Mayo, Mustard, Avacado, Onions, and French fries',
      price: '9.49',
    },
    {
      title: 'POLLO ASADO',
      description: 'Grilled chicken. Served with Lettuce, Tomato, Mayo, Mustard, Avacado, Onions, and French fries',
      price: '9.49',
    },
    {
      title: 'CARNITAS',
      description: 'Shredded pork. Served with Lettuce, Tomato, Mayo, Mustard, Avacado, Onions, and French fries',
      price: '9.49',
    },
    {
      title: 'JAMON Y QUESO',
      description: 'Ham & cheese. Served with Lettuce, Tomato, Mayo, Mustard, Avacado, Onions, and French fries',
      price: '9.49',
    },
  ];

  quesadillaDeMasaMenu: any = [
    {
      title: '2 CHEESE QUESADILLAS DE MASA',
      description: 'Served with rice, beans, guacamole & sour cream. Deep fried cornmeal quesadilla stuffed with your choice of filling and monterrey jack cheese',
      price: '10.49',
    },
    {
      title: '2 CHICKEN QUESADILLAS DE MASA',
      description: 'Served with rice, beans, guacamole & sour cream. Deep fried cornmeal quesadilla stuffed with your choice of filling and monterrey jack cheese',
      price: '10.49',
    },
    {
      title: '2 BEEF QUESADILLAS DE MASA',
      description: 'Served with rice, beans, guacamole & sour cream. Deep fried cornmeal quesadilla stuffed with your choice of filling and monterrey jack cheese',
      price: '10.49',
    },
    {
      title: '2 CARNE ASADA QUESADILLAS DE MASA',
      description: 'Served with rice, beans, guacamole & sour cream. Deep fried cornmeal quesadilla stuffed with your choice of filling and monterrey jack cheese',
      price: '11.49',
    },
    {
      title: '2 SHRIMP QUESADILLAS DE MASA',
      description: 'Served with rice, beans, guacamole & sour cream. Deep fried cornmeal quesadilla stuffed with your choice of filling and monterrey jack cheese',
      price: '11.49',
    },
  ];

  mariscoMenu: any = [
    {
      title: 'CAMARONES A LA DIABLA',
      description: 'Shrimp sauteed with a very spicy salsa. Served with rice & beans - whole beans, available upon request',
      price: '13.99',
      hot: 'ad',
    },
    {
      title: 'ALAMBRES DE CAMARON',
      description: '2 Shrimp skewers with spicy barbecue sauce. Served with rice & beans - whole beans, available upon request',
      price: '13.99',
      hot: 'ad',
    },
    {
      title: 'CALDO DE CAMARON',
      description: 'Shrimp soup. Served with rice & beans - whole beans, available upon request',
      price: '13.99',
    },
    {
      title: 'SIETE MARES',
      description: 'Sea food mix soup. Served with rice & beans - whole beans, available upon request',
      price: '14.99',
    },
    {
      title: 'CAMARONES RANCHEROS',
      description: 'Shrimpo sauteed with onions, tomatos and salsa. Served with rice & beans - whole beans, available upon request',
      price: '14.99',
      hot: 'dfa',
    },
    {
      title: 'CAMARONES AL MOJO DE AJO',
      description: '7 breaded shrimp with french fries',
      price: '12.99',
    },
    {
      title: 'PESCADO FRITO (TRUCHA ENTERA)',
      description: 'Fried trout. Served with rice & beans - whole beans, available upon request',
      price: '11.99',
    },
    {
      title: 'MOJARRA (Entera)',
      description: 'Tilapia',
      price: '12.99',
    },
    {
      title: 'MOJARRA (Filete)',
      description: 'Tilapia',
      price: '13.49',
    },
  ];

  meatMenu: any = [
    {
      title: 'CARNE ASADA',
      description: 'Grilled skirt steak slices (Ranchera). Served with rice, beans, & tortillas. Whole beans available upon request.',
      price: '12.99',
    },
    {
      title: 'BISTEK RANCHERO',
      description: 'Steak slices sauteed with tomatoes, onions, cilantro, and a spicy salsa. Served with rice, beans, & tortillas. Whole beans available upon request.',
      price: '12.49',
    },
    {
      title: 'BISTEK ENCEBOLLADO',
      description: '10 oz Rib eye steak toped with grilled onions and spicy salsa. Served with rice, beans, & tortillas. Whole beans available upon request.',
      price: '15.99',
    },
    {
      title: 'POLLO ASADO',
      description: 'Grilled chicken breast layed on a bed of french fries. Served with rice, beans, & tortillas. Whole beans available upon request.',
      price: '11.99',
    },
    {
      title: 'ALAMBRES DE POLLO',
      description: '2 Spicy chicken skewers. Served with rice, beans, & tortillas. Whole beans available upon request.',
      price: '11.99',
      hot: 'adf',
    },
    {
      title: 'CARNITAS',
      description: 'Shredded pork. Served with rice, beans, & tortillas. Whole beans available upon request.',
      price: '12.99'
    },
    {
      title: 'COSTILLAS - RIBS',
      description: 'Baby back ribs with your choice of spicy barbecue or tamatillo sauce. Served with rice, beans, & tortillas. Whole beans available upon request.',
      price: '13.99'
    },
  ];

  fajitaMenu: any = [
    {
      title: 'CHICKEN FAJITAS',
      description: 'Grilled chicken tenders. Grilled with fresh bell peppers, onions, tomatoes, cilantro and mushrooms served with rice, beans, guacamole, soure cream & torillas.',
      price: '12.99',
    },
    {
      title: 'BEEF FAJITAS',
      description: 'Beef Fajitas. Grilled with fresh bell peppers, onions, tomatoes, cilantro and mushrooms served with rice, beans, guacamole, soure cream & torillas.',
      price: '13.99',
    },
    {
      title: 'SHRIMP FAJITAS',
      description: 'Shrimp Fajitas. Grilled with fresh bell peppers, onions, tomatoes, cilantro and mushrooms served with rice, beans, guacamole, soure cream & torillas.',
      price: '13.99',
    },
    {
      title: 'COMBINATION FAJITAS',
      description: 'Steak, chicken and shrimp. Grilled with fresh bell peppers, onions, tomatoes, cilantro and mushrooms served with rice, beans, guacamole, soure cream & torillas.',
      price: '16.99',
    },
  ];

  chileMenu: any = [
    {
      title: 'BOWL OF CHILE VERDE OR COLORADO',
      description: 'Green or red chile with pork (Not served with rice & beans). Served with tortillas.',
      price: '7.49',
    },
    {
      title: 'CHILE VERDE OR COLORADO PLATTER',
      description: 'Green or red chile with pork. Served with rice, beans, and torillas.',
      price: '8.49',
    },
    {
      title: '2 CHILES RELLENOS',
      description: 'Fire roasted chile pepper stuffed with Monterrey Jack cheese. Served with rice, beans, and tortillas.',
      price: '11.99',
    },
  ];

  tamaleMenu: any = [
    {
      title: '2 HOMEMADE PORK TAMALES',
      description: 'Served with rice & beans',
      price: '9.49',
    },
    {
      title: '2 HOMEMADE CHICKEN TAMALES',
      description: 'Served with rice & beans',
      price: '9.49',
    },
  ];

  fluataMenu: any = [
    {
      title: 'GROUND BEEF OR CHICKEN',
      description: 'Served with rice, beans, guacamole, & sour cream',
      price: '8.49',
    },
    {
      title: 'SHREDDED BEEF',
      description: 'Served with rice, beans, guacamole, & sour cream',
      price: '8.49',
    },
    {
      title: 'CARNITAS',
      description: 'Shredded pork. Served with rice, beans, guacamole, & sour cream',
      price: '8.49',
    },
  ];

  tacoMenu: any = [
    {
      title: '2 HARD SHELL TACOS',
      description: 'Chicken or ground beef (shredded beef add $1). Served with rice & beans',
      price: '7.99',
    },
    {
      title: 'SOFT SHELL TACO',
      description: 'Homemade flour tortillas wit hchicken or ground beef (Shredded beef or Carnitas add $1). Served with rice & beans',
      price: '8.49',
    },
  ];

  fourTacoMenu: any = [
    {
      title: 'POLLO ASADO',
      description: 'Grilled chicken. Small corn tortillas topped w/ your choice of meant, pico de gallo, and salsa.',
      price: '7.99',
    },
    {
      title: 'ADOBADA',
      description: 'Marinated pork. Small corn tortillas topped w/ your choice of meant, pico de gallo, and salsa.',
      price: '7.99',
    },
    {
      title: 'ASADA',
      description: 'Steak. Small corn tortillas topped w/ your choice of meant, pico de gallo, and salsa.',
      price: '7.99',
    },
    {
      title: 'LENGUA',
      description: 'Beef tongue (Orders of 4 only). Small corn tortillas topped w/ your choice of meant, pico de gallo, and salsa.',
      price: '8.49',
    },
    {
      title: 'CAMARON',
      description: 'Shrimp. Small corn tortillas topped w/ your choice of meant, pico de gallo, and salsa.',
      price: '8.99',
    },
    {
      title: 'PESCADO',
      description: 'Fish (Orders of 4 only). Small corn tortillas topped w/ your choice of meant, pico de gallo, and salsa.',
      price: '8.99',
    },

  ];

  activeTab: string = 'Appetizers & Salads';
  constructor() { }

  ngOnInit() {
  }

  setActiveTab(btn) {
    this.activeTab = btn;
    console.log(btn);
  }
}
