type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return <main>{children}</main>;
};
export default layout;
