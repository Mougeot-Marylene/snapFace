// snapFace est une application de partage d'images

import { Component, OnInit, signal } from '@angular/core';
import { Header } from './header/header';
import { RouterOutlet } from '@angular/router';


//pour qu'un component soit utilisable dans une application angular il lui faut le décorateur Component
@Component({
  imports: [
    RouterOutlet,
    Header
  ],// ici on importe les dependances de notre component
  selector: 'app-root', // permet d'inserer dans le html un component
  styleUrl: './app.scss', // path vers le fichier de style
  templateUrl: './app.html',// path vers le fichier html
})
export class App {}
