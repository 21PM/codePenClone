import React from 'react';

const PickedPens = () => {
  const pens = [
    {
      title: 'Me in SVG! ?',
      author: 'Lara Schenck',
      authorImg: 'url-to-author-img',
      description: '',
      likes: 2,
      comments: 0,
      views: 0,
      img: 'url-to-pen-img',
    },
    {
      title: 'SVG face ani...',
      author: 'Ana Tudor',
      authorImg: 'url-to-author-img',
      description: '',
      likes: 10,
      comments: 0,
      views: 0,
      img: 'url-to-pen-img',
    },
    {
      title: 'CSS Animate...',
      author: 'Animated Creativity',
      authorImg: 'url-to-author-img',
      description: '',
      likes: 15,
      comments: 1,
      views: 0,
      img: 'url-to-pen-img',
    },
    {
        title: 'CSS Animate...',
        author: 'Animated Creativity',
        authorImg: 'url-to-author-img',
        description: '',
        likes: 15,
        comments: 1,
        views: 0,
        img: 'url-to-pen-img',
      },
      {
        title: 'CSS Animate...',
        author: 'Animated Creativity',
        authorImg: 'url-to-author-img',
        description: '',
        likes: 15,
        comments: 1,
        views: 0,
        img: 'url-to-pen-img',
      },
      
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen p-5 rounded-lg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-5">Picked Pens</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    pens.map((ele)=>{
                        return(
                            <>
                                <div className="w-full border-2 border-blue-600 flex min-h-80 flex-col p-2">
                                <div className='border-2 h-80p border-red-600 w-full'>
                                    <p>asdas</p>
                                </div>
                                <div className='h-20p border-2 border-yellow-400 flex items-center justify-start'> 
                                    <p>Name :  Paras    more</p>
                                </div>

                                </div>
                            </>
                        )
                    })
                }
        </div>
      </div>
    </div>
  );
};

export default PickedPens;
