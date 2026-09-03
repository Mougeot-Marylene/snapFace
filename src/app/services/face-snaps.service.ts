
// service qui va centraliser toutes les interactions avec les FaceSnaps, afin que tous les éventuels components de notre application dépendent des mêmes données.

import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type-type";

// Injectable persmet d'enregistrer ce service auprès d'angular
@Injectable({
    providedIn: 'root' // objet de configuration qui veut dire qu'on enregistre ce service à la racine de l'application
})
export class FaceSnapService {
    private faceSnaps: FaceSnap[] = [
        new FaceSnap(
            "Tixie",
            "Ma chiasse d'amour",
            'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            new Date(),
            10
        ),

        new FaceSnap(
            "Symba",
            "Mon gros patapouf d'amour",
            'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            new Date(),
            130
        ).withLocation("Avec mon symba"),


        new FaceSnap(
            "Pasha",
            "Mon gros pasha d'amour",
            'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            new Date(),
            800
        )
    ];

    getFaceSnaps(): FaceSnap[] {
        /* retourne une copie de faceSnaps (référence direct au FaceSnap (new FaceSnap)) | c'est un nouveau tableau qu'on peut manipuler sans que sa touche au tableau de base du service (private faceSnaps: FaceSnap[] = [...])
                ... => opérateur spraide
        */
        return [...this.faceSnaps];
    }

    
    /* methode qui permet de snap(liker) le faceSnap(image) avec un id donné
        Cette méthode :

        cherche un FaceSnap par son  id  dans le tableau faceSnaps avec la fonction  find()  ;

        si le FaceSnap n'existe pas, on throw une erreur

        s'il existe, on appelle sa méthode  addSnap()
    */
    snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
        const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!foundFaceSnap) {
            throw new Error('FaceSnap not found!');
        }
        foundFaceSnap.snap(snapType);
    }

}