import React, { Component } from 'react'
import Room from './Room';
import Title from './Title';
import Loading from './Loading';
import {RoomContext} from '../context';


export default class FeatureRooms extends Component {
  static contextType = RoomContext;
  render() {
    let {loading, featuredRooms : rooms} = this.context;

    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });
    
    return (
      <section className="featured-rooms">
        <Title title="Featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    )
  }
}
