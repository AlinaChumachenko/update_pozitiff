const Heading = ({ tag, text }) => {
  const Tag = tag || "h3";
  return (
    <Tag className="text-right mt-12 mr-12 text-3xl tracking-wide text-indigo-900">
      {text}
    </Tag>
  );
};

export default Heading;
