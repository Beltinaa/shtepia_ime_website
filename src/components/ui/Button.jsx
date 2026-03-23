import { Link } from 'react-router-dom';

const variantClasses = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
};

const sizeClasses = {
  sm: 'px-4 py-2.5 text-sm',
  md: 'px-6 py-3 text-sm sm:text-base',
  lg: 'px-8 py-4 text-base',
};

function sharedClasses({ variant, size, className }) {
  return `btn-lift inline-flex items-center justify-center font-semibold transition duration-300 ease-out ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();
}

function Button({
  as = 'button',
  to,
  href,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  const classes = sharedClasses({ variant, size, className });

  if (as === 'link') {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (as === 'a') {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
