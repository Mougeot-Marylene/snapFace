import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, NgClass, NgStyle, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FaceSnapService } from '../services/face-snaps.service';


@Component({
  imports: [NgStyle, NgClass, UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, DecimalPipe, PercentPipe, CurrencyPipe], //directive[ngStyle], Une directive, c'est une classe qui ajoute du comportement aux éléments de vos applications Angular. 
  selector: 'app-face-snap',
  styleUrl: './face-snap.scss',
  templateUrl: './face-snap.html',
})
export class FaceSnapC implements OnInit {

  @Input() faceSnap!: FaceSnap // FaceSnap => model

  // Déclaration des propriétés
  snapButtonText!: String; // Détermine le texte affiché sur le bouton  
  userHasSnapped!: boolean; //  sert à savoir si l'utilisateur a déjà cliqué sur le bouton "Snap".


  constructor(private faceSnapService: FaceSnapService){ }


  /* on assigne les valeurs des propriétés (initialiser) grâce à l'implementation de l'interface OnInit
      ngOnInit est une methode sur les components qui est executée 1 fois pour chaque instance au moment de la création de cette instance
      ngOnInit est éxecuté APRES le constructeur MAIS au MOMENT de la création de l'instance AVANT toutes créations de template
  */
  ngOnInit(): void {
    this.snapButtonText = "Like";
    this.userHasSnapped = false;
  }


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
    
   this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.snapButtonText = "Like";
    this.userHasSnapped = false;
  }


  //Methode qui ajoute des likes
  snap() {
   this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.snapButtonText = "Vous aimé";
    this.userHasSnapped = true;
  }

}
