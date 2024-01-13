
export default function Chip({ category, selectedChip, handleOnClick }) {

    return (
        <div
            key={category}
            className={` leading-tight cursor-pointer rounded-full px-3 py-1 text-sm font-semibold mr-2
      ${selectedChip === category ? 'bg-red-500 text-white' : 'bg-gray-700 text-gray-300'}
      hover:${selectedChip !== category && 'bg-gray-600 transition-all duration-300'}`}
            onClick={() => handleOnClick(category)}
        >
            {category}
        </div>
    )
}
