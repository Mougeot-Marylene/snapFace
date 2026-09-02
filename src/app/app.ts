// snapFace est une application de partage d'images

import { Component, signal } from '@angular/core';
import { FaceSnap } from './face-snap/face-snap';

//pour qu'un coponent soit utilisable dans une application angular il lui faut le décorateur Component
@Component({
  imports: [
    FaceSnap
  ],// ici on importe les dependances de notre component
  selector: 'app-root', // permet d'inserer dans le html un component
  styleUrl: './app.scss', // path vers le fichier de style
  templateUrl: './app.html',// path vers le fichier html
})
export class App {

}
