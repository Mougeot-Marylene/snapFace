import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapC } from '../face-snap/face-snap-C';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  imports: [FaceSnapC],
  selector: 'app-face-snap-list',
  styleUrl: './face-snap-list.scss',
  templateUrl: './face-snap-list.html',
})
export class FaceSnapList implements OnInit {

  faceSnaps!: FaceSnap[];

  // systeme d'injection de dépendance par constructeur
  constructor(private faceSnapService: FaceSnapService) {}

  ngOnInit(): void {

    this.faceSnaps = this.faceSnapService.getFaceSnaps();
  }


}
