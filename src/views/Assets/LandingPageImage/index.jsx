import { useState } from 'react';
import img1 from '../../../assets/img/screenshot1-2x.png';
import img2 from '../../../assets/img/screenshot2-2x.png';
import img3 from '../../../assets/img/screenshot3-2x.png';
import img4 from '../../../assets/img/screenshot4-2x.png';
import { useStyles } from './styles';

function LandingPageImage() {
  const classes = useStyles();
  const [index, setIndex] = useState(0);
  const images = [img1, img2, img3, img4];
  setInterval(() => {
    setIndex((prev) => (prev === 3 ? 0 : prev + 1));
  }, 5000);
  return (
    <div className={classes?.root}>
      <div className={classes?.phone}>
        <img className={classes?.image} src={images[index]} />
      </div>
    </div>
  );
}

export default LandingPageImage;
