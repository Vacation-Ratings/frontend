import { useState } from 'react';
import { getDownloadURL, ref, uploadBytesResumable } from '@firebase/storage';
import { storage } from './firebase.js';

// npm install firebase

function Upload(props) {

  const [progress, setProgress] = useState(0);

  const imageHandler = (e) => {
    e.preventDefault();
    const image = e.target[0].files[0];
    uploadImages(image);
  };

  const uploadImages = (image) => {
    if (!image) return;
    const storageRef = ref(storage, `/file/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on('state_change', (snapshot) => {
      const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      setProgress(prog);
    }, (err) => console.log(err),
    () => {
      getDownloadURL(uploadTask.snapshot.ref)
      .then(url => {
        props.setImageUrl(url)
      })
    }
    );
  }

  return (
    <div className='Upload'>
      <form onSubmit={imageHandler}>
        <input type='file' className='input' />
        <button type='submit'>Upload</button>
      </form>
      <h4>Uploaded {progress} %</h4>
      <img src={props.imageUrl} alt={props.imageUrl} />
    </div>
  )
}

export default Upload;