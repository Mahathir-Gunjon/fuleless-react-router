import React from 'react';

const BlogCard = () => {
    return (
        <div>
            <div className='bg-gradient-to-r from-gray-50 to-red-100 md:py-28 py-2'>
                <h1 className="md:text-6xl text-4xl md:my-7 my-3 text-center">Frequently Asked Question</h1>
                <div className="w-10/12 md:7/12 py-7 px-5 grid grid-cols-1 md:grid-cols-2 mx-auto shadow-xl rounded-xl">
                    <div className='w-full md:pr-5 mx-auto md:order-2'>
                        <img className="w-full" src='https://www.cronj.com/blog/wp-content/uploads/React-Contaxt.png' alt="" />
                    </div>
                    <div className='text-gray-900 w-full order-2 '>
                        <h1 className="md:text-4xl text-2xl md:my-7 my-3">What is Context Api <span className='text-gray-900 font-bold'>?</span></h1>
                        <p className='md:text-xl to-slate-300'>The new React Context API, introduced with React v.16.3, permits United States to pass information through our element trees, giving our parts the flexibility to speak and share information at totally different levels. during this tutorial, we’ll explore however we are able to use React Context to avoid prop drilling. First, we’ll cowl what prop drilling is and why we should always avoid it.</p>
                    </div>
                </div>
                <div className="w-10/12 md:7/12 py-7 px-5 grid grid-cols-1 md:grid-cols-2 mx-auto shadow-xl rounded-xl">
                    <div className='w-full md:pr-5 mx-auto md:order-2'>
                        <img className="w-full" src='https://cdn.hashnode.com/res/hashnode/image/upload/v1615794481842/zgX-MaziB.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress' alt="" />
                    </div>
                    <div className='text-gray-900 w-full order-2 '>
                        <h1 className="md:text-4xl text-2xl md:my-7 my-3">What is semantic tags <span className='text-gray-900 font-bold'>?</span></h1>
                        <p className='md:text-xl to-slate-300'>Semantic markup language or linguistics markup is markup language that introduces assuming to the online page instead of simply presentation. for instance, a tag indicates that the surrounded text may be a paragraph. this can be each linguistics and display as a result of individuals recognize what paragraphs area unit, and browsers acumen to show them.
                            <br />
                            On the flip facet of this equation, tags like and aren't linguistics. They outline solely however the text ought to look (bold or italic), and do not give any further assuming to the markup.</p>
                    </div>
                </div>
                <div className="w-10/12 md:7/12 py-7 px-5 grid grid-cols-1 md:grid-cols-2 mx-auto shadow-xl rounded-xl">
                    <div className='w-full md:pr-5 mx-auto md:order-2'>
                        <img className="w-full" src='https://res.cloudinary.com/practicaldev/image/fetch/s--hufolkFY--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/w1jzpjbnbvgsmz34r3ce.png' alt="" />
                    </div>
                    <div className='text-gray-900 w-full order-2 '>
                        <h1 className="md:text-4xl text-2xl md:my-7 my-1">Inline, Block & Inline-block elements<span className='text-gray-900 font-bold'>.</span></h1>
                        <p className='md:text-xl to-slate-300'><strong>Inline</strong> parts area unit those that solely occupy the house finite by the tags shaping the component, rather than breaking the flow of the content.</p>
                        <p className='md:text-xl to-slate-300'><strong>Block-level</strong> part is associate degree hypertext mark-up language part that begins a brand new line on an internet page and extends the total breadth of the out there horizontal house of its parent part. It creates giant blocks of content like paragraphs or page divisions. In fact, most hypertext mark-up language components square measure block-level components</p>
                        <p className='md:text-xl to-slate-300'><strong>Inline-block </strong>treats the part like different inline parts however permits the utilization of block properties. parts with display: block take up the maximum amount dimension as they're allowed and usually begin on a brand new line</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;