// import React from 'react';
// import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
// import { useParams } from 'react-router-dom';


// const Home = ({name}) => {
//     console.log(name)
//     const { roomCode: roomId } = useParams();
//     console.log("roomId", roomId);

//     const myMeeting = async (element) => {
//         const appID = 1185994261;
//         const serverSecret = "1514ad20acd9e0da5c3a9ba1ac413770";
//         const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
//             appID,
//             serverSecret,
//             roomId,
//             Date.now().toString(),
//             'Rakibul Ansari',
//         );
//         const zp = ZegoUIKitPrebuilt.create(kitToken);
//         zp.joinRoom({
//             container: element,
//             scenario: {
//                 mode: ZegoUIKitPrebuilt.VideoConference,
//             },
//         });
//     };

//     return (
//         <div>
//            <div ref={myMeeting} />
//         </div>
//     );
// };

// export default Home;