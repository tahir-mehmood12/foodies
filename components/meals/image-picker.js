"use client";

import { useRef, useState } from "react";
import style from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();

  function imagePickerHandler() {
    imageInput.current.click();
  }

  function pickedImageHandler(event) {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={style.picker}>
      <label htmlFor={name}>{label}</label>

      <div className={style.controls}>
        <div className={style.preview}>
          {!pickedImage && <p>No Image picked yet.</p>}
          {pickedImage && <Image src={pickedImage} alt="picked image" fill />}
        </div>
        <input
          type="file"
          name={name}
          accept="image/png, image/jpeg"
          className={style.input}
          ref={imageInput}
          onChange={pickedImageHandler}
        />
        <button className={style.button} onClick={imagePickerHandler}>
          Image Picker
        </button>
      </div>
    </div>
  );
}
