import { Link } from 'react-router-dom';
// import styles from './Card.module.css';
// import { addFav, removeFav } from '../redux/actions';
// import { connect } from 'react-redux';
// import { useState, useEffect } from 'react';

export default function Card({
  onClose,
  name,
  status,
  species,
  gender,
  origin,
  image,
  id,
  // addFav,
  // removeFav,
  // myFavorites
}) {

  return (
    <div>
      <button onClick={() => onClose(id)}>X</button>
      <Link to={`/detail/${id}`}><h2>{name}</h2></Link>
      <h2>{name}</h2>
      <h2>{status}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h2>{origin}</h2>
      <img src={image} alt='imagen' />
    </div>
  )
}




  //   const [isFav, setIsFav] = useState(false);

//   const handleFavorite = () => {
//     const character = {
//       id,
//       name,
//       status,
//       species,
//       gender,
//       origin,
//       image,
//     };

//     if (isFav) {
//       setIsFav(false);
//       removeFav(id);
//     } else {
//       setIsFav(true);
//       addFav(character);
//     }
//   };

//   useEffect(() => {
//     myFavorites?.forEach((fav) => {
//        if (fav.id === id) {
//           setIsFav(true);
//        }
//     });
//  }, [myFavorites]);

//   return (
//     <div className={styles.tarjeta}>
//       <div className={styles.botones}>
//         {isFav ? (
//           <button onClick={handleFavorite}>❤️</button>
//         ) : (
//           <button onClick={handleFavorite}>🤍</button>
//         )}
//         <button className={styles.boton} onClick={() => onClose(id)}>
//           X
//         </button>
//       </div>
//       <img className={styles.image} src={image} alt='imagen' />
//       <Link to={`/detail/${id}`}>
//         <h3 className={styles.name}>{name}</h3>
//       </Link>
//       <div>
//         <div className={styles.text}>
//           <div>
//             <h3>STATUS: {status}</h3>
//             <h3>SPECIES: {species}</h3>
//             <h3>GENDER: {gender}</h3>
//             <h3>ORIGIN: {origin}</h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export const mapDispatchToProps = (dispatch) => {
//   return {
//     addFav: (character) => {
//       dispatch(addFav(character));
//     },
//     removeFav: (id) => {
//       dispatch(removeFav(id));
//     },
//   };
// };

// export const mapStateToProps = (state) => {
//   return {
//     myFavorites: state.myFavorites
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Card);