const image =
  "https://msedees1807.github.io/tailwind-playground/images/vancouver.png";

function blogCard() {
  return (
    <div className="p-10 m-5 max-w-xl mx-auto bg-white border-2 flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img className="h-12" src={image} alt="ChitChat Logo" />
      </div>
      <div class="text-left">
        <p className="text-gray-500 text-xs pb-4">22 mins ago - 1 min read</p>
        <div className="text-xl font-medium text-black pb-4">
          Lighting Tips in 2021
        </div>
        <p className="text-sm text-gray-500">
          Hue are you looking at handsome?
        </p>
      </div>
    </div>
  );
}

export default blogCard;
