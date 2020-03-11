import React from "react";
import RoomsFilter from "./RoomFilter";
import RoomsList from "./RoomList";
import { RoomContext } from "../context";
import Loading from "./Loading";


class RoomContainer extends React.Component {

  static contextType = RoomContext

  render() {
    const { loading, sortedRooms, rooms } = this.context
    
      return (
        <>
          <RoomsFilter rooms={rooms} />
          <RoomsList rooms={sortedRooms} />
        </>
      )
  } 
}

export default RoomContainer



// This code below is for the case of hooks context 

// function RoomContainer({ context }) {
//   const { loading, sortedRooms, rooms } = context;
//     if (loading) {
//       return <Loading />;
//     }

//   return (
//     <>
//       <RoomsFilter rooms={rooms} />
//       <RoomsList rooms={sortedRooms} />
//     </>
//   );
// }

// export default withRoomConsumer(RoomContainer);
