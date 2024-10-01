import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photo.service';
import { Photo } from './photo.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  photos: Photo[] = [];

  constructor(private service: PhotoService) {}

  ngOnInit(): void {
    this.service.retrieveAll().subscribe((photos) => {
      this.photos = photos;
    });
  }
}
