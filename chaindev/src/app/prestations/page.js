export default function Prestations() {
  const cards = [
    {
      title: "Premium",
      price: "$29/mo",
      features: [
        "High-resolution image generation",
        "Customizable style templates",
        "Batch processing capabilities",
        "AI-driven image enhancements",
        "Seamless cloud integration",
        "Real-time collaboration tools"
      ],
      unavailable: [4, 5]
    },
    {
      title: "Standard",
      price: "$19/mo",
      features: [
        "High-resolution image generation",
        "Customizable style templates",
        "Batch processing capabilities",
        "AI-driven image enhancements",
        "Seamless cloud integration",
        "Real-time collaboration tools"
      ],
      unavailable: [4, 5]
    },
    {
      title: "Basic",
      price: "$9/mo",
      features: [
        "High-resolution image generation",
        "Customizable style templates",
        "Batch processing capabilities",
        "AI-driven image enhancements",
        "Seamless cloud integration",
        "Real-time collaboration tools"
      ],
      unavailable: [3, 4, 5]
    },
    {
      title: "Enterprise",
      price: "$59/mo",
      features: [
        "High-resolution image generation",
        "Customizable style templates",
        "Batch processing capabilities",
        "AI-driven image enhancements",
        "Seamless cloud integration",
        "Real-time collaboration tools",
        "Priority support"
      ],
      unavailable: []
    },
    {
      title: "Custom",
      price: "Contact us",
      features: [
        "Tailored image generation",
        "Custom workflows",
        "Dedicated account manager",
        "AI-driven enhancements",
        "Seamless integration",
        "Team collaboration tools"
      ],
      unavailable: []
    }
  ];

  return (
    <section className="bg-base-200 py-12 flex flex-col items-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 text-center">Mes Prestations</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="card w-full sm:w-80 md:w-96 bg-base-100 shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col"
          >
            <div className="card-body flex flex-col">
              <span className="badge badge-xs badge-warning mb-2">Most Popular</span>
              <div className="flex justify-between items-center">
                <h3 className="text-3xl font-bold">{card.title}</h3>
                <span className="text-xl font-semibold">{card.price}</span>
              </div>
              <ul role="list" className="mt-6 flex flex-col gap-2 text-sm">
                {card.features.map((feature, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-2 ${
                      card.unavailable.includes(i) ? "opacity-50 line-through text-base-content/50" : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-4 h-4 ${card.unavailable.includes(i) ? "text-base-content/50" : "text-success"}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <button className="btn btn-primary btn-block hover:scale-105 transition-transform duration-300">
                  {card.price === "Contact us" ? "Contactez-nous" : "Subscribe"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
