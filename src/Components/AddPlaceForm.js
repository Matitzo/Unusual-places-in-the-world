import React from "react";

export default function AddPlaceForm({
  isModal,
  setIsModal,
  id,
  setLocalStoragePlaces,
  isErrorMsg,
}) {
  const [title, setTitle] = React.useState("");
  const [image, setImage] = React.useState("");
  const [longitude, setLongitude] = React.useState("");
  const [latitude, setLatitude] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [isTitleErrorMsg, setIsTitleErrorMsg] = React.useState(false);
  const [isImgErrorMsg, setIsImgErrorMsg] = React.useState(false);
  const [isCoordErrorMsg, setIsCoordErrorMsg] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    validateForm() &&
      setLocalStoragePlaces((prevData) => [
        ...prevData,
        {
          title: title,
          desc: desc,
          img: image,
          coordinates: [
            latitude > 0 ? latitude : 0,
            longitude > 0 ? longitude : 0,
          ],
          id: id + 16,
        },
      ]);
  }

  function uploader(file) {
    const fr = new FileReader();
    fr.readAsDataURL(file);
    fr.addEventListener("load", () => {
      const url = fr.result;
      setImage(url);
    });
  }

  function validateForm() {
    if (title.length > 0) {
      setIsTitleErrorMsg(false);
    } else {
      setIsTitleErrorMsg(true);
      return false;
    }
    if (image.length > 0) {
      setIsImgErrorMsg(false);
    } else {
      setIsImgErrorMsg(true);
      return false;
    }
    if (180 >= longitude && longitude >= 0 && latitude >= 0 && latitude <= 90) {
      setIsCoordErrorMsg(false);
    } else {
      setIsCoordErrorMsg(true);
      return false;
    }
    return true;
  }

  return (
    <form
      className={isModal ? "modal show" : "modal"}
      onClick={() => setIsModal(false)}
    >
      <div className={"modal-content"} onClick={(e) => e.stopPropagation()}>
        <h3 className="modal-content-heading">Add unique place.</h3>
        <div className="modal-content-title">
          <label for="form-title">Title</label>
          <input
            id="form-title"
            className="modal-content-title-input"
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>
          <span
            className={
              isTitleErrorMsg
                ? "modal-content-error-msg show"
                : "modal-content-error-msg"
            }
          >
            Title required.
          </span>
        </div>
        <div className="modal-content-img">
          <label for="form-image">Image</label>
          <input
            id="form-image"
            name="image"
            className="modal-content-img-input"
            type="file"
            onChange={(e) => uploader(e.target.files[0])}
          ></input>
          <span
            className={
              isImgErrorMsg
                ? "modal-content-error-msg show"
                : "modal-content-error-msg"
            }
          >
            Image required.
          </span>
        </div>
        <div className="modal-content-coord">
          <label for="form-longitude">Coordinates</label>
          <input
            id="form-longitude"
            name="form-longitude"
            className="modal-content-coord-input-longitude"
            placeholder="Longitude"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            onKeyPress={(event) => {
              if (!/^[0-9 ()+-.]+$/.test(event.key)) {
                event.preventDefault();
              }
            }}
          ></input>

          <input
            id="form-latitude"
            name="form-latitude"
            className="modal-content-coord-input-latitude"
            placeholder="Latitude"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            onKeyPress={(event) => {
              if (!/^[0-9 ()+-.]+$/.test(event.key)) {
                event.preventDefault();
              }
            }}
          ></input>
          <span
            className={
              isCoordErrorMsg
                ? "modal-content-error-msg show"
                : "modal-content-error-msg"
            }
          >
            Wrong coordinates.
          </span>
        </div>
        <div className="modal-content-desc">
          <label for="form-desc">Description</label>
          <textarea
            id="form-desc"
            name="form-desc"
            className="modal-content-desc-input"
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            maxlength="1500"
          ></textarea>
        </div>
        <button
          className="modal-content-button"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Add
        </button>
        <p
          className={
            isErrorMsg
              ? "modal-content-error-msg show"
              : "modal-content-error-msg"
          }
        >
          No available space in the local warehouse. Clear local storage to save
          a new unusual place.
        </p>
      </div>
    </form>
  );
}
