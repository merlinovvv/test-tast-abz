import { type JSX, useState } from 'react';
import PHOTO_COVER from '../../images/icons/photo-cover.png';

function UserImage({ img, alt }: { img: string | undefined; alt: string }): JSX.Element {
  const [imgUrl, setImgUrl] = useState(img ?? PHOTO_COVER);

  function handleImageError() {
    setImgUrl(PHOTO_COVER);
  }

  return (
    <img onError={handleImageError} className="users-block__user-image" src={imgUrl} alt={alt} />
  );
}

export default UserImage;
