import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  _userDetailsUrl = "http://localhost:4000/user/userdetails";
  _profilePicUrl = "http://localhost:4000/images/profilepic";
  _sendFriendRequestUrl = "http://localhost:4000/user/sendrequest";
  _getFriendList = 'http://localhost:4000/user/friendslist';
  _getprofileUrl = 'http://localhost:4000/user/profile/'

  constructor(
    private http:HttpClient
    ) { }

  getUserDetails(){
    return this.http.get<any>(this._userDetailsUrl)
  }

  getUserImg(user) {
    return this.http.get(this._profilePicUrl, { responseType: 'blob' })
  }

  sendFriendRequest(username) {
    return this.http.post<any>(this._sendFriendRequestUrl, {'username': username})
  }

  getFriends() {
    return this.http.get<any>(this._getFriendList)
  }

  getProfile(username) {
    return this.http.get<any>(`${this._getprofileUrl}${username}`)
  }
}
