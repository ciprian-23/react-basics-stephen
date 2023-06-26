// varinata 1:
// ========
// function ProfileCard(props) {
//   return (
//     <div>
//       <div>Title is {props.title}</div>
//       <div>Username is {props.user}</div>
//     </div>
//   );
// }
//  ==========

// varianta 2:
//  ==========
// function ProfileCard(props) {
//     const title = props.title;
//     const user = props.user;
//   return (
//     <div>
//       <div>Title is {title}</div>
//       <div>Username is {user}</div>
//     </div>
//   );
// }
//  ==========

// varianta 3:
//  ==========
// function ProfileCard(props) {
//     const {title, user} = props;
//   return (
//     <div>
//       <div>Title is {title}</div>
//       <div>Username is {user}</div>
//     </div>
//   );
// }
//  ==========

// varianta 4, cea mai simplă:
//  ==========
function ProfileCard({ title, user, image, description }) {
  return (
    <div className="card">
      {/* image */}
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="logo" />
        </figure>
      </div>
      {/* text */}
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{user}</p>
        </div>
        <div className="content">{description}</div>
      </div>
    </div>
  );
}

export default ProfileCard;
