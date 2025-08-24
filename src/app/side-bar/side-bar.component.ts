import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SideBarService } from './side-bar.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  constructor(private router: Router, private fb: FormBuilder, private sideBarService: SideBarService,private storage: AngularFireStorage) { }

  public tweetForm: FormGroup = new FormGroup({});
  @Input()
  userId!: number;
  user: any = null;

  navigateToProfile(): void {
    this.router.navigate(['/profile', this.userId, 'current', this.userId]);
  }

  navgateToLandingPage(): void {
    this.router.navigate(['/landing-page',this.userId])
  }

  navigateToComingSoon(): void {
    this.router.navigate(['/soon'])
  }

  ngOnInit(): void {

    this.sideBarService.getUsersApi(this.userId).subscribe(res => {
      this.user = res;
    })

    this.tweetForm = this.fb.group({
      description: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(280)]],
      mediaType: [],
      media: [],
      hashtags: ['', [Validators.pattern("(#{1}[A-Za-z0-9]+ )*(#{1}[A-Za-z0-9]+)+")]],
      mentions: ['', [Validators.pattern("(@{1}[A-Za-z0-9]+ )*(@{1}[A-Za-z0-9]+)+")]],
      links: ['', [Validators.pattern(/https?:\/\/[^\s/$.?#].[^\s]*/gi)]]
    })
  }


  // handling upload file
  selectedFile: File | null = null;
  downloadURL: string | null = null;


  mediaOptions = [
    { id: 'IMAGE', name: 'Image', allowedTypes: ['image/jpeg', 'image/jpg', 'image/png'] },
    { id: 'VIDEO', name: 'Video', allowedTypes: ['video/mp4', 'video/mkv'] },
    { id: 'GIF', name: 'GIF', allowedTypes: ['image/gif'] }
  ]

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.selectedFile = file;

    if (file && this.tweetForm.get('mediaType')?.value) {
      this.checkFileType(file);
    }
    if(!this.tweetForm.get('media')?.errors)this.uploadFile(event);
  }
  checkFileType(file: File) {
    const selectedMediaType = this.tweetForm.get('mediaType')?.value;
    const allowedTypes = this.mediaOptions.find(op => op.id === selectedMediaType)?.allowedTypes || [];
    if (allowedTypes.includes(file.type)) {
      this.tweetForm.get('media')?.setErrors(null);
    } else {
      this.tweetForm.get('media')?.setErrors({ invalidFileType: true });
    }
  }
  get mediaType() {
    return this.tweetForm.get('mediaType');
  }
  get file() {
    return this.tweetForm.get('media');
  }

  uploadFile(event: any): void {
    event.preventDefault();
    if (!this.selectedFile) return;

    const filePath = `uploads/${Date.now()}_${this.selectedFile.name}`;
    const fileRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, this.selectedFile);

    uploadTask.snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url: string) => {
            this.downloadURL = url;
            console.log('File available at:', url);
          });
        })
      )
      .subscribe();
  }

  //file validation end

  addTweet() {
    // console.log(this.tweetForm.get('hashtags')?.value.split(' '))
    // console.log(this.tweetForm.get('mediaType')?.value)
    const tweet = {
      message: this.tweetForm.get('description')?.value,
      media: {
        mediaType: this.tweetForm.get('mediaType')?.value,
        url: "toBeUploaded.com"
      },
      hashtags: this.tweetForm.get('hashtags')?.value.split(' '),
      mentions: this.tweetForm.get('mentions')?.value.split(' '),
      urls: this.tweetForm.get('links')?.value.split(' ')
    }

    this.sideBarService.uploadTweet(tweet, this.userId).subscribe(res => {
      // console.log("Tweet added", res);
    }, err => {
      console.log(err);
    })
    alert("Tweet created");
    // this.router.navigate(['profile',this.userId])
  }
}
