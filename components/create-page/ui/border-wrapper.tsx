interface BorderWrapperProps {
  children: React.ReactNode;
  bg?: string;
}

export const BorderWrapper: React.FC<BorderWrapperProps> = ({
  children,
  bg,
}) => {
  return (
    <div
      className={`border-4 border-primary p-2 rounded-lg h-full ${
        bg ? bg : ""
      }`}
    >
      {children}
    </div>
  );
};
