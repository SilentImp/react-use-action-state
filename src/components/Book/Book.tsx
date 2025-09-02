interface BookProp {
  title: string;
}

export const Book = ({ title }: BookProp) => {
  return <>{title}</>;
};
