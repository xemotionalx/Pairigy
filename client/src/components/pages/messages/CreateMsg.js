import React, {useState, useEffect} from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createMessage } from "../../../actions/messages";
import { getCurrentFavorites } from "../../../actions/faves";


const CreateMessage = ({ createMessage, getCurrentFavorites, history, favorites: {favorites} }) => {

  const [formData, setFormData] = useState({
    receiver: "",
    subject: "",
    body: ""
  });

  const { receiver, subject, body } = formData;

  // favorites
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
//end favorites

  const onChange = e => {
  setFormData({ ...formData, [e.target.name]: e.target.value })
};

  const onSubmit = e => {
    e.preventDefault();
    createMessage(formData, history);
  }

    return (
        <div>
            <form className="form form-default form--mail mt-3" onSubmit={e => onSubmit(e)}>
              <div className="row form-group">
                <label htmlFor="subject" className="form-editprofile--label">
                  Subject:
                </label>
                <input
                  type="text"
                  name="subject"
                   value={subject}
                    onChange={e => onChange(e)}
                  className="form-control mb-4"
                  required
                ></input>

                <label htmlFor="message" className="form-editprofile--label">
                  Message:
                </label>
                <textarea
                  type="text"
                  name="message"
                  name="body"
                  value={body}
                  onChange={e => onChange(e)}
                  className="form-control mb-4"
                  rows="10"
                ></textarea>
              </div>
              <div className="row form-groupt">
                <div className="col-sm-6">
                <select
                    type="text"
                    name="receiver"
                    value={receiver || ""}
                    onChange={e => onChange(e)}
                    className="form-control"
                  >
                    <option value=""></option>
                    {
                      favesArr ?
                    favesArr.map(fave => (
                      <option value={fave.user._id}>{fave.user.name}</option>
                    ))
                    : ""
                    }
                  </select>
                </div>
                <div className="col-sm-6 text-center">
                  <input type="submit" className="btn button button--main" />
                </div>
              </div>
            </form>
        </div>
    )
    }

    CreateMessage.propTypes = {
     createMessage: PropTypes.func.isRequired,
     getCurrentFavorites: PropTypes.func.isRequired
    };

    const mapStateToProps = state => ({
      message: state.message,
      favorites: state.favorites
    })

export default connect(mapStateToProps, {createMessage, getCurrentFavorites})(CreateMessage);
