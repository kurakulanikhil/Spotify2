import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Song} from "../model/song";

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private httpClient :HttpClient) { }

  songUrl="http://localhost:8084/userMusic/user/songList"
  regUrl="http://localhost:8084/userMusic/user";

  getAllSongs(){
    return this.httpClient.get<Song[]>(this.songUrl);
  }
  
  registerSameUserInSpotify(userObj:any){
    return this.httpClient.post(this.regUrl+"/register", userObj)
  }

  addSongIntoUserPlaylist(userSongObj:any){
    let httpHeaders=new HttpHeaders({
      'Authorization' : 'Bearer ' +localStorage.getItem('jwt')
     });
    console.log(userSongObj)
     let requestToken={ headers : httpHeaders }
    return this.httpClient.post(this.regUrl+"/add/"+localStorage.getItem('email') , userSongObj,requestToken);
  }

  // addSongToPlaylist(){
  //   return this.httpClient.get(this.regUrl+"/add/"+localStorage.getItem('email'));
  // }

  fetchPlayList(){
   return this.httpClient.get<Song[]>(this.regUrl+"/song/"+localStorage.getItem('email'));
  };
 

  

 
}
