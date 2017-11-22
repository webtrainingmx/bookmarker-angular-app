import { Component, OnInit } from '@angular/core';
import { Bookmark } from './models/bookmark.model';
import { BookmarksService } from './services/bookmarks.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: [ './bookmarks.component.scss' ]
})
export class BookmarksComponent implements OnInit {

  bookmarks: Array<Bookmark>;
  displayedColumns = [ 'id', 'title', 'description', 'created' ];
  dataSource: MatTableDataSource<Bookmark>;

  constructor (private _bookmarksService: BookmarksService) {
  }

  applyFilter (filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnInit () {
    this._bookmarksService.getAll().subscribe(
      (data: Array<Bookmark>) => {
        this.bookmarks = data;
        this.dataSource = new MatTableDataSource<Bookmark>(this.bookmarks);
      });
  }

}
