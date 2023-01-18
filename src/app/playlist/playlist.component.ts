import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Song } from '../model/song';
import { SongService } from '../services/song.service';


@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  constructor(private httpClient:HttpClient,private service:SongService) { }
  
  song:Array<Song>=[]
  ngOnInit(): void {
    this.service.getAllSongs().subscribe(data => {this.song=data;})
    this.fetchPlayList();
  }


  player(songName: any) {
  }
  
  

  addToPlaylist(id: any) {
    //  alert(this.song[id-1].songId + ": song is being added to playlist");
      this.service.addSongIntoUserPlaylist(id).subscribe()
      console.log("song Added");
      //this.fetchPlayList();
  }
 
  playList: Array<Song> = [];

  fetchPlayList() {
   this.service.fetchPlayList().subscribe(data =>{
      console.log(data);
      this.song=data})
      console.log("array data" + this.playList);
      for(let track of this.song){
            this.playList.push(track);
         }
  }
    
  

  


}
