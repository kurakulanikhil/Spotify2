import { Component, OnInit} from '@angular/core';
import { Song } from '../model/song';
import { SongService } from '../services/song.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  //  songs?:Song[] = SONGS;
  song:Array<Song>=[]
   song1:any=''

  constructor(private service:SongService) { }

  ngOnInit(): void {
    this.service.getAllSongs().subscribe(data => {this.song=data;})
    
  }
  
  

  addToPlaylist(id: any) {
    //  alert(this.song[id-1].songId + ": song is being added to playlist");
      this.service.addSongIntoUserPlaylist(id).subscribe()
      alert("song added in your playlist succesfully")
      console.log("song Added");
      //this.fetchPlayList();
  }

  

}
