const available = [
  {
    id: 1,
    name: "Gourmet Burger",
  },
  {
    id: 2,
    name: "Artisan Pizza",
  },
  {
    id: 3,
    name: "Fried-Chicken ",
  },
  {
    id: 4,
    name: "Fresh Wraps & Rolls",
  },
  {
    id: 5,
    name: "Loaded Fries",
  },
  {
    id: 6,
    name: "Grilled Sandwish",
  },
  {
    id: 7,
    name: "Ice Cream Shakes",
  },
  {
    id: 8,
    name: "Gourmet Burger",
  },
  {
    id: 9,
    name: "Artisan Pizza",
  },
  {
    id: 10,
    name: "Fried Chicken ",
  },
  {
    id: 11,
    name: "Fresh Wraps & Rolls",
  },
  {
    id: 12,
    name: "Loaded Fries",
  },
  {
    id: 13,
    name: "Grilled Sandwish",
  },
  {
    id: 14,
    name: "Ice Cream Shakes",
  },
];

const SlideShow = () => {
  return (
    <div className=" overflow-hidden bg-transparent py-4">
      <style>{`
        @keyframes slideshow {
          to { transform: translateX(-50%); }
        }
      `}</style>
      <div
        className="flex w-max"
        style={{ animation: "slideshow 100s linear infinite" }}
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 gap-4 pr-4"
          >
            {available.map((available) => {
              return (
                <div
                  key={available.id}
                  className="whitespace-nowrap rounded-xl 
                  bg-[#fee685] px-2 py-2 font-semibold
                   text-[#1e1b4b] shadow-md"
                >
                  {available.name}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideShow;
