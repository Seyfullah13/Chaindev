export default function ContactPage() {
  return (
    <section className="bg-white dark:bg-gray-900 flex flex-col flex-grow min-h-screen">
      <div className="flex flex-col items-center justify-start flex-grow px-4 pt-6 pb-10">
        <div className="w-full max-w-screen-lg"> {/* Plus large sur desktop */}
          <h2 className="mb-3 text-3xl sm:text-4xl font-extrabold text-center text-gray-900 dark:text-white">
            Contactez-moi
          </h2>

          <p className="mb-6 font-light text-center text-gray-500 dark:text-gray-400 sm:text-lg">
            Une question technique ? Un projet multilingue ? Décrivez votre besoin et je reviens vers vous.
          </p>

          <form action="#" className="mx-auto w-full space-y-6 flex flex-col">
            {/* Email */}
            <div className="w-full md:w-3/4 lg:w-2/3 mx-auto"> {/* Formulaire plus large */}
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Votre email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="name@example.com"
                required
                className="input input-bordered w-full focus:ring-2 focus:ring-primary focus:outline-none transition duration-300"
              />
            </div>

            {/* Objet */}
            <div className="w-full md:w-3/4 lg:w-2/3 mx-auto">
              <label
                htmlFor="subject"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Objet
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Comment puis-je vous aider ?"
                required
                className="input input-bordered w-full focus:ring-2 focus:ring-primary focus:outline-none transition duration-300"
              />
            </div>

            {/* Message */}
            <div className="w-full md:w-3/4 lg:w-2/3 mx-auto">
              <label
                htmlFor="message"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Votre message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Décrivez votre projet..."
                className="textarea textarea-bordered w-full focus:ring-2 focus:ring-primary focus:outline-none transition duration-300"
              />
            </div>

            {/* Bouton */}
            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="btn btn-primary w-full max-w-xs hover:scale-105 hover:shadow-lg transition-transform duration-300"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
