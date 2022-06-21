import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  menuTabs: any = ['Appetizers & Salads', 'Botanas Mexicanas', 'Burritos', 'Cocktails', 'Combination Plate', 'Chimichangas', 'Enchiladas', 'Quesadillas', 'Tortas', 'Quesadillas De Masa', 'Seafood', 'Fajitas', 'Quesadillas De Masa', 'Seafood', 'Fajitas'];

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

  activeTab: string = 'Appetizers & Salads';
  constructor() { }

  ngOnInit() {
  }

  setActiveTab(btn) {
    this.activeTab = btn;
    console.log(btn);
  }
}
