// import { HTMLAttributes } from "react";

// interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

interface ButtonProps {
  className?: string;
}

export const Button = (props: ButtonProps) => {
  return <button className={props.className}></button>;
};

const Parent = () => {
  return (
    <>
      <Button></Button>

      <Button className="my-class"></Button>
    </>
  );
};
