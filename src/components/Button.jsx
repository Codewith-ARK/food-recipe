const Button = ({ text, onClick }) => {
  return (
    <button
      className="px-4 py-2 bg-red-500 text-white rounded-lg"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
