import { useState, forwardRef} from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames';

const Image = forwardRef(({src , alt, className, fallback:customFallback = images.noImage, ...props}, ref) => {
    const [fallback, setfallback] = useState('')

    const handleError = () => {
        setfallback(customFallback)
    }

    return <img 
                ref={ref} 
                className={classNames(styles.wrapper, className)} 
                src={fallback || src} 
                alt={alt} 
                {...props} 
                onError={handleError} 
            />
})

export default Image;