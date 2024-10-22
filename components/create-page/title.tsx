interface TitleProps {
  title: string;
}

export const Title: React.FC<TitleProps> = ({ title }) => {
  return <h1 className="text-lg font-bold">{title}</h1>;
};
