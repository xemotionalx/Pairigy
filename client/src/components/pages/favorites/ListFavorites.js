import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentFavorites } from "../../../actions/faves";

const ListFavorites = ({
  favorites: { favorites },
  getCurrentFavorites,
  auth: { user }
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
    <div className="container--outer">
      <div className="container mt-5 mb-5">
        <div className="container--inner">
          {favesArr.map((fave, index) => (
            <div key={index}>
              <p>name: {fave.user.name}</p>
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
