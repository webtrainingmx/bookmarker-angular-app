import { Component, OnInit, ViewChild } from '@angular/core';
import { Bookmark } from './models/bookmark.model';
import { BookmarksService } from './services/bookmarks.service';
import { MatPaginator, MatSort, MatTableDataSource, PageEvent } from '@angular/material';
import { WindowReferenceService } from '../../common/services/window-reference.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: [ './bookmarks.component.scss' ]
})
export class BookmarksComponent implements OnInit {

  bookmarks: Array<Bookmark>;
  displayedColumns = [ 'id', 'title', 'description', 'created', 'actions' ];
  dataSource: MatTableDataSource<Bookmark>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // MatPaginator Inputs
  length = 50;
  pageSize = 5;
  pageSizeOptions = [ 5, 10, 25, 100 ];

  // MatPaginator Output
  pageEvent: PageEvent;

  // External window
  nativeWindow: any;

  constructor (private _bookmarksService: BookmarksService, private _windowRefService: WindowReferenceService) {
    this.nativeWindow = _windowRefService.getNativeWindow();
  }

  setPageSizeOptions (setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  applyFilter (filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  // Actions

  openBookmarkURL (bookmark: Bookmark) {
    const newWindow = this.nativeWindow.open(bookmark.url);
  }

  editBookmark (bookmark: Bookmark) {

  }

  // Lifecycle
  ngOnInit () {
    this._bookmarksService.getAll().subscribe(
      (data: Array<Bookmark>) => {
        this.bookmarks = data;
        this.dataSource = new MatTableDataSource<Bookmark>(this.bookmarks);

        // The paginator can be set after view init if static data!
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

}
