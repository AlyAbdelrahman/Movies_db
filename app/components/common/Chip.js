export default function Chip({ category, selectedCategory, handleOnClick }) {
    return (
      <div
        key={category}
        className={`leading-tight cursor-pointer rounded-full px-3 py-1 text-sm font-semibold mr-2
          ${selectedCategory === category ? 'bg-red-500 text-white' : 'bg-gray-700 text-gray-300'}
          hover:${selectedCategory !== category && 'bg-gray-600 transition-all duration-300'}`}
        onClick={() => handleOnClick(category)}
      >
        {category}
      </div>
    );
  }
  