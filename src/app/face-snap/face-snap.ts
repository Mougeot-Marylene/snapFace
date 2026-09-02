import { Component, OnInit } from '@angular/core';


@Component({
  imports: [],
  selector: 'app-face-snap',
  styleUrl: './face-snap.scss',
  templateUrl: './face-snap.html',
})
export class FaceSnap implements OnInit {

  // Déclaration des propriétés
  title!: String; // ! (bang) => on fait la promesse à TypeScrypt, qu'on va assigner une valeur à cette propriété
  description!: String;
  createdAt!: Date;
  snaps!: number; // les nombres de j'aimes
  imageUrl!: String;
  snapButtonText!: String; // Détermine le texte affiché sur le bouton  
  userHasSnapped!: boolean; //  sert à savoir si l'utilisateur a déjà cliqué sur le bouton "Snap".


  /* on assigne les valeurs des propriétés (initialiser) grâce à l'implementation de l'interface OnInit

      ngOnInit est une methode sur les components qui est executée 1 fois pour chaque instance au moment de la création de cette instance.

      ngOnInit est éxecuté APRES le constructeur MAIS au MOMENT de la création de l'instance AVANT toutes créations de template
  */
  ngOnInit(): void {
    this.title = "Tixie"
    this.description = "Ma chiasse d'amour";
    this.createdAt = new Date();
    this.snaps = 0;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
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
    this.snaps--;
    this.snapButtonText = "Like";
    this.userHasSnapped = false;
  }

  //Methode qui ajoute des likes
  snap(){
     this.snaps++;
      this.snapButtonText = "Vous avez déjà aimé";
      this.userHasSnapped = true;
  }

}
