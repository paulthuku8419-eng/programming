import React from 'react';

export default function Testimonials(){
    const items=[
        {text:"We upgraded our entire assembly line with their PLC logic,zero downtime since",
            name:"operations manager"
        },
        {text:"Their CNC programs cut our cycle time by almost 20%",
            name:"workshop supervisor",
        },
        {text:"The CAD models were accurate and saved us weeks of rework",
            name:"Mechanical Engineer"
        }
    ];
    return(
        <div className='py-10 px-6'>
            <h2 className='text-3xl font-bold text-center mb-7'>What clients say</h2> 
            <div className='max-w-5xl mx-auto grid md:grid-cols-3 gap-8'>{items.map((item, i)=>(<div key={i} className=' bg-blue-500 p-6 rounded shadow border text-gray-700'>
                <p className='italic mb-3'>"{item.text}"</p>
                <h4 className='font-bold'>{item.name}</h4>
                </div>
                ))}
            </div>
        </div>

    )
}