import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentFavorites } from "../../../actions/faves";

const ListFavorites = ({
  favorites: { favorites },
  getCurrentFavorites,
  auth: {user}
}) => {
  useEffect(() => {
    getCurrentFavorites();
  }, [getCurrentFavorites]);

  const [favesData, setFavesData] = useState({
    favesArr: ""
  });

  useEffect(() => {
    setFavesData({
      favesArr: favorites ? favorites.favorites : []
    });
  }, [favorites]);

  const { favesArr } = favesData;

  return favesArr ? (
    <div className='container mt-5 mb-5'>
      <div className='container--inner'>
        <br />
        <h1 className='heading-size--s mt-5 mb-5'>Your Favorites</h1>
        <div className='row ml-3'>
          {favesArr.map((fave, index) => (
            <div className='col-lg-3 col-md-6 col-sm-12' key={index}>
              <div className='card__team text-center mb-3'>
                <Link to={`/profile/${fave.user.id}`}>
                  <img
                    src={fave.user.avatar}
                    alt='user avatar'
                    className='avatar avatar--sm w-50'
                  />
                </Link>
                <p>
                  <b>Name: </b> {fave.user.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    "no favorites"
  );
};

ListFavorites.propTypes = {
  getCurrentFavorites: PropTypes.func.isRequired,
  favorites: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  favorites: state.favorites,
  auth: state.auth
});

export default connect(mapStateToProps, { getCurrentFavorites })(ListFavorites);
