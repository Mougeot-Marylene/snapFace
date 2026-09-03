export class FaceSnap {

    //propriétés optionnelle, Pour ajouter cette propriété optionnelle, il suffit d'utiliser un point d'interrogation :
    location?: string; // ? permet de dire que location peut ne pas avoir de valeur

    //constructeur
    constructor(public title: string, public description: string, public imageUrl: string, public createdAt: Date, public snaps: number) { }


    //methode qui ajoute un like
    addSnap(): void {
        this.snaps++;
    }

    // //methode qui enleve un like
    removeSnap(): void {
        this.snaps--;
    }

    // Ajout méthode à la classe pour faciliter l'assignation (donner une valeur à une variable, avec le signe =) d'une location
    setLocation(location: string): void {
        this.location = location;
    }

}