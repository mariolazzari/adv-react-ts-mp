import { ReactNode } from "react";

export const Button = (props: { children?: ReactNode }) => {
  return <button>{props.children}</button>;
};

const Parent = () => {
  return (
    <>
      <Button></Button>
      <Button>Hello world!</Button>
    </>
  );
};
