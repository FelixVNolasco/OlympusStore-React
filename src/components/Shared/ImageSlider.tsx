import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export const ImageSlider = ({ images }) => {
    return (
        <Slide>
            {
                images?.map((image, index) => {
                    return (
                        <div className="each-slide-effect">
                            <div style={{ 'backgroundImage': `url(${image[index]})` }}>
                            </div>
                        </div>
                    )
                })
            }
        </Slide>
    )
}
