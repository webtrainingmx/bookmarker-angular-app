import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { BookmarksService } from '../services/bookmarks.service';
import { Bookmark } from '../models/bookmark.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-bookmark',
  templateUrl: './edit-bookmark.component.html',
  styleUrls: [ './edit-bookmark.component.scss' ]
})
export class EditBookmarkComponent implements OnInit {

  isBeingSaved = false;
  title = new FormControl('', [ Validators.required ]);
  url = new FormControl('', [ Validators.required, Validators.pattern(/$http|https:\/\/.*/) ]);

  constructor (private _bookmarksService: BookmarksService,
               public dialogRef: MatDialogRef<EditBookmarkComponent>,
               @Inject(MAT_DIALOG_DATA) public bookmark: any) {
  }

  ngOnInit () {
  }

  getErrorMessageForTitle () {
    return this.title.hasError('required') ? 'Por favor ingresa un valor' : '';
  }

  getErrorMessageForUrl () {
    return this.title.hasError('required') ? 'Por favor ingresa una URL válida' : '';
  }

  onSubmit (event: Event) {
    event.preventDefault();
    console.log(this.title.value, this.url.value);
    this.isBeingSaved = true;

    this._bookmarksService.update(this.bookmark).subscribe(
      (data: Bookmark) => {
        console.log('Bookmark ha sido actualizado', data);
        this.isBeingSaved = false;
        this.dialogRef.close();
      }, (err: HttpErrorResponse) => {
        if ( err.error instanceof Error ) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      }, () => {
        console.log('Edit Bookmark request has finished');
      });

  }

}
