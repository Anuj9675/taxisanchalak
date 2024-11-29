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
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="aspect-video relative">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={video.youtubeUrl}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 mb-1">
          {video.title}
        </h3>
        <p className="text-sm text-gray-600">
          {video.description}
        </p>
      </div>
    </div>
  )
}

// Main Video Section Component
export  function VideosSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoData.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  )
}

