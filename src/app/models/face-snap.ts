export class FaceSnap {

    //constructeur
    constructor(public title: String, public description: String,public imageUrl: String, public createdAt: Date, public snaps: number) {}


    //methode qui ajoute un like
    addSnap() : void{
        this.snaps++;
    }

    // //methode qui enleve un like
    removeSnap() : void {
        this.snaps--;
    }

}