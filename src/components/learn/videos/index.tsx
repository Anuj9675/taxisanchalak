'use client'

// Video data type
type VideoData = {
  id: string
  title: string
  description: string
  youtubeUrl: string
}

// Sample video data
const videoData: VideoData[] = [
  {
    id: '1',
    title: 'टैक्सी संचालक - सब्सक्रिप्शन लेना सीखें',
    description: 'टैक्सी संचालक - ऐप में मौजूद सब्सक्रिप्शन लेना सीखें',
    youtubeUrl: 'https://www.youtube.com/embed/video1'
  },
  {
    id: '2',
    title: 'टैक्सी संचालक - सब्सक्रिप्शन कैसे कैंसिल करें',
    description: 'टैक्सी संचालक - ऐप में मौजूद सब्सक्रिप्शन कैसे कैंसिल करें',
    youtubeUrl: 'https://www.youtube.com/embed/video2'
  },
  {
    id: '3',
    title: 'टैक्सी संचालक में बुकिंग कैसे पोस्ट करें ??',
    description: 'बुकिंग पोस्ट करना सीखें',
    youtubeUrl: 'https://www.youtube.com/embed/video3'
  },
  {
    id: '4',
    title: 'टैक्सी संचालक - बुकिंग प्रदान करना सीखें',
    description: 'अपनी पोस्ट की हुई बुकिंग को प्रदान करना सीखें हमारे साथ',
    youtubeUrl: 'https://www.youtube.com/embed/video4'
  },
  {
    id: '5',
    title: 'देखें अपनी पसंदिदा बुकिंग्स हमारे फिल्टर ऑप्शन का उपयोग करके - टैक्सी संचालक',
    description: 'फिल्टर का उपयोग करना सीखें',
    youtubeUrl: 'https://www.youtube.com/embed/video5'
  },
  {
    id: '6',
    title: 'टैक्सी संचालक में अलर्ट सेट करना सीखें',
    description: 'अब देखें नयी जॉब आपके लिए आयी । अभी ही इस्तेमाल करे टैक्सी संचालक ऐप्प',
    youtubeUrl: 'https://www.youtube.com/embed/video6'
  }
]

// Video Card Component
function VideoCard({ video }: { video: VideoData }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-video relative">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={video.youtubeUrl}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
    </div>
  )
}

// Main Video Section Component
export function VideosSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {videoData.map((video, index) => (
        <div
          key={video.id}
          className={`flex flex-col md:flex-row items-center ${
            index % 2 === 0 ? '' : 'md:flex-row-reverse'
          }`}
        >
          <div className="w-full md:w-1/2">
            <VideoCard video={video} />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left md:pl-8 md:pr-8 m-4 text-white">
            <h2 className="text-2xl font-bold  mb-4">{video.title}</h2>
            <p >{video.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
