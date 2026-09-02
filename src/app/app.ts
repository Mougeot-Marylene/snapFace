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
export class App implements OnInit{
  
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSanp!: FaceSnap;

  ngOnInit(): void {

    this.mySnap =  new FaceSnap("Tixie", "Ma chiasse d'amour",'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg', new Date(), 100 );

    this.myOtherSnap = new FaceSnap("Symba", "Mon gros patapouf d'amour",'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg', new Date(), 130 );

    this.myLastSanp = new FaceSnap("Pasha", "Mon gros pasha d'amour",'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg', new Date(), 130 );
  }
}
