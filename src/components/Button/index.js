import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({ to, href, children, 
    className,
    primary = false,
    small = false,
    large = false, 
    outline = false, 
    rounded = false,
    text = false,
    disabled = false,
    leftIcon,
    rightIcon,
    onClick, 
    ...passProps}) {

    let Comp = 'button'
    const props = {
        onClick,
        ...passProps
    };
    //Remove event when btn disabled
    if(disabled){
        Object.keys(props).forEach((key)=>{
            if(key.startsWith('on') && typeof props[key] === 'function' ){
                delete props[key]
            }
        })
    }

    if(to){
        props.to = to 
        Comp = Link
    }else if (href){
        props.href = href
        Comp = 'a'
    }
    
    const classes = cx('wrapper',{
        [className]:className,
        primary,
        outline,
        small,
        large,
        rounded,
        text,
        disabled,
    })
    return ( 
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
     );
}

export default Button;