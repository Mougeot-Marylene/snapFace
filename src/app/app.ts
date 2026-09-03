// snapFace est une application de partage d'images

import { Component, OnInit, signal } from '@angular/core';
import { FaceSnap } from './models/face-snap';
import { FaceSnapC } from './face-snap/face-snap-C';


//pour qu'un coponent soit utilisable dans une application angular il lui faut le décorateur Component
@Component({
  imports: [
    FaceSnapC
  ],// ici on importe les dependances de notre component
  selector: 'app-root', // permet d'inserer dans le html un component
  styleUrl: './app.scss', // path vers le fichier de style
  templateUrl: './app.html',// path vers le fichier html
})
export class App implements OnInit {

  faceSnaps!: FaceSnap[];

  ngOnInit(): void {

    this.faceSnaps = [

      new FaceSnap("Tixie", "Ma chiasse d'amour", 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg', new Date(), 10),

      new FaceSnap("Symba", "Mon gros patapouf d'amour", 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg', new Date(), 130),

      new FaceSnap("Pasha", "Mon gros pasha d'amour", 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg', new Date(), 800)
    ]


    this.faceSnaps[1].setLocation("avec le symba");
  }



}
