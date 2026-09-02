import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';


@Component({
  imports: [],
  selector: 'app-face-snap',
  styleUrl: './face-snap.scss',
  templateUrl: './face-snap.html',
})
export class FaceSnapC implements OnInit {

  @Input() faceSnap!: FaceSnap // FaceSnap => model

  // Déclaration des propriétés
  snapButtonText!: String; // Détermine le texte affiché sur le bouton  
  userHasSnapped!: boolean; //  sert à savoir si l'utilisateur a déjà cliqué sur le bouton "Snap".


  /* on assigne les valeurs des propriétés (initialiser) grâce à l'implementation de l'interface OnInit
      ngOnInit est une methode sur les components qui est executée 1 fois pour chaque instance au moment de la création de cette instance
      ngOnInit est éxecuté APRES le constructeur MAIS au MOMENT de la création de l'instance AVANT toutes créations de template
  */
  ngOnInit(): void {
    this.snapButtonText = "Like";
    this.userHasSnapped = false;
  }


  /* 
      norme de nomenclature : quand on réagit à un évènement venant du DOM, on démare la methode en commancant par on
  */
  onSnap(): void {
    // si la personne à déjà liker et clique sur le bouton
    if (this.userHasSnapped) {
      this.UnSnap(); // on enleve le like
    } else {
      this.snap(); // on ajoute 1 like
    }
  }


  //annuler son Snap(like) / retirer son like
  UnSnap() {
    this.faceSnap.removeSnap();
    this.snapButtonText = "Like";
    this.userHasSnapped = false;
  }


  //Methode qui ajoute des likes
  snap(){
     this.faceSnap.addSnap();
      this.snapButtonText = "Vous avez déjà aimé";
      this.userHasSnapped = true;
  }

}
