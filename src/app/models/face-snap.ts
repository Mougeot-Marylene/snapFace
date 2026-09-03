import { SnapType } from "./snap-type-type";

export class FaceSnap {

    //propriétés optionnelle, Pour ajouter cette propriété optionnelle, il suffit d'utiliser un point d'interrogation :
    location?: string; // ? permet de dire que location peut ne pas avoir de valeur

    id: string; // permettre d'identifier nos facesnap

    //constructeur
    constructor(
        public title: string,
        public description: string,
        public imageUrl: string,
        public createdAt: Date,
        public snaps: number,
    ) {
        //utilisation du Web Crypto API pour générer un identifiant universellement unique (UUID).
        this.id = crypto.randomUUID().substring(0, 8); // substring(0,8) => prend les 8 premieres lettres 
    }


    //methode qui ajoute un like
    addSnap(): void {
        this.snaps++;
    }

    // //methode qui enleve un like
    removeSnap(): void {
        this.snaps--;
    }

    // methode qui va liker/déliker
    snap(snapType: SnapType) {        
        
        if (snapType === 'snap') {

            this.addSnap();

        } else if (snapType === 'unsnap') {

            this.removeSnap();
        }
    }

    // Ajout méthode à la classe pour faciliter l'assignation (donner une valeur à une variable, avec le signe =) d'une location
    setLocation(location: string): void {
        this.location = location;
    }

    // methode qui va retourné le faceSnap modifié
    withLocation(location: string): FaceSnap {
        this.setLocation(location);
        return this;
    }

}