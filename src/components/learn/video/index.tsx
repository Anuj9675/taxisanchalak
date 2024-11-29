export function VideoPlayer() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> 
      <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col"> {/* Make card a flex container */}
        
        {/* Video player takes up full space */}
        <div className="relative w-full h-[500px]"> {/* Video container takes full space */}
          <iframe
            className="w-full h-full rounded-lg"  
            src="https://www.youtube.com/embed/y-oBQEQg32I?si=FSkkzZlJhDs9fYY2"
            title="Payment Security Feature"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Text with white background */}
        <div className="bg-white text-center mt-6 px-4 py-4"> {/* White background behind text */}
          <p className="text-lg text-gray-600">
            Ab payein payment frauds se security – use karein payment security feature
          </p>
        </div>
      </div>
    </div>
  );
}
