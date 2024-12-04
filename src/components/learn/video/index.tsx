export function VideoPlayer() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> 
      <div className="bg-green-800 rounded-lg shadow-sm p-8 flex flex-col"> 
        
        
        <div className="relative w-full h-[500px]"> 
          <iframe
            className="w-full h-full rounded-lg"  
            src="https://www.youtube.com/embed/y-oBQEQg32I?si=FSkkzZlJhDs9fYY2"
            title="Payment Security Feature"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

       
        <div className="green-800 text-center mt-6 px-4 py-4"> 
          <p className="text-lg text-white">
            Ab payein payment frauds se security – use karein payment security feature
          </p>
        </div>
      </div>
    </div>
  );
}
