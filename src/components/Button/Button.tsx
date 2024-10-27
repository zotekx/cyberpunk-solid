interface ButtonProps {
  value: string;
}
const Button = (props: ButtonProps) => {
  return <button>{props.value}</button>;
};

export { Button };

export type { ButtonProps };
