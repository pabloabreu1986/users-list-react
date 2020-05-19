import React, { useState, useEffect } from 'react';
import './UsersList.css';
import ListItem from './ListItem';

export default function UsersList() {
  const [users, setUsers] = useState([]);

  async function getUserAsync() {
    let response = await fetch('https://randomuser.me/api/?results=20');
    let data = await response.json();
    return data;
  }

  useEffect(() => {
    getUserAsync().then((myJson) => {
      setUsers(myJson.results);
    });
  }, []);

  // const UserItem = (props) => {
  //   const { user } = props;
  //   const { name, location, email, picture } = user;

  //   return (
  //     <ListItem>
  //       <ListItemAvatar>
  //         <Avatar alt={`${name.first} ${name.last}`} src={picture.thumbnail} />
  //       </ListItemAvatar>
  //       <ListItemText
  //         primary={`${name.title} ${name.first} ${name.last}`}
  //         secondary={
  //           <React.Fragment>
  //             <Typography
  //               component="span"
  //               variant="body2"
  //               className={classes.inline}
  //               color="textPrimary"
  //             >
  //               {`${location.street.name} · ${location.street.number} ${location.city}`}
  //             </Typography>
  //             <Typography>{`${email}`}</Typography>
  //           </React.Fragment>
  //         }
  //       />
  //     </ListItem>
  //   );
  // };

  return (
    <div className="list-container">
      <div className="list-header">Lista de Usuarios</div>
      {users.length > 0 ? (
        <div className="list-body">
          {users.map((user) => (
            <ListItem key={user.id.value + user.phone} user={user} />
          ))}
        </div>
      ) : (
        'Buscando datos...'
      )}
    </div>
  );
}
