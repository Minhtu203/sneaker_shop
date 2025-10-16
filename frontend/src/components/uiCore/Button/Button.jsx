import { Button as Buttons } from 'primereact/button';

const Button = ({ className, ...props }) => {
  return <Buttons className={`${className} w-full h-12 rounded-md`} {...props} />;
};

export default Button;
